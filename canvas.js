const canvas = document.getElementById("teste");
const ctx = canvas.getContext("2d");

function desenharQuadrado(x1, x2, y1, y2, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x1,y1,x2,y2);
    // ctx.closePath();
}

function desenharArco(x, y ,r, ang1, ang2, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor
    ctx.arc(200,200,50,ang1,ang2);
    ctx.closePath();
}

function desenharLinha(x1, x2, y1, y2, cor) {
ctx.beginPath();
ctx.strokeStyle = cor;
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke();
}

desenharQuadrado(0,55,0,55, "blue");

desenharQuadrado(245,55,0,55, "red");

desenharQuadrado(0,25,125,25, "#00ffff");
desenharQuadrado(0,25,150,25, "#00ffff");

desenharQuadrado(110,40,170,40, "red");

desenharQuadrado(0,25,275,25, "yellow");
desenharQuadrado(0,25,250,25, "yellow");
desenharQuadrado(25,25,275,25, "yellow");

desenharQuadrado(250,25,275,25, "#000");
desenharQuadrado(275,25,250,25, "#000");
desenharQuadrado(275,25,275,25, "#000");

desenharQuadrado(250,50,125,25, "#00ffff");
desenharQuadrado(250,50,150,25, "#00ffff");

desenharLinha(0,150,0,150, "blue")
desenharLinha(255,150,45,150, "red")
desenharLinha(300,0,150,150, "green")
desenharLinha(150,0,150,40000, "blue")

// desenharArco(10,10,10,10,10,"black")