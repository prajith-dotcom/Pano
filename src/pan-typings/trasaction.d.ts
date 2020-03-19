import { IAccount } from "./account";
import { IMoney } from "./shared";

export declare interface ITransaction {
  id: string;
  entities: IEntity[];
  ticketNumber: string;
  other_account: IAccount;
  this_account: IAccount;
  details: IDetails;
  metadata: IMetadata;
}

export declare interface IEntity {
  entityType: string;
  entityNumber: string;
}

export declare interface IDetails {
  type: string;
  description: string;
  posted: string;
  completed: string;
  new_balance: IMoney;
  value: IMoney;
  narrative: string;
  comments: ITag[];
  tags: ITag[];
  where: any;
}

export declare interface IMetadata {
  narrative: string;
  comments: ITag[];
  tags: ITag[];
  where: string;
}

export declare interface ITag {
  id: string;
  transactionNumber: string;
  value: string;
  date: string;
}
