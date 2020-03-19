import { FetcherQ } from './q-fetcher.service';

export class PanoramaQ {

  /** ---- STATIC MEMBERS - RETURN INSTANCE OF FETCHER ---- */

  static get accounts() {
    return new FetcherQ('accounts');
  }

  static get customers() {
    return new FetcherQ('customers');
  }

  static get transactions() {
    return new FetcherQ('transactions');
  }

  static get tickets() {
    return new FetcherQ('tickets');
  }

  static get applications() {
    return new FetcherQ('applications');
  }

  static get actions() {
    return new FetcherQ('actions');
  }

  static get questions() {
    return new FetcherQ('questions');
  }

  static get groups() {
    return new FetcherQ('groups');
  }

  static get users() {
    return new FetcherQ('users');
  }

  static get offers() {
    return new FetcherQ('offers');
  }
}
