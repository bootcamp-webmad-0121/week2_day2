describe('Hello Ironhack function', () => {
    it('Should exist', () => {
        expect(helloIronhack).toBeDefined()
    })

    it('Should exist', () => {
        expect(typeof helloIronhack).toBe('function')
    })

    it('Should return "Hello Ironhackers yay!"', () => {
        expect(helloIronhack()).toBe('Hello Ironhackers yay!')
    })
})





describe("calculateMe function", () => {

    it('Should exist', () => {
        expect(typeof calculateMe).toEqual('function')
    })

    it('Shoud return the sum of all values', () => {
        expect(calculateMe([2, 4, 6])).toEqual(12)
        expect(calculateMe([10, 100])).toEqual(110)
    })

    it('Should return undefined if argumented type is not an array', () => {
        expect(calculateMe(2)).toBeUndefined()
        expect(calculateMe(true)).toBeUndefined()
        expect(calculateMe('yay')).toBeUndefined()
        expect(calculateMe([2])).toBeDefined()
    })
})





describe('Person object', () => {

    it('Should have "age" property', () => {
        expect(person.age).toBeDefined()
    })

    it('Should have an initial value of 30 for "age" property', () => {
        expect(person.age).toEqual(30)
    })

    it('Should have a "grow" method', () => {
        expect(typeof person.grow).toEqual('function')
    })

    it('"grow" method should increase/decrease the age property with the argumented value', () => {
        person.grow(1)
        expect(person.age).toEqual(31)
        person.grow(-10)
        expect(person.age).toEqual(21)
        person.grow(9)
        expect(person.age).toEqual(30)
    })
})