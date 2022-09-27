// En JavaScript on est entouré d'objets

// définis par le langage
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object

// définis par une plateforme
// comme Node.js
console.log('typeof process', typeof process); // object
// du Navigateur
console.log('typeof document', typeof document); // object
console.log('typeof window', typeof window); // object
console.log('typeof navigator', typeof navigator); // object
// Dans Node et le navigateur console existe
console.log('typeof console', typeof console); // object

// L'object JS est un système dynamique
// son contenu peut évoluer
// Système clé/valeur (dictionnaire)

console.log('typeof Math.sum', typeof Math.sum); // undefined

// On peut étendre un objet JS (lui ajouter des clés/valeurs)
Math.sum = (a, b) => a + b;

console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// On peut modifier
Math.random = () => 0.5;

// On peut supprimer
delete Math.floor;

// MAUVAISE PRATIQUE DE MODIFIER DES OBJETS EXISTANTS (surtout globaux)

// Créer des objets

// 2 syntaxes :
// {} -> object literal
// new Contact() -> constructor

// Object literal
// 2 cas d'utilisation :
// L'objet n'est créé qu'une fois

const MyMath = {
  sum: (a, b) => a + b,
};

console.log('MyMath.sum(1, 2)', MyMath.sum(1, 2));

// L'objet peut être créé plusieurs fois, alors ne pas y créer de méthodes (fonctions)
const coords1 = {
  x: 1,
  y: 2,
};

const coords3 = {
  x: 5,
  y: 8,
};
// const coords = new Coords(1, 2);

// constructor / fonction constructeur
// function Contact(name) {
//   this.name = name; // extension d'objet (même chose Math.sum = () => {})
// }

// Contact.prototype.hello = function() {
//   return 'Hello ' + this.name;
// };

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return 'Hello ' + this.name;
  }
}

const romain = new Contact('Romain');
console.log('typeof Contact', typeof Contact); // function
console.log('typeof romain', typeof romain); // object
console.log(romain.name); // Romain (en utilisant ., la première recherche se fait dans l'objet)
// ça reste dynamique (donc Contact n'est une classe)
// delete romain.name;
// delete Contact.prototype.hello;
console.log(romain.hello()); // Hello Romain (en utilisant ., la 2nde recherche se fait dans le prototype)

const baptiste = new Contact('Baptiste');
console.log(baptiste.hello()); // Hello Baptiste
