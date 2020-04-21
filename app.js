if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then((reg) => console.log('service worker funcionando',reg))
    .catch((err) => console.log('erro no service worker'),err);

}