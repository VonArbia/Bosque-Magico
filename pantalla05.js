class Pantalla05 extends Pantalla {
    setup(){
        //...
    }
    draw() {
        background(tutorial)
        //pausamos el sonido de pajaros cuando no es necesario
        sonidoPajaros.pause();
        sonidoPajarosIniciado=false;
    }
    mousePressed() {
        nav.navegadorInterno();
    }
}