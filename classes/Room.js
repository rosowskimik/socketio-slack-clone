const uuid = require('uuid/v4');

class Room {
  constructor(title, namespace, hidden = false) {
    this.id = uuid();
    this.title = title;
    this.namespace = namespace;
    this.hidden = hidden;
    this.history = [];
  }

  addMessage(message) {
    this.history.push(message);
  }

  clearHistory() {
    this.history = [];
  }
}

module.exports = Room;
