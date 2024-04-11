function realizarOperacion() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operacion = document.getElementById("operacion").value;
  let resultado;

  if (operacion === "suma") {
    resultado = num1 + num2;
  } else if (operacion === "resta") {
    resultado = num1 - num2;
  } else {
    resultado = "Seleccione una operación válida";
  }

  alert("Resultado: " + resultado);
}