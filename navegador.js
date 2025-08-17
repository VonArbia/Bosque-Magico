
class Navegador {
    constructor() {
        this.pantallas = [];
        this.indicePantalla = null;
        this.pantallaActual = null;
    }

    agregarPantalla(p) {
        this.pantallas.push(p)
        if (!this.pantallaActual) {
            this.indicePantalla = 0;
            this.pantallaActual = p;
        }
    }

    //pasar de pantalla
    siguientePantalla() {
        let i = (this.indicePantalla + 1) % this.pantallas.length;
        this.indicePantalla = i;
        this.pantallaActual = this.pantallas[i];
    }
    previaPantalla() {
        let i = this.indicePantalla - 1;
        if (i < 0) {
            i = this.pantallas.length - 1;
        }
        this.indicePantalla = i;
        this.pantallaActual = this.pantallas[i];
    }
    pantallaInicio() {
        this.indicePantalla = 0;
        this.pantallaActual = this.pantallas[0];
    }
    pantallaHuerto() {
        this.indicePantalla = 1;
        this.pantallaActual = this.pantallas[1];
    }
    pantallaCocina() {
        this.indicePantalla = 2;
        this.pantallaActual = this.pantallas[2];
    }
    pantallaBosque() {
        this.indicePantalla = 3;
        this.pantallaActual = this.pantallas[3];
    }
    pantallaTutorial() {
        this.indicePantalla = 4;
        this.pantallaActual = this.pantallas[4];
    }
    pantallaAlbum() {
        this.indicePantalla = 5;
        this.pantallaActual = this.pantallas[5];
    }
    pantallaCreditos() {
        this.indicePantalla = 6;
        this.pantallaActual = this.pantallas[6];
    }

    navegadorInterno() {
        if (mouseX >= 8 && mouseX <= 76 && mouseY >= 70 && mouseY <= 170) {
            nav.pantallaInicio();
        } else if (mouseX >= 8 && mouseX <= 76 && mouseY >= 182 && mouseY <= 265) {
            nav.pantallaHuerto();
        } else if (mouseX >= 8 && mouseX <= 76 && mouseY >= 286 && mouseY <= 370) {
            nav.pantallaCocina();
        } else if (mouseX >= 8 && mouseX <= 76 && mouseY >= 382 && mouseY <= 474) {
            nav.pantallaBosque();
        }
    }
}

class Pantalla {
    constructor() {  //inicializar las propiedades del "sub sketch"
        //...
    }
    preload() {
        //...
    }
    setup() {
        //...
    }
    draw() { //Se usa para dibujar en el "sub sketch"
        //...
    }
    mousePressed() {
        //...
    }
}