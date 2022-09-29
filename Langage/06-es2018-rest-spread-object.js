const coords = {
  x: 1,
  y: 2,
};

// SPREAD
const coords3d = {
  ...coords, // x: 1, y: 2,
  z: 3,
};

console.log(coords3d);

// REST
const { z, ...coords2d } = coords3d;


console.log(coords2d);
