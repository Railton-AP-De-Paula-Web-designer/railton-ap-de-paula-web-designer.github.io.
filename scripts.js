// Aguarda o carregamento completo da página para rodar o script
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os parágrafos dentro dos blocos de leitura
    const paragrafos = document.querySelectorAll('.bloco-leitura p');

    paragrafos.forEach(paragrafo => {
        // Pega o conteúdo de texto do parágrafo
        const texto = paragrafo.textContent;
        // Limpa o conteúdo original
        paragrafo.innerHTML = '';

        // Cria um fragmento de documento para otimizar a inserção de elementos
        const fragmento = document.createDocumentFragment();

        // Itera sobre cada letra do texto
        for (let i = 0; i < texto.length; i++) {
            const letra = texto[i];

            // Verifica se o caractere não é um espaço em branco
            if (letra !== ' ') {
                const span = document.createElement('span');
                span.textContent = letra;
                span.classList.add('letra');
                fragmento.appendChild(span);
            } else {
                // Adiciona um espaço normal em vez de uma tag <span>
                fragmento.appendChild(document.createTextNode(' '));
            }
        }

        // Insere o novo conteúdo com as tags <span> no parágrafo
        paragrafo.appendChild(fragmento);
    });
});

window.onload = function() {
    // Pega o elemento de áudio e o botão.
    var audio = document.getElementById("meu-audio");
    var botaoPausar = document.getElementById("botao-pausar");

    // Variável para armazenar o temporizador de 7 segundos.
    var temporizador;
    
    // 1. Adiciona um ouvinte para o primeiro evento de scroll na página
    document.addEventListener('scroll', function comecarAudioComScroll() {
        if (audio && audio.paused) {
            audio.play().catch(error => {
                console.error("Erro ao tocar o áudio:", error);
            });
            
            // 2. Torna o botão de pausa visível
            botaoPausar.style.display = "block";

            // 3. Inicia o temporizador para pausar a música após 7 segundos.
            temporizador = setTimeout(function() {
                audio.pause();
                console.log("Áudio pausado automaticamente.");
                botaoPausar.style.display = "none";
            }, 7000);
        }

        // 4. Remove o ouvinte de evento para que o áudio só comece uma vez.
        document.removeEventListener('scroll', comecarAudioComScroll);
    });

    // 5. Adiciona a funcionalidade de pausa ao botão
    botaoPausar.addEventListener('click', function() {
        audio.pause();
        
        // Cancela o temporizador de 7 segundos se o usuário parar a música.
        clearTimeout(temporizador);
        botaoPausar.style.display = "none";
        console.log("Áudio pausado pelo usuário.");
    });
};