// criando a variavel mensagem pois ela vai receber várias divs conforme o formulário
var mensagens = document.querySelector(".mensagens");
// criando a variavel formulario pois sera ele que vai receber o evento submit.
var formulario = document.querySelector("#formMensagem");
var nome = document.querySelector("#inputNome");

// criando a função que adiciona uma nova div com o nome e o texto
function adicionarMensagem(){
// Criar a variavel textArea e adicionar a msg(que terá textos diferente)
var textarea = document.querySelector("#textareaMensagem");
// Pegar os textos digitados e mostrar dentro de uma div criada dentro do div mensagens
var div = document.createElement("div");
// Adicionar a classe msg
div.classList.add("mensagem");
// Concatenar informações utilizando os nomes das variaveis. Adicionar a tag para dentro da nova div criada 
div.innerHTML = "<h3>"+nome.value+"</h3><p>"+textarea.value+"</p>";
console.log(div);
// Adicionar a msg na div pai criada
mensagens.appendChild(div);
// cancelar o submit
return false;

// fazendo com que o input do nome fique fazia após cada submissão
textarea.value="";
nome.value="";
}

 

formulario.onsubmit = adicionarMensagem;  

