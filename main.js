"using strict";

const restaurent = {
  name: "Fat House",

  location: "Point Nemo , Pacific Pcain",

  catagiries: ["Italean", "Veg", "Locat", "Nemo", "Organic"],

  startManu: [
    "Chicken Chees Burger",
    "Beef Burger",
    "Pizza",
    "Pasta",
    "Cola",
    "Maxican Cheely Chicken",
  ],

  mainManu: ["Chicken Burger", "Stake", "Pasta", "Chinees", "Fageta"],

  openingHours: {
    friDay: {
      open: "10am",
      close: "11pm",
    },
    sunDay: {
      open: "8am",
      close: "11pm",
    },
    monDay: {
      open: "11am",
      close: "11pm",
    },
  },

  order: function (firstOrder, secondOrder) {
    return [this.mainManu[firstOrder], this.startManu[secondOrder]];
  },

  orderdelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "12:00 AM",
    location = "Unknown",
  }) {
    console.log(
      `${this.startManu[starterIndex]} and ${this.mainManu[mainIndex]} will be delivered to ${location} at ${time}.`
    );
  },

  burgerMaker: function (ing1, ing2, ing3) {
    return `The burger is made using ${ing1}, ${ing2}, ${ing3}.`;
  },

  orderPizza: function (odr1, ...others) {
    console.log(odr1);
    console.log(others);
  },
};
//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// Destructuring array (
// basic array Destructuring -
// switching variables -
// nested destructuring -
// default values -
// )

// destructuring object (
// basic object Destructuring -
// renaming destructured object -
// defauld value -
// mutating object -
// nested destructured object -
// )

// spread operator (
// copying array -
// marging array -
// concatenating array -
// spreading string -
// unpacking arr -
// copying object -
// )

// rest pattern (
//  destructuring object using rest pattern -
// )

// short circuit (
// Short-circuiting with the Logical AND (&&) operator -
//  Short-circuiting with the Logical OR (||) operator -
// )

// logical assignment operator (
// nullish coalescing opereator -
// logical OR assignment operator -
// logical AND assignment operator -
// )

// optionat chaining -

// looping object (
// object.keys -
// object.values -
// objest.entries -
// )

// set (
// set methods -
// )

// map (
// basics of map -
// looping map -
// turning object into map -
// turning map into array -
// )

// string methods (
// slice method -
// toLowerCase and toUperCase meathod -
// trim meathod -
// replace method -
// reaeat method -
// splite and join method
// )

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Destructuring array

// // Destructuring in JavaScript is a way of unpacking values from arrays, or properties from objects, into distinct variables. //

//============================================================================================================================================//

// // basic array Destructuring

// const arr = [1, 2, 3, 4];

// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(y);
// console.log(x, z);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const [main, , second] = restaurent.catagiries;
// // empty space will skeep one element. //
// console.log(main, second);

// const [food1, , , , food2] = restaurent["mainManu"];
// // each empty space can skeep only one element. we can skeep as many elements as we want untill we reach array's last element, if we go over arrays length then the output will be undeffiend. //

// console.log(food1, food2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const [order1, order2] = restaurent.order(0, 3);

// console.log(order1, order2);

//============================================================================================================================================//

// // switching variables (Destructuring array)

// // Switching variables in destructuring array is a technique used to swap the values of two variables without using a temporary variable. This technique involves destructuring an array and assigning its values to two variables in a single line of code. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // old system

// let num1 = 10;
// let num2 = 20;
// console.log(num1, num2);

// let placeHolder = num1;

// num1 = num2;
// num2 = placeHolder;

// console.log(num1, num2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // new system

// let num1 = 10;
// let num2 = 20;

// [num1, num2] = [num2, num1];

// console.log(num1, num2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let [manu1, , , , manu2] = restaurent.mainManu;
// console.log(manu1, manu2);

// [manu1, manu2] = [manu2, manu1];
// console.log(manu1, manu2);

//============================================================================================================================================//

// // nested destructuring (Destructuring array)

// // Nested destructuring is a feature in JavaScript that allows you to destructure objects or arrays that contain other objects or arrays. It is a way to extract multiple properties or elements from a complex data structure in a single step. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const nested = [2, 6, [1, 5]];

// const [x, y, [z, i]] = nested;

// console.log(x, y, z, i);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const nested2 = ['Lufi', ['Zoro', 'Sanji'], "Nomi", "Usap"]

// const [c1,[c2,c3],c4,c5] = nested2

// console.log(c1,c2,c3,c4,c5)

//============================================================================================================================================//

// // default values (Destructuring array)

// // In array destructuring, default values can be assigned to variables if the value of the corresponding index is undefined. This is useful in cases where the array may not have all the expected values, or if we want to provide a fallback value in case the expected value is not present. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [2, 6];

// const [i = 0, j = 0, k = 0, l = 0] = arr;

// console.log(i, j, k, l);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // destructuring object

// // Destructuring in JavaScript is a way to extract values from arrays, objects or nested objects/arrays and assign them to variables in a more concise way. Object destructuring allows you to extract properties of an object and assign them to variables with the same name as the property.//

//============================================================================================================================================//

// // basic object Destructuring

// const { name, location, catagiries } = restaurent;

// console.log(name, location, catagiries);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { startManu, mainManu, opentingHours } = restaurent;
// console.log(startManu, mainManu, opentingHours);

// const { friDay, sunDay, monDay } = opentingHours;
// console.log(friDay, sunDay, monDay);

// const { open, close } = friDay;
// console.log(open, close);

// const [manu1, , , , , manu2] = startManu;
// console.log(manu1, manu2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // passing object as parameater

// restaurent.orderdelivery({
//   location: "Dhake 1229",
//   starterIndex: 2,
//   mainIndex: 1,
//   time: "10:00 AM",
// });

// // When a method is extracted from an object using destructuring, it loses its connection to the object and the this keyword inside the method will no longer refer to the original object. //

//============================================================================================================================================//

// // renaming destructured object

// // Renaming destructured object means that while destructuring an object, you can assign a different variable name to the extracted property. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const {
//   name: restaurentName,
//   location: restaurentLocation,
//   catagiries: foodCatagiries,
// } = restaurent;

// console.log(restaurentName, restaurentLocation, foodCatagiries);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { sunDay: sun, friDay: fri, monDay: mon } = restaurent.opentingHours;

// console.log(sun, mon, fri);

//============================================================================================================================================//

// // defauld value (Destructuring object)

// // Default values in destructured objects are used when the object being destructured does not have a property with a matching key. When the object is destructured, if the value of the property is undefined, the default value will be used instead. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { startManu = [], mainManu = [], catagirie = [] } = restaurent;
// console.log(startManu, mainManu, catagirie);

//============================================================================================================================================//

// // mutating object

// // In JavaScript, objects are mutable, which means that their properties can be modified even after they are created. This can be done by directly assigning a new value to a property, or by using methods like Object.assign() or the spread operator ... to merge two or more objects. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let a = 10;
// let b = 20;

// const obj = {
//   a: 100,
//   b: 200,
// };
// ({ a, b } = obj);

// console.log(a, b);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const person = {
//   name: "John",
//   age: 30,
// };
// person.age = 31;

// const { name, age: newAge } = person;

// console.log(name, newAge);

//============================================================================================================================================//

// // nested destructured object

// // Nested destructured object refers to the process of destructuring nested objects (an object inside another object) in JavaScript. It allows us to extract specific properties from a nested object and assign them to individual variables. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const {
//   openingHours: {
//     friDay: { open },
//   },
// } = restaurent;

// console.log(open);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const employee = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     city: "New York",
//   },
// };

// const {
//   name,
//   age,
//   address: { city },
// } = employee;

// console.log(name, age, city);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // spread operator

// // The spread operator in JavaScript is represented by three dots (...) and is used to expand elements of an iterable (like an array or string) or properties of an object. It allows us to easily copy and merge arrays, create new arrays or objects with existing elements, and pass multiple arguments to a function. //

//============================================================================================================================================//

// // copying array

// const arr = [2, 6, 3, 8, 1];

// const arr2 = [...arr];

// console.log(arr2);

//============================================================================================================================================//

// // marging array

// const firstArr = [2, 6, 3, 9, 1, 7];
// const secondArr = [3, 7, 5, 9, 0, 1];

// const margArr = [...firstArr, ...secondArr];

