const coords = {
  x: 1,
  y: 2,
  // z: 3,
};


// const x = coords.x;
// const y = coords.y;
// const z = coords.z ?? 0;

// console.log(x, y, z);

//       { x: 1, y: 2, z: 3 }
// const { x: a, y: b, z: c } = coords;
// console.log(a, b, c);

//      { x: 1, y: 2, z: 3 }
// const { x: x, y: y, z: z } = coords;
// console.log(x, y, z);


const { x, y, z = 0 } = coords;
console.log(x, y, z);
