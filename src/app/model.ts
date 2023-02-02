export interface Customer {
    name: string;
    photoUrl: string;
    description: string;
    age: number;
    adress: Adress;
}

export interface Adress {
    street: string;
    houseNumber: number;
    city: string;
}