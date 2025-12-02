class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }

  mostrar() {
    rectMode(CENTER);

    if (this.estaEncima()) {
      fill(245, 225, 140);
    } else {
      fill(210, 170, 80);
    }

    stroke(100, 70, 30);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h, 12);

    noStroke();
    fill(40, 20, 0);
    textAlign(CENTER, CENTER);
    textFont("Georgia");
    textStyle(BOLD);
    textSize(14);
    text(this.texto, this.x, this.y);
  }

  estaEncima() {
    return (mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY > this.y - this.h / 2 &&
      mouseY < this.y + this.h / 2);
  }

  clic() {
    return this.estaEncima();
  }
}
