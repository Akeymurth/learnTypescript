export enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

export type User = {
    name: string;
    role: UserRole;
}

const nicoUser: User = {
    name: "nico",
    role: UserRole.ADMIN
}



