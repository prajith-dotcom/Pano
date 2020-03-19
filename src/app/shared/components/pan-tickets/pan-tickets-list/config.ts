import { ITicket } from '../../../../../pan-typings/ticket';
import * as moment from 'moment';
import { FilterTicketsService } from '../../../services/filter-tickets.service';

export class TicketListConfig {
  static filters = {
    ticketNumber: (data, filter: string) => {
      if (TicketListConfig.isUndefined(filter)) { return true; }
      return data.ticketNumber.includes(filter);
    },
    toDate: (data, filter: Date) => {
      if (TicketListConfig.isUndefined(filter)) { return true; }
      return moment(data.receivedDate).isSameOrBefore(moment(filter));
    },
    fromDate: (data, filter: Date) => {
      if (TicketListConfig.isUndefined(filter)) { return true; }
      return moment(data.receivedDate).isSameOrAfter(moment(filter));
    },
    group: (data: ITicket, filter: string) => {
      if (TicketListConfig.isUndefined(filter)) { return true; }
      if (TicketListConfig.isUndefined(data.assignTo.group.description)) { return false; }

      return data.assignTo.group.description.toLowerCase() === filter.toLowerCase();
    },
    // stats: (data, filter: string) => {
    //   console.log(FilterTicketsService.filteredTickets);
    //   return FilterTicketsService.filteredTickets.includes(data);
    // },
  };
  static isUndefined(value: any) {
    return value === undefined || value === '' || value === null;
  }
}
