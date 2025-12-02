class Paris {
  constructor() {
    this.x = 320;
    this.y = 350;
    this.ancho = 75;
    this.alto = 100;
    this.vel = 5;
    this.tiempoVivo = 0;
  }

  dibujar() {
    image(imgParis, this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.vel;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.vel;
    }
    this.x = constrain(this.x, 0, width - this.ancho);

    this.tiempoVivo++;
  }

  colisionar(rayos, intentos, juegoRef) {
    if (this.tiempoVivo > 1200) {
      juegoRef.estado = "ganaste";
    }

    for (let i = 0; i < rayos.length; i++) {
      let r = rayos[i];
      if (this.x < r.x + r.ancho - 10 &&
        this.x + this.ancho > r.x + 10 &&
        this.y < r.y + r.alto - 20 &&
        this.y + this.alto > r.y + 20) {

        r.reset();
        intentos.restar();

        if (intentos.sinVidas()) {
          juegoRef.estado = "perdiste";
        }
      }
    }
  }
}
