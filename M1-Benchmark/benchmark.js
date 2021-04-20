//JS EXERCISES

//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
const printName = function () {
  let x = "John";
  let y = "Doe";
  // let result = x + " " + "<>" + " " + y;
  let result = `${x + "<>" + y}`;
  return result;
};
console.log(printName());

//22) Create an object with properties such name, surname, email

const myDetails = function () {
  const myPersonalDetails = {
    name: "Oluwabusola",
    surname: "Jibodu",
    email: "busola.jibodu@gmail.com",
    age: 28,
  };
  return myPersonalDetails;
};
console.log(myDetails());

//23) Delete Email from the previously created object
delete myDetails.email;
console.log(myDetails());

//24) Create an array with 10 strings in it

let myColors = [
  "red",
  "blue",
  "yellow",
  "white",
  "teal",
  "purple",
  "green",
  "brown",
  "black",
  "pink",
];

//25) Print in the console every string in the previous array
const newColors = function () {
  console.log(myColors);

  for (let i = 0; i < myColors.length; i++) {
    console.log(myColors[i]);
  }
};
console.log(newColors());

//26) Create an array with 100 random numbers in it
//let randomNum = Math.random() * 100

const randomArray = [];
for (let i = 0; i < 100; i++) {
  randomNum = Math.floor(Math.random() * 1000) + 1;
  randomArray.push(randomNum);
}

console.log(randomArray);

//27) Write a function to get the MAX and the MIN from the previously created array

const maxMin = function (numbers) {
  // console.log(Math.max(randomArray));
  // console.log(Math.min(randomArray));
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 0; i < randomArray.length; i++) {
    if (numbers[i] > max) {
      max = number[i];
    }
    if (numbers[i] < min) {
      min = number[i];
    }
  }
  return { max, min };
};
console.log(maxMin(randomArray));

//28) Create an array of arrays, in which every array has 10 random numbers

const arrayOfArrays = [];
for (let i = 0; i < 5; i++) {
  const newRandomArray = [];
  for (let j = 0; j < 10; j++) {
    newRandomArray.push(Math.floor(Math.random() * 100) + 1);
  }
  arrayOfArrays.push(newRandomArray);
}
console.log(arrayOfArrays);

//29) Create a function that gets 2 arrays and returns the longest one
const compareArrLength = function (arr1, arr2) {
  if (arr1 > arr2) {
    return arr1;
  } else if (arr2 > arr1) {
    return arr2;
  } else {
    console.log("same lenght");
  }
};

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
let sum3 = 0;
let sum4 = 0;
const higherSum = function (arr3, arr4) {
  for (let i = 0; i < arr3.length; i++) {
    sum3 = +arr3[i];
  }
  for (let i = 0; i < arr3.length; i++) {
    sum4 = +arr4[i];
  }
  if (sum3 > sum4) {
    return sum3;
  } else {
    return sum4;
  }
};
