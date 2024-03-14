const square = (number: number) => {
    return number * number
}

console.log(square(2));
// Anotacion de tipo primitivo 
let user: string = "John";
let num: number = 11;
let isActive: boolean = true;
// tipificacion inferida (Si no damos valor, escoge el valor de manera implicita)
let hello = "word";
// Anotacion de tipos de Array
const heroes: string[] = ["Thor", "Hulk", "Iron Man", "Doctor Strange"];
const number: number[] = [1, 2, 3];

// Anotacion de tipos de función 
let sayHello: (greeting: string) => string;
sayHello = greet => `Hello ${greet}`

// Anotacion de tipo objeto
let hero: {
    character: string;
    powers: string[];
};

hero = {
    character: "Thor",
    powers: ["Uru-forged hammer Mjolnir", "superman strenght", "speed", "endurance and resistance to injury"],

};

//INTERFACES

interface heroInterface {
    character: string;
    powers: string[];

}

const Hulk: heroInterface = {
    character: "Bruce Banner",
    powers: ["Incredible super human strenght", "durability", "Healing factor"],
}

// Alias de tipo

type seriesType = {
    title: string;
    mainCharacter: string;
    seasons: number;
}

const series1: seriesType = {
    title: "Mr robot",
    mainCharacter: "Elliot Alderson",
    seasons: 4,
}

const series2: seriesType = {
    title: "Game of Thrones",
    mainCharacter: "Jhon Snow",
    seasons: 8
}
//Interfaces como tipos 
interface Login<U, P> {
    user: U;
    password: P;
}
let user1: Login<string, string> = {
    user: "Joe",
    password: "abc"
}
let user2: Login<string, number> = {
    user: "Joe",
    password: 1234
}

//TIPOS ENUMERADOS
enum Sizes {
    SMALL, MEDIUM, LARGE, X_LARGE
}
let pulloverSize = Sizes.MEDIUM;

//TIPADO DINAMICO ; puede asignilarle cualquier valor con el any

let password: any = "abcd";
password = 1234;
password = ["abcd"];

let password2: unknown = true;
password2 = 1234;
//let password3= password2 + 123;
let password3 = password2 + "true";

console.log(typeof password3);
console.log(password3);

//UNIONES, INTERSECCIONES, TIPOS LITERALES
interface Bear {
    weight: number;
    color: string;ç
}
interface Tiger {
    weight: number;
    speed: number;
}











