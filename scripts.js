

const botaoAbacaxi = document.getElementById('botao1');

botaoAbacaxi.addEventListener('click', ()=> {
    const containerD = document.querySelector('.container-d');
    containerD.classList.toggle('hide');
    containerD.scrollIntoView({behavior:'smooth'});

})