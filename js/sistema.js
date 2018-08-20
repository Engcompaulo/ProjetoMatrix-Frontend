//Objeto Participante
function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0
    this.sexo = 0
    this.nota = 0
    this.aprovado = false
}

/***********************
 * Representa o sistema
 * Uma vez instanciado, deve-se usar essa mesma
 * instancia em todas as operações.
*/


function SistemaCadastro() {

    const armazenamento = new Armazenamento("participantes");
    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {
        var p = new Participante();

        if (obterParticipante(email)) {
           throw new Error ("Email cadastrado");
           
       }else{
            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;
            armazenamento.adicionarParticipante(p);
      }
        
    }

    function removerParticipante(email) {
            var participante = obterParticipante(email);
            armazenamento.removerParticipante(participante.email, email);
            window.location.reload(true);
    }

    function atualizarParticipante(nome, sobrenome, email, idade, sexo, nota){
		var participante = obterParticipante(email);    
        participante = {nome,sobrenome,email,idade,sexo};
        adicionarNotaAoParticipante(participante, nota);

        armazenamento.editarParticipante(participante, "email");
	}


/*	
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

	*/
    function buscarParticipantesReprovados(){
	    return armazenamento.buscarNoLocalStorager("aprovado", false);
    }
	
    function obterParticipante(email){
	    return armazenamento.buscarNoLocalStorager("email", email);
    }

    function obterParticipantes(){
    	return armazenamento.deserializar();
    }
      
 
    function adicionarNotaAoParticipante(email, nota){
        var participante = obterParticipante(email);
        participante.nota = nota;
        if (nota >= 70) {
            participante.aprovado = true;
        }
	    armazenamento.editarParticipante("email", participante);
    }

    function atualizarParticipante(nome, sobrenome, email, idade, sexo, nota){
		var participante = obterParticipante(email);
        participante = {nome,sobrenome,email,idade,sexo};
        adicionarNotaAoParticipante(email, nota);
        armazenamento.editarParticipante(participante, "email");
	}


    /*
    function obterMediaDasNotasDosParticipantes() {
       var totalNotas =  participantes.reduce(function (valorAtualParaSomar, valorNotaParticipante) {
            return valorAtualParaSomar + valorNotaParticipante.nota;
        }, 0);
        return totalNotas/participantes.length;
    }
	
    function verificarSeParticipanteEstaAprovado(email) {
        if (obterParticipante(email).aprovado === true) {
            return true;
        }
    }

	function obterQuantidadeDeParticipantesPorSexo(sexo) {
         return buscarParticipantesPorSexo(sexo).length;
    }

   */
    function obterTotalDeParticipantes(){
    return armazenamento.deserializar().length;
    }

    return {
        removerParticipante,
        adicionarParticipante,
        obterParticipantes, 
        adicionarNotaAoParticipante,
        buscarParticipantesReprovados,
        obterParticipante,
        obterTotalDeParticipantes,
        atualizarParticipante
        
    };
}
