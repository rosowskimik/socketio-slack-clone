// Bring in the room class
const Namespace = require('../classes/Namespace');
const Room = require('../classes/Room');

// Set up the namespaces
const namespaces = [];
const WikiNs = new Namespace(
  'Wiki',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png',
  '/wiki'
);
const MozNs = new Namespace(
  'Mozilla',
  'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png',
  '/mozilla'
);
const LinuxNs = new Namespace(
  'Linux',
  'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png',
  '/linux'
);

namespaces.push(WikiNs, MozNs, LinuxNs);

// Make the main room and add it to rooms. it will ALWAYS be 0
WikiNs.addRoom(new Room('New Articles', 'Wiki'));
WikiNs.addRoom(new Room('Editors', 'Wiki'));
WikiNs.addRoom(new Room('Other', 'Wiki'));

MozNs.addRoom(new Room('Firefox', 'Mozilla'));
MozNs.addRoom(new Room('SeaMonkey', 'Mozilla'));
MozNs.addRoom(new Room('SpiderMonkey', 'Mozilla'));
MozNs.addRoom(new Room('Rust', 'Mozilla'));

LinuxNs.addRoom(new Room('Debian', 'Linux'));
LinuxNs.addRoom(new Room('Red Hat', 'Linux'));
LinuxNs.addRoom(new Room('MacOs', 'Linux'));
LinuxNs.addRoom(new Room('Kernal Development', 'Linux'));

module.exports = namespaces;
