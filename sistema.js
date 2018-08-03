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
     
        if(validarEmail(email)){     
         p.nome = nome;
         p.sobrenome = sobrenome;
         p.email = email;
         p.idade = idade;
         p.sexo = sexo;
         participantes.push(p);
        }
    }
 
    function removerParticipante(email) {
        participantes.forEach(function(participante, indice, pariticipanraASerRemovido){
           if(participante.email === email){ 
            pariticipanraASerRemovido.splice(indice);}
        })
    }
 
    function buscarParticipantesPorNome(nome){
        return participantes.filter(function(participante){  
            return participante.nome == nome;   })
    } 
 
    function buscarParticipantesPorSexo(sexo){
        return participantes.filter(function(participante){  
            return participante.sexo == sexo;   })
    }
 
    function buscarParticipantesAprovados(){
        return participantes.filter(function(participante){  
            return participante.aprovado == true })
    }
   
    function buscarParticipantesReprovados(){
        return participantes.filter(function(participante){  
            return participante.aprovado == false })
    }
 
    function obterParticipante(email){
        return participantes.find(function(participante){ 
            return participante.email == email ;  });       
    }
   
    function adicionarNotaAoParticipante(email, nota){
      participantes.filter(function(participante){
          if(participante.email == email){
              participante.nota = nota;
          }
      })
      participantes.forEach(function(participante){
          if(participante.nota >= 70){
              participante.aprovado = true;
          }else{
            participante.aprovado = false;
          }
      })
          
    } 
    
 
    function obterMediaDasNotasDosParticipantes(){
     const somadorDeNotas = participantes.map(p => p.nota ).reduce(function(somadorNota, valorAtual){
           return   somadorNota + valorAtual;
           })
     return somadorDeNotas/obterTotalDeParticipantes();   
    }
   
    function obterTotalDeParticipantes(){    
        return participantes.length;    
    }
   
    function verificarSeParticipanteEstaAprovado(email){
        return participantes.filter(function(p){  
            return p.aprovado === true && p.email === email});
    }
  
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        var cont = 0;
        if(participantes.find(function(p){return p.sexo === sexo})){
            cont++;
        }
        return cont;
    }
 
    function validarEmail(email){
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].email === email ) throw "email cadastrado";              
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
 
 
 