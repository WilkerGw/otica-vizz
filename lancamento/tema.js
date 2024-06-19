let temaCinzaBtn = document.querySelector('.modo__cinza__btn');
let fundoImagem = document.querySelector('.lancamento__img');

temaCinzaBtn.addEventListener('click', () => {
    if (fundoImagem.style.backgroundColor == 'rgb(16, 109, 167)') {
        fundoImagem.style.backgroundColor = '#A7A7A7';
    }
});
