const text = document.querySelector('h2');

function getChrono(){

    const now = new Date().getTime();    // nombre de ms qu'il y a eu depuis le 01/01/1970
    const countDownDate = new Date('December 31, 2021').getTime();  // nombre ms pour aller au 31/12/2021
    
    const distanceBase = countDownDate - now;  //   nombre de ms qui reste pour aller au 31/12/2021

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24)); // calcul de 1 jour en ms  (1000*60*60*24)
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000*60*60));  // modulo pour calculer le nombre d'heures restant
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000*60));  // modulo pour calculer le nombre de minutes restantes
    const secondes = Math.floor((distanceBase % (1000 * 60)) / (1000));  // modulo pour calculer le nombre de secondes restantes

    text.innerText = `${days}j ${hours}h ${minutes}m ${secondes}s`;
}

getChrono();

const countInterval = setInterval(() => {
    getChrono();
}, 1000);

