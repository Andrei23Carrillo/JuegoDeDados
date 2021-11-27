/*
class Jugador {

    nombre
    caraDado1
    caraDado2

    Jugador(parNombre){
        this.nombre = parNombre;
    }
}

class JuegoDados{
    numeroJuego

    jugador1 // Jugador();
    jugador2 // Jugador();

    tirarDados(){
        this.jugador1.caraDado1 = (math.random * 6);
        this.jugador1.caraDado2 = (math.random * 6);

        this.jugador2.caraDado1 = (math.random * 6);
        this.jugador2.caraDado2 = (math.random * 6);
    }

    determinaGanador(){
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
           return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}
*/
//Código JavaScript

function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}



function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = parseInt(6*Math.random()+1); //usar random(1,6)
        this.jugador1.caraDado2 = parseInt(6*Math.random()+1); //usar random(1,6)

        this.jugador2.caraDado1 = parseInt(6*Math.random()+1) //usar random(1,6)
        this.jugador2.caraDado2 = parseInt(6*Math.random()+1) //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {

                return this.jugador1;
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
                return this.jugador2;
        }
        else return null;
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
let juego1 = new JuegoDados(1, pedro, antonio);

let victorias1 = 0;
let victorias2 = 0;
let totalJuegos = 0;


function iniciarJuego(){
    while ((victorias1 != 3) && (victorias2 != 3)){
        juego1.tirarDados();

        let ganador = juego1.determinaGanador();

        if(ganador == juego1.jugador1){
            victorias1++;
        }
        else if(ganador == juego1.jugador2){
            victorias2++;
        }

        totalJuegos++;

        console.log("juego numero " + juego1.numeroJuego);
        console.log("Puntos de " + juego1.jugador1.nombre + " dado 1 = " + juego1.jugador1.caraDado1 + "dado 2 = " + juego1.jugador1.caraDado2);
        console.log("Puntos de " + juego1.jugador2.nombre + " dado 1 = " + juego1.jugador2.caraDado1 + "dado 2 = " + juego1.jugador2.caraDado2);

        console.log("El ganador del juego " + juego1.numeroJuego + " es: " + ((ganador != null)? ganador.nombre: "Empate"));
        
        juego1.numeroJuego++;
    }
    
console.log(`Total juegos: ${totalJuegos}`)
console.log(`Juegos ganados de ${juego1.jugador1.nombre}: ${victorias1} `);
console.log(`Juegos ganados de ${juego1.jugador2.nombre}: ${victorias2} `);

console.log("ganador del torneo: " + ((victorias1 == 3)? juego1.jugador1.nombre:juego1.jugador2.nombre));
}
//Determinar el primer ganador de 3 juegos y cuantos juegos hubo