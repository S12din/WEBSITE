
const myTable = [
    'salut',
     'Hello',
     'batman',
     'anticonstitutionnellement',
     'ford',
     'pokemon',
];


let longestWord = ''
for(let i =0; i < myTable.length; i++){
    if(myTable[i].length > longestWord.length){
        longestWord = myTable[i]
    }
}

console.log(longestWord);

