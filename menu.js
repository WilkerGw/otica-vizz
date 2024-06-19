// MOSTRA MENU
let menu = document.getElementById ('menu');
let btnMenu = document.getElementById ('btnMenu');
let listaSol = document.getElementById ('listaSol');
let subSol = document.getElementById ('subSol');
let listaGrau = document.getElementById ('listaGrau');
let subGrau = document.getElementById ('subGrau');
let listaExame = document.getElementById ('listaExame');
let subAgendar = document.getElementById ('subAgendar');
let listaContato = document.getElementById ('listaContato');
let subWhats = document.getElementById ('subWhats');
let listaEndereco = document.getElementById ('listaEndereco');
let subMaps = document.getElementById ('subMaps');
let iconesHeader = document.getElementById('imgLogo')
let imgCarrinho = document.getElementById ('imgCarrinho')
let imgLupa = document.getElementById ('imgLupa')
let imgFecha = document.getElementById ('imgFecha')

btnMenu.onclick = function () {
    mostraMenu();
}

imgFecha.onclick = function () {
    fechaMenu();
}

function mostraMenu() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        btnMenu.style.display = 'none';
        imgLogo.style.display = 'none';
        imgCarrinho.style.display = 'none';
        imgLupa.style.display = 'none';
        imgFecha.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function fechaMenu() {
    if (menu.style.display === 'block' || menu.style.display === 'block') {
        menu.style.display = 'none';
        btnMenu.style.display = 'block'
        imgLogo.style.display = 'block'
        imgCarrinho.style.display = 'block'
        imgLupa.style.display = 'block'
        imgFecha.style.display = 'none'
    }
}

listaSol.onclick = function () {
    mostraSubmenuSol ();
}

function mostraSubmenuSol() {
    if (subSol.style.display === 'none' || subSol.style.display === ''){
        subSol.style.display = 'block';
    } else {
        subSol.style.display = 'none';
    }
}

listaGrau.onclick = function () {
    mostraSubmenuGrau ();
}

function mostraSubmenuGrau() {
    if (subGrau.style.display === 'none' || subGrau.style.display === ''){
        subGrau.style.display = 'block';
    } else {
        subGrau.style.display = 'none';
    }
}

listaExame.onclick = function () {
    mostraAgendar ();
}

function mostraAgendar () {
    if (subAgendar.style.display === 'none' || subAgendar.style.display === ''){
        subAgendar.style.display = 'block';
    } else {
        subAgendar.style.display = 'none';
    }
}

listaContato.onclick = function () {
    mostraWhats ();
}

function mostraWhats () {
    if (subWhats.style.display === 'none' || subWhats.style.display === ''){
        subWhats.style.display = 'block';
    } else {
        subWhats.style.display = 'none';
    }
}

listaEndereco.onclick = function () {
    mostraMaps ();
}

function mostraMaps () {
    if (subMaps.style.display === 'none' || subMaps.style.display === ''){
        subMaps.style.display = 'block';
    } else {
        subMaps.style.display = 'none';
    }
}



