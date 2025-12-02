let objJuego;
let sonidoFondo;

let imgInicio, imgTutorial, imgJuego, imgGanaste, imgPerdiste, imgCreditos;
let imgParis, imgRayo, imgManzana;

function preload() {
  imgInicio = loadImage("data/INICIO.PNG");
  imgTutorial = loadImage("data/TUTORIAL.PNG");
  imgJuego = loadImage("data/JUEGO.PNG");
  imgGanaste = loadImage("data/VICTORIA.PNG");
  imgPerdiste = loadImage("data/DERROTA.PNG");
  imgCreditos = loadImage("data/CREDITOS.PNG");

  imgParis = loadImage("data/PARIS.PNG");
  imgRayo = loadImage("data/RAYO.PNG");
  imgManzana = loadImage("data/MANZANA.PNG");


  sonidoFondo = loadSound("data/SONIDO.mp3");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
}

function draw() {
  objJuego.dibujar();
}

function mousePressed() {
  objJuego.manejarClic();
}

function keyPressed() {
  objJuego.manejarTecla(keyCode);
}
