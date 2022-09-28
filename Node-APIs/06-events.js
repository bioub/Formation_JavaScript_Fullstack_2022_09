const { EventEmitter } = require('events');

class AuthentificationService extends EventEmitter {
  login(credentials) {
    // todo: check login password
    this.emit('logged', credentials.username)
    return true;
  }
}

const service = new AuthentificationService();
service.on('logged', (username) => {
  console.log('Send email to username', username);
});

service.login({
  username: 'romain',
  password: '123456'
});
