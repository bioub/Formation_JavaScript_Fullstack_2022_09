function hello(name: string) {
  return `Hello ${name.toUpperCase()}`;
}

const names = ['Cristina', 'Khouloud', 'Pierre-Matthieu'];

for (const n of names) {
  console.log(hello(n));
}
