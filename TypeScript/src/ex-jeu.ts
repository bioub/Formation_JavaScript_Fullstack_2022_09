const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  },
}

import readline, { Interface } from 'readline';

interface JeuOptions {
  min?: number;
  max?: number;
}

class Jeu {
  private rl: Interface;
  private entierAlea: number;
  private essais: number[] = [];

  constructor(options: JeuOptions = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.entierAlea = Random.getRandomInt(min, max);
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

const game = new Jeu({
  min: -10,
  max: 12,
});
game.jouer();
