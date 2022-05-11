
//EXO 1
/*
const myObject = {
    name: "HelloJee",
    id: 1,
    isPremium: false
}

//to add or modify the table/object with a new key Name age

// We can also change the ID here as well, to change that we put the name of the function and DOT then Name of the Variant=ID then equal sign with number.



myObject.age = 25
console.log(myObject);
*/

//EXO 2 = Use a for in to show up a key in terminal?
const myObject = {
    name: "votrennom",
    id: 1,
    age: 25,
    premium: false
};

// this will change every key with "a". 
for (const key in myObject) { 
    myObject[key] = "a"
    console.log(key, myObject[key]);
}
//results are below:
/*
name a
id a
age a
premium a
*/