// console.log(margArr);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { mainManu: main, startManu: start } = restaurent;

// const allManue = [...main, ...start];

// console.log(allManue);

//============================================================================================================================================//

// // concatenating array

// const arrOne = [3, 6, 2, 8, 1, 9];
// const arrTwo = [6, 8, 2, 9, 0, 1];

// const concatenetedArr = [...arrOne,7,9,2,...arrTwo,6,3,8,9];

// console.log(concatenetedArr)

//============================================================================================================================================//

// // spreading string

// const gameName = "Player Unknows Battle Ground";

// console.log(...gameName);
// // spread operator can't be in templete-litereas. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const student = "Sami";

// const studentArr = [...student];

// const [first, second, third, fourth] = student;
// console.log(first, second, third, fourth);

//============================================================================================================================================//

// // unpacking arr

// const arr = [3, 6, 1, 7];

// console.log(...arr);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const ing = ["tomato", "beef", "soos"];

// console.log(restaurent.burgerMaker(...ing));

//============================================================================================================================================//

// // copying object

// //  Copying an object means creating a new object with the same properties and values as the original object.

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // old system

// const newRestaurent = restaurent;

// console.log(restaurent);
// console.log(newRestaurent);

// // if we change a property of newRestaurent or restauren the other object's property will be changed too, becouse both objects use the same mamory reference. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // new system

// const newRestauren = { ...restaurent, founder: "SAMI" };
// restaurent.name = "Burger Castel";

// console.log(newRestauren);
// console.log(restaurent);

// // an object that was dublicated using spread operator is a independent. that means any changeg in the origenal object does not effect the copied object. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // rest pattern

// // In JavaScript, the rest parameter syntax allows you to represent an indefinite number of arguments as an array. It is denoted by an ellipsis (...) followed by a parameter name. The rest parameter must be the last parameter in the function definition, as it will consume all remaining arguments. //

//============================================================================================================================================//

// // destructuring arr using rest pattern

// const arr = [2, 7, 4, 6, 8, 1, 0];

// const [a, , b, , ...rest] = arr;

// console.log(a, b, rest);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { mainManu, startManu } = restaurent;

// const allManue = [...mainManu, ...startManu];

// const [food1, food2, ...otherFood] = allManue;

// console.log(food1, food2, otherFood);

//============================================================================================================================================//

// destructuring object using rest pattern

// const { openingHours } = restaurent;

// const {
//   friDay: { open },
//   ...otherDays
// } = openingHours;

// console.log(open, otherDays);

//============================================================================================================================================//

// // using rest pattern in function

// const numSum = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   console.log(sum);
// };

// numSum(2, 4, 6, 2, 7, 1);

// const arr = [2, 5, 1, 7, 3, 9];
// numSum(...arr);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const multi = function (a, b, ...rest) {
//   const c = a * b;
//   console.log(c);
//   console.log(rest);
// };

// multi(2, 5, 7, 9, 1);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // short circuit

// // In JavaScript, short-circuit evaluation refers to the behavior of logical operators (&& and ||) where the second operand is not evaluated if the result can be determined by the first operand alone. This behavior allows for concise and efficient coding in certain scenarios. //

//============================================================================================================================================//

// // Short-circuiting with the Logical AND (&&) operator

// // If the first operand is falsy (e.g., false, 0, null, undefined, NaN), the result will be the first operand itself, and the second operand is not evaluated. //

// // If the first operand is truthy, the evaluation continues with the second operand, and the result will be the value of the second operand. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(1 && "sami");
// console.log(false && "Sami");
// console.log(NaN && 10);
// console.log(10 && false);
// console.log(true && false);
// console.log(false && true);
// console.log(0 && null);
// console.log(2 && 5 && 7 && 8 && 2 && 8 && 1 && 9);
// console.log(2 && 5 && 7 && 8 && 2 && false && 1 && 9);
// console.log(false && 5 && 7 && 8 && 2 && false && 1 && 9);
// console.log(1 && 5 && 7 && 8 && 2 && 8 && 1 && false);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// restaurent.orderPizza && restaurent.orderPizza("onion", "tomato", "mushroom");

//============================================================================================================================================//

// // Short-circuiting with the Logical OR (||) operator

