const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 70,
      velocidad: 30,
      vida: 60,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 30,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
  
 // PUNTOS INICIALES DEL JUEGO

  var contadorPuntosJug1 = 0;
  var contadorPuntosJug2 = 0;
  var ganador;
  

// COMPARACIÓN POR PODER DE ATAQUE 


var ataqueJugador1 = jugadorUno.habilidades.ataque;
var ataqueJugador2 = jugadorDos.habilidades.ataque;


if (ataqueJugador1 > ataqueJugador2){
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (ataqueJugador2 > ataqueJugador1) {
    contadorPuntosJug2;
} else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;

};

// COMPARACIÓN POR PODER DE VELOCIDAD

var velocidadJugador1 = jugadorUno.habilidades.velocidad;
var velocidadJugador2 = jugadorDos.habilidades.velocidad;


if (velocidadJugador1 > velocidadJugador2){
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (velocidadJugador2 > velocidadJugador1) {
    contadorPuntosJug2++;
} else if (velocidadJugador1 = velocidadJugador2) {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
};

  
  //COMPARACIÓN POR NIVEL DE VIDA
 
var vidaJugador1 = jugadorUno.habilidades.vida;
var vidaJugador2 = jugadorDos.habilidades.vida;


if (vidaJugador1 > vidaJugador2){
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (vidaJugador2 > vidaJugador1) {
    contadorPuntosJug2++;
} else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;

};
  
  
  //COMPARACIÓN POR MAGIA
  
  var magiaJugador1 = jugadorUno.habilidades.magia;
  var magiaJugador2 = jugadorDos.habilidades.magia;
  
  
  if (magiaJugador1 > magiaJugador2){
      contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (magiaJugador2 > magiaJugador1) {
      contadorPuntosJug2++;
  } else{
      contadorPuntosJug1++;
      contadorPuntosJug2++;
  };

  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
 
  var articulosJugador1 = jugadorUno.articulos.length;
  var articulosJugador2 = jugadorDos.articulos.length;
  
  
  if (articulosJugador1 > articulosJugador2){
      contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (articulosJugador2 > articulosJugador1) {
      contadorPuntosJug2++;
  } else{
      contadorPuntosJug1++;
      contadorPuntosJug2++;
  };

 //DEFINIENDO EL GANADOR DE LA PARTIDA

  var jugador1 = jugadorUno.nombre
  var jugador2 = jugadorDos.nombre
  var ganador; 

  if(contadorPuntosJug1 > contadorPuntosJug2){
      ganador = jugadorUno.nombre;
  } else if (contadorPuntosJug2 > contadorPuntosJug1) {
          ganador = jugadorDos.nombre;
  } else {
      ganador = "empate"
  };

  var resultado = {
      marce: contadorPuntosJug1,
      flor: contadorPuntosJug2,
      ganador: ganador,
  };

  console.log(resultado);
