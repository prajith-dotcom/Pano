import { ICodeValue } from '../../pan-typings/shared';

export class SharedConfig {
  static groups: any[] = [
    {
      groupNumber: '1141',
      groupName: 'Retail',
      region: 'North America',
      users: [],
    },
    {
      groupNumber: '1175',
      groupName: 'Card Operations',
      region: 'North America',
      users: [],
    },
    {
      groupNumber: '1192',
      groupName: 'Customer Support',
      region: 'North America',
      users: [],
    },
    {
      groupNumber: '1209',
      groupName: 'CSU',
      region: 'North America',
      users: [],
    },
    {
      groupNumber: '1226',
      groupName: 'Legal and Compliance',
      region: 'North America',
      users: [],
    },
  ];

  static userTypes = {
    admin: {
      code: '302',
      description: 'ADMIN',
    },
    employee: {
      code: '303',
      description: 'EMPLOYEE',
    },
    customer: {
      code: '301',
      description: 'CUSTOMER',
    },
  };

  static userTypeList: ICodeValue[] = [
    {
      code: '302',
      description: 'ADMIN',
    },
    {
      code: '303',
      description: 'EMPLOYEE',
    },
    {
      code: '301',
      description: 'CUSTOMER',
    },
  ];

}
