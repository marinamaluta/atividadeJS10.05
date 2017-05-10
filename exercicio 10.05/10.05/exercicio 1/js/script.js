var tarefas = document.querySelector (".tarefas");
var formulario = document.querySelector("#taskForm");
var textarea = document.querySelector(".inputMensagem");

function criarCard(){
	if(textarea.value != ""){
		var div = document.createElement ("div");
		var valorTextarea = textarea.value;

		div.classList.add("tarefa");
		div.innerHTML = "<h3>"+valorTextarea+"</h3>";

		tarefas.appendChild(div);
		textarea.value = "";
	} else {
		validarCampo();
	}
	return false;
}

formulario.onsubmit = criarCard;

function validarCampo(){
	if(textarea.value == ""){
		textarea.parentNode.classList.add("errado");
	} else {
		textarea.parentNode.classList.remove("errado");
	}
}

textarea.onblur = validarCampo;