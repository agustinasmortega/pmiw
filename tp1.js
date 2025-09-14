// trabajo práctico 1  - agustina maldonado ortega - legajo 122773/9 

// PMIW comisión 3 - Prof. David Bedoian

// link a la explicación: https://youtu.be/EIpsbOIsHKY

// variables globales

let obra;

let ancho = 187;
let alto = 190;
let anchoDos = 95;
let altoDos = 85;
let anchoP = 2;
let altoP = 2;

let animarCentro = false;
let colorFondo = 255;
let tiempoInicio;

// f que no retorna valor
function dibujarObra(x, y, a, b, aInt, bInt){
  rect(x, y, a, b);
  rect(x + (a - aInt)/2, y + (b - bInt)/2, aInt, bInt);
}

// f que si retorna
function calcularEscala(x, y){
  let d = dist(mouseX, mouseY, x, y);
  return map(d, 0, 200, 1.5, 1);
}

// f detecta cursor
function mouseDentro(x, y, w, h){
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function preload() {
  obra = loadImage("data/obra.png");
}

function setup() {
 createCanvas(800, 400);
  tiempoInicio = millis();

  
}


function draw() {
background(colorFondo);

  // obra óptica original y de referencia (izquierda)
  let imagenAlto = height;
  let imagenAncho = obra.width * (imagenAlto / obra.height);
  image(obra, 0, 0, imagenAncho, imagenAlto);

  // tp 3 (derecha)
  let startX = (400 - 2 * ancho) / 2 + 400;
  let startY = (height - 2 * alto) / 2;

  stroke(0);
  strokeWeight(25);
  noFill();

  // cuadrado - uso de ciclo FOR anidado (y condicionales)
  for (let i = 0; i < 2; i++){
    for (let j = 0; j < 2; j++){
      let x = startX + i * ancho;
      let y = startY + j * alto;

      if (mouseDentro(x, y, ancho, alto)) {
        fill(255, 0, 0, 100);
      } else {
        noFill();
      }
      dibujarObra(x, y, ancho, alto, anchoDos, altoDos);
    }
  }

  // centro del cuadrado central
  let centroX = startX + ancho;
  let centroY = startY + alto;

  // chequeamos si el mouse está dentro del cuadrado central
  animarCentro = mouseDentro(centroX - ancho / 2, centroY - alto / 2, ancho, alto);

  // uso de condicionales: if - else
  if (animarCentro) {
    let escala = calcularEscala(centroX, centroY);

    noStroke();
    fill(255);
    rect(centroX - (ancho * escala) / 2, centroY - (alto * escala) / 2, ancho * escala, alto * escala);

    stroke(0);
    strokeWeight(25);
    fill(random(255), random(255), random(255), 100);
    dibujarObra(centroX - (ancho * escala) / 2, centroY - (alto * escala) / 2, ancho * escala, alto * escala, anchoDos * escala, altoDos * escala);
    rect(centroX - anchoP / 2, centroY - altoP / 2, anchoP * escala, altoP * escala);
  } else {
    noStroke();
    fill(255);
    rect(centroX - ancho / 2, centroY - alto / 2, ancho, alto);

    stroke(0);
    strokeWeight(25);
    noFill();
    dibujarObra(centroX - ancho / 2, centroY - alto / 2, ancho, alto, anchoDos, altoDos);
    rect(centroX - anchoP / 2, centroY - altoP / 2, anchoP, altoP);
  }

  // cambiar de fondo cada 10 segundos
  if (millis() - tiempoInicio > 10000) {
    colorFondo = color(random(255), random(255), random(255));
    tiempoInicio = millis();
  }
}

function mousePressed(){
  colorFondo = color(random(255), random(255), random(255));

}