// // If the first operand is truthy, the result will be the first operand itself, and the second operand is not evaluated. //

// // If the first operand is truthy, the evaluation continues with the second operand, and the result will be the value of the second operand. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(1 || false);
// console.log(false || true);
// console.log(true || false);
// console.log(NaN || "Sami");
// console.log(false || 0);
// console.log(false || NaN);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// restaurent.guiests = 0;

// const numGuiest = restaurent.guiests || 30;

// console.log(numGuiest);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // logical assignment operator

// // The logical assignment operators in JavaScript combine logical operators and assignment operators into a single concise expression. These operators perform both a logical operation and an assignment in a single step.//

//============================================================================================================================================//

// // nullish coalescing opereator

// // The nullish coalescing operator (??) is a logical operator introduced in JavaScript to provide a concise way of handling nullish (null or undefined) values. //

// // The nullish operator evaluates the expression on its left-hand side and, if the value is nullish (null or undefined), it returns the value on its right-hand side. If the value on the left-hand side is defined and not nullish, it is returned instead. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const res1 = {
//   name: "Fat House",
//   guiests: 20,
// };

// const res2 = {
//   name: "Fat House",
//   owner: "Sami",
// };

// res1.guiests ??= 30;
// res2.guiests ??= 10;

// console.log(res1.guiests);
// console.log(res2.guiests);

//============================================================================================================================================//

// // logical OR assignment operator

// // Logical OR assignment (||=): Assigns a value to a variable if the variable is falsy (null, undefined, 0, false, NaN) using the logical OR operator. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const res1 = {
//   name: "Fat House",
//   guiests: 20,
// };

// const res2 = {
//   name: "Fat House",
//   owner: "Sami",
// };

// res1.guiests ||= 30;
// res2.guiests ||= 10;

// console.log(res1.guiests);
// console.log(res2.guiests);

//============================================================================================================================================//

// // logical AND assignment operator

// // Logical AND assignment (&&=): Assigns a value to a variable if the variable is truthy using the logical AND operator. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const res1 = {
//   name: "Fat House",
//   guiests: 20,
// };

// const res2 = {
//   name: "Fat House",
//   owner: "Sami",
// };

// res1.guiests &&= 30;
// res2.guiests &&= 10;

// console.log(res1.guiests);
// console.log(res2.guiests);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // for of loop

// // The for...of loop in JavaScript is a convenient way to iterate over elements of an iterable object, such as an array or a string. It provides a simpler syntax compared to traditional for loops and eliminates the need to manage loop indices. //

// // variable: This is a new variable that you define to represent each element in the iterable object during eachiteration. You can choose any valid variable name.

// // of: It's a keyword that indicates the loop will iterate over the elements of the iterable object.

// // iterable: The iterable object, such as an array or a string, over which you want to iterate.

//============================================================================================================================================//

// // basics of (for of loop)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let number of arr) {
//   console.log(number);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { mainManu, startManu } = restaurent;

// const manue = [...mainManu, ...startManu];

// for (let food of manue) {
//   console.log(food);
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // entries method

// // The entries() method is a built-in method in JavaScript that is available on iterable objects such as arrays. It returns an iterator object that contains key-value pairs for each element in the array. //

//============================================================================================================================================//

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const entries = arr.entries();
// // entries method has two things (key, value). key is the index of the value.

// console.log(...entries);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { mainManu, startManu } = restaurent;

// const manues = [...mainManu, ...startManu];

// console.log(...manues.entries());

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const { mainManu, startManu } = restaurent;

// const manues = [...mainManu, ...startManu];

// for (let [index, value] of manues.entries()) {
//   console.log(`${index + 1}: ${value}`);
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // optionat chaining

// // Optional chaining, also known as the "nullish coalescing operator", is a feature introduced in JavaScript to simplify the process of accessing nested properties of an object when some of the intermediate properties may be null or undefined. It allows you to safely navigate through nested object properties without throwing an error if any intermediate property is null or undefined. //

//============================================================================================================================================//

// console.log(restaurent?.openingHours?.friDay?.open);
// console.log(restaurent?.openingHours?.tuesday?.open);
// console.log(restaurent?.openingHours?.wednesday?.open);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const days = [
//   "saturday",
//   "sunDay",
//   "monDay",
//   "tuesday",
//   "wednesday",
//   "thureday",
//   "friDay",
// ];

