const canvas = document.getElementById("teste");
const ctx = canvas.getContext("2d");

function desenharQuadrado(x1, x2, y1, y2, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x1,y1,x2,y2);
    // ctx.closePath();
}

function desenharCirculo(x, y ,r, ang1, ang2, cor, borda, upper=true) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.strokeStyle = borda
    ctx.arc(x,y,r,ang1,ang2,upper);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function desenharArco(x, y ,r, ang1, ang2, cor, upper=true) {
    ctx.beginPath();
    ctx.strokeStyle = cor
    ctx.arc(x,y,r,ang1,ang2,upper);
    ctx.stroke();
    ctx.closePath();
}

function desenharLinha(x1, x2, y1, y2, cor) {
ctx.beginPath();
ctx.strokeStyle = cor;
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke();
}

function escrever(x, y, texto, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.strokeStyle = cor;
    ctx.font = "15px Arial"
    ctx.fillText(texto,x,y);
    ctx.closePath();
}

desenharQuadrado(0,55,0,55, "blue");

desenharQuadrado(245,55,0,55, "red");

desenharQuadrado(0,25,125,25, "#00ffff");
desenharQuadrado(0,25,150,25, "#00ffff");

desenharQuadrado(110,40,150,40, "red");

desenharQuadrado(0,25,275,25, "yellow");
desenharQuadrado(0,25,250,25, "yellow");
desenharQuadrado(25,25,275,25, "yellow");

desenharQuadrado(250,25,275,25, "#000");
desenharQuadrado(275,25,250,25, "#000");
desenharQuadrado(275,25,275,25, "#000");

desenharQuadrado(250,50,125,25, "#00ffff");
desenharQuadrado(250,50,150,25, "#00ffff");

desenharLinha(0,150,0,150, "blue");
desenharLinha(255,150,45,150, "red");
desenharLinha(300,0,150,150, "green");
desenharLinha(150,0,150,40000, "blue");

desenharCirculo(150,115,15,0,2*Math.PI,"#00ffff","blue");
desenharCirculo(70,210,15,0,2*Math.PI,"yellow","green");
desenharCirculo(230,210,15,0,2*Math.PI,"yellow","green");
desenharCirculo(150,300,50,0,Math.PI,"#00ffff","green");

desenharArco(150,150,60,0,Math.PI,"green");
desenharArco(165,150,65,1.7*Math.PI,0,"green",false);
desenharArco(135,150,65,1*Math.PI,1.3*Math.PI,"green",false);
desenharArco(150,300,85,1*Math.PI,1.5*Math.PI,"green", false);
desenharArco(150,300,65,0,1.5*Math.PI,"green");

escrever(127, 50, "Canvas", "#000000");