// Video Agustina Maldonado: https://youtu.be/iY4jG5u368s
// Video Martina Rosales: https://www.youtube.com/watch?v=LpISnTnUVgQ

let imgFondo = [];

// variable global para saber en que pantalla estoy 
let pantalla; 

let miSonidoMusica;
let miSonidoClic;

function preload() {
  
// for para carga de imagenes 
for (let i =0; i<17; i++) { 
  
imgFondo[i] = loadImage ("./data/imagen"+ nf (i,2) + ".png");
  }
 //carga los archivos en las variables
  miSonidoClic = loadSound("./data/botonclick.mp3");
  miSonidoMusica = loadSound("./data/musica.mp3");
 }

function setup() { 
 createCanvas (640,480);
// valor inicial  
pantalla = 0 
} 

function draw() { 
  
background (100,100,255);
  
//mostrar pant de inicio
if (pantalla===0){ 
  mostrarPantallaInicio ();

//pantalla 1 + boton continuar
} else if (pantalla==1){
   image (imgFondo[1], 0, 0, width, height);
    push ();
   fill (100,50,150,150);
   rectMode(CENTER);
   rect(width/2, height/2+50, width, 120);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (14);
   text ("Hermes desciende con la manzana. \n Tu juicio decidirá la paz... o la guerra. \n El peso del destino es frío en tus manos.", width/2, height/2+40);
   pop();
   
 mostrarBoton ("CONTINUAR", 320, 400, 150,30);
 
 
//pantalla 2 + botones de opciones hera atenea y afrodita
} else if (pantalla==2){
//pantalla 2 
image (imgFondo[2], 0, 0, width, height); 
push ();
 fill (100,50,150,150);
   rect ( 0, 0, width, height/5);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16);
   text ("Frente a ti, Hera, Atenea y Afrodita. \n Cada una irradia un poder. La manzana pesa. \n Debes elegir:", width/2, height/2-200);
   pop();

mostrarBoton ("HERA", 320, 350, 150,30);
mostrarBoton ("ATENEA", 320, 400, 150,30);
mostrarBoton ("AFRODITA", 320, 450, 150,30);

} else if (pantalla==3){ //pantalla hera
//pantalla 3
push();
image (imgFondo[3], 0, 0, width, height); 
fill (100,50,150,150);
   rect ( 0, 0, width, height/5);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16);
   text ("Hera ofrece: Poder sobre toda Asia. \n Serás un rey emperador, temido y eterno. \n ¿Aceptarás el poder o lo rechazarás?", width/2, height/2-200);
   pop();
   
mostrarBoton ("ACEPTAR", 150, 400, 150,30);
mostrarBoton ("RECHAZAR", 480, 400, 150,30);

} else if (pantalla==4){ //pantalla atenea
//pantalla 4
image (imgFondo[4], 0, 0, width, height); 
push();
fill (100,50,150,150);
   rect ( 0, 0, width, height/5);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (14);
   text ("Atenea ofrece: Victoria en cada batalla y gloria como el estratega más sabio. \n ¿Aceptarás su ayuda o desconfiarás de su palabra?", width/2, height/2-200);
   pop();
   
mostrarBoton ("ACEPTAR", 150, 400, 150,30);
mostrarBoton ("RECHAZAR", 480, 400, 150,30);

} else if (pantalla==5){  //pantalla afrodita
//pantalla 5
image (imgFondo[5], 0, 0, width, height);
push();
rectMode (CENTER);
fill (100,50,150,150);
   rect(width/2, height/2+60, width, 100); 
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (14); 
   text ("Afrodita sonríe: Te ofrezco el amor de Helena de Esparta, \n la más hermosa. Ella está casada.  \n ¿Te llevarás por la pasión, a costa de la guerra?", width/2, height/2+50);
   pop();
   
mostrarBoton ("ACEPTAR", 150, 400, 150,30);
mostrarBoton ("RECHAZAR", 480, 400, 150,30);

} else if (pantalla==6){ //monarca
//pantalla 6 
image (imgFondo[6], 0, 0, width, height);
push();

   fill (100,50,150,150);
   rectMode (CENTER);
   rect(width/2, height/2+50, width, 80);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16);
   text ("Elegiste a Hera. Te hiciste rey poderoso. \n  Unificaste Asia, pero el poder absoluto te trajo soledad y envidia.", width/2, height/2+45);
   pop();
   
 mostrarBoton("CRÉDITOS", 320, 350, 150, 30); 
mostrarBoton ("VOLVER AL INICIO", 320, 400, 180,30); 

} else if (pantalla==7){ //defensor de troya
//pantalla 7
image (imgFondo[7], 0, 0, width, height);
push();

   fill (100,50,150,150);
   rectMode (CENTER);
   rect(width/2, height/2+50, width, 80);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16); 
   text ("Aceptas la sabiduría. Atenea toca tu frente, te inunda el conocimiento. \n  Eres ahora el escudo y defensor de tu ciudad.", width/2, height/2+45);
   pop();
 
 mostrarBoton ("CONTINUAR", 320, 400, 150,30);

} else if (pantalla==8){ // el desructor opcion aceptar afrodita
//pantalla 8
image (imgFondo[8], 0, 0, width, height); 
push ();
 fill (100,50,150,150);
   rect ( 0, 0, width, height/5);
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16);
   text ("Elegiste a Afrodita. Obtuviste el amor, pero desataste la Guerra de Troya. \n Tu pasión fue la causa de la destrucción y ruina.", width/2, height/2-200);
   pop();
   
mostrarBoton("CRÉDITOS", 320, 350, 150, 30); 
mostrarBoton ("VOLVER AL INICIO", 320, 400, 180,30); 

} else if (pantalla==9){  //pastoreo
//pantalla 9
image (imgFondo[9], 0, 0, width, height);
push();

   fill (100,50,150,150);
   rectMode (CENTER);
   rect(width/2, height/2+50, width, 100);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16);
   text ("Rechazas la oferta. Vuelves a tu vida sencilla, con paz.\n Te conviertes en pastor, pero con la duda eterna de lo que pudo ser.", width/2, height/2+50);
   pop();
 mostrarBoton ("CONTINUAR", 320, 400, 150,30);
 
 } else if (pantalla==10){ //pastoreo 2
//pantalla 10
image (imgFondo[10], 0, 0, width, height);

 } else if (pantalla==11){ //castigo olimpico
//pantalla 11
image (imgFondo[11], 0, 0, width, height);
push();

   fill (100,50,150,150);
   rectMode (CENTER);
   rect(width/2, height/2+50, width, 80);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16); 
   text ("Tu desconfianza enfurece a Atenea: Un mortal que duda no merece el favor, sentencia. \n  Su ira te gana un poderoso enemigo.", width/2, height/2+45);
   pop();
 mostrarBoton ("CONTINUAR", 320, 400, 150,30);

 } else if (pantalla==12){ //destierro voluntario
//pantalla 12
image (imgFondo[12], 0, 0, width, height);
push ();
 fill (100,50,150,150);
   rect ( 0, 0, width, height/5);
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16);
   text ("Decides tomar a Helena. Zarpas en secreto, abandonando tu tierra. \n  Vas cegado por el amor, ignorando las advertencias del mar.", width/2, height/2-200);
   pop();
mostrarBoton("CRÉDITOS", 320, 350, 150, 30); 
mostrarBoton ("VOLVER AL INICIO", 320, 400, 180,30); 

 } else if (pantalla==13){ // el olvidado
//pantalla 13
image (imgFondo[13], 0, 0, width, height);
push();

   fill (100,50,150,150);
   rectMode (CENTER);
   rect(width/2, height/2+50, width, 80);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16);
   text ("Tu vida transcurre en paz. Mueres como un pastor desconocido.\n  No hubo gloria ni tragedia. \n  Tu destino fue simplemente ser olvidado.", width/2, height/2+30);
   pop();
mostrarBoton("CRÉDITOS", 320, 350, 150, 30); 
mostrarBoton ("VOLVER AL INICIO", 320, 400, 180,30); 

 } else if (pantalla==14){ //el castigo
//pantalla 14
image (imgFondo[14], 0, 0, width, height); 
push ();
 fill (100,50,150,150);
   rect ( 0, 0, width, height/5);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16); 
   text ("Por ofender a los dioses, tu destino se sella. \n Vives una vida marcada por la desgracia. \n Desafiar al Olimpo solo trajo desolación.", width/2, height/2-200);
   pop();
mostrarBoton("CRÉDITOS", 320, 350, 150, 30); 
mostrarBoton ("VOLVER AL INICIO", 320, 400, 180,30); 

 } else if (pantalla==15){ //el heroe
//pantalla 15
image (imgFondo[15], 0, 0, width, height);
push();

   fill (100,50,150,150);
   rectMode (CENTER);
   rect(width/2, height/2+50, width, 80);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (16); 
   text ("Elegiste a Atenea. Te hiciste un estratega sin igual.\n Fuiste respetado y temido. Recordado como un héroe, defensor de Troya.", width/2, height/2+45);
   pop();
mostrarBoton("CRÉDITOS", 320, 350, 150, 30); 
mostrarBoton ("VOLVER AL INICIO", 320, 400, 180,30); 

 } else if (pantalla==16) { //muestra funcion mostrarPantallaCreditos 
mostrarPantallaCreditos ();
 } 
 //boton de sonido de fondo:
  fill(255, 0, 0, 150);
  ellipse(40, 40, 60, 60);
  fill(255);
  textAlign(CENTER, CENTER);
  text("MÚSICA", 40, 40);
  //mapeamos el sonido segun la posicion del mouse
  if ( miSonidoMusica.isPlaying() ) {
    let paneo = map(mouseX, 0, width, -1, 1);
    paneo = constrain( paneo, -1, 1 );
    miSonidoMusica.pan( paneo );
    //console.log( paneo);
    //boton de sonido de fondo:
  
    }
} 


function mousePressed() { 
   if ( dist(mouseX, mouseY, 40, 40)<30 ) {

    //esto dipara el sonido de clic si estoy dentro del boton
    miSonidoClic.play();

    //clic en el boton de iniciar parar musica:
    if ( miSonidoMusica.isPlaying() ) {
      miSonidoMusica.pause();
    } else {
      miSonidoMusica.loop();
      miSonidoMusica.setVolume(0.1);
    }
  }

  // pantalla incio
  if (pantalla === 0) {
    if (colisionRectangular(320, 400, 150, 30)) { // boton COMENZAR
      miSonidoClic.play();
      pantalla = 1;
    }

  } else if (pantalla === 1) {
    if (colisionRectangular(320, 400, 150, 30)) { // boton CONTINUAR
     miSonidoClic.play();
      pantalla = 2;
    }

  } else if (pantalla === 2) {
    if (colisionRectangular(320, 350, 150, 30)) {
     miSonidoClic.play();
    pantalla = 3; // HERA
    } else if (colisionRectangular(320, 400, 150, 30)) {
     miSonidoClic.play();
    pantalla = 4; // ATENEA
    }else if (colisionRectangular(320, 450, 150, 30)) {
     miSonidoClic.play();
    pantalla = 5; // AFRODITA
    }

  //Pantalla Hera
  } else if (pantalla === 3) {
    if (colisionRectangular(150, 400, 150, 30)){
       miSonidoClic.play();
    pantalla = 6; // ACEPTAR
  }  else if (colisionRectangular(480, 400, 150, 30)){
   miSonidoClic.play();
  pantalla = 9; // RECHAZAR
}
  //Pantalla Atenea
  } else if (pantalla === 4) {
    if (colisionRectangular(150, 400, 150, 30)){
        miSonidoClic.play();
    pantalla = 7; // ACEPTAR
   }  else if (colisionRectangular(480, 400, 150, 30)){
     miSonidoClic.play();
   pantalla = 11; // RECHAZAR
}
  // Pant Afrodita
  } else if (pantalla === 5) {
    if (colisionRectangular(150, 400, 150, 30)) {
       miSonidoClic.play();
    pantalla = 8; // ACEPTAR
   } else if (colisionRectangular(480, 400, 150, 30)) {
      miSonidoClic.play();
    pantalla = 12; // RECHAZAR
}
  } else if (pantalla === 6) {
    if (colisionRectangular(320, 350, 150, 30)){
      miSonidoClic.play();
    pantalla = 16; // CRÉDITOS
   }  else if (colisionRectangular(320, 400, 180, 30)){
     miSonidoClic.play();
    pantalla = 0; // VOLVER AL INICIO
    } 
  } else if (pantalla === 7) {
    if (colisionRectangular(320, 400, 150, 30)) {
     miSonidoClic.play();
    pantalla = 15; // CONTINUAR
 } 
  } else if (pantalla === 8) {
    if (colisionRectangular(320, 350, 150, 30))  {
     miSonidoClic.play();
    pantalla = 16; // CRÉDITOS
    }else if (colisionRectangular(320, 400, 180, 30))  {
     miSonidoClic.play();
    pantalla = 0; // VOLVER AL INICIO
    }
  } else if (pantalla === 9) {
    if (colisionRectangular(320, 400, 150, 30)){
       miSonidoClic.play();
    pantalla = 13; // CONTINUAR
 }
  } else if (pantalla === 11) {
    if (colisionRectangular(320, 400, 150, 30)) {
      miSonidoClic.play();
    pantalla = 14; // CONTINUAR
}
  } else if (pantalla === 12) {
    if (colisionRectangular(320, 350, 150, 30)){ 
       miSonidoClic.play();
    pantalla = 16; // CRÉDITOS
   } else if (colisionRectangular(320, 400, 180, 30)) { 
      miSonidoClic.play();
    pantalla = 0; // VOLVER AL INICIO
   } 
  } else if (pantalla === 13) {
    if (colisionRectangular(320, 350, 150, 30)) {
       miSonidoClic.play();
      pantalla = 16; // CRÉDITOS
      
       }  else if (colisionRectangular(320, 400, 180, 30)){
        miSonidoClic.play();
       pantalla = 0; // VOLVER AL INICIO
   } 
  } else if (pantalla === 14) {
    if (colisionRectangular(320, 350, 150, 30)) {
     miSonidoClic.play();
    pantalla = 16; // CRÉDITOS
     }else if (colisionRectangular(320, 400, 180, 30)) {
     miSonidoClic.play();
    pantalla = 0; // VOLVER AL INICIO
     }
   
  } else if (pantalla === 15) {
    if (colisionRectangular(320, 350, 150, 30)){
     miSonidoClic.play();
    pantalla = 16; // CRÉDITOS
   } else if (colisionRectangular(320, 400, 180, 30)){
     miSonidoClic.play();
    pantalla = 0; // VOLVER AL INICIO
    }
  // pantalla creditos
  } else if (pantalla === 16) {
    if (colisionRectangular(320, 420, 180, 35)){
      miSonidoClic.play();
    pantalla = 0; // VOLVER AL INICIO
     }
  }
}
function keyPressed() {

  let volActual =  miSonidoMusica.getVolume();
  if ( key ==='+' ) {
    volActual+=0.1;
  }
  if ( key ==='-' ) {
    volActual-=0.1;
  }
  volActual = constrain( volActual, 0, 1);
  miSonidoMusica.setVolume(volActual);
}
