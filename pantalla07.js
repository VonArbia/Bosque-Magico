class Pantalla07 extends Pantalla{
    setup(){
        // ...
    }
    draw(){
        background(creditos)
        //pausamos el sonido de pajaros cuando no es necesario
        sonidoPajaros.pause();
        sonidoPajarosIniciado=false;
    }

    mousePressed(){
         if (mouseX >= 233 && mouseX <= 440 && mouseY >= 410 && mouseY <= 476) {
            nav.pantallaInicio();
        }
    }
}