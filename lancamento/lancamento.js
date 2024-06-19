document.addEventListener("DOMContentLoaded", () => {
    // Elementos de lançamento
    const lancamentos = document.querySelectorAll('.lancamento');
    const btnMais = document.querySelector('.mais__lancamentos-btn');
    const btnMenos = document.querySelector('.menos__lancamentos-btn');
    const btnMaisFotos = document.querySelectorAll('.mais-detalhes');
    const fotosExtra = document.querySelectorAll('.lista_img_destaque');
    let lancamentosContainer = document.querySelector ('.lancamentos__container')

    if (lancamentos.length > 0) {
        const lancamentosOcultar = Array.from(lancamentos).slice(1, 4);

        const toggleDisplay = (elements, show) => {
            elements.forEach(element => {
                if (show) {
                    element.classList.remove('hidden');
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                    element.classList.add('hidden');
                }
            });
        };

        toggleDisplay(lancamentosOcultar, false);

        if (btnMais && btnMenos) {
            btnMais.addEventListener('click', () => {
                toggleDisplay(lancamentosOcultar, true);
                btnMais.style.display = 'none';
                btnMenos.style.display = 'flex';
            });

            btnMenos.addEventListener('click', () => {
                toggleDisplay(lancamentosOcultar, false);
                btnMais.style.display = 'flex';
                btnMenos.style.display = 'none';
                lancamentosContainer.style.display = 'none'
            });
        }
    }

    /* Mais fotos */
    btnMaisFotos.forEach((btn, index) => {
        const fotos = fotosExtra[index];
        
        // Defina o estilo inicial das fotos
        fotos.style.display = 'none';

        btn.addEventListener('click', () => {
            if (fotos.style.display === 'none') {
                fotos.style.display = 'flex';
                btn.innerHTML = 'Fechar';
            } else {
                fotos.style.display = 'none';
                btn.innerHTML = 'Mais fotos';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o elemento e o botão pelo seletor de classe
    const lancamentosContainer = document.querySelector('.lancamentos__container');
    const maisLancamentosBtn = document.querySelector('.mais__lancamentos-btn');
    
    // Define o display inicial como 'none'
    lancamentosContainer.style.display = 'none';
    
    // Adiciona um ouvinte de evento ao botão
    maisLancamentosBtn.addEventListener('click', () => {
        // Altera o display para 'flex' quando o botão for clicado
        lancamentosContainer.style.display = 'flex';
    });
});
