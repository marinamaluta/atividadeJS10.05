var formulario = document.querySelector("#formMensagens");
var mensagens = document.querySelector(".mensagens");


function adicionarMensagem(){
var textarea = document.querySelector("#textareaMensagem");
var nome = document.querySelector("#inputNome");

if(nome.value != && textareaMensagem.value !=""){
	var div = document.createElement("div");
	div.classList.add("mensagem");

	div.innerHTML = "<h3>"+nome.value+"</h3><p>"+textarea.value+"</p>";

	mensagens.appendChild(div);

	textarea.value="";
	nome.value="";

	nome.parentNode.classList.remove("errado");
	textarea.parentNode.classList.remove("errado");
	
	textarea.value="";
	nome.value="";
}else{
		if(nome.value =="");{
		nome.parentNode.classList.remove("errado");
		return true;
	}
}

