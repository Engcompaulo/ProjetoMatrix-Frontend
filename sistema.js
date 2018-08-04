function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0;
    this.sexo = 0;
    this.nota = 0;
    this.aprovado = false;
}


/***********************
* Representa o sistema
* Uma vez instanciado, deve-se usar essa mesma
* instancia em todas as operações.
*/
function SistemaCadastro() {


    var participantes = [];


    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {
        var p = new Participante();

        if (validarEmail(email)) {
            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;
            participantes.push(p);
        }
    }

    function removerParticipante(email) {
        participantes.forEach(function (p, indice) {
            if (p.email === email) {
                participantes.splice(indice, 1);
            }
        })

    }

    function buscarParticipantesPorNome(nome) {
        return participantes.filter(function (participante) {
            return participante.nome == nome;
        })
    }

    function buscarParticipantesPorSexo(sexo) {
        return participantes.filter(function (participante) {
            return participante.sexo == sexo;
        })
    }

    function buscarParticipantesAprovados() {
        return participantes.filter(function (participante) {
            return participante.aprovado
        })
    }

    function buscarParticipantesReprovados() {
        return participantes.filter(function (participante) {
            return participante.aprovado == false
        })
    }

    function obterParticipante(email) {
        return participantes.find(function (participante) {
            return participante.email == email;
        });
    }

    function adicionarNotaAoParticipante(email, nota) {
        participantes.filter(function (participante) {
            if (participante.email === email && nota >= 70) {
                participante.nota = nota;
                participante.aprovado = true;
            }
        })


    }

    function obterMediaDasNotasDosParticipantes() {
        return participantes.reduce(function (valorNotaParticipante, valorAtualDaSoma) {
            return valorNotaParticipante.nota + valorAtualDaSoma.nota;
        }) / obterTotalDeParticipantes();
    }

    function obterTotalDeParticipantes() {
        return participantes.length;
    }

    function verificarSeParticipanteEstaAprovado(email) {
        if (obterParticipante(email).aprovado == true) {
            return true;
        }
    }

    function obterQuantidadeDeParticipantesPorSexo(sexo) {
        var totalDeParticipantesPorSexo = 0;

        if (buscarParticipantesPorSexo(sexo) != null) {
            totalDeParticipantesPorSexo++;
            buscarParticipantesPorSexo(sexo);
        }
        return totalDeParticipantesPorSexo;

    }

    function validarEmail(email) {
        for (var i = 0; i < participantes.length; i++) {
            if (participantes[i].email == email) throw "email cadastrado";
        }
        return true;
    }


    return {
        adicionarParticipante,
        removerParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        adicionarNotaAoParticipante,
        obterMediaDasNotasDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo
    };
}


