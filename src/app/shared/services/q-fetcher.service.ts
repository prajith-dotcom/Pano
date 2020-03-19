import { from, Observable } from 'rxjs';
import { ConfigQ } from './q-config';

let baseUrl = '';
const memo = new Map();

export class FetcherQ {
  private _entityName: string;

  /** ---- MAIN FETCHER FUNCTION - RUNS ALL API REQUESTS */

  /**
   * @name fetch
   * @param method - method of fetch to be preformed
   * @param uri - uri of fetch method
   * @param useMemo - optional - memoize response
   * @param body - optional - request body
   * @desc uses fetch() to preform selected action
   */
  static fetch(
    method: 'PUT' | 'POST' | 'GET',
    uri: string,
    useMemo?: boolean,
    body?: any,
  ) {
    if (memo.has(uri) && useMemo !== false && method === 'GET') return memo.get(uri);
    const requestInit = {
      method,
      body: JSON.stringify(body),
    };

    const fakeURL = './assets/' + uri.split('/')[1] + '.json';
    const observable = (
      from((
        fetch(fakeURL)
        //fetch(`${baseUrl}${uri}`, requestInit)
          .then(res => res.json())
          .then(data => data.data || data)
      ))
    );

    //memo.set(uri, observable);
    return observable;
  }

  /** ---- CONSTRUCTOR ---- */

  /**
   * @name constructor
   * @param entityName - name of entity
   * @desc constructs instance of Q
   */
  constructor(entityName: string) {
    const { urls } = ConfigQ;
    baseUrl = urls[entityName];
    this._entityName = entityName;
  }

  /** ---- CRUD FUNCTIONS ---- */

  /**
   * @name get
   * @param id - id of entity
   * @param useMemo - whether to use memo
   * @desc endpoint for getting entity by ID
   */
  get(id: string, useMemo?: boolean): Observable<any> {
    const params = ['GET', `/${this._entityName}/${id}`, useMemo];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name post
   * @param data - request body
   * @desc runs a POST request on selected entity
   */
  post(data: any): Observable<any> {
    const params = ['POST', `/${this._entityName}`, false, data];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name put
   * @param data - request body
   * @desc runs a PUT request on selected entity
   */
  put(data: any): Observable<any> {
    const params = ['PUT', `/${this._entityName}`, false, data];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name getAll
   * @param useMemo
   * @desc endpoint for getting all of an entity
   */
  getAll(useMemo?: boolean): Observable<any> {
    const params = ['GET', `/${this._entityName}`, useMemo];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name getByCustomer
   * @param customerNr - customer number
   * @param useMemo - whether to use memo
   * @desc endpoint for getting entity by customer
   */
  getByCustomer(customerNr: string, useMemo?:boolean): Observable<any> {
    const params = ['GET', `/${this._entityName}/customer/${customerNr}`, useMemo];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name getByUser
   * @param userNr - user number
   * @param useMemo - whether to use memo
   * @desc endpoint for getting entity by user
   */
  getByUser(userNr: string, useMemo?:boolean): Observable<any> {
    const params = ['GET', `/${this._entityName}/user/${userNr}`, useMemo];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name getByGroup
   * @param groupNr - group number
   * @param useMemo - whether to use memo
   * @desc endpoint for getting entity by group
   */
  getByGroup(groupNr: string, useMemo?:boolean): Observable<any> {
    const params = ['GET', `/${this._entityName}/group/${groupNr}`, useMemo];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name search
   * @param entry - search entry
   * @param useMemo - whether to use memo or not
   * @desc endpoint for search on entity
   */
  search(entry: string, useMemo?: boolean): Observable<any> {
    const params = ['GET', `/${this._entityName}/search/${entry}`, useMemo];

    return FetcherQ.fetch.apply(this, params);
  }

  /**
   * @name login
   * @param data - login request body
   * @desc runs login of user
   */
  login(data: any): Observable<any> {
    const params = ['POST', '/login', false, data];

    return FetcherQ.fetch.apply(this, params);
  }
}
