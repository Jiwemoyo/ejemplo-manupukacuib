var Nombre="Alessandro"
var Apellido="Cisneros"
var NombreUsuarioPlatzi="Kolab"
var Edad=28
var CorreoElectrónico="c4a235@gmail.com"
var MayorEdad=true
var DineroAhorrado=  250
var Deudas= 60

console.log(`Mi nombre completos es ${Nombre} ${Apellido}`)
console.log(`Mi dinero real es ${DineroAhorrado-deudas}`)



console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nombre(name,lastname,nickname) {
    completeName=name+lastname
    console.log(console.log(`Mi nombres es ${completeName}, pero prefiero que me digas ${nickname}`))
}


// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }


const tipoDeSuscripcion="Free"

if (tipoDeSuscripcion==="Free") {
    console.log("Solo puedes tomar los cursos gratis")
} else if(tipoDeSuscripcion==="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion==="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion==="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("No existe ese tipo de suscripcion")
}

var tipoSuscripcion=["Free","Basic","Expert","ExpertPlus"]
var contenidoSuscripcion=["Solo puedes tomar los cursos gratis","Puedes tomar casi todos los cursos de Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

for (let index = 0; index < tipoSuscripcion.length; index++) {
    
    usuarioSuscripcion="Expert"
    if (usuarioSuscripcion==tipoSuscripcion[index]) {
        console.log(`tienes una suscripcion ${usuarioSuscripcion} por lo tanto ${contenidoSuscripcion[index]}`)
    }
    
    
}


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

index=0
while(index < 5){
    index++
    console.log(`El valor de index es ${index}`)
    
}

index=10
while(index >= 2){
    
    console.log(`El valor de index es ${index}`)
    index--
}

var respuesta = Number(prompt("Cuanto es 2+2"))

while (respuesta!=4) {
    console.log("Respuesta incorrecta vuelve a intentarlo+")
    var respuesta = Number(prompt("Cuanto es 2+2"))
}

console.log("Respuesta correcta felicidades")

function conseguirtiposuscripcion(tipoDeSuscripcion) {
    if (tipoDeSuscripcion==="Free") {
        console.log("Solo puedes tomar los cursos gratis")
        return
    }
    if(tipoDeSuscripcion==="Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return
    }
    if(tipoDeSuscripcion==="Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
    }
    if(tipoDeSuscripcion==="ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return
    }
    console.warn('Ese tipo de suscripcion no existe')
}


tiposSuscripciones={
    Free:"Solo puedes tomar los cursos gratis",
    Basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    EXpert:"Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

