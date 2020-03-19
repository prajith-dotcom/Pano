import { IAssignTo, ICodeValue, IParam } from "./shared";

export declare interface IAction {
	actionCode: string;
	actionNumber: string;
	actionTime: string;
	assignTo: IAssignTo;
	globalId: string;
	level: ICodeValue;
	narrative: string;
	paramList: IParam[];
	statusFlag: string;
	taskNumber: string;
	ticketNumber: string;
	type: ICodeValue;
}

