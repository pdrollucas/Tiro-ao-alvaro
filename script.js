var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var paleta = document.querySelector('input');

pincel.fillStyle= 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

var desenha = false;

tela.onmousemove = function(evento){
    if(desenha){
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
    
        if(evento.shiftKey && raio <= 40){
                raio = raio + 10;
        }
    
        if(evento.altKey && raio >= 10){
                raio = raio -5
        }
    
        pincel.fillStyle= paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
    }
} 

tela.onmousedown = function(){
    desenha = true;
}
tela.onmouseup = function(){
    desenha = false;
}

function mudaCor (){
    corAtual++;
    if(corAtual >= cores.length){
        corAtual = 0;
    } 
    return false
}

tela.oncontextmenu = mudaCor;

// jogo

var raio = 10;

function desenhaCirculo(x, y, cor, raio){
    pincel.fillStyle=cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.fillStyle="lightgray";
    pincel.fillRect(0, 0, 600, 400);
}

function desenhaAlvo (x, y){
    desenhaCirculo(x, y, paleta.value, raio + 20);
    desenhaCirculo(x, y, 'white', raio + 10);
    desenhaCirculo(x, y, paleta.value, raio);
}

function sorteiaPosicao(maximo){
     return Math.floor(Math.random() * maximo);
}

var xAleatorio;
var yAleatorio;

function atualizaTela(){
    limpaTela();
    xAleatorio = sorteiaPosicao(540);
    if(xAleatorio < 60){
        xAleatorio = 60;
    }

    yAleatorio = sorteiaPosicao(340);
    if(yAleatorio < 60){
        yAleatorio = 60;
    }

    desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 800);

function dispara(evento){
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x > xAleatorio - raio) && (x < xAleatorio + raio) && (y > yAleatorio - raio) && (y < yAleatorio + raio)){
        alert("acertou!");
    } else if ((x > xAleatorio - (raio + 20)) && (x < xAleatorio + (raio + 20)) && (y > yAleatorio - (raio + 20)) && (y < yAleatorio + (raio + 20))){
        alert("foi por pouco!") 
    } else {
        alert("errou!")
    }
}

tela.onclick = dispara;

// MUSICA

const button = document.querySelector('button');

button.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.play();
})