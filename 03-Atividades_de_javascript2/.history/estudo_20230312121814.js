class Person {
    constructor(name) {
        this.name = name
    }


    walk() {
        return `Ola ${this.name}`
    }
}

var person = new Person('Gustavo')

console.log(person.walk())