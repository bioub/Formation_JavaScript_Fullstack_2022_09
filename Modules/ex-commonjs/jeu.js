// importer la fonction getRandomInt
const readline = require('readline'); // importe l'API readline

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0; // ?? nullish coalescing operator (prend la partie de droite si la partie de gauche vaut null ou undefined)
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin, // lire la ligne sur le clavier
      output: process.stdout, // afficher dans le terminal
      // terminal: false,
    });

    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre entier ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

// exporter la classe Jeu
