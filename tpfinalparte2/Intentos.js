class Intentos {
  constructor(total) {
    this.maximo = total;
    this.actuales = total;
  }

  restar() {
    this.actuales--;
  }

  reiniciar() {
    this.actuales = this.maximo;
  }

  sinVidas() {
    return (this.actuales <= 0);
  }

  mostrar() {
    textFont("Georgia");
    textStyle(BOLD);
    fill(50, 25, 0);
    textSize(20);
    textAlign(LEFT);
    text("VIDAS: " + this.actuales, 20, 30);
  }
}
