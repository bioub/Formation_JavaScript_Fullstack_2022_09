const fs = require('fs/promises');
const path = require('path')

const editorconfigPathSrc = path.join(__dirname, '.editorconfig');
const editorconfigPathDest = path.join(__dirname, '.editorconfig.copy');

async function copy() {
  try {
    const buffer = await fs.readFile(editorconfigPathSrc);
    await fs.writeFile(editorconfigPathDest, buffer);
    console.log('Copy Done');
  } catch (err) {
    console.log(err.message);
  }
}

copy();

// A partir de ES2022 ce n'est plus nécessaire d'avoir la fonction async ici
// Top-Level Await
