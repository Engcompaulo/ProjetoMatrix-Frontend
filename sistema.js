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
    var buscarNome = [];
    var buscarSexo = [];
    

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
               var removedItem = participantes.splice(i, 1);               
            }
        }      
    }

    function buscarParticipantesPorNome(nome){
        var linhaNome = new Participante();
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].nome == nome ){
                linhaNome.sobrenome = participantes[i].sobrenome;
                linhaNome.idade = participantes[i].idade;
                linhaNome.sexo = participantes[i].sexo;

                buscarNome.push(linhaNome);          
                
            }
        }
        return buscarNome;
    }  

    function buscarParticipantesPorSexo(sexo){
        var linhaSexo = new Participante();
            for(var i=0; i < participantes.length; i++){
                if(participantes[i].sexo == sexo ){
                      linhaSexo.sobrenome = participantes[i].sobrenome;
                      linhaSexo.idade = participantes[i].idade;
                      linhaSexo.sexo = participantes[i].sexo;

                      buscarSexo.push(linhaSexo);
               
               }
             }
        return buscarSexo;
    }

    function buscarParticipantesAprovados(){
        var contAprovados = [];
             for(var i=0; i < participantes.length; i++){
                 if(participantes[i].aprovado == true){
                     contAprovados.push(participantes[i].aprovado);             
                 }
             }
        return contAprovados; 
    }
    
    function buscarParticipantesReprovados(){ 
        var contReprovados = [];     
            for(var i=0; i < participantes.length; i++){
                if(participantes[i].aprovado == false ){
                     contReprovados.push(participantes[i].aprovado)        
                }
               
            } 
        return contReprovados; 
    }

    function obterParticipante(email){
        var linhaObter = new Participante();
            for(var i=0; i < participantes.length; i++){
                if(participantes[i].email == email ){
                     return participantes[i];
                }
            
            }
             

    }
    function adicionarNotaAoParticipante(email, nota){
      for(var i=0; i < participantes.length; i++){
            if(participantes[i].email == email ){
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
        var media = 0;
        var totalNotasParticipantes = 0;
            for(var i=0; i < participantes.length; i++){
                 totalNotasParticipantes = totalNotasParticipantes+participantes[i].nota;
            }
        return media = (totalNotasParticipantes/participantes.length);
       
    }
    
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
    
    function verificarSeParticipanteEstaAprovado(email){
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].email == email){
                return participantes[i];
            }
        }     
            

    }
   
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        var cont = 0;
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].sexo == sexo ){
                cont++;               
            }
        }
        return cont;
    
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