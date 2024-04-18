function closeButton() {
  var subscribeBlock = document.getElementById("subscribe_block");
  subscribeBlock.style.display = "none";
}

// Créer une fonction avec un argument en paramètre. Si ce
// chiffre est un nombre pair, retournez la phrase : “Ce nombre est
// pair” sinon retournez “C’est un nombre impair”

function isEvenOrOdd(number) {
  if (number % 2 == 0) {
    return `${number} est un chiffre pair`;
  } else {
    return `${number} est un chiffre impair`;
  }
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd("3"));

// Créez une fonction qui prend un tableau de nombres en
// paramètre et retourne la somme de tous les éléments du
// tableau. Faites en sorte que cette fonction soit générique en
// testant un par un avec ces deux tableaux.
var tableauNombres = [7, 54, 93, 2, -45];
var autreTableauNombres = [84, 6, 13, -71, 100];

function numbersArraySum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(numbersArraySum(tableauNombres));
console.log(numbersArraySum(autreTableauNombres));
