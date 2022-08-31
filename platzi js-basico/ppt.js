var piedra="piedra"
var papel="papel"
var tijera="tijera"

var maquina=papel

function ejecucion(seleccion) {
    if ((seleccion=== piedra && maquina === tijera)||(seleccion=== papel && maquina === piedra)||(seleccion=== tijera && maquina === papel)) {
        console.log("Ganaste")
    }else if((seleccion=== piedra && maquina === papel)||(seleccion=== papel && maquina === tijera)||(seleccion=== tijera && maquina === piedra)){
        console.log("Perdiste")
    }else{
        console.log("Empate")
    }
}

ejecucion("piedra")




function Juego(opcion,cpu) {

    switch (opcion) {
        case "piedra":
            switch (cpu) {
                case "piedra":
                    console.log("empate")
                    break;
                case "papel":
                    console.log("Perdiste")
                default:
                    console.log("ganaste")
                    break;
            }
            
            break;
        case "papel":
            switch (cpu) {
                case "papel":
                    console.log("empate")
                    break;
                case "tijera":
                    console.log("Perdiste")
                default:
                    console.log("ganaste")
                    break;
            }
            break
        case "tijera":
            switch (cpu) {
                case "tijera":
                    console.log("empate")
                    break;
                case "piedra":
                    console.log("Perdiste")
                default:
                    console.log("ganaste")
                    break;
            }
            break
        default:
            break;
    }
}