import { ICustomer } from '../../../pan-typings/customer';

export class SearchService {

  static _customer: ICustomer;
  static _customers: ICustomer[];

  static get customer(): ICustomer {
    return this._customer;
  }

  static set customer(data: ICustomer) {
    this._customer = data;
  }

  static get customers(): ICustomer[] {
    return this._customers;
  }

  static set customers(data: ICustomer[]) {
    this._customers = data;
  }

  static get history() {
    return JSON.parse(sessionStorage.getItem('searchHistory'));
  }
}
