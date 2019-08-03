export function isEmpty(input: string): boolean

export function isCellPhone(input: string): boolean

export function isTelPhone(input: string): boolean

export function isEmail(input: string): boolean

export function isZipCode(input: string): boolean

export function isIdNum(input: string): boolean

export interface Verify {
    isEmpty(input: string): boolean;
    isCellPhone(input: string): boolean;
    isTelPhone(input: string): boolean;
    isEmail(input: string): boolean;
    isZipCode(input: string): boolean;
    isIdNum(input: string): boolean
}

declare const verify: Verify

export default verify