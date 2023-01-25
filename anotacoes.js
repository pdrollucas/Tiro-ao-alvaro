/* Bandeira do Brasil

pincel.fillStyle= "green";
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle="yellow";
pincel.beginPath();
pincel.moveTo(300, 50);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
pincel.fill();

pincel.fillStyle="yellow";
pincel.beginPath();
pincel.moveTo(300, 350);
pincel.lineTo(550, 200);
pincel.lineTo(50, 200);
pincel.fill();

pincel.fillStyle="darkblue";
pincel.beginPath();
pincel.arc(300, 200, 90, 0, 2 * 3.14);
pincel.fill();
*/


/* Quadrados na tela com função

function desenhaQuadrado(x, y, cor){
    pincel.fillStyle= cor;
    pincel.fillRect(x, y, 50, 50);

    pincel.strokeRect(x, y, 50, 50);
}

/* um forma de fazer
var x = 0

while(x < 600){
    desenhaQuadrado(x, 0, "green");
    x = x + 50;
}
*/
 
/* outra forma de fazer
for(var x = 0; x < 600; x = x + 50){
    desenhaQuadrado(x, 0, "green");
    desenhaQuadrado(x, 50, "blue");
}
*/
