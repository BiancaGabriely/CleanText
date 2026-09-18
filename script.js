const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado")

function apagar(){

    if (numero.value.trim() === "") {
       alert("Informe uma sequência de números.")
        return;
    }
   const numeroFinal = numero.value.replace(/\s/g,"");

   resultado.textContent = numeroFinal;
}