const uuid = require('uuid/v4');

class Namespace {
  constructor(title, img, endpoint) {
    this.id = uuid();
    this.title = title;
    this.img = img;
    this.endpoint = endpoint;
    this.rooms = [];
  }

  addRoom(room) {
    this.rooms.push(room);
  }
}

module.exports = Namespace;
