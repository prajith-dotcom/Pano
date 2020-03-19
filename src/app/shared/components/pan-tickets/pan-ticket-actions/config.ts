export class ActionConfig {
  static action = {
    actionNumber: null,
    actionCode: null,
    actionTime: new Date().toISOString(),
    globalId: '',
    narrative: null,
    ticketNumber: null,
    taskNumber: null,
    statusFlag: '1',
    assignTo: {
      firstName: '',
      lastName: '',
      user: {
        code: '',
        description: '',
      },
      group: {
        code: '1',
        description: 'RETAIL',
      },
    },
    paramList: [],
    level: {
      code: '01',
      description: 'Test',
    },
    type: {
      code: '01',
      description: 'Test',
    },
  };

  static actions = [
    {
      code: '1001',
      name: 'Assign Ticket',
      formControl: 'user',
    },
    {
      code: '1002',
      name: 'Escalate Ticket',
      formControl: 'group',
    },
    {
      code: '1003',
      name: 'Resolve Ticket',
      formControl: 'resolution',
    },
    {
      code: '1004',
      name: 'Close Ticket',
      formControl: 'result',
    },
    {
      code: '1009',
      name: 'Attach File',
    },
    {
      code: '1012',
      name: 'Investigation',
    },
    {
      code: '1012',
      name: 'Add Note',
    },
    {
      code: '1014',
      name: 'Add Attributes',
      formControl: 'attributes',
    },
  ];
}
