class Pantalla06 extends Pantalla {
    setup() {
        // ...
    }
    draw() {
        background(album);
        //pausamos el sonido de pajaros cuando no es necesario
        sonidoPajaros.pause();
        sonidoPajarosIniciado=false;
        // área para las imagenes
        let x1 = 85;
        let y1 = 30;
        let ancho = 593;
        let alto = 485;

        // columnas y filas
        let columnas = 5;
        let filas = 3;

        // tamaño de celda cuadrada que encaja en el área
        let casilla = min(ancho / columnas, alto / filas);

        // espacio que sobra en ancho y alto para que despues quede centrado
        let sobraX = ancho - (casilla * columnas);
        let sobraY = alto - (casilla * filas);

        // coordenadas iniciales para centrar la grilla
        let albumX = x1 + sobraX / 2;
        let albumY = y1 + sobraY / 2;

        for (let i = 0; i < criaturasMostradas.length; i++) {
            let columna = i % columnas;
            let fila = floor(i / columnas);

            if (fila < filas) {
                let x = albumX + columna * casilla + casilla / 2;
                let y = albumY + fila * casilla + casilla / 2;

                push();
                imageMode(CENTER);
                image(criaturasMostradas[i], x, y, casilla, casilla);
                pop();
            }
        }
    }
    mousePressed() {
        nav.navegadorInterno();
    }
}
