class Person {
    constructor(name) {
        this.name = name
    }

    get name() {
        return this.name
    }

    set name(name) {
        this.name = name
    }


    walk() {
        return `Ola ${this.name}`
    }
}


class Developer extends Person {
    constructor(name, codeLanguage) {
        super(name)
        this.codeLanguage = codeLanguage
    }
}

var person = new Person('Gustavo')

console.log(person.walk())








