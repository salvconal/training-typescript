const square = (number) => {
    return number * number;
};
console.log(square(2));
// Anotacion de tipo primitivo 
let user = "John";
let num = 11;
let isActive = true;
// tipificacion inferida (Si no damos valor, escoge el valor de manera implicita)
let hello = "word";
// Anotacion de tipos de Array
const heroes = ["Thor", "Hulk", "Iron Man", "Doctor Strange"];
const number = [1, 2, 3];
// Anotacion de tipos de función 
let sayHello;
sayHello = greet => `Hello ${greet}`;
// Anotacion de tipo objeto
let hero;
hero = {
    character: "Thor",
    powers: ["Uru-forged hammer Mjolnir", "superman strenght", "speed", "endurance and resistance to injury"],
};
const Hulk = {
    character: "Bruce Banner",
    powers: ["Incredible super human strenght", "durability", "Healing factor"],
};
const series1 = {
    title: "Mr robot",
    mainCharacter: "Elliot Alderson",
    seasons: 4,
};
const series2 = {
    title: "Game of Thrones",
    mainCharacter: "Jhon Snow",
    seasons: 8
};
let user1 = {
    user: "Joe",
    password: "abc"
};
let user2 = {
    user: "Joe",
    password: 1234
};
//TIPOS ENUMERADOS
var Sizes;
(function (Sizes) {
    Sizes[Sizes["SMALL"] = 0] = "SMALL";
    Sizes[Sizes["MEDIUM"] = 1] = "MEDIUM";
    Sizes[Sizes["LARGE"] = 2] = "LARGE";
    Sizes[Sizes["X_LARGE"] = 3] = "X_LARGE";
})(Sizes || (Sizes = {}));
let pulloverSize = Sizes.MEDIUM;
//TIPADO DINAMICO ; puede asignilarle cualquier valor con el any
let password = "abcd";
password = 1234;
password = ["abcd"];
let password2 = true;
password2 = 1234;
//let password3= password2 + 123;
let password3 = password2 + "true";
console.log(typeof password3);
console.log(password3);