// for (let day of days) {
//   const open = restaurent?.openingHours[day]?.open ?? "close";
//   console.log(`${day} ${open}`);
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // looping object

// // ther are sevral methods to loop an object, such as (object.keys), (object.values), (object.entries). //

//============================================================================================================================================//

// // object.keys

// const property = Object.keys(restaurent.openingHours);
// console.log(property);

// for (const day of property) {
//   console.log(day);
// }

//============================================================================================================================================//

// // object.values

// const values = Object.values(restaurent.openingHours);

// console.log(values);

// for (let value of values) {
//   console.log(value.open);
//   console.log(value.close);
// }

//============================================================================================================================================//

// // objest.entries

// const entries = Object.entries(restaurent.openingHours);

// console.log(entries);

// for (let [property, value] of entries) {
//   console.log(property, value.open);
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // set

// // In JavaScript, a Set is an object that allows you to store unique values of any type. It provides a collection of values with no duplicates.//

//============================================================================================================================================//

// const arr = new Set([1, 4, 6, 2, 6, 1, 4, 2, 8, 4, 1]);

// console.log(arr);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [1, 4, 6, 2, 6, 1, 4, 2, 8, 4, 1];

// const setArr = [...new Set(arr)];

// console.log(setArr);

//============================================================================================================================================//

// // set methods

// const arr = new Set([1, 4, 6, 2, 6, 1, 4, 2, 8, 4, 1]);

// console.log(arr);
// console.log(arr.size); // showed the length of the set //
// console.log(arr.has(4)); // chicks if an element exists in the set //
// console.log(arr.delete(4)); // deleates a pasific element //
// console.log(arr.add(9)); // adds a pasific element //
// console.log(arr);
// console.log(arr.clear()); // removes all elements //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // map

// // The map() method in JavaScript is used to iterate over an array and create a new array by applying a transformation function to each element. It allows you to perform an operation on each element of an array and collect the results into a new array.

//============================================================================================================================================//

// // basics of map

// // in map  property can be defined using any types of data

// const restMap = new Map();

// restMap.set("name", "Far Mans House");
// restMap.set(1, "Dhaka");
// restMap.set(2, "Tangail");
// restMap
//   .set("catagories", ["Italean", "Veg", "Locat", "Nemo", "Organic"])
//   .set("open", 9)
//   .set("close", 22)
//   .set(true, "We are open")
//   .set(false, "We are colsoe");

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(restMap);
// console.log(restMap.get("open"));
// console.log(restMap.get(1));
// console.log(restMap.get(2));

// const time = 21;

// console.log(
//   restMap.get(time > restMap.get("open") && time < restMap.get("close"))
// );

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(restMap.has("name")); // checkes if the pasefic elemen exists //
// restMap.delete(2); // removes a pasefic element //
// restMap.clear(); // removes all elements //

//============================================================================================================================================//

// // looping map

// const languages = new Map([
//   [1, "C"],
//   [2, "C#"],
//   [3, "C++"],
//   [4, "Java"],
//   [5, "JavaScript"],
//   [6, "Python"],
//   [7, "Ruby"],
// ]);

// for (let [key, value] of languages) {
//   console.log(`${key} => ${value}`);
// }

//============================================================================================================================================//

// // turning object into map

// const { openingHours } = restaurent;

// const objMap = new Map(Object.entries(openingHours));

// console.log(objMap);

//============================================================================================================================================//

// // turning map into array

// const languages = new Map([
//   [1, "C"],
//   [2, "C#"],
//   [3, "C++"],
//   [4, "Java"],
//   [5, "JavaScript"],
//   [6, "Python"],
//   [7, "Ruby"],
// ]);

// console.log([...languages]);
// console.log([...languages.values()]);
// console.log([...languages.keys()]);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // string methods

// // JavaScript provides several built-in string methods that allow you to manipulate and work with strings. //

//============================================================================================================================================//

// const station = "Pahartoli Station";
// const train = "T453";

// console.log(station[0]);
// console.log(station[1]);
// console.log(station[8]);
// console.log("t4356"[3]);

// console.log(station.indexOf("o")); // indexOf() method showes the index of the selected element. //
// console.log(station.lastIndexOf("o"));
// console.log(station.indexOf("P"));
// console.log(station.indexOf("Station"));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(typeof new String(station)); // we can turn a string into an object by using (new String()) meathod //
// console.log(typeof new String(station).slice()); // and again by useing (slice()) meathod we can turn that object into a string. //

//============================================================================================================================================//

// // slice method

// // The slice() method is used to extract a portion of a string and returns it as a new string. It takes two parameters: the starting index and the optional ending index (exclusive). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const station = "Pahartoli Station";

// console.log(station.slice(10));
// console.log(station.slice(5, 7));
// console.log(station.slice(5, -7));
// console.log(station.slice(-7));
// console.log(station.slice(station.indexOf(" ") + 1));
// console.log(station.slice(0, station.indexOf(" ")));
// console.log(station.slice(-1));
// console.log(station[station.length - 1]);
// console.log(station.at(-1));

//============================================================================================================================================//

// const trainSeat = function (seatNum) {
//   const seat = seatNum.slice(3, 4);
//   if (seat === "W") {
//     console.log(`Your seat number is ${seatNum}. Which is a window seat.`);
//   } else {
//     console.log(`Your seat number is ${seatNum}. Which is not a window seat.`);
//   }
// };

// trainSeat("234W452");
// trainSeat("234M452");
// trainSeat("234S452");
// trainSeat("234M452");
// trainSeat("234M452");
// trainSeat("234W452");

//============================================================================================================================================//

// // toLowerCase and toUperCase meathod

// // In JavaScript, you can convert a string to lowercase or uppercase using the toLowerCase() and toUpperCase() methods, respectively. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const station = "Kmlapur Station";

// console.log(station.toLowerCase());
// console.log(station.toUpperCase());
// console.log("Sami".toUpperCase());
// console.log("Sami".toLowerCase());

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const fixCap = function (name) {
//   const lower = name.toLowerCase();
//   const currect = lower.at(0).toUpperCase() + lower.slice(1);
//   console.log(currect);
// };

// fixCap("saMi");
// fixCap("kHAn");

//============================================================================================================================================//

// // trim meathod

// // The trim() method in JavaScript is used to remove leading and trailing whitespace from a string. The trim() method does not modify the original string. It returns a new string with the leading and trailing whitespace removed. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const station = "   Kmlapur    Station    ";

// console.log(station.trim());
// console.log("   Hello     World".trim());

//============================================================================================================================================//

// // replace method

// //  The replace() method in JavaScript is used to replace occurrences of a specified substring or pattern in a string with a new substring. The replace() method does not modify the original string. It returns a new string with the replacements applied. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const gamePrice = "500TK";
// const gamePriceUSD = gamePrice.replace("TK", "USD");

// console.log(gamePriceUSD);
// console.log(gamePrice);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const warningMgs = "Broware of Trojan.86! Trojan.86! Trojan.86!";
// const warningMgsNew = warningMgs.replace(".", " v"); // replace method will replse only the first element. //
// const warningMgsNew2 = warningMgs.replaceAll(".", " v"); // replaceAll method will replse every element. //

// console.log(warningMgsNew);
// console.log(warningMgsNew2);

//============================================================================================================================================//

// // reaeat method

// // The repeat() method in JavaScript is used to create a new string by concatenating a specified string a certain number of times. The repeat() method does not modify the original string. It returns a new string with the repeated content. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const massage = "Bad Weather. ";

// console.log(massage.repeat(10));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function airport(num) {
//   console.log(`Thre are ${num} plains. ${"✈".repeat(num)}`);
// }
// airport(3);
// airport(7);
// airport(2);
// airport(5);
// airport(9);

//============================================================================================================================================//

// // splite and join method

// // The split() and join() methods are used for manipulating strings in JavaScript. //

// // split - The split() method is used to split a string into an array of substrings based on a specified separator. //

// // join - The join() method is used to join the elements of an array into a string using a specified separator. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const split =
//   "The+split()+and+join()+methods+are+used+for+manipulating+strings+in+JavaScript.".split(
//     "+"
//   );

// console.log(split);

// const join = split.join(" ");

// console.log(join);
