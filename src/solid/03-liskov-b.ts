// Clases abstracas sirven para trabajar con 
//* Herencia

export abstract class Vehicle {
    // getNumberOfSeats():number{
    //     throw Error('method not implemented.')
    // }

    //if we don't use the abstract reserved word 
    // we will need to do it the commented way and if the method 
    // is not implemented in the inheritanced class It will throw.

    abstract getNumberOfSeats(): number

}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats() {
        return this.numberOfSeats
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats
    }
}

export class Ford extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats
    }
}
