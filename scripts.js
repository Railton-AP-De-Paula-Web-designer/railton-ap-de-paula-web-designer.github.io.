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

// 5. Autoplay - Faz o carrossel girar sozinho
const autoplayInterval = 3000
let autoplayTimer

function startAutoplay() {
      // Inicia um novo timer que chama a função de avanço
      autoplayTimer = setInterval(()=> {
        moveToSlide(currentSlideIndex +1)

      }, autoplayInterval)
}
function stopAutoplay() {
    //parar o time
    clearInterval(autoplayTimer)
}
//inicia a animação quando a pagina carrega
 startAutoplay();
 //pausa a animação quando o mouse esta sobre o carrosel
 slidesContainer.addEventListener('mouseover', stopAutoplay)

 //reinicia a animação quando o mause sai do carrosel
 slidesContainer.addEventListener('mouseout', startAutoplay)




 document.addEventListener('DOMContentLoaded', function () {
    // Criar botão "Subir"
    const scrollUp = document.createElement('button');
    scrollUp.classList.add('scroll-btn', 'scroll-up');
    scrollUp.innerHTML = '&#x25B2;'; // Seta para cima (▲)

    // Criar botão "Descer"
    const scrollDown = document.createElement('button');
    scrollDown.classList.add('scroll-btn', 'scroll-down');
    scrollDown.innerHTML = '&#x25BC;'; // Seta para baixo (▼)

    // Adicionar os botões no body
    document.body.appendChild(scrollUp);
    document.body.appendChild(scrollDown);

    // Rola suavemente até o título principal da página (h1)
    scrollUp.addEventListener('click', () => {
        const mainTitle = document.querySelector('h1');
        if (mainTitle) {
            mainTitle.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Rola suavemente até o título "danone" (h2)
    scrollDown.addEventListener('click', () => {
        const allH2 = document.querySelectorAll('h2');
        let danoneTitle = null;
        for (const h2 of allH2) {
            if (h2.textContent.toLowerCase().includes('danone')) {
                danoneTitle = h2;
                break;
            }
        }
        if (danoneTitle) {
            danoneTitle.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Lógica para esconder ambos os botões
    window.addEventListener('scroll', () => {
        // Esconde o botão "subir" quando está no topo
        if (window.scrollY > 100) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }

        // Esconde o botão "descer" quando está no final da página
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
        if (atBottom) {
            scrollDown.style.display = 'none';
        } else {
            scrollDown.style.display = 'block';
        }
    });

    // Deixa os botões visíveis no início
    scrollUp.style.display = 'none';
    scrollDown.style.display = 'block';
});