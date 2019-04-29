'use strict';

class Person {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }

    info(){
        return `${this.name},${this.age}`
    }
}

class Rc extends  Person{
    constructor(name,age){
        super(name,age)
    }
}

//Rc {name: "rc", age: "18"}
console.log(new Rc("rc","18"));

