var botao = document.querySelector("#btn-add-paciente");

botao.addEventListener("click", function(event) {

	event.preventDefault(); // Impede que form seja submetido.

	var campoNome = document.querySelector("#inputNome");
	var campoPeso = document.querySelector("#inputPeso");
	var campoAltura = document.querySelector("#inputAltura");

	var trPacientes = document.getElementsByClassName("paciente");

	var trPaciente = "<tr class='paciente'>"+				      
				      "<td class='info-nome'>"+ campoNome.value +"</td>"+
				      "<td class='info-peso'>"+ campoPeso.value +"</td>"+
				      "<td class='info-altura'>"+ campoAltura.value +"</td>"+
				      "<td class='info-imc'></td>"+
				     "</tr>";

	var tabela = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + trPaciente;

	campoAltura.value = "";
	campoPeso.value = "";
	campoNome.value = "";
})