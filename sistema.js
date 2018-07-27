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
              
        p.nome = nome;
        p.sobrenome = sobrenome;
        p.email = email;
        p.idade = idade;
        p.sexo = sexo;
       
        for(var i=0; i < participantes.length; i++){
                if(participantes[i].email == email ) throw "email cadastrado";               
        }     
        participantes.push(p);
    }

    function removerParticipante(email) {
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].email == email ){
               var removerParticipanteDoEmail = participantes.splice(i, 1);               
            }
        }      
    }

    function buscarParticipantesPorNome(nome){
        var buscarParticipantesPorNomeRetorno = [];
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].nome === nome ){
                buscarParticipantesPorNomeRetorno.push(participantes[i]);
                
            }
        }
        return buscarParticipantesPorNomeRetorno;

    }  

    function buscarParticipantesPorSexo(sexo){
        var buscarParticipantesPorSexoRetorno = [];
            for(var i=0; i < participantes.length; i++){
                if(participantes[i].sexo === sexo ){
                    buscarParticipantesPorSexoRetorno.push(participantes[i]);
               
               }
             }
        return buscarParticipantesPorSexoRetorno;
    }

    function buscarParticipantesAprovados(){
        var contagemDeParticipantesAprovados = [];
             for(var i=0; i < participantes.length; i++){
                 if(participantes[i].aprovado === true){
                    contagemDeParticipantesAprovados.push(participantes[i].aprovado);             
                 }
             }
        return contagemDeParticipantesAprovados; 
    }
    
    function buscarParticipantesReprovados(){ 
        var contagemDeparticipantesReprovados = [];     
            for(var i=0; i < participantes.length; i++){
                if(participantes[i].aprovado === false ){
                    contagemDeparticipantesReprovados.push(participantes[i].aprovado)        
                }
               
            } 
        return contagemDeparticipantesReprovados; 
    }

    function obterParticipante(email){
            for(var i=0; i < participantes.length; i++){
                if(participantes[i].email == email ){
                     return participantes[i];
                }
            
            }             

    }
    
    function adicionarNotaAoParticipante(email, nota){
      for(var i=0; i < participantes.length; i++){
            if(participantes[i].email === email ){
                   participantes[i].nota = nota;
                   if(nota >= 70){
                    participantes[i].aprovado = true;
                   }else{
				    participantes[i].aprovado = false;
				   }
            }
        }
        
    }

    function obterMediaDasNotasDosParticipantes(){
        var totalNotasParticipantes = 0;
            for(var i=0; i < participantes.length; i++){
                 totalNotasParticipantes = totalNotasParticipantes+participantes[i].nota;
            }
        return (totalNotasParticipantes/participantes.length);
       
    }
    
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
    
    function verificarSeParticipanteEstaAprovado(email){
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].email === email){
                return participantes[i];
            }
        }     
            

    }
   
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        var quantidadeDeParticipantesPorSexo= 0;
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].sexo === sexo ){
                quantidadeDeParticipantesPorSexo++;               
            }
        }
        return quantidadeDeParticipantesPorSexo;
    
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
