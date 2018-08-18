
$(function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
   var indice_selecionado = -1;
   var tbParticipantes = localStorage.getItem("tbParticipantes");// Recupera os dados armazenados
   tbParticipantes = JSON.parse(tbParticipantes); // Converte string para objeto
    if(tbParticipantes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
       tbParticipantes = [];
    function Adicionar(){
       var part = GetParticipante("email", $("#email").val());
        if(part != null){
           alert("Código já cadastrado.");
           return;
       }
       
        var participante = JSON.stringify({
           nome         : $("#nome").val(),
           sobrenome    : $("#sobrenome").val(),
           email        : $("#email").val(),
           idade        : $("#idade").val(),
           nota         : $("#nota").val(),
           sexo : $("input[name='marcarSexo']:checked").val()
    
           
   
       });
        tbParticipantes.push(participante);
       
        localStorage.setItem("tbParticipantes", JSON.stringify(tbParticipantes));
        alert("Registro adicionado.");
       return true;
   }
    function Listar(){
       $("#tblListar").html("");
       $("#tblListar").html(
           "<thead>"+
           "   <tr>"+
           "   <th scope='col'>Nome</th>"+
           "   <th scope='col'>Sobrenome</th>"+
           "   <th scope='col'>Email</th>"+
           "   <th scope='col'>Idade</th>"+
           "   <th scope='col'>Nota</th>"+
           "   <th scope='col'>Sexo</th>"+
           "   </tr>"+
           "</thead>"+
           "<tbody>"+
           "</tbody>"
           );
         for(var i in tbParticipantes){
           var part = JSON.parse(tbParticipantes[i]);
             $("#tblListar tbody").append("<tr>"+
                                        "	<td scope='row'>"+part.nome+"</td>" + 
                                        "	<td scope='row'>"+part.sobrenome+"</td>" + 
                                        "	<td scope='row'>"+part.email+"</td>" + 
                                        "	<td scope='row'>"+part.idade+"</td>" + 
                                        "	<td scope='row'>"+part.nota+"</td>" + 
                                        "	<td scope='row'>"+part.sexo+"</td>" + 
                                        "</tr>");
                                        $("#tblListar tbody").append("<td><img src='./img/faviconedi.ico' alt='"+i+"' class='btnEditar'/><img src='./img/favicon.ico' alt='"+i+"' class='btnExcluir'/></td>");
        }
   }

   function Excluir(){
       tbParticipantes.splice(indice_selecionado, 1);
       localStorage.setItem("tbParticipantes", JSON.stringify(tbParticipantes));
       alert("Registro excluído.");
   }

   function GetParticipante(propriedade, valor){
       var part = null;
       for (var item in tbParticipantes) {
           var i = JSON.parse(tbParticipantes[item]);
           if (i[propriedade] == valor)
               part = i;
       }
       return part;
   }
    Listar();
    $("#formulario").on("submit",function(){
       if(operacao == "A")
           return Adicionar();
       //else
       //	return Editar();		
   });
    $("#tblListar").on("click", ".btnEditar", function(){
       operacao = "E";
       indice_selecionado = parseInt($(this).attr("alt"));
       var part = JSON.parse(tbParticipantes[indice_selecionado]);
       $("#IdNome").val(part.nome);
       $("#IdSobrenome").val(part.sobrenome);
       $("#IdEmail").val(part.email);
       $("#IdIdade").val(part.idade);
       $("#IdNota").val(part.nota);
       $("#IdSexo").val(part.sexo);
       $("#IdEmail").attr("readonly","readonly");
       $("#txtNome").focus();
   });
    $("#tblListar").on("click", ".btnExcluir", function(){
       indice_selecionado = parseInt($(this).attr("alt"));
       Excluir();
       Listar();
   });
}); 