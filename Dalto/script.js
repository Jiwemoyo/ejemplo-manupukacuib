document.write("Heladeria")

 let vainilla= 1.00
 let fresa = 1.50
 let chocolate = 2.00
 let chicle =2.50



//  chico1=parseFloat(prompt("Cuanto dinero tienes chico1"))
 



// if (chico1 >= vainilla && chico1 < fresa){
//     alert(`Te alcanza el helado de vainilla y tu vuelto es de ${chico1-vainilla}`)
// } else if (chico1 >= fresa && chico1 < chocolate ) {
//     alert(`Te alcanza el helado de fresa y tu vuelto es de ${chico1-fresa}`)
// }else if (chico1 >= chocolate && chico1 < chicle ) {
//     alert(`Te alcanza el helado de chocolate y tu vuelto es de ${chico1-chocolate}`)
// }else if (chico1 >= chicle ) {
//     alert(`Te alcanza el helado de chicle y tu vuelto es de ${chico1-chicle}`)
// }else{
//     alert("no te alzanza para ningun helado")
// }

// chico2=parseFloat(prompt("Cuanto dinero tienes chico2"))

// if (chico2 >= vainilla && chico2 < fresa){
//     alert(`Te alcanza el helado de vainilla y tu vuelto es de ${chico2-vainilla}`)
// } else if (chico2 >= fresa && chico2 < chocolate ) {
//     alert(`Te alcanza el helado de fresa y tu vuelto es de ${chico2-fresa}`)
// }else if (chico2 >= chocolate && chico2 < chicle ) {
//     alert(`Te alcanza el helado de chocolate y tu vuelto es de ${chico2-chocolate}`)
// }else if (chico2 >= chicle ) {
//     alert(`Te alcanza el helado de chicle y tu vuelto es de ${chico2-chicle}`)
// }else{
//     alert("no te alzanza para ningun helado")
// }

cofla=parseFloat(prompt("Cuanto dinero tienes cofla"))

if (cofla >= vainilla && cofla < fresa){
    vuelto=cofla-vainilla
    alert(`Te alcanza el helado de vainilla y tu vuelto es de ${vuelto}`)
} else if (cofla >= fresa && cofla < chocolate ) {
    vuelto=cofla-fresa
    alert(`Te alcanza el helado de fresa y tu vuelto es de ${vuelto}`)
}else if (cofla >= chocolate && cofla < chicle ) {
    vuelto=cofla-chocolate
    alert(`Te alcanza el helado de chocolate y tu vuelto es de ${vuelto}`)
}else if ( cofla >= chicle ) {
    vuelto=cofla-chicle
    alert(`Te alcanza el helado de chicle y tu vuelto es de ${vuelto}`)
}else{
    alert("no te alzanza para ningun helado")
}

boletosLoteria = 2.50

if (vuelto == boletosLoteria) {
    alert(`el sin techo compro 1 boleto`)
}else if(vuelto==(boletosLoteria*2)){
    alert(`el sin techo compro 2 boletos`)
}else{
    alert(`el sin techo compro 2 boletos y le sobro ${vuelto-boletosLoteria} lo cual regala`)
}