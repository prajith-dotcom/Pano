export class FilterTicketsService {

  static _tickets;
  static _filteredTickets;

  static get tickets() {
    return this._tickets;
  }

  static set tickets(data) {
    this._tickets = data;
  }

  static get filteredTickets() {
    return this._filteredTickets;
  }

  static set filteredTickets(data) {
    this._filteredTickets = data;
  }

}
