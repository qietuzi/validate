export interface IsEmpty {
    (input: string): boolean
}

export interface Phone {
    (input: string): boolean
}

export interface Validate{
    isEmpty: IsEmpty,
    phone: Phone
}

declare const Validate: Validate

export default Validate