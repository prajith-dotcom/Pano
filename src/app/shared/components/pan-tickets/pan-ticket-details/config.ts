export class TicketDetailsConfig {
  static rows = [
    [
      {
        label: 'Ticket Number',
        required: true,
        modelName: 'ticketNumber',
      },
      {
        label: 'Status',
        required: true,
        modelName: 'status.description',
      },
      {
        label: 'Date Created',
        modelName: 'createdDate',
        required: true,
        date: true,
      },
      {
        label: 'Source',
        modelName: 'requestor.sourceApp',
        required: true,
      },
      {
        label: 'Address',
        modelName: 'contactMethod.street1',
        required: true,
      },
    ],
    [
      {
        label: 'Group',
        required: true,
        modelName: 'assignTo.group.description',
      },
      {
        label: 'Account Number',
        modelName: 'classification.accountNumber',
        required: true,
      },
      {
        label: 'Asssigned',
        modelName: 'assignTo.user.description',
        required: true,
      },
      {
        label: 'Originator',
        modelName: 'originator.globalId',
        required: true,
      },
      {
        label: 'Phone Number',
        modelName: 'contactMethod.phoneNumber',
        required: true,
      },
    ],
    [
      {
        label: 'Customer Number',
        required: true,
        modelName: 'requestor.customerNumber',
      },
      {
        label: 'SSN',
        required: true,
        modelName: 'requestor.ssn',
      },
      {
        label: 'First Name',
        modelName: 'requestor.firstName',
        required: true,
      },
      {
        label: 'Last Name',
        modelName: 'requestor.lastName',
        required: true,
      },
      {
        label: 'Contact Method',
        modelName: 'contactMethod.medium.description',
        required: true,
      },
    ],
    [
      {
        label: 'Narrative',
        required: true,
        modelName: 'narrative',
        width: '30%',
      },
      {
        blank: true,
      },
      {
        blank: true,
      },
      {
        blank: true,
      },
      {
        blank: true,
      },
    ],
  ];
}
