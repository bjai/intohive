export interface Users {
    activeUser: User[];
    disabledUser: User[];
}

export interface User {
    id?: number;
    name?: string;
    email?: string;
    mobile?: string;
    address?: string;
    active?: boolean;
}