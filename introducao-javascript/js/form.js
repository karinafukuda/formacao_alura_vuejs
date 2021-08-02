var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener( "click", function (event){
 event.preventDefault();
 var form = document.querySelector("#form-adiciona");
 //Extraindo informações do paciente do form
 var paciente = obtemPacienteDoForm(form);
 
 //Valida se o paciente é true or false
 var erros = validaPaciente(paciente);

 if(erros.length > 0 ){
  exibeMensagensDeErro(erros);
   return;
 }
 
 adicionaTPacienteNaTabela(paciente);
 
 //Limpar os campos após adição na tabela
 form.reset();
 var mensagensErro = document.querySelector("#mensagens-erro");
 mensagensErro.innerHTML ="";
});

function obtemPacienteDoForm(form){
 var paciente = {
   nome: form.nome.value,
   peso: form.peso.value,
   altura:form.altura.value,
   gordura: form.gordura.value,
   imc: calculaImc (form.peso.value, form.altura.value)
 }
 return paciente;
}

function adicionaTPacienteNaTabela(paciente){
  //Cria o campo na tabela
  var pacienteTr = montaTr(paciente);
  //Adiciona paciente na tabela
 var tabela = document.querySelector("#tabela-pacientes");
 tabela.appendChild(pacienteTr);
}

function montaTr (paciente){
 var pacienteTr = document.createElement("tr");
 pacienteTr.classList.add("paciente");

 // var nomeTd = document.createElement("td");
 // nomeTd.classList.add("info-nome");
 // pacienteTr.appendChild(nomeTd);

 pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
 pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
 pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
 pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
 pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

 return pacienteTr;
}

function montaTd(dado, classe){
 var td = document.createElement("td");
 td.textContent = dado;
 td.classList.add(classe);

 return td;
}

function exibeMensagensDeErro(erros){
 var ul = document.querySelector("#mensagens-erro");
 //apagar após exibir msgs de erro
 ul.innerHTML ="";
 erros.forEach(function(erro){
   var li = document.createElement("li");
   li.textContent = erro;
   ul.appendChild(li);
 });
}

function validaPaciente(paciente){
 //lista de erros - array
 var erros =[];

  if (paciente.nome.length == 0){
   erros.push("O campo nome não pode estar em branco")
  }
  if (paciente.peso.length == 0){
   erros.push("O campo peso não pode estar em branco")
  }
  if (paciente.altura.length == 0){
   erros.push("O campo altura não pode estar em branco")
  }
 if (paciente.gordura.length == 0){
  erros.push("O campo nome não pode estar em branco")
 }

 if (!validaPeso(paciente.peso)){
  erros.push("Peso inválido");
 } 
 if (!validaAltura(paciente.altura)){
  erros.push("Altura inválida");
 } 

 return erros;
} 

