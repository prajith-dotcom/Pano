import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PanoramaQ as Q } from '../shared/services/q.service';
import { mergeMap } from 'rxjs/operators';
import { SearchService } from '../shared/services/search.service';
import { Observable } from 'rxjs';
import { ICodeValue } from '../../pan-typings/shared';
import { SharedConfig } from '../shared/config';

@Component({
  selector: 'pan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorMessage = '';
  activePane = 'left';
  userType: ICodeValue;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * @name submit
   * @desc submits login form
   */
  submit() {
    const routes = {
      ADMIN: '/layout/dashboard',
      EMPLOYEE: '/dashboard',
      CUSTOMER: '/layout/customer',
    };
    const { value: user } = this.login;
    Q.users.login(user)
      .pipe(
        mergeMap(({ status, entities }) => this.handleLogin(status, entities)),
        mergeMap(({ customerNumber, ...userProps }) => {
          const { userTypes: { customer } } = SharedConfig;
          this.userType = customer;
          UserService.login(Object.assign(this.login.value, { ...userProps, type: this.userType }));
          console.log(UserService.isLoggedIn());
          return Q.customers.get(customerNumber);
        }),
      )
      .subscribe(
        (customer) => { SearchService.customer = customer[0]; },
        err => this.snackBar.open(err.message, 'Dismiss', { duration: 3000 }),
        () => this.router.navigateByUrl(routes[this.userType.description]),
      );
  }

  /**
   * @name handleLogin
   * @param status
   * @param entities
   * @desc handles login and returns observable of user
   */
  handleLogin(
    status: 'SUCCESS' | 'FAILURE',
    entities: any[],
  ): Observable<any> {
    const [user] = entities;

    if (status !== 'SUCCESS') {
      throw new Error('Login Failed');
    }

    return Q.users.get(user.entityNumber);
  }

  /**
   * @name switch
   * @param pane - pane to switch to
   * @desc switched left or right pane
   */
  switch(pane: 'left' | 'right'): void {
    this.activePane = pane;
  }

}
