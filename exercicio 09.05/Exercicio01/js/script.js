var mensagens = document.querySelector(".mensagens");
var formulario = document.querySelector("#formMensagem");

function adicionarMensagem() {
	console.log("ta funfando!");

	// Pegar a informação digitada

	var textarea = document.querySelector("#textareaMensagem");
	//console.log(textarea.value);
	// Mostrar em forma de msg na div ".mensagens"
	// criar div no js
	var div = document.createElement("div");
	//console.log(div);
	// Adicionar a classe mensagem
	div.classList.add("mensagem");
	// Adicionar a tag <p></p> dentro dela
	div.innerHTML = "<p>"+textarea.value+"</p>";
	// .innerHTML acrescenta a string do HTML
	// A div ainda está no limbo, para isso, é necessário:
	// Colocar a div criada na ".mensagens"
	mensagens.appendChild(div);
	textarea.value="";



	return false;
};


formulario.onsubmit = adicionarMensagem;
//.on sempre é um evento. Uma ação que ele sofre.