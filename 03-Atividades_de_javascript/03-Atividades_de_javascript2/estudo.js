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

    code() {
        return `${this.name} esta codando em ${this.codeLanguage}`
    }
}

var person = new Person('Gustavo')
console.log(person.walk())
console.log(person.name)




let brendan = new Developer('Brandan', 'Javascript')
console.log(brendan.name)
console.log(brendan.code())








