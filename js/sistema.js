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

    function buscarParticipantesPorNome(nome) {
        return armazenamento.buscarNoLocalStorager("nome", nome);
    }

    function buscarParticipantesPorSexo(sexo) {
        return armazenamento.buscarNoLocalStorager("sexo", sexo);
    }

    function buscarParticipantesAprovados() {
        return armazenamento.buscarNoLocalStorager("aprovado", true);
    }
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

    function obterMediaDasNotasDosParticipantes() {
        var totalNotas =  participantes.reduce(function (valorAtualParaSomar, valorNotaParticipante) {
             return valorAtualParaSomar + valorNotaParticipante.nota;
         }, 0);
         return totalNotas/participantes.length;
     }

    function obterMediaDasNotasDosParticipantes() {
    var participantes = armazenamento.obterTodosOsItens();

    var totalNotas = participantes.reduce(function(valorAtualParaSomar, valorNotaParticipante){            
        return valorAtualParaSomar + valorNotaParticipante.nota;
    }, 0);

    return totalNotas/obterTotalDeParticipantes();
    }    

    function obterQuantidadeDeParticipantesPorSexo(sexo) {
        return buscarParticipantesPorSexo(sexo).length;

    }

    function obterTotalDeParticipantes(){
    return armazenamento.deserializar().length;
    }

    return {
        
        adicionarParticipante,
        removerParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        obterParticipantes, 
        adicionarNotaAoParticipante,
        obterMediaDasNotasDosParticipantes,
        obterQuantidadeDeParticipantesPorSexo,
        obterTotalDeParticipantes,
    
        
    };
}