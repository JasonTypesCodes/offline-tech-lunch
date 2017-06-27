let nextPayload = 1;
const maxPayload = 3;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => {
      return navigator.serviceWorker.ready;
    })
    .then(() => {
      console.log('Ready!');
      $('#getMessage').click(() => {
        $.get(`/data/${nextPayload}.json`).then((result) => {
          $('#message').text(result.message);
          nextPayload + 1 > maxPayload ? nextPayload = 1 : nextPayload++;
        });
      });
    });
}

