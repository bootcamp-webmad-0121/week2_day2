const helloIronhack = () => 'Hello Ironhackers yay!'

const calculateMe = arr => {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, elm) => acc + elm)
    }
}

const person = {
    age: 30,
    grow(years) {
        this.age += years
    }
}