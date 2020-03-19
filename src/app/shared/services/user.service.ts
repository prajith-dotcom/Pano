import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private static _user;

  static login(user: any): void {
    UserService._user = user;
  }

  static register(user: any): void {
    SearchService.customer = user.customerInfo;
    UserService._user = user;
  }

  static logout(cb: (res) => void): void {
    UserService._user = undefined;
    cb(true);
  }

  static isLoggedIn(): any {
    return UserService._user;
  }
}
