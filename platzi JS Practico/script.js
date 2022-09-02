
// console.log({titulo,parrafo1,parrafo2,parrafo3,input})
// console.log(input.value)

// titulo.innerText="Acabo de cambiar esto"

// console.log(titulo.getAttribute("class"))

// titulo.setAttribute('class','verde')

// console.log(titulo.getAttribute("class"))


// titulo.classList.add("naranja")
// titulo.classList.remove("amarillo")


// input.value="Estoy perdido papu"

// const imagen =document.createElement('img')

// imagen.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXVjAsl3Cwx3yWzICIPg5oDYYRo2Bu0QHjOcnlasP&s')

// parrafo3.append(imagen)


const valor1=document.querySelector("#valor1")
const valor2=document.querySelector("#valor2")
const boton=document.querySelector("#btnCalcular")
const resultatres=document.querySelector(".resultado")
const forumlario=document.querySelector("#formulario")

// forumlario.addEventListener('submit',realizarCalculo)

// function realizarCalculo(Event) {
//     Event.preventDefault()
//     resultado= Number(valor1.value) + Number(valor2.value)
//     resultatres.append(resultado)
// }


valor2.addEventListener('change',realizarCalculo)

function realizarCalculo() {
    resultado= Number(valor1.value) + Number(valor2.value)
    resultatres.append(resultado)
}

var nombre= "Alessandro Cisneros"