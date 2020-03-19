export class InlineMaintConfig {
  static rows = [
    [
      {
        label: 'Address Line 1',
        required: true,
        modelName: 'address1',
        nested: 'address',
      },
      {
        label: 'City',
        modelName: 'city',
        required: true,
        nested: 'address',
      },
      {
        label: 'Birth Date',
        required: true,
        modelName: 'date_of_birth',
        date: true,
      },
      {
        label: 'SSN',
        modelName: 'ssn',
        required: true,
        admin: true,
        nested: 'identification',
      },
    ],
    [
      {
        label: 'Address Line 2',
        modelName: 'address2',
        required: true,
        nested: 'address',
      },
      {
        label: 'Primary Phone',
        required: true,
        modelName: 'mobile_phone_number',
      },
      {
        label: 'Primary Email',
        required: true,
        modelName: 'email',
      },
      {
        label: 'Issue Date',
        modelName: 'issuedDate',
        required: true,
        admin: true,
        nested: 'identification',
        date: true,
      },
    ],
    [
      {
        label: 'State',
        modelName: 'state',
        required: true,
        nested: 'address',
      },
      {
        label: 'Status',
        modelName: 'kyc_status',
        required: true,
        admin: true,
      },
      {
        label: 'Name',
        modelName: 'legal_name',
        required: true,
        admin: true,
      },
      {
        label: 'Issue Place',
        modelName: 'issuedLocation',
        required: true,
        admin: true,
        nested: 'identification',
      },
    ],
    [
      {
        label: 'Country',
        modelName: 'address.country',
        required: true,
        width: '20%',
        nested: 'address',
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
  static rowsClient = [
    [
      {
        label: 'Address Line 1',
        required: true,
        modelName: 'address1',
        nested: 'address',
      },
      {
        label: 'Country',
        modelName: 'country',
        nested: 'address',
        required: true,
        width: '20%',
      },
      {
        label: 'Birth Date',
        required: true,
        modelName: 'date_of_birth',
      },
    ],
    [
      {
        label: 'Address Line 2',
        modelName: 'address2',
        required: true,
        nested: 'address',
      },
      {
        label: 'Primary Phone',
        required: true,
        modelName: 'mobile_phone_number',
      },
      {
        label: 'Primary Email',
        required: true,
        modelName: 'email',
      },
    ],
    [
      {
        label: 'City',
        modelName: 'city',
        required: true,
      },
      {
        label: 'State',
        modelName: 'state',
        required: true,
      },
      {
        blank: true,
      },
    ],
  ];
}
