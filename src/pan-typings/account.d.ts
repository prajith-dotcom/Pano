import {
  ITransaction
} from './trasaction';
import {
  IMoney,
  IRouting,
  IRules,
  IOwner,
} from './shared';

export declare interface IAccount {
  id: string;
  number: string;
  customerNumber: string;
  name: string;
  accountType: string;
  status: string;
  label?: string;
  bank_id? : string;
  balance? : IMoney;
  account_routings?: IRouting;
  account_rules?: IRules;
  owners?: IOwner[];
  type? : string;
  IBAN? : string;
  swift_bic? : string;
  transactions? : ITransaction[];
}

export declare interface IApplication {
  applicationNumber?: string;
  customerNumber: string;
  identity: {
    accountType: string;
    accountName: string;
    firstName: string;
    middleInitial: string;
    lastName: string;
    suffix: string;
    dateOfBirth: string;
    ssn: string;
    citizenFlag: string;
    idType: string;
    idNumber: string;
    issuedLocation: string;
    issuedDate: string;
    expDate: string;
  },
  contactInfo: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    email: string;
    phoneNumber: string;
  },
  fund: {
    acctActivity: string[],
    occupation: string,
    sourceOfIncome: string,
    account: string,
    amount: string
  }
}
