
/*
Codeado por Florencia Ailen Arbia
Canción de Mac de Marco
Dibujos hechos por Florencia Ailen Arbia

Fecha de nacimiento: 03/12/2005
Estudiante de la Licenciatura en Artes Multimediales
*/


let nav = new Navegador();

//variables para las imagenes
//fondos
let inicio;
let tutorial;
let creditos;
let album;
let huerto;
let cocina;
let bosque;
//objetos
let frutilla;
let tetraLeche;
let bowlHielo;
let variasFrutillas;
let muchasFrutillas;
let leche;
let lecheYHielo;
let tapaLicuadora;
let licuadoraLlena;
let tazaLicuadora;
let vasoLleno;
//carteles
let desbloqueasteCriaturasCartel;
let muchasFrutillasCartel;
let muchosLicuadosCartel;
let noTemporadaCartel;
let suficientesLicuadosCartel;
//soinidos
let musica;
let sonidoPop;
let sonidoRebote;
let sonidoLeche;
let sonidoHielo;
let sonidoLicuadora;
let sonidoPajaros;
let sonidoBrillitos;

let musicaIniciada = false;
let sonidoPajarosIniciado = false;

let nomCriaturas;
let criaturas = [];
let imgCriaturas = [];

function preload() {
  inicio = loadImage('../img/interfaz/fondos/inicio.jpg');
  tutorial = loadImage('../img/interfaz/fondos/tutorial.jpg');
  creditos = loadImage('../img/interfaz/fondos/creditos.jpg');
  album = loadImage('../img/interfaz/fondos/album.jpg');
  huerto = loadImage('../img/interfaz/fondos/huerto.jpg');
  cocina = loadImage('../img/interfaz/fondos/cocina.jpg');
  bosque = loadImage('../img/interfaz/fondos/bosque.jpg');
  //objetos
  frutilla = loadImage('../img/objetos/cocina/frutilla.png');
  tetraLeche = loadImage('../img/objetos/cocina/tetra-leche.png');
  bowlHielo = loadImage('../img/objetos/cocina/bowl-hielo.png');
  variasFrutillas = loadImage('../img/objetos/cocina/varias-frutillas.png');
  muchasFrutillas = loadImage('../img/objetos/cocina/muchas-frutillas.png');
  leche = loadImage('../img/objetos/cocina/leche.png');
  lecheYHielo = loadImage('../img/objetos/cocina/leche-con-hielo.png');
  tapaLicuadora = loadImage('../img/objetos/cocina/tapa-licuadora.png');
  licuadoraLlena = loadImage('../img/objetos/cocina/licuadora-llena.png');
  tazaLicuadora = loadImage('../img/objetos/cocina/taza-licuadora.png');
  vasoLleno = loadImage('../img/objetos/cocina/vaso-lleno.png');

  //carteles
  desbloqueasteCriaturasCartel = loadImage('../img/interfaz/carteles/desbloqueaste-criaturas.png');
  muchasFrutillasCartel = loadImage('../img/interfaz/carteles/muchas-frutillas-cartel.png');
  muchosLicuadosCartel = loadImage('../img/interfaz/carteles/muchos-licuados.png');
  noTemporadaCartel = loadImage('../img/interfaz/carteles/no-temporada.png');
  suficientesLicuadosCartel = loadImage('../img/interfaz/carteles/suficientes-licuados.png');

  //criaturas
  nomCriaturas = [
    'ardilla-caballero',
    'ardilla-guitarra',
    'gato-alien',
    'gato-hada',
    'gato-oficinista',
    'hamster-ufo',
    'huron-jester',
    'paloma-botas',
    'perro-cumple',
    'perro-ninio',
    'perro-payaso',
    'pez-romantico',
    'vaca-diva',
    'zariguella-mago',
    'samaruga-hada'
  ]
  for (let i = 0; i < nomCriaturas.length; i++) {
    imgCriaturas.push(loadImage(`./img/objetos/criaturas/${nomCriaturas[i]}.png`));
  }
  //sonidos
  musica = loadSound('../sonido/musica.mp3');
  sonidoPop = loadSound('../sonido/sonido-pop.mp3');
  sonidoRebote = loadSound('../sonido/sonido-rebote.mp3');
  sonidoLeche = loadSound('../sonido/sonido-leche.mp3');
  sonidoHielo = loadSound('../sonido/sonido-hielo.mp3');
  sonidoLicuadora = loadSound('../sonido/sonido-licuadora.mp3');
  sonidoPajaros = loadSound('../sonido/pajaros.mp3');
  sonidoBrillitos=loadSound('../sonido/brillitos.mp3');
}

function setup() {
  let cnv = createCanvas(750, 550);
  let x = (windowWidth - width) / 2;//centro el canvas en la pantalla
  cnv.position(x, 0);

  let p = new Pantalla01();
  nav.agregarPantalla(p);
  p = new Pantalla02();
  nav.agregarPantalla(p);
  p = new Pantalla03();
  nav.agregarPantalla(p);
  p = new Pantalla04();
  nav.agregarPantalla(p);
  p = new Pantalla05();
  nav.agregarPantalla(p);
  p = new Pantalla06();
  nav.agregarPantalla(p);
  p = new Pantalla07();
  nav.agregarPantalla(p);

  nav.pantallaActual.preload();
  nav.pantallaActual.setup();
}

function draw() {
  stroke('#ee5c6c');
  fill('#FFCADA');
  nav.pantallaActual.draw();
  //aseguramos que no arranque la musica 20 veces y se trabe todo
  if (!musicaIniciada) {
    musica.loop();
    musicaIniciada = true;
  }
}

function mousePressed() {
  nav.pantallaActual.mousePressed();
}




