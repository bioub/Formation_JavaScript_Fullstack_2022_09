function hello(name) {
  console.log('Hello ' + name);
}

hello('Romain'); // je fais l'appel de hello

const names = ['Cristina', 'Khouloud', 'Baptiste', 'Pierre-Matthieu'];

// Algo
// Filtrer le tableau pour n'avoir que les prénoms de 8 lettres
// Passer les prénoms en majuscule
// Les afficher via la fonction hello

// Programmation fonctionnelle
// les if et for vont être remplacés par des fonctions

// Callback : une fonction qui va être appelée indirectement (par un autre API)
// ici hello est appelée par forEach

names
  .filter((name) => name.length === 8) // function (name) { return name.length === 8; }
  .map((name) => name.toUpperCase()) // function (name) { return name.toUpperCase(); }
  .forEach(hello); // l'appel est fait par forEach (callback)

// pile d'appel
// ^
// |
// |                      up up up
// |        => => => =>   => => =>   hello hello hello
// |hello - filter      - map      - forEach
// +--------------------------------------------------> temps
//  Rom                              CHRI  KHOU  BAPT
