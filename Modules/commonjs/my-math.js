// function(exports, require) {

  function sum(a, b) {
    return a + b;
  }

  function substract(a, b) {
    return a - b;
  }

  // création de la fonction globale sum
  // globalThis.sum = sum;

  // retour de la fonction require de ce fichier exports
  exports.sum = sum;
  exports.substract = substract;

// }
