


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