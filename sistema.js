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

        if (obterParticipante(email)) {
            throw new Error ("email cadastrado");
           
        }else{
            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;
            participantes.push(p);
        }
        
    }

    function removerParticipante(email) {
        participantes.forEach(function (participante, indice, arrayParticipante) {
            if(obterParticipante(email) === participante) {          
                arrayParticipante.splice(indice, 1);
            }
            return false
        })
        

    }

    function buscarParticipantesPorNome(nome) {
        return participantes.filter(function (participante) {
            return participante.nome === nome;
        })
    }

    function buscarParticipantesPorSexo(sexo) {
        return participantes.filter(function (participante) {
            return participante.sexo === sexo;
        });
    }

    function buscarParticipantesAprovados() {
        return participantes.filter(function (participante) {
            return participante.aprovado;
        });
    }

    function buscarParticipantesReprovados() {
        return participantes.filter(function (participante) {
            return participante.aprovado === false
        });
    }

    function obterParticipante(email) {
        return participantes.find(function (participante) {
            return participante.email === email;
        });
    }

    function adicionarNotaAoParticipante(email, nota) {
        participantes.filter(function (participante) {
            if (participante.email === email && nota >= 70) {
                participante.nota = nota;
                participante.aprovado = true;
            }
        });

    }

    function obterMediaDasNotasDosParticipantes() {
       var totalNotas =  participantes.reduce(function (valorAtualParaSomar, valorNotaParticipante) {
            return valorAtualParaSomar + valorNotaParticipante.nota;
        }, 0);
        return totalNotas/participantes.length;
    }

    function obterTotalDeParticipantes() {
        return participantes.length;
    }

    function verificarSeParticipanteEstaAprovado(email) {
        if (obterParticipante(email).aprovado === true) {
            return true;
        }
    }

    function obterQuantidadeDeParticipantesPorSexo(sexo) {
         return buscarParticipantesPorSexo(sexo).length;
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


