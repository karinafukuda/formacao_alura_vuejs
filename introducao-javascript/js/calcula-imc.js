var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
 
 var paciente = pacientes[i];

 var tdPeso = paciente.querySelector(".info-peso");
 var peso = tdPeso.textContent;
 console.log(peso);


  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  console.log(altura);

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  var tdImc = paciente.querySelector(".info-imc")
  tdImc.textContent = imc


  if (!pesoEhValido){
   console.log("peso inválido")
   pesoEhValido = false;
   tdImc.textContent = "Peso inválido";
   paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida){
   console.log("Altura inválido")
   alturaEhValida = false;
   tdImc.textContent = "Altura inválida";
   paciente.classList.add("paciente-invalido");//adicionou class do css
  }


  if ( alturaEhValida && pesoEhValido ){
   var imc = peso / (altura*altura);
   tdImc.textContent = imc.toFixed(2);
 }

}

function validaPeso(peso){
  if ( peso >= 0 && peso <= 1000){
    return true;
}else{
  return false;
}}

function validaAltura(altura){
  if ( altura >= 0 && altura <= 3.0){
    return true;
}else{
  return false;
}}

function calculaImc (peso, altura){
  var imc =0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

