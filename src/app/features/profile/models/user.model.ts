export interface User {
    id: string,
    image: string,
    name: string,
    email: string,
    password: string,
    birthday?: string,
    gender?: string,
    country?: string
}