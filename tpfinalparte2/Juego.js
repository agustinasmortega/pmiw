class Juego {
  constructor() {
    this.estado = "inicio";
    this.pausado = false;

    this.paris = new Paris();
    this.intentos = new Intentos(5);

    this.rayos = [];
    for (let i = 0; i < 6; i++) {
      this.rayos[i] = new Rayo();
    }

    this.btnCreditos = new Boton(100, 430, 130, 40, "CRÉDITOS");
    this.btnVolver = new Boton(320, 440, 150, 40, "VOLVER");
    this.btnReiniciar = new Boton(320, 360, 150, 40, "REINICIAR");
    this.btnJugar = new Boton(320, 445, 120, 35, "JUGAR");
  }

  dibujar() {
    if (this.estado === "inicio") {
      image(imgInicio, 0, 0, width, height);

      textAlign(CENTER);
      textFont("Georgia");
      textStyle(BOLD);
      fill(50, 25, 0);

      textSize(20);
      text("Presioná ENTER para ir al Tutorial", width / 2, 370);

      this.btnCreditos.mostrar();

    } else if (this.estado === "tutorial") {
      image(imgTutorial, 0, 0, width, height);

      textAlign(CENTER);
      textFont("Georgia");
      textStyle(BOLD);
      fill(50, 25, 0);

      textSize(14);
      text("Presioná ENTER o el botón JUGAR para empezar", width / 2, 415);

      this.btnJugar.mostrar();

    } else if (this.estado === "juego") {
      image(imgJuego, 0, 0, width, height);

      if (!this.pausado) {
        this.paris.mover();
        this.paris.colisionar(this.rayos, this.intentos, this);

        for (let i = 0; i < this.rayos.length; i++) {
          this.rayos[i].mover();
        }
      }

      this.paris.dibujar();
      for (let i = 0; i < this.rayos.length; i++) {
        this.rayos[i].dibujar();
      }
      this.intentos.mostrar();

      if (this.pausado) {
        fill(0, 150);
        rectMode(CORNER);
        rect(0, 0, width, height);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(40);
        text("PAUSA", width / 2, height / 2);
      }

    } else if (this.estado === "ganaste") {
      image(imgGanaste, 0, 0, width, height);
      this.btnReiniciar.mostrar();

    } else if (this.estado === "perdiste") {
      image(imgPerdiste, 0, 0, width, height);
      this.btnReiniciar.mostrar();

    } else if (this.estado === "creditos") {
      image(imgCreditos, 0, 0, width, height);
      this.btnVolver.mostrar();
    }
  }

  manejarTecla(keyCode) {
    if (this.estado === "inicio" && keyCode === ENTER) {
      this.estado = "tutorial";
      if (sonidoFondo.isLoaded()) sonidoFondo.play();
    } else if (this.estado === "tutorial" && keyCode === ENTER) {
      this.resetearVariables();
      this.estado = "juego";
    } else if (this.estado === "juego" && k === ESCAPE) {
      this.pausado = !this.pausado;
    }
  }

  manejarClic() {
    if (this.estado === "inicio") {
      if (this.btnCreditos.clic()) this.estado = "creditos";
    } else if (this.estado === "tutorial") {
      if (this.btnJugar.clic()) {
        this.resetearVariables();
        this.estado = "juego";
      }
    } else if (this.estado === "creditos") {
      if (this.btnVolver.clic()) this.estado = "inicio";
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      if (this.btnReiniciar.clic()) {
        this.resetearVariables();
        this.estado = "inicio";
      }
    }
  }

  resetearVariables() {
    this.paris = new Paris();
    this.intentos.reiniciar();
    this.pausado = false;
    for (let i = 0; i < this.rayos.length; i++) {
      this.rayos[i].reset();
    }
  }
}
