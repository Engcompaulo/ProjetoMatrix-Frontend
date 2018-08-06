$(function(){

	var operacao = "A"; //"A"=Adição; "E"=Edição
	var indice_selecionado = -1;
	var tbParticipantes = localStorage.getItem("tbParticipantes");// Recupera os dados armazenados
	tbParticipantes = JSON.parse(tbParticipantes); // Converte string para objeto

	if(tbParticipantes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
        tbParticipantes = [];

	function Adicionar(){
		var part = GetParticipante("Email", $("#IdEmail").val());

		if(part != null){
			alert("Código já cadastrado.");
			return;
        }
        

		var participante = JSON.stringify({
            Nome         : $("#IdNome").val(),
            sobrenome    : $("#IdSobrenome").val(),
            Email        : $("#IdEmail").val(),
            Idade        : $("#IdIdade").val(),
            Nota         : $("#IdNota").val(),
            Sexo : $("input[name='marcarSexo']:checked").val()
     
            
    
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
									 	 "	<td scope='row'>"+part.Nome+"</td>" + 
										 "	<td scope='row'>"+part.sobrenome+"</td>" + 
										 "	<td scope='row'>"+part.Email+"</td>" + 
                                         "	<td scope='row'>"+part.Idade+"</td>" + 
                                         "	<td scope='row'>"+part.Nota+"</td>" + 
                                         "	<td scope='row'>"+part.Sexo+"</td>" + 
		  								 "</tr>");
		 }
	}
/*
	function Excluir(){
		tbClientes.splice(indice_selecionado, 1);
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		alert("Registro excluído.");
	}
*/
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

	$("#frmCadastro").on("submit",function(){
		if(operacao == "A")
			return Adicionar();
		//else
		//	return Editar();		
	});

	$("#tblListar").on("click", ".btnEditar", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var part = JSON.parse(tbParticipantes[indice_selecionado]);
		$("#IdNome").val(part.Nome);
		$("#IdSobrenome").val(part.Sobrenome);
		$("#IdEmail").val(part.Email);
        $("#IdIdade").val(part.Idade);
        $("#IdNota").val(part.Nota);
        $("#IdSexo").val(part.Sexo);
		$("#IdEmail").attr("readonly","readonly");
		$("#txtNome").focus();
	});

	$("#tblListar").on("click", ".btnExcluir", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		//Excluir();
		Listar();
	});
});