const comando = document.querySelector('.comando');
const resposta = document.querySelector('.resposta');
const apagar = document.querySelector('.apagar');
const body = document.body

comando.addEventListener('keydown', function(event) {
    
    // Captura o clique da tecla Enter
    if (event.key === "Enter") {
        
        // Impede que a página recarregue acidentalmente
        event.preventDefault(); 
        
        const opcao = comando.value;
        
        // Executa a resposta baseada na opção digitada
        switch (opcao) {
            case "1":
            comando.value = "";
            resposta.innerHTML = `\nAbrindo Missão... <br>`;
            setTimeout(() => {
                body.value = "";
                body.style.backgroundColor = "white";
                document.querySelector('input').style.backgroundColor = "white";
                setTimeout(() => {
                    body.style.backgroundColor = "#000";
                    document.querySelector('input').style.backgroundColor = "#000";
                    resposta.innerHTML = `\nBem vindo... <br>`;
                }, 500)
            }, 1000)
            break;
            
            case "2":
            comando.value = "";
            setTimeout(() => {
                body.value = "";
                body.style.backgroundColor = "white";
                document.querySelector('input').style.backgroundColor = "white";
                setTimeout(() => {
                    body.style.backgroundColor = "#000";
                    document.querySelector('input').style.backgroundColor = "#000";
                }, 500)
            }, 1000)
            resposta.innerHTML = `\nAbrindo Missão... <br>`;
            break;
            
            default:
            comando.value = "";
            resposta.innerHTML = `\nOpção inválida! <br>`;
        }
                    
        // Limpa o campo de texto para a próxima digitação

        // Rola automaticamente a caixa para o fim, mantendo o histórico visível
        resposta.scrollTop = resposta.scrollHeight;
    }
});
