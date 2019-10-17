const joinNs = endpoint => {
  const socket = io(`localhost:3000${endpoint}`);
  socket.on('roomList', data => {
    const roomList = document.querySelector('.room-list');
    roomList.innerHTML = '';
    data.forEach(room => {
      roomList.innerHTML += `<li class="room"><span class="glyphicon glyphicon-${
        room.hidden ? 'lock' : 'globe'
      }"></span>${room.title}</li>`;
    });

    document
      .querySelectorAll('.room')
      .forEach(room =>
        room.addEventListener('click', event =>
          console.log('Someone clicked on', event.target.innerText)
        )
      );
  });
};
