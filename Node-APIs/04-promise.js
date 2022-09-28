const fs = require('fs/promises');
const path = require('path')

const editorconfigPathSrc = path.join(__dirname, '.editorconfig');
const editorconfigPathDest = path.join(__dirname, '.editorconfig.copy');

// callback hell
// fs.readFile(editorconfigPathSrc)
//   .then((buffer) => {
//     fs.writeFile(editorconfigPathDest, buffer)
//       .then(() => console.log('Copy Done'))
//       .catch((err) => console.log(err.message))
//   })
//   .catch((err) => console.log(err.message))


fs.readFile(editorconfigPathSrc)
  .then((buffer) => fs.writeFile(editorconfigPathDest, buffer))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err.message))
