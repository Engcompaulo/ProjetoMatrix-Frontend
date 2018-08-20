function Armazenamento(chave){
    if(window.localStorage.getItem(chave) === null)
        window.localStorage.setItem(chave, "[]"); 

        function adicionarParticipante(p){
            var participante = deserializar();
            participante.push(p); 
            serializar(participante);
        }

        function serializar(participante){
            var participantes = JSON.stringify(participante);
            window.localStorage.setItem(chave, participantes);
        }

        function deserializar(){
            return JSON.parse(window.localStorage.getItem(chave));
        }
        
        function editarParticipante(campo, objetoRecebido){
            var participantes = deserializar();
            var index = participantes.findIndex(function(participante){
                return participante[campo] == objetoRecebido[campo];
            });
            participantes[index] = objetoRecebido;
            serializar(participantes);
        }

        function buscarNoLocalStorager(campo, novoValorParametro){
            var participantes = deserializar();
            return participantes.find(function(participante){
                return participante[campo] == novoValorParametro;
            });
        }
        function removerParticipante(emailDoParticipante, email){
            var participantes = deserializar();
            var index = participantes.findIndex((participante) => {
                return participante[emailDoParticipante] == email;
            });
            participantes.splice(index, 1);
            serializar(participantes);
        }
    

    return{
        
        adicionarParticipante, 
        editarParticipante, 
        buscarNoLocalStorager, 
        deserializar, 
        removerParticipante
        
    };
}