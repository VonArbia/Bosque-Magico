let frutillasEnPlanta = [];
let posicionFrutilla;
let numeroClicksPlanta = 0;
let numFrutillasEnPlanta = 0;
let frutillasTotales = 0;
let frutillasGuardadas = 0;
let estaBoton = false;
let muchasFrutillasGuardadas = false;

class Pantalla02 extends Pantalla {
    setup() {
       //...
    }

    draw() {
        background(huerto);
        
         if (!sonidoPajarosIniciado) {
            sonidoPajaros.loop();
            sonidoPajarosIniciado = true;
        }
        // chequea que no tenga más de 15 frutillas
        if (frutillasGuardadas < 15) {
            muchasFrutillasGuardadas = false;
        }
        // agrega las frutillas que esten en el array a la planta
        for (let i = 0; i < frutillasEnPlanta.length; i++) {
            image(frutilla, frutillasEnPlanta[i].ubicacionX, frutillasEnPlanta[i].ubicacionY, 40, 40);
        }
        // dibuja botón de recolección
        if (estaBoton) {
            push();
            rectMode(CENTER);
            rect(660, 282, 150, 50);
            fill('#ee5c6c');
            textSize(25);
            text('Recolectar', 600, 290);
            pop();
        }
        // cuadrado de cantidad de frutillas guardadas
        rect(600, 0, 150, 50);
        image(frutilla, 610, 5, 37, 37);
        push();
        fill('#ee5c6c');
        textSize(25);
        text('X ' + frutillasGuardadas, 660, 35);
        pop();
        // muestra cartel de máximo de frutillas guardadas
        if (frutillasGuardadas == 15 && frutillasTotales < 45) {
            muchasFrutillasGuardadas = true;
            push();
            imageMode(CENTER);
            image(muchasFrutillasCartel, width / 2 + 45, height / 2, 500, 345);
            pop();
        }
        //muestra cartel de fin de temporada por máximo de frutillas necesarias para completar el juego
        if (frutillasTotales >= 45) {
            push();
            imageMode(CENTER);
            image(noTemporadaCartel, width / 2 + 45, height / 2, 583, 300);
            pop();
        }
    }

    mousePressed() {
        nav.navegadorInterno();
        // detecta su se hace click en el área del botón de recolección o en la planta
        if (estaBoton && mouseX >= 585 && mouseX <= 735 && mouseY >= 257 && mouseY <= 307 && !muchasFrutillasGuardadas) {
            recoleccion();
        }
        if (mouseX >= 290 && mouseX <= 555 && mouseY >= 200 && mouseY <= 390 && frutillasTotales < 45) {
            numeroClicksPlanta++;
        }
        // aparece la frutilla cada 5 clicks en el área de la planta
        if (numeroClicksPlanta === 5) {
            apareceFrutilla();

            numeroClicksPlanta = 0;
        }
    }
    salir() {
    if (sonidoPajarosIniciado) {
      sonidoPajaros.stop();
      sonidoPajarosIniciado = false;
    }
  }
}

function apareceFrutilla() {
    //posiciones de las frutillas en la planta y las agrega al array de frutillas en planta.
    switch (numFrutillasEnPlanta) {
        case 0:
            posicionFrutilla = {
                ubicacionX: 320,
                ubicacionY: 230
            }
            frutillasEnPlanta.push(posicionFrutilla);
            numFrutillasEnPlanta++;
            sonidoPop.play();
            break;
        case 1:
            posicionFrutilla = {
                ubicacionX: 395,
                ubicacionY: 305
            }
            frutillasEnPlanta.push(posicionFrutilla);
            numFrutillasEnPlanta++;
            sonidoPop.play();
            break;
        case 2:
            posicionFrutilla = {
                ubicacionX: 473,
                ubicacionY: 250
            }
            frutillasEnPlanta.push(posicionFrutilla);
            numFrutillasEnPlanta++;
            sonidoPop.play();
            estaBoton = true;
            break;
    }
}

function recoleccion() {
    numeroClicksPlanta = 0;
    frutillasGuardadas += 3;
    frutillasTotales += 3;
    frutillasEnPlanta = [];
    numFrutillasEnPlanta = 0;
    estaBoton = false;
}