let vasoEnMesa = false;
let criaturasMostradas = [];
let nombresMostrados = [];
let criaturaActual = null;
let timerAparicion = 2; // segundos
let contandoAparicion = false; // indica si el timer está activo
let sonidoBrillitosIniciado = false;

class Pantalla04 extends Pantalla {
    setup() {
        criaturaActual = null;
    }
    draw() {
        background(bosque);

        if (!sonidoPajarosIniciado) {
            sonidoPajaros.loop();
            sonidoPajarosIniciado = true;
        }
        // cuadrado de cantidad de licuados hechos
        rect(88, 0, 150, 50);
        image(vasoLleno, 98, 5, 19, 37);
        push();
        fill('#ee5c6c');
        textSize(25);
        text('X ' + licuadosGuardados, 148, 35);
        pop();

        // vaso en mesa
        if (vasoEnMesa) {
            image(vasoLleno, 220, 355, 96, 185);
            // contar segundos para la aparición
            if (contandoAparicion && frameCount % 60 == 0 && timerAparicion > 0) {
                timerAparicion--;
            }
            // cuando llega a 0, mostrar criatura
            if (contandoAparicion && timerAparicion == 0) {
                mostrarCriaturaAleatoria();
                contandoAparicion = false;
            }
            // dibuja la criatura que tocó
            if (criaturaActual) {
                push();
                imageMode(CENTER);
                image(criaturaActual, width / 2 + 130, 238, 350, 350);
                pop();
                
            }
        }
        //cartel de finalización
        if (!criaturaActual && nomCriaturas.length === 0) {
            push();
            imageMode(CENTER);
            image(desbloqueasteCriaturasCartel, width / 2 + 45, height / 2, 560, 345);
            pop();
        }
    }

    mousePressed() {
        nav.navegadorInterno();
        // poner vaso si hay licuados guardados
        if (mouseX >= 89 && mouseX <= width && mouseY >= 412 && mouseY <= height && !vasoEnMesa && licuadosGuardados > 0) {
            vasoEnMesa = true;
            licuadosGuardados--;
            criaturaActual = null;
            // poner tiempo aleatorio cada vez que se pone el vasito
            timerAparicion = Math.floor(random(2, 5));
            contandoAparicion = true;

            // dar vaso a la criatura si esta está visible
        } else if (vasoEnMesa && criaturaActual && mouseX >= 220 && mouseX <= 220 + 96 && mouseY >= 355 && mouseY <= 355 + 185) {
            vasoEnMesa = false;
            criaturaActual = null;
            contandoAparicion = false;
        }
    }
    salir() {
        if (sonidoPajarosIniciado) {
            sonidoPajaros.stop();
            sonidoPajarosIniciado = false;
        }
    }
}

function mostrarCriaturaAleatoria() {
    if (nomCriaturas.length > 0) {
        let index = floor(random(nomCriaturas.length));
        criaturaActual = imgCriaturas[index];
        criaturasMostradas.push(imgCriaturas[index]);
        nombresMostrados.push(nomCriaturas[index]);
        imgCriaturas.splice(index, 1);
        nomCriaturas.splice(index, 1);
        sonidoBrillitos.play();
    } else {
        criaturaActual = null;
    }
}