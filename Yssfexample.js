/* Créer une fonction qui retourne un tableau composé du nombre 1 à 10 */

let table = [];
function generateTable(min, max) {
  for (let i = min; i <= max; i++) {
    table.push(i);
  }
  return table;
}

// const salut = generateTable()

// Afficher le tableau dans l'index HTML
// 1,2,3,4,5,6,7,8,9

const monTableau = generateTable(1, 11);

// Méthode enchaîné
document.querySelector("div").innerHTML = `<h1> ${
  table.length > 10 ? monTableau : "Le tableau est trop petit"
} </h1>`;

const p = document.querySelector("p");

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("input").value.toLowerCase() === "salut"
    ? p.innerText = "Vous êtes connecté"
    : p.innerText = "Accès refusé"
});