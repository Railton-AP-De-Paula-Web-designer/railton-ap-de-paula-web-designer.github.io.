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

// 1. Seleciona os elementos do HTML que vamos usar
const slidesContainer = document.querySelector('.carrosel-slides');
const prevButton = document.querySelector('.carrosel-button.prev');
const nextButton = document.querySelector('.carrosel-button.next');
const indicatorsContainer = document.querySelector('.carrosel-indicators');
const slides = slidesContainer.querySelectorAll('.carrosel-item');

let currentSlideIndex = 0; // Começa no primeiro slide (índice 0)

// 2. Cria os pontinhos indicadores dinamicamente
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carrosel-dot');
    if (index === 0) {
        dot.classList.add('active'); // O primeiro pontinho já começa ativo
    }
    dot.addEventListener('click', () => {
        moveToSlide(index); // Faz o carrossel ir para o slide quando o pontinho é clicado
    });
    indicatorsContainer.appendChild(dot);
});

const dots = indicatorsContainer.querySelectorAll('.carrosel-dot');

// 3. Função principal que move o carrossel
function moveToSlide(index) {
    // Garante que o índice não saia dos limites
    if (index >= slides.length) {
        index = 0; // Volta para o primeiro slide
    } else if (index < 0) {
        index = slides.length - 1; // Vai para o último slide
    }

    // Calcula a posição do slide e move o carrossel
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

    // Atualiza a classe 'active' para o pontinho correto
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentSlideIndex = index;
}

// 4. Adiciona os eventos de clique nos botões
nextButton.addEventListener('click', () => {
    moveToSlide(currentSlideIndex + 1);
});

prevButton.addEventListener('click', () => {
    moveToSlide(currentSlideIndex - 1);
});