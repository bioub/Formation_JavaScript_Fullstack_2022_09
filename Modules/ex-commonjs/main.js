// importer la classe Jeu

// const Jeu = require("./jeu").Jeu;
//    { Jeu: Jeu }
const { Jeu } = require("./jeu");
// const Jeu = require('./jeu')

const game = new Jeu();
game.jouer();
