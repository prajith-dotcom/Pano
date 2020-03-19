import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IRegexOption } from './pan-navbar';
import { NavbarConfig } from './config';
import { PanoramaQ as Q } from '../../services/q.service';
import { ICustomer } from '../../../../pan-typings/customer';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { UserService } from '../../services/user.service';
import { PanOaoComponent } from '../pan-oao/pan-oao.component';
import { PanAddUserComponent } from '../pan-add-user/pan-add-user.component';

@Component({
  selector: 'pan-navbar',
  templateUrl: './pan-navbar.component.html',
  styleUrls: ['./pan-navbar.component.scss'],
  providers: [SearchService],
})

export class PanNavbarComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  searchEntry = '';
  user: any;
  state = 'idle';
  filteredOptions: IRegexOption[] = [];
  regexOptions =  NavbarConfig.regexOptions;

  @ViewChild('searchBox') searchBox: ElementRef;
  constructor(
    private router: Router,
    private renderer: Renderer,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .subscribe(val => this.filteredOptions = this.filter(val));
    this.user = UserService.isLoggedIn();
  }

  filter(val: string = ''): IRegexOption[] {
    if (val === '') { return []; }
    return this.regexOptions.filter(option => this.removeType(val).match(option.pattern));
  }

  getDisplayValue(type: string = 'default', entry: string): string {
    const displayNameCtrl = {
      Name: () => `${this.toProperCase(this.removeType(entry))}`,
      'Customer Number': () => `${this.removeType(entry)}`,
      'Account Number': () =>  `${this.removeType(entry).padStart(10, '0')}`,
      'SSN/EIN/ITIN': () =>
        `${this.removeType(entry).replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3')}`,
      default: () => `${this.removeType(entry)}`,
    };
    return (displayNameCtrl[type] || displayNameCtrl['default'])();
  }

  getCustomer(): void {
    this.renderer.invokeElementMethod(
      this.searchBox.nativeElement, 'blur', []);
    this.state = 'searching';
    const searchTerms = this.searchEntry.split(': ');
    return {
      Name: (name: string) => {
        Q.customers.search(name.toLowerCase(), false)
          .subscribe(
            (custs: ICustomer[]) => {
              SearchService.customers = custs;
            },
            err => this.handleError(err),
            () => {
              this.router.navigateByUrl('/layout/search');
              this.state = 'idle';
            },
          );
      },
      'Customer Number': (number: string) => {
        Q.customers.get(number, false)
          .subscribe(
            (cust: ICustomer) => {
              SearchService.customer = cust[0];
            },
            err => this.handleError(err),
            () => {
              this.router.navigateByUrl('/layout/customer');
              this.state = 'idle';
            },
          );
      },
    }[searchTerms[0]](searchTerms[1]);
  }

  toProperCase(val: string): string {
    return val
      .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  removeType(val: string): string {
    return val.split(': ')[val.split(': ').length > 1 ? 1 : 0];
  }

  onSearchClick(): void {
    if (!this.searchEntry.includes(': ')) { return; }

    this.searchEntry = this.removeType(this.searchEntry);
    this.filteredOptions = this.filter(this.searchEntry);
  }

  onHomeClick(): void {
    this.router.navigateByUrl(this.user.type.description === 'ADMIN' ? '/dashboard' : '/customer');
  }

  goToAdvanced(): void {
    this.router.navigateByUrl('/layout/statistics');
  }

  handleError(err: any): void {
    this.state = 'idle';
    this.snackBar.open('Error Retrieving Customers', 'Dismiss', {
      duration: 3000,
    });
    console.log(err);
  }

  logout(): void {
    UserService.logout(() => this.router.navigateByUrl('/login'));
  }

  openOriginationDialog(): void {
    const dialogRef = this.dialog.open(
      PanOaoComponent,
      {
        minHeight: '380px',
        maxHeight: '1200px',
        maxWidth: '800px',
        minWidth: '600px',
        closeOnNavigation: true,
        data: { customer: SearchService.customer },
      });
    dialogRef.afterClosed()
      .subscribe((result = 'Canceled') => {
        this.snackBar.open(`Application ${result}`, 'dismiss', { duration: 3000 });
      });
  }

  addUser(): void {
    const dialogRef = this.dialog.open(
      PanAddUserComponent,
      {
        maxWidth: '800px',
        minWidth: '500px',
      },
    );
    dialogRef.afterClosed()
      .subscribe((result) => {
        if (result === 'SUCCESS') this.snackBar.open('User Created', 'dismiss', { duration: 3000 });
      });
  }
}
