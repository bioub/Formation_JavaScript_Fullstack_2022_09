const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const editorconfigPathSrc = path.join(__dirname, '.editorconfig');
const editorconfigPathDest = path.join(__dirname, '.editorconfig.zip');

// const rs = fs.createReadStream(editorconfigPathSrc);

// rs.on('open', () => {
//   console.log('stream open');
// });

// rs.on('data', (chunk) => {
//   console.log('stream data');
//   console.log(chunk.toString('utf-8'));
// });

// rs.on('close', () => {
//   console.log('stream close');
// });


// cat .editorconfig | gzip > .editorconfig.zip
fs.createReadStream(editorconfigPathSrc)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(editorconfigPathDest));
