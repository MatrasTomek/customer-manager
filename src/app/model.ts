export interface Customer {
	name: string;
	photoUrl: string;
	description: string;
	age: number;
	adress: Adress;
    type: CustomerType;
	categories: string[];
}

export interface Adress {
	street: string;
	houseNumber: number;
	city: string;
}

export enum CustomerType {
	Standard,
	Premium,
	Vip,
}
