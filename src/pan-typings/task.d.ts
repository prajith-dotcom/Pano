import { IAssignTo, IAudit, ICodeValue } from "./shared";

export declare interface ITask {
    assignTo: IAssignTo;
    audit: IAudit;
    createdDate: string;
    customData: string;
    slaDate: string;
    slaStatus: ICodeValue;
    status: ICodeValue;
    taskBpm: string;
    taskCode: string;
    taskNumber: string;
    ticketNumber: string;
}