/*var salvarDados = function(){
var nome = document.getElementById("nome").value;
var sobrenome = document.getElementById("sobrenome").value;
var email = document.getElementById("email").value;
var idade = document.getElementById("idade").value;
var nota = document.getElementById("nota").value;


console.log(nome +""+ sobrenome +""+email+""+idade+""+nota);

}
document.onchange = salvarDados;
*/
//var y = localStorage.setItem("nome")
//console.log(y)
/*
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("nome");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("nome");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}*/

/*
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('dados', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('dados'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
s
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
*/
/*
//const formulario = document.querySelector('form');
//const ul = document.querySelector('ul');
//const button = document.querySelector('button');
//const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const idade = document.getElementById('idade');
const nota = document.getElementById('nota');
const sexo = document.getElementById('marcarSexo');
*/


$(function(){

$(function(){    
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbParticipantes = localStorage.getItem("tbParticipantes");// Recupera os dados armazenados
    tbParticipantes = JSON.parse(tbParticipantes); // Converte string para objeto
    if(tbParticipantes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    participantes = [];
    
    function Adicionar(){
        var part = GetCliente("Codigo", $("#txtCodigo").val());
    var participante = JSON.stringify({
        Nome         : $("#IdDome").val(),
        sobrenome    : $("#IdSobrenome").val(),
        Email        : $("#IdEmail").val(),
        Idade        : $("#IdIdade").val(),
        Nota         : $("#IdNota").val(),
        Sexo         : $("#IdSexo").val()

    });
    participantes.push(participante);
    localStorage.setItem("tbparticipantes", JSON.stringify(tbParticipantes));
    alert("Registro adicionado.");
    return true;
}
});

function Listar(){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Nome</th>"+
        "   <th>Sobrenome</th>"+
        "   <th>Email</th>"+
        "   <th>Idade</th>"+
        "   <th>Nota</th>"+
        "   <th>Sexo</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbParticipantes){
        var cli = JSON.parse(tbParticipantes[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td><img src='edit.png' alt='"+i+"' class='btnEditar'/><img src='delete.png' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.sobrenome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Idade+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nota+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Sexo+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}

$("#frmCadastro").on("submit",function(){
    if(operacao == "A")
        return Adicionar();       
});


/*
$("#tblListar").on("click", ".btnEditar", function(){
    operacao = "E";
    indice_selecionado = parseInt($(this).attr("alt"));
    var cli = JSON.parse(tbParticipantes[indice_selecionado]);
    $("#IdNome").val(cli.Nome);
    $("#IdSobrenome").val(cli.sobrenome);
    $("#IdEmail").val(cli.Email);
    $("#IdIdade").val(cli.Idade);
    $("#IdNota").val(cli.Nota);
    $("#IdSexo").val(cli.Sexo);
    $("#IdNome").attr("readonly","readonly");
    $("#IdSobrenome").focus();
});

$("#tblListar").on("click", ".btnExcluir", function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    Listar();
});
*/
});