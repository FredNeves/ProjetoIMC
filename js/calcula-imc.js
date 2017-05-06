var botaoCalcIMC = document.getElementById("btn-calcular-imc");
botaoCalcIMC.addEventListener("click", function() {
	var trPacientes = document.getElementsByClassName("paciente");

	percorreArray(trPacientes, function(pacienteTr) {
		var peso = pacienteTr.getElementsByClassName("info-peso")[0];
		var nome = pacienteTr.getElementsByClassName("info-nome")[0];
		var altura = pacienteTr.getElementsByClassName("info-altura")[0];

		var paciente = {nome : nome.textContent, 
						peso : peso.textContent, 
						altura : altura.textContent,
						obterIMC : function() {
							if (this.altura > 0) {
								var imcCalculado = this.peso / (this.altura * this.altura);
								return imcCalculado;
							} else {
								console.log("A altura não pode ser igual ou inferior a zero.");
							}	
						}};

		var imc = pacienteTr.getElementsByClassName("info-imc")[0];

		imc.textContent = paciente.obterIMC();

		console.log("IMC:" + imc.textContent);
	});
});