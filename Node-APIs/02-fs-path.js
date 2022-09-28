// voir une explication des fonctions disponibles ici :
// https://nodejs.dev/en/learn/the-nodejs-fs-module/

const fs = require('fs');
const path = require('path')

const editorconfigPath = path.join(__dirname, '.editorconfig');

// lire un fichier en synchrone
const buffer = fs.readFileSync(editorconfigPath);
console.log(buffer.toString('utf-8'));

// lire un fichier en asynchrone ("basée sur des callbacks")
fs.readFile(editorconfigPath, (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
