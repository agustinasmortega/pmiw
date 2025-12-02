class Rayo {
  constructor() {
    this.reset();
    this.ancho = 40;
    this.alto = 70;
  }

  reset() {
    this.x = random(width - 40);
    this.y = random(-500, -100);
    this.vel = random(4, 8);
  }

  dibujar() {
    image(imgRayo, this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    this.y += this.vel;
    if (this.y > height) {
      this.reset();
    }
  }
}
