const qs = require('querystring');

const socket = io();

const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');

const { username, room } = qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.on('message', (message, location) => {
  console.log(`received ${message} from ${location}`);
});

$messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $messageFormButton.setAttribute('disabled', 'disabled');

  const msg = e.target.elements.message.value;
  const location = navigator.geolocation.getCurrentPosition((position) => {
    return {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    };
  });

  socket.emit('sendMessage', msg, JSON.stringify(location), (err) => {
    $messageFormButton.removeAttribute('disabled');
    $messageFormInput.value = '';
    $messageFormInput.focus();

    if (err) {
      console.log('ERROR: ', err);
    }
  });
});

socket.emit('join', { username, room });
