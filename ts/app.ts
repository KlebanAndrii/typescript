// let age:string = 22;
// let age:any = 22;
// let age: string | number = 22;

// age = 'Hello'

//************************************************************************************************************

// function multiplier(a:number, b:number): number {
//
//     return a * b
// }


// function multiplier(a: number, b: number): void {   // void - означає що ця функція нічого не повертає
//
//     console.log(a * b)
// }
//
//
// let number = multiplier(20, 5);
//
// console.log(number);


// function multiplier(a: number, b?: number): void { // ?- дає можливість прописати b або можна і не прописувати
//
//     console.log(a * b)
// }
//
//
// let number = multiplier(20);                        // ?- дає можливість прописати b або можна і не прописувати
//
// console.log(number);


//******************************************************************************************************************


// class Car {
//
//     protected year: number;
//     private producer: string;
//     public power: number = 200;
//
//
//     constructor(year: number, producer: string) {
//         this.year = year;
//         this.producer = producer;
//     }
//
//
//     changePower(newPower: number): void {
//         this.power = newPower;
//     }
// }
//
//
// class SuperCar extends Car {
//    public color: string;
//
//    constructor(year: number, producer: string, color: string) {
//        super(year, producer);
//        this.color = color;
//    }
// }
//
//
//
// const carD = new Car(2009,'Zaz');
// const superCarD = new SuperCar(2006,'Zazic','Red');
//
// console.log(carD);
// console.log(superCarD);


//*********************************************************************************************************************


// let user = {
//     name: 'Andriy',
//     laptop: {
//         model: 'acer',
//         memory: 16
//     },
//     car: {
//         year: 2009
//     },
//     bike: {
//         price: 2323
//     }
// }
//
//
// // console.log(user && user.bike && user.bike.price);
//
// console.log(user?.bike?.price?.currency);


//*********************************************************************************************************************


let names = ['Dimas', 'Viktor', 'Roma'];
let names1: string[] = ['Dimas', 'Viktor', 'Roma'];
let names2: Array<string> = ['Dimas', 'Viktor', 'Roma'];
let names3: Array<string | number> = ['Dimas', 'Viktor', 'Roma'];

names = ['Kristy'];


//*********************************************************************************************************************

enum EGenders {
    MALE = 'male',
    FEMALE = 'female'

}


class ICar {
    color: string
}

interface IUser {
    name: string,
    age: number,
    gender: EGenders,
    wife?: boolean,
    car?: [ICar],
    goWork: Function
}

function userLogger(users: Array<IUser>): void {
    users.forEach((value) => {
        console.log(value.name);
    })
}

let ivan: IUser = {
    age: 33,
    name: 'Ivan',
    wife: false,
    gender: EGenders.MALE,
    goWork: () => {
    }
}

let roma: Partial<IUser> = {  // Partial - означає що частково буде передаватися IUser
    age: 33,
    name: 'Roma',
    wife: false
}


userLogger([ivan]);


const keys: Array<keyof IUser> = ['age', 'name', 'wife', 'car', 'goWork'];

function getValueKeyOf(key: keyof IUser): void {
    console.log(ivan[key]);
}

getValueKeyOf('name')


//*********************************************************************************************************************


abstract class ACar {
    wheels: number;
    power: number;


    constructor(wheels: number, power: number) {
        this.wheels = wheels;
        this.power = power;
    }

    ride() {
        console.log(`Ride with ${this.power * 2} km/h`)
    }
}


class Car extends ACar {
color: string = 'Red';

    constructor(wheels: number, power: number, colir?: string) {
        super(wheels, power);
    }
}

const bibika = new Car(6,140);

bibika.ride();












