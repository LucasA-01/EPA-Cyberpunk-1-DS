const comando = document.querySelector('.comando');
const resposta = document.querySelector('.resposta');
const tela = document.querySelector('.jogo')

function scroll() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

comando.addEventListener('keydown', (event) => {
    
    if (event.key === "Enter") {
        
        event.preventDefault()
        
        if (comando.value === "F" || comando.value === "f") {
            comando.value = "";
            resposta.innerHTML += `<div class="erro">Você é fraco(a) demais para essa missão!</div><br>`;
            setTimeout(() => {
                document.body.innerHTML = `<img class="tela" src="../ASSETS/IMG/desestiu.gif">`;
                setTimeout(() => {
                    location.href = "../index.html"
                }, 1000)
            }, 1500)
            scroll()
        }
        else {
            comando.value = "";
            resposta.innerHTML += `<div class="erro">\nOpção inválida!</div> <br>`;
            scroll()
        }
    }
})
