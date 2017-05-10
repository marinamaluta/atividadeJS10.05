var formularioElement = document.querySelector("#taskForm");
 
function adicionarTarefa(){
	if(textareaElement.value !=""){
		// criar tarefa
		var divElement = document.createElement("div");	
		divElement.classList.add("tarefa");
		divElement.innerHTML = '<h3>'+textareaElement.value+'</h3>'
					+'<div class="botoes linha">'
						+'<button class="botao feito">'
							+'<i class="fa fa-check"></i>'
						+'</button>'
						+'<button class="botao remover">'
							+'<i class="fa fa-close"></i>'
						+'</button>'
					+'</div>';
		var tarefasElement = document.querySelector(".tarefas");
		tarefasElement.appendChild(divElement);
	
		// fim criar a tarefa
		var botaoChecarElement = divElement.querySelector(".botao.feito");
		function checar(){
			var tarefaElement = this.parentNode.parentNode;	
			if(tarefaElement.classList.contains("feito")){
			   tarefaElement.classList.remove("feito");
			}else{
				tarefaElement.classList.add("feito");
			}

		}
		botaoChecarElement.onclick = checar;

		var botaoRemoverElement = divElement.querySelector(".botao.remover");
		function remover(){
			var tarefaElement = this.parentNode.parentNode;
			tarefaElement.remove();
		}
		botaoRemoverElement.onclick = remover;
	}else{
		textareaElement.parentNode.classList.add("errado");
	}
	return false;
}

formularioElement.onsubmit = adicionarTarefa;

var textareaElement = document.querySelector(".inputMensagem");
function validarPreenchimento(){
	if(textareaElement.value != ""){
		textareaElement.parentNode.classList.remove("errado");
	}else{
		textareaElement.parentNode.classList.add("errado");
	}
}
textareaElement.onblur = validarPreenchimento;