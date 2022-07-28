'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // This function receives an object gets destructured immediately when the function is called
  orderDelivery({
    startIndex,
    mainIndex,
    address = 'Via De la Cross',
    time = '20:30',
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with your order: ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//---------------------------------------
// WORKING WITH STRINGS
// ---------------------------------------

//Application of Padding()
const maskedCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskedCreditCard(752148963));
console.log(maskedCreditCard(48745556312354));
console.log(maskedCreditCard(85412471752147063));

///Capitalizing the first letters of a given name
const capitalizeName = name => {
  //split the string into substring using a specified separator and return them as an array
  if (name.includes('-')) {
    name = name.replaceAll('-', ' ');
    // console.log(name);
    // const names = name.split(' ');
    const names = splitName(name);
    // console.log(names);
    loop(names);
  } else {
    const names = splitName(name);
    // console.log(names);
    loop(names);
  }
};

//LOOP
const loop = names => {
  //An empty array
  // console.log(names);
  const Caps = [];
  //Looping through each name.
  //Capitalizing the first letter of each name
  //Pushing the results into the array
  for (const n of names) {
    Caps.push(n.replace(n[0], n[0].toUpperCase()));
    // Caps.push(n[0].toUpperCase() + n.slice(1));
  }
  //printing out the values of the array into a string,
  //separated by the specified separator string.
  console.log(Caps.join(' '));
};

///SPLIT NAME FUNCTION
const splitName = function (n) {
  return n.split(' ');
};

capitalizeName('norbert kofi amankwah junior');
capitalizeName('kunimyelor naa odey tackie-yarboi');

// const str = 'a + very + interesting + course';
// console.log(str.split(' + ').join(' '));
// //Fixing Capitalization Error
// const capFirstLetter = word => {
//   const wordToLowerCase = word.toLowerCase();
//   const wordFixed = wordToLowerCase[0].toUpperCase() + wordToLowerCase.slice(1);
//   console.log(wordFixed);
// };

// capFirstLetter('qqweqwreetrtwqrwrqeqweqweq');
// capFirstLetter('norbert');
// capFirstLetter('amankwah');

// //Email Comparison
// const email = 'erhnay86@gmail.com';
// const loginEmail = '   Erhnay86@gmail.com';
// console.log(email === loginEmail);
// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
// console.log(normalizeEmail === email);

// ///Replacing
// const priceGB = '300,98💷';
// const priceUS = priceGB.replace('💷', '$').replace(',', '.');
// console.log(priceUS);

// ///Example 2 replacing all the occurences of door with gate
// const announcement =
//   'Please all passengers should report to the boarding door. Passengers report in front of the door ASAP';

// const rep = announcement.replaceAll('door', 'gate');
// console.log(rep);

// ///Working with strings 1
// const checkMiddleSeat = seat => {
//   const s = seat.slice(-1);
//   return s === 'E' || s === 'B' ? 'You got the middle seat' : 'You got lucky';
// };

// console.log(checkMiddleSeat('3B'));
// console.log(checkMiddleSeat('23C'));
// console.log(checkMiddleSeat('3E'));

// // ---------------------------------------
// // //THE FOR-OF LOOP
// // // ---------------------------------------

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // for (const item of menu) console.log(item);
// for (const [i, item] of menu.entries()) console.log(`${i + 1}: ${item}`);

// // ---------------------------------------
// // SHORT CIRCUITING
// // ---------------------------------------

// ///OR
// console.log('hello' || null);
// console.log('3' || 'Norbert');
// console.log('' || null);

// //AND
// console.log('------AND------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log(
//   restaurant.orderPizza && restaurant.orderPizza('pizza', 'mushroom')
// );

/*
//---------------------------------------
// THE REST OPERATOR AND PATTERN
// ---------------------------------------
///Rest on Arrays
const [pizza, , risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, others);

//rest on objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//Rest Parameters
let sum = 0;
const add = function (...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 34, 45);
add(2, 34, 45, 34, 5456, 67, 67);
add(2, 34, 45, 45, 565, 6, 78, 9890, 9, 78, 989);

restaurant.orderPizza('mushroom', 'aspargus', 'tomatoes', 'eggs');
*/

/*
// ---------------------------------------
// THE SPREAD OPERATOR
// ---------------------------------------

//Spread Operator on Objects
const newRes = { foundIn: 1997, ...restaurant };
console.log(newRes);

newRes.name = 'Risto Roma';
console.log(newRes.name);
console.log(restaurant.name);

///Making a copy of the Restaurant Object
const newRestaurant = { ...restaurant };
console.log(newRestaurant);

//Real world example of how to use the spread operator
const ingredients = [
  prompt("Let's order something: Ingredient 1"),
  prompt('Ingredient 2'),
  prompt('Ingredient 3'),
];

restaurant.orderPasta(...ingredients);

const arr = [7, 89, 7];
const newArr = [100, 45, ...arr];
console.log(newArr);
console.log(...newArr);

//Shallow copying an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join two or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

////Working with iterables, array strings,MAPS,SETS
const strCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const str = strCap.toLowerCase();
const letters = [...strCap, ...str];
console.log(letters);
*/
// ---------------------------------------
// ALL ABOUT DESTRUCTURING OF OBJECTS
// ---------------------------------------
/*
//Simple Application of Object Destructuring
//function call
restaurant.orderDelivery({
  time: '20:30',
  address: 'Via de la Cross',
  startIndex: 1,
  mainIndex: 2,
});

restaurant.orderDelivery({
  startIndex: 3,
  mainIndex: 1,
});
//Destructuring an object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//Renaming
const { name: n, openingHours: op, categories: cat } = restaurant;
console.log(n, op, cat);

//Default Values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating Variables
let a = 100;
let b = 999;
const obj = { a: 27, b: 23, c: 5 };
({ a, b } = obj);
console.log(a, b);

// Destructuring nested object
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);
*/

/*
---------------------------------------
ALL ABOUT ARRAY DESTRUCTURING
---------------------------------------

//Destructuring of an Array
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

//Skipping an element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Swapping two values (alt 1)
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//Alt 2, using the destructuring approach
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Destructuring a function that returns an array Immediately
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`Hey waiter, I ordered ${starter} and ${mainCourse}.`);

//Destructuring nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 6];
console.log(p, q, r);
*/
