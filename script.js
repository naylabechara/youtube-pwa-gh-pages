if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

const notify = document.getElementById('notify')

notify.addEventListener("click", () => {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(registration => {
        registration.showNotification('Hola', {
          icon: 'https://st4.depositphotos.com/2934765/28878/v/450/depositphotos_288788394-stock-illustration-emoji-smile-icon-vector-symbol.jpg',
          body: 'Esta es la notificacion'
        });
      });
    } else {
      alert("no aceptada")
    }
  })
})


// notify.addEventListener("click", () => {
//     Notification.requestPermission().then(permission => {
      
//         if (permission === 'granted') {
//             const notificacion = new Notification('Hola ', {
//                 icon: 'https://st4.depositphotos.com/2934765/28878/v/450/depositphotos_288788394-stock-illustration-emoji-smile-icon-vector-symbol.jpg',
//                 body: 'Esta es la notificacion'
//             });
//             notificacion.onclick = function(){
//                 window.open('http://google.com');
//             }
//         } else {
//             alert("no aceptada")
//         }
//     })
// })




