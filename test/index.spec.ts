import verify from '../src/index'

describe('This is isEmpty', () => {
    let empty = ''
    let notEmpty = 'i am not empty'

    it('This is empty', () => {
        expect(verify.isEmpty(empty)).toBe(true)
    })

    it('This is not empty', () => {
        expect(verify.isEmpty(notEmpty)).toBe(false)
    })
})

describe('This is phone', () => {
    let rightPhone = '18108127001'
    let errorPhone = 'not a phone'

    it('This is right phone', () => {
        expect(verify.isCellPhone(rightPhone)).toBe(true)
    })

    it('This is error phone', () => {
        expect(verify.isCellPhone(errorPhone)).toBe(false)
    })
})

