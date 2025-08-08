// Mapeamento dos botões de abrir para seus containers.
const buttonsAndContainers = [
    { buttonId: 'botao1', containerClass: '.container-d' },
    { buttonId: 'botao2', containerClass: '.container-amendoin' }
];

// Adiciona o evento de clique para os botões que abrem os pop-ups.
buttonsAndContainers.forEach(({ buttonId, containerClass }) => {
    const openButton = document.getElementById(buttonId);
    const container = document.querySelector(containerClass);

    if (openButton && container) {
        // Ao clicar, sempre remove a classe 'hide' e adiciona 'no-scroll'.
        openButton.addEventListener('click', () => {
            container.classList.remove('hide');
            document.body.classList.add('no-scroll');
        });
    }
});

// Adiciona o evento de clique para todos os botões de fechar.
const closeButtons = document.querySelectorAll('.btn-close');

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        const container = closeButton.closest('.container-d, .container-amendoin');
        if (container) {
            // Ao clicar, sempre adiciona a classe 'hide' e remove 'no-scroll'.
            container.classList.add('hide');
            document.body.classList.remove('no-scroll');
        }
    });
});