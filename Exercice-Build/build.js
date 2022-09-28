const fs = require('fs/promises');
const path = require('path');
const md5 = require('md5');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkDir() {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);
}

// async function buildJs() {
//   const bufferHorloge = await fs.readFile(horlogeJsPath);
//   await fs.writeFile(appJsDistPath, bufferHorloge);
//   const bufferIndex = await fs.readFile(indexJsPath);
//   await fs.appendFile(appJsDistPath, bufferIndex);
// }

async function buildJs() {
  // combine n promesses en une qui sera résolue (appel du cb de .then)
  // lorsque l'ensemble sera résolu
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let html = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  html = html.replace('<script src="./js/horloge.js"></script>', '<script src="./app.js"></script>')
    .replace('<script src="./js/index.js"></script>', '')

  await fs.writeFile(indexHtmlDistPath, html);
}

async function build() {
  await rmAndMkDir();
  await buildJs();
  await buildHtml();
}

build();
