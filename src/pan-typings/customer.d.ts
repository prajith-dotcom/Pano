import { ITicket } from "./ticket";
import { IAccount } from "./account";

export declare interface ICustomer {
  user_id: string;
  customer_number: string;
  legal_name: string;
  mobile_phone_number: string;
  email: string;
  date_of_birth: string;
  relationship_status: string;
  credit_rating?: string;
  credit_limit?: string;
  highest_education_attained: string;
  employment_status: string;
  kyc_status: string;
  last_ok_date: string;
  accounts?: IAccount[];
  tickets?: ITicket[];
  address: IAddress;
  identification: IIdentification;
}

export declare interface IAddress {
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export declare interface IIdentification {
  ssn: string;
  citizenFlag: string;
  idType: string;
  idNumber: string;
  issuedLocation: string;
  issuedDate: string;
  expDate: string;
}
