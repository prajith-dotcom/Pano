export class TicketConfig {
  static rows = [
    [{
      label: 'Task Number',
      required: true,
      modelName: 'taskNumber',
    },
    {
      label: 'SLA Status',
      required: true,
      modelName: 'slaStatus.description',
    },
    {
      label: 'Created',
      modelName: 'createdDate',
      required: true,
      date: true,
    },
    ],
    [{
      label: 'Originator',
      required: true,
      modelName: 'audit.userCreation',
    },
    {
      label: 'Status',
      required: true,
      modelName: 'status.description',
    },
    {
      blank: true,
    },
    ],
  ];

  static getFileParams = (file: File, user: any) => {
    if (file == null) { return []; }
    return [
      {
        key: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'filePath',
        },
        value: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: file.name,
        },
      },
      {
        key: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'fileName',
        },
        value: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: file.name,
        },
      },
      {
        key: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'fileSize',
        },
        value: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: file.size.toString(),
        },
      },
      {
        key: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'docType',
        },
        value: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: file.type,
        },
      },
      {
        key: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'docTypeDescription',
        },
        value: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: file.type,
        },
      },
      {
        key: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'archiveFlag',
        },
        value: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'F',
        },
      },
      {
        key: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: 'auditUserCreation',
        },
        value: {
          code: (Math.floor(Math.random() * 90000) + 10000).toString(),
          description: user.username,
        },
      },
    ];
  }
}
