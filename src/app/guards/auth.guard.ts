import { Injectable } from '@angular/core';
import { Router, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(next: Route): boolean {
    const accessRoles = next.data || [];
    const user = UserService.isLoggedIn();

    if (user) {
      const { type: { description: type } } = user;
      return accessRoles.includes(type) || accessRoles.length < 1;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
