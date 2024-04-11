

// function preguntarPalabras() { // 2
//   let palabraFav =   prompt( " dime tu palabra favorrita ");
//   let diaFav = prompt( " día de la semana Favorito ");
//   mostrarFrase(palabraFav, diaFav); //3 exportar datos a la otra frase
// }

// function mostrarFrase(a, b) {  // ç4 recibe datos de la otra función
//   document.write(" `me gusta la palabra `" + a + "`sobre todo el ´" + b)  //a =palabraFav , b= diaFav.
// }

// preguntarPalabras();  //1

// for(let i=0; i<1000; i++){ // bucle hasta mil.
//   holaMundo();
// }


function unSaludo() {
  let saludo = prompt("Dime un Saludo:");
  saludo = saludo.toLowerCase();
  let nombre = prompt("Nombre: carol o marga?");
  nombre = nombre.toLowerCase();

  if (nombre === "marga" || nombre === "carol") {
    return saludo + ""+ nombre;
  } else {
    return "Prueba en otro sitio";
  }
}

for (let i = 0; i < 2; i++) {
  document.write(unSaludo() + "<br>");
}

console.log("Resultados:");
for (let i = 0; i < 2; i++) {
  console.log(unSaludo());
}