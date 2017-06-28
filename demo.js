let nextPayload = 1;
const maxPayload = 3;

function updatePayload() {
  nextPayload === maxPayload ? nextPayload = 1 : nextPayload++;
}

function attachToButton() {
  $('#getMessage').click(() => {
    $.get(`data/${nextPayload}.json`).then((result) => {
      $('#message').text(result.message);
      updatePayload();
    }).catch(() => {
      $('#message').html('<span style="color: red;">There was an error!</span>');
      updatePayload();
    });
  });
}

function listenForSwEvents() {
  navigator.serviceWorker.onmessage = (event) => {
    $('#status').text(event.data);
  };
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => {
      return navigator.serviceWorker.ready;
    })
    .then(() => {
      console.log('Ready!');
      attachToButton();
      listenForSwEvents();
    });
}

