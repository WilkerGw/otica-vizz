let msgEstoque = document.querySelector('.p__disponivel');
let qtdEstoque = 1;

function estoque() {
    if (qtdEstoque < 1) {
        msgEstoque.innerText = 'Não disponível';
        msgEstoque.style.color = 'red'
        msgEstoque.style.fontWeight = 'bold'
    }else{
        msgEstoque.innerText = 'Produto disponível';
    }
}

estoque();