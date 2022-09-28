const fs = require('fs');
const path = require('path')

const editorconfigPathSrc = path.join(__dirname, '.editorconfig');
const editorconfigPathDest = path.join(__dirname, '.editorconfig.copy');

// copier un fichier en synchrone (bloque le thread)
try {
  const buffer = fs.readFileSync(editorconfigPathSrc);
  fs.writeFileSync(editorconfigPathDest, buffer);
  console.log('Copy Done');
} catch (err) {
  console.log(err.message);
}

// copier un fichier en asynchrone ("basée sur des callbacks")
fs.readFile(editorconfigPathSrc, (err, buffer) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(editorconfigPathDest, buffer, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy Done');
      }
    });
  }
});
