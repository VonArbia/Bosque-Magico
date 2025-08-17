class Pantalla01 extends Pantalla {
    setup() {
        //...
    }
    draw() {
        background(inicio);
        //pausamos el sonido de pajaros cuando no es necesario
        sonidoPajaros.pause();
        sonidoPajarosIniciado=false;
    }
    mousePressed() {
        if (mouseX >= 233 && mouseX <= 524 && mouseY >= 208 && mouseY <= 275) {
            nav.pantallaHuerto();
        } else if (mouseX >= 233 && mouseX <= 524 && mouseY >= 285 && mouseY <= 350) {
            nav.pantallaTutorial();
        } else if (mouseX >= 233 && mouseX <= 524 && mouseY >= 363 && mouseY <= 430) {
            nav.pantallaAlbum();
        } else if (mouseX >= 233 && mouseX <= 524 && mouseY >= 440 && mouseY <= 509) {
            nav.pantallaCreditos();
        }
    }
}