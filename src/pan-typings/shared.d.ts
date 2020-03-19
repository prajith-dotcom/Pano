export declare interface ICodeValue {
	code?: string;
	description?: string;
}

export declare interface IAssignTo {
	firstName?: string;
	lastName?: string;
	user?: ICodeValue;
	group?: ICodeValue;
}

export declare interface IRouting {
	scheme: string;
	address: string;
}

export declare interface IRules {
	scheme: string;
	value: string;
}

export declare interface IOwner {
	id: string;
	provider: string;
	display_name: string;
}

export declare interface IAudit {
	userCreation?: string;
	timeCreation?: string;
	timeModification?: string;
}

export declare interface IParam {
	key: ICodeValue;
	value: ICodeValue;
}

export declare interface IAttribute {
	attributeNumber?: string;
	ticketNumber?: string;
	attributeValue?: string;
	attributeName?: string;
}

export declare interface IAttachment {
	attachmentNumber?: string;
	ticketNumber?: string;
	filePath?: string;
	fileName?: string;
	fileSize?: string;
	docType?: string;
	docTypeDescription?: string;
	archiveFlag?: string;
	audit?: IAudit;
}


export declare interface IOriginator {
	globalId?: string;
	costCenterCode?: string;
	medium?: ICodeValue;
	channel?: ICodeValue;
	firstName?: string;
	lastName?: string;
	group?: ICodeValue;
}

export declare interface IRequestor {
	ssn?: string;
	vipFlag?: string;
	firstName?: string;
	lastName?: string;
	business?: string;
	customerNumber?: string;
	sourceApp?: string;
	type?: ICodeValue;
}

export declare interface IContactMethod {
	phoneNumber?: string;
	email?: string;
	street1?: string;
	street2?: string;
	city?: string;
	state?: string;
	postalCode?: string;
	country?: string;
	language?: ICodeValue;
	medium?: ICodeValue;
}

export declare interface IClassification {
	accountNumber?: string;
	product?: ICodeValue;
	subProduct?: ICodeValue;
	accountStatus?: ICodeValue;
	accountExtendedStatus?: ICodeValue;
}

export declare interface IMoney {
	currency: string;
	amount: string;
}