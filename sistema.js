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
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].email == email ){
               var removerParticipanteDoEmail = participantes.splice(i, 1);              
            }
        }     
    }
 
    function buscarParticipantesPorNome(nome){
        return participantes.filter(function(p){  return p.nome == nome;   })
    } 
 
    function buscarParticipantesPorSexo(sexo){
        return participantes.filter(function(p){  return p.sexo == sexo;   })
    }
 
    function buscarParticipantesAprovados(){
        return participantes.filter(function(p){  return p.aprovado == true })
    }
   
    function buscarParticipantesReprovados(){
        return participantes.filter(function(p){  return p.aprovado == false })
 
 
    }
 
    function obterParticipante(email){
        return participantes.find(function(p){ return p.email == email ;  });       
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
        
      const somadorDeNotas = participantes.map(p => p.nota ).reduce(function(somadorNota, valorAtual){
      return   somadorNota + valorAtual;

       })
       return somadorDeNotas/obterTotalDeParticipantes();
        
    }
   
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
   
    function verificarSeParticipanteEstaAprovado(email){
        return participantes.filter(function(p){  return p.aprovado == true && p.email == email});
           
 
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
 
    function validarEmail(email){
        for(var i=0; i < participantes.length; i++){
            if(participantes[i].email == email ) throw "email cadastrado";              
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
 
 
 