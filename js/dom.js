var sistema = new SistemaCadastro();

let nome = "";
let sobrenome = "";
let email = "";
let idade = 0;
let nota = 0;
let sexo = 0;


function excluirParticipante(email){
	sistema.removerParticipante(email);
	tblListar();
	window.location.reload(true);
}


window.onload = function () {
    tblListar();
};


function tblListar() {
    var total = sistema.obterTotalDeParticipantes();
    document.getElementById("total").innerHTML += total;
    sistema.obterParticipantes().forEach(function (participantes) {
    document.getElementById("tblListar").innerHTML +=
        "<td>" + participantes.nome +
        "</td><td> " + participantes.sobrenome +
        "</td><td>" + participantes.idade +
        "</td><td>" + participantes.sexo +
        "</td><td>" + participantes.nota +
        "</td><td>" + participantes.aprovado +
        "</td><td>" +
        "<a href='javascript:void(0)' onclick='editarDadosParticipante(\'" + participantes.email + "\')'>Editar</a>" +
        " " + 
        '<a href="javascript:void(0)" onclick="excluirParticipante(\'' + participantes.email + '\')">Excluir</a>' + '</td></tr>'+
        "</td></tr>"
    });

}

function checarSexo() {
    var sexo = document.querySelectorAll(".sexo");
    if (sexo[0].checked) {
        sexoSelecionado = 1;
    }else {
        sexoSelecionado = 2;
    }
    return sexoSelecionado;
}

function recuperarDados() {
    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;
    email = document.getElementById("email").value;
    idade = document.getElementById("idade").value;
    nota = document.getElementById("nota").value;
    sexo = checarSexo();
}

(function () {
    'use strict';

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
            
            recuperarDados()
            sistema.adicionarParticipante(nome, sobrenome, email, idade, sexo);
            sistema.adicionarNotaAoParticipante(email, nota);
            Listar()
            window.location.reload(true);

            }

                
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
