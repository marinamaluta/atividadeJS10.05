//adicionar tarefa e validar erro
var tarefas = document.querySelector(".tarefas");
var formulario = document.querySelector("#taskForm");
var textarea = document.querySelector(".inputMensagem");

function criarTarefas() {
	if(textarea.value != ""){
		var div = document.createElement("div");
		var valortextarea = textarea.value;
		
		div.classList.add("tarefa");
		div.innerHTML = "<h3>"+textarea.value+"</h3>"+"<div class='botoes linha'><button class='botao feito'><i class='fa fa-check'></i></button></div>";

		tarefas.appendChild(div);


		var botao = div.querySelector(".botao.feito");
		botao.onclick = checarTarefa;

	}else{
		adicionarErro();
	}

	textarea.value="";
	return false;
}

formulario.onsubmit = criarTarefas;

function adicionarErro() {
	if (textarea.value == "") {
	textarea.parentNode.classList.add("errado");
	}else{
		textarea.parentNode.classList.remove("errado");
	}
}

textarea.onblur = adicionarErro;
//fim adicionar tarefa e validar erro

// cor do card
//ao clicar no card, vai validar o card e mudar de cor

function checarTarefa() {
	var tarefa = this.parentNode.parentNode;
	if (tarefa.className != "tarefa feito"){
		tarefa.classList.add("feito");
	}else{
		tarefa.classList.remove("feito");
	}
}