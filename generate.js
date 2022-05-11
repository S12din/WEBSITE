
/*Loop*/

// let max = 10
// for(let i = 0; i <= max; i++){
//     console.log(i);
// }

// function generateQuote(myTable){
//     let phrase = ""
//     for(let i = 0; i < myTable.length; i++){
//         phrase += myTable[i] + " "
//     }
//     return console.log(phrase)
// }

// generateQuote(["salut", "Hello","hi","good job", "and bye for now"])

// Create a function that return a table of number 1 to 10
// Hints ;
// push method
// loop
// look like the generateQuote

let table = [];
function tab(min, max){
    let table = [];
    for(let i = min; i <= max; i++){
        table.push(i)
    }
    return table;
}

const mytable =tab(1, 11);
document.querySelector("div").innerHTML=
`<h1>${mytable.length > 10 ? mytable : "your table is too small"} </h1>`;

// //document.write (`<h1>${tab(10)}</h1>`)

const input = document.querySelector('input')
const button = document.querySelector('button')
const p = document.querySelector('p')

button.addEventListener('click', checkUsername)

function checkUsername(){
    if(input.value === "salut"){
        p.innerHTML = "you are successfully connected"
    }else{
        p.innerHTML = "Access denied"
    }
}