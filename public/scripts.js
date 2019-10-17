const socket = io('localhost:3000');

socket.on('namespaceList', data => {
  const namespacesDiv = document.querySelector('.namespaces');
  data.forEach(namespace => {
    namespacesDiv.innerHTML += `<div class="namespace" data-endpoint="${namespace.endpoint}"><img src="${namespace.img}" /></div>`;
  });

  document.querySelectorAll('.namespace').forEach(elem => {
    elem.addEventListener('click', () => {
      joinNs(elem.dataset.endpoint);
    });
  });
  joinNs(data[0].endpoint);
});
