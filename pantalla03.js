let sirviendoLeche = false;
let hayLeche = false;
let sirviendoHielo = false;
let hayHielo = false;
let timerLeche = 3;
let timerHielo = 2;
let timerLicuado = 3;
let frutillasIngredientes = [];
let licuadoListo = false;
let hay3Frutillas = false;
let sirviendoLicuado = false;
let licuadoEnVaso = false;
let licuadosGuardados = 0;
let licuadosTotales = 0;
let muchosLicuadosGuardados = false;
let sonidoLecheIniciado = false
let sonidoHieloIniciado = false
let sonidoLicuadoraIniciado = false
let sonidoReboteIniciado=false



class Pantalla03 extends Pantalla {
    draw() {
        //pausamos el sonido de pajaros cuando no es necesario
        sonidoPajaros.pause();
        sonidoPajarosIniciado=false;
        background(cocina);
        // cuadrado de cantidad de frutillas guardadas
        rect(600, 0, 150, 50);
        image(frutilla, 610, 5, 37, 37);
        push();
        fill('#ee5c6c');
        textSize(25);
        text('X ' + frutillasGuardadas, 660, 35);
        pop();

        // cuadrado de cantidad de licuados guardados
        rect(88, 0, 150, 50);
        image(vasoLleno, 98, 5, 19, 37);
        push();
        fill('#ee5c6c');;
        textSize(25);
        text('X ' + licuadosGuardados, 148, 35);
        pop();

        // taza licuadora, imagen depende de si esta el icuado listo o no
        if (licuadoListo && !sirviendoLicuado) {
            image(licuadoraLlena, 274, 104, 190, 208);
            image(tapaLicuadora, 310, 70, 156, 66);
            sonidoLecheIniciado = false;

        } else if (!licuadoListo) {
            image(tazaLicuadora, 277, 108, 190, 208);
        }

        // frutillas en el bowl
        if (frutillasGuardadas >= 9) {
            image(muchasFrutillas, 134, 342, 98, 117);
        } else if (frutillasGuardadas > 0) {
            image(variasFrutillas, 132, 400, 98, 63);
        }

        // leche 
        if (!sirviendoLeche) {
            image(tetraLeche, 470, 290, 85, 181);
        } else {// mueve la imagen de la leche para dar la ilusión de que esta sirviendo
            push();
            angleMode(DEGREES);
            translate(355, 70);
            rotate(-60);
            image(tetraLeche, 0, 0, 85, 181);
            pop();
            // para que se sirva solo por 3 segundos
            if (frameCount % 60 == 0 && timerLeche > 0) {
                timerLeche--;
            }
            if (timerLeche == 0) {
                sirviendoLeche = false;
                hayLeche = true;
                timerLeche = 3;
            }
            //sonidito leche
            if (!sonidoLecheIniciado) {
                sonidoLeche.play();
                sonidoLecheIniciado = true;
            }
        }

        // imagenes de los ingredientes en la licuadora
        if (hayLeche) {
            image(leche, 324, 205, 121, 106);
        }
        if (hayHielo) {
            image(lecheYHielo, 320, 200, 121, 106);
        }

        // hielo
        if (!sirviendoHielo) {
            image(bowlHielo, 560, 380, 109, 92);
        } else { //hace lo mismo que la leche
            push();
            angleMode(DEGREES);
            translate(350, 70);
            rotate(-45);
            image(bowlHielo, 0, 0, 109, 92);
            pop();
            // para que se sirva solo por 3 segundos
            if (frameCount % 60 == 0 && timerHielo > 0) {
                timerHielo--;
            }
            if (timerHielo == 0) {
                sirviendoHielo = false;
                hayHielo = true;
                timerHielo = 3;
            }
            //sonidito leche
            if (!sonidoHieloIniciado) {
                sonidoHielo.play();
                sonidoHieloIniciado = true;
            }
        }
        // dibuja la frutilla rebotadora
        for (let f of frutillasIngredientes) {
            f.draw();
            f.update();
            if (!sonidoReboteIniciado) {
                sonidoRebote.play();
                sonidoReboteIniciado = true;
            }
        }

        // servir licuado
        if (sirviendoLicuado) {
            push();
            angleMode(DEGREES);
            translate(650, 170);
            rotate(70);
            image(licuadoraLlena, 0, 0, 190, 208);
            pop();
            if (frameCount % 60 == 0 && timerLicuado > 0) {
                timerLicuado--;
            }
            if (timerLicuado == 0) {
                licuadoListo = false;
                sirviendoLicuado = false;
                licuadoEnVaso = true;
                timerLicuado = 3;
            }
            //sonidito licuado (reciclamos el de la leche jej)
            if (!sonidoLecheIniciado) {
                sonidoLeche.play();
                sonidoLecheIniciado = true;
            }
        }
        // dibuja el licuado en el vaso cuando es servido
        if (licuadoEnVaso) {
            image(vasoLleno, 672, 358, 62, 120);
            sonidoLecheIniciado = false;
            sonidoHieloIniciado = false;
            sonidoLicuadoraIniciado = false;
        }
        // muestra cartel de muchos licuados guardados
        if (licuadosGuardados == 3 && licuadosTotales < 15) {
            muchosLicuadosGuardados = true;
            push();
            imageMode(CENTER);
            image(muchosLicuadosCartel, width / 2 + 45, height / 2, 560, 345);
            pop();
        }
        if (licuadosGuardados < 3) {
            muchosLicuadosGuardados = false;
        }
        // muestra cartel de suficientes licuados
        if (licuadosTotales == 15) {
            push();
            imageMode(CENTER);
            image(suficientesLicuadosCartel, width / 2 + 45, height / 2, 500, 345);
            pop();
        }
    }

    mousePressed() {
        nav.navegadorInterno()
        // crea las particulas de las frutillas y las agrega a un array
        if (mouseX >= 132 && mouseX <= 230 && mouseY >= 365 && mouseY <= 475 && frutillasGuardadas >= 1 && frutillasIngredientes.length < 3 && !licuadoListo) {
            let nuevaFrutilla = new ParticulaRebotadora(335 + 92 / 2, 126 + 174 / 2, random(-3, 3), random(-3, 3), 40);
            frutillasIngredientes.push(nuevaFrutilla);
            frutillasGuardadas--;
            sonidoReboteIniciado=false;
        }

        // activar servir leche
        if (mouseX >= 480 && mouseX <= 545 && mouseY >= 295 && mouseY <= 465 && !hayLeche && !licuadoListo) {
            sirviendoLeche = true;
        }
        // activar servir hielo
        if (mouseX >= 570 && mouseX <= 655 && mouseY >= 390 && mouseY <= 465 && !hayHielo && hayLeche && !licuadoListo) {
            sirviendoHielo = true;
        }

        // activar licuadora comprobando que esten todos los ingredientes
        if (mouseX >= 360 && mouseX <= 415 && mouseY >= 380 && mouseY <= 434 && frutillasIngredientes.length === 3 && hayHielo && hayLeche) {
            hayLeche = false;
            hayHielo = false;
            frutillasIngredientes = [];
            licuadoListo = true;
            sonidoLicuadora.play();
        }

        // servir licuado
        if (mouseX >= 287 && mouseX <= 324 && mouseY >= 142 && mouseY <= 280 && licuadoListo && !sirviendoLicuado && !licuadoEnVaso) {
            sirviendoLicuado = true;
        }

        // guardar licuado
        if (mouseX >= 675 && mouseX <= 730 && mouseY >= 355 && mouseY <= 470 && licuadoEnVaso && !muchosLicuadosGuardados) {
            licuadoEnVaso = false;
            licuadosGuardados++;
            licuadosTotales++;
            sonidoPop.play();
        }
    }
}
