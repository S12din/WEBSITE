
/*
const random = (min = 0, max = 10) => {
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
};

console.log(random(0, 10));

*/



// Generate a random number between 0 and 10 and insert it into an array
// If the random number already exists in the array => generate another one
const myTableOfNumbers = [];

while (myTableOfNumbers.length <= 10) {
  let randomValue = Math.round(Math.random() * 10);
  while (myTableOfNumbers.includes(randomValue) === false) {
    myTableOfNumbers.push(randomValue);
  }
}

console.log(myTableOfNumbers)
