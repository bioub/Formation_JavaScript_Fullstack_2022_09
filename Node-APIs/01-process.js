// Entrée/sortie standard
// process.stdin process.stdout process.stderr

console.log('process.platform', process.platform); // darwin (macOS), win32 (Windows)

// Pour simplifier l'utilisation voir les libs : yargs, minimist, commander, meow
// node 01-process.js --db test
console.log('process.argv', process.argv);
// [
//  '/Users/romain/.nvm/versions/node/v16.16.0/bin/node',
//   '/Users/romain/Desktop/Formation-JavaScript-Fullstack/Node-APIs/01-process.js',
//   '--db',
//   'test'
// ]

// Variables d'environnement
console.log('process.env', process.env);
