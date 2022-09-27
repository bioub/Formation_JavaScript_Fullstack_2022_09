class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    setTimeout(() => { // bug si function() {
      console.log('Hello ' + this.name);
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.hello(); //
