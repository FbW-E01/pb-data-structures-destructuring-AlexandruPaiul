// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`.
//  Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). 
// Use array destructuring to complete this task.
console.log("Task1: Array Destructuring  ")
const array = ["banana", "cucumber", "bread", "cakes", "pizza"];
const [fruit, vegetable,...food]= array;
console.log("Fruit is:"+ fruit+"\n" + "Vegetable is: " +vegetable+"\n"+"Food are: ",...food);


// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`. Assign each value to a variable. Print out the values.
console.log("Task2: Object Destructuring")
const halloween ={
    firstName: "Dracula",
    costume: "Victorian High Collar Coat"
}
let {firstName:fn, costume:cs}= halloween;
console.log(fn);
console.log(cs);

// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to print all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

console.log("Task3: Parameters: Object Destructuring ")
const musician ={
    nameMusician: "Tom Waits",
    greatestHit:"Hold on",
    nationality: "American",
    genre:"jazz, blues, rock, vaudeville and experimental"
};
let {nameMusician:nm, greatestHit:ht, nationality:n, genre:g,} = musician;
console.log(`${nm} is an ${n} singer/songwriter and composer. The musician sings ${g} and one of  greatest hit is " ${ht} "`)