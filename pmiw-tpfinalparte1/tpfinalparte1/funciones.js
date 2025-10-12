function mostrarPantallaInicio (){
   
 //imagen del fondo
   
   push ();
   image (imgFondo[0], 0, 0, width, height);
   fill (100,50,150,150);
   rect ( 0, 0, width, height/4);
 
   fill (255);
   textAlign (CENTER, TOP);
   textSize (12);
   text ("Eris arrojó la manzana: Para la más bella. \nHera, Atenea y Afrodita reclamaron.\nZeus eligió a Paris, príncipe pastor, para juzgar.", width/2, height/20);
   pop();
 mostrarBoton ("COMENZAR", 320, 400, 150,30);
   } 
   
   
   
   function mostrarPantallaCreditos (){
    // Fondo de la pantalla
  push ();
   image (imgFondo[16], 0, 0, width, height);
  // Texto de créditos
  fill(0);
  textAlign(CENTER, TOP);
  textSize(22);
  text("CRÉDITOS", width / 2, height * 0.2);

  textSize(14);
  text( "Una producción de: Agustina Maldonado y Martina Rosales\n" +
    "Basado en el mito griego: El Juicio de Paris. \n" +
    "TPFinal: Aventura Gráfica Interactiva Etapa 1 \n" +
    "Programación para medios interactivos orientada a las tecnologías web.\n" +
    "Diseño Multimedial. Facultad de Artes. UNLP\n" +
    "2025",  width / 2, height/3);
 
  textSize(14);
  text("Gracias por jugar", width / 2, height * 0.7);
  pop();

  // Botón para volver al inicio
  mostrarBoton("VOLVER AL INICIO", 320, 420, 180, 35);
}
 
 function mostrarBoton (texto_, x_ , y_, ancho_, alto_){
   push ();
   rectMode(CENTER);
   translate (x_, y_);
   
    // Si el mouse está sobre el botón, cambiar color a lila
  if (colisionRectangular(x_, y_, ancho_, alto_)) {
    fill(200, 150, 255); // color lila claro
  } else {
    fill(50, 0, 255); // color normal del botón
  }
  
  rect(0, 0, ancho_, alto_, 10); //ultimo parametro para redondear puntar del rectangulo
  fill(255); // color del texto
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto_, 0, 0);
  pop();
}
   
   function colisionRectangular (x_, y_, ancho_, alto_){ //devuelve verdadero o falso en base al boton dibujado
     if (mouseX > x_ - ancho_/2 && mouseX < x_ + ancho_/2 &&
         mouseY > y_- alto_/2 && mouseY < y_+ alto_/2) {
        return true;
        } else {
          return false;
        }
      }
      
