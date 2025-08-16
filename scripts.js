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