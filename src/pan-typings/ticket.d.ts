import { ICustomer } from "./customer";
import { IAction } from './action';
import { ITask } from './task'
import { ITransaction } from "./trasaction";
import {
	ICodeValue,
	IAssignTo,
	IAudit,
	IOriginator,
	IRequestor,
	IContactMethod,
	IClassification,
	IAttribute,
	IAttachment,
 } from "./shared";

export declare interface ITicket {
	approvalFlag: string;
	actionList: IAction[];
	assignTo: IAssignTo;
	attachmentList: IAttachment[];
	attributeList: IAttribute[];
	audit: IAudit;
	createdDate: string;
	ticketNumber: string;
	category: ICodeValue;
	classification: IClassification;
	complaintFlag: string;
	contactMethod: IContactMethod;
	item: ICodeValue;
	narrative: string;
	originator: IOriginator;
	priority: ICodeValue;
	receivedDate: string;
	requestor: IRequestor;
	securityLevelCode: string;
	severity: ICodeValue;
	sla?: string;
	status: ICodeValue;
	taskList: ITask[];
	transactionList: ITransaction[];
}