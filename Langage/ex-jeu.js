const readline = require('readline'); // importe l'API readline

const rl = readline.createInterface({
  input: process.stdin, // lire la ligne sur le clavier
  output: process.stdout, // afficher dans le terminal
});

const entierAlea = 35; // à remplacer par un vrai nombre aléatoire (Ex 1)


function jouer() {
  rl.question('Quel est le nombre entier ? ', (answer) => {
    // pour rejouer :
    jouer();

    // pour arrêter la partie
    // rl.close();
  });
}

jouer();
