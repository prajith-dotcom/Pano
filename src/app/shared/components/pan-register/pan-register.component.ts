import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanoramaQ as Q } from '../../services/q.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SharedConfig } from '../../config';

@Component({
  selector: 'pan-register',
  templateUrl: './pan-register.component.html',
  styleUrls: ['./pan-register.component.scss'],
})
export class PanRegisterComponent implements OnInit {
  userForm: FormGroup;
  types = SharedConfig.userTypes;

  @Output() switch = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * @name register
   * @desc runs register functionality
   */
  register(): void {
    const { value: user } = this.userForm;
    const { userTypes: { customer: type } } = SharedConfig;

    Object.assign(user, { type });

    Q.users.post(user)
      .subscribe(
        () => {
          Object.assign(user, { type: 'ADMIN' });
          UserService.register(user);
        },
        err  => console.log(err),
        () => {
          console.log('done');
          this.router.navigateByUrl('/layout/dashboard');
        },
      );
  }

  login(): void {
    this.switch.emit('left');
  }
}
