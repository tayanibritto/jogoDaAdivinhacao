// variáveis
const numeroAleatorio = Math.floor(Math.random() * 100) +1;
let numeroTentativas = 10;
let correto = false;

//função principal
function jogar () {
    const numeroJogador = parseInt(document.getElementById("numeroChute").value);

    if (isNaN(numeroJogador) || numeroJogador < 1 || numeroJogador > 100) {
        document.getElementById("mensagens").textContent = "Favor seguir as regras e digitar um número de 1 a 100.";
        return;
    }

    numeroTentativas--;

    if (numeroJogador === numeroAleatorio) {
        document.getElementById("mensagens").textContent = `Você acertou! O número gerado foi ${numeroAleatorio}.`;
        document.getElementById("tentativasRestantes").textContent = `Parabéns! Você acertou faltando ${numeroTentativas} tentativa(s)!`;
        correto = true;
        document.getElementById("numeroChute").disabled = true;
        document.getElementById("chutar").disabled = true;

    }
    else if (numeroTentativas === 0) {
        document.getElementById("mensagens").textContent = `Você perdeu! O número secreto era ${numeroAleatorio}.`;
        document.getElementById("tentativasRestantes").textContent = `Suas tentativas acabaram. Mais sorte da próxima vez!`;
        document.getElementById("numeroChute").disabled = true;
        document.getElementById("chutar").disabled = true;
    }
    else if (numeroJogador < numeroAleatorio) {
        document.getElementById("mensagens").textContent = `O número secreto é maior.`;
        document.getElementById("tentativasRestantes").textContent = `Você ainda possui  ${numeroTentativas} tentativa(s).`;
    }
    else {
        document.getElementById("mensagens").textContent = `O número secreto é menor.`;
        document.getElementById("tentativasRestantes").textContent = `Você ainda possui  ${numeroTentativas} tentativa(s).`;    
    }
}

//função para atualizar a página para jogar novamente
function recomecar() {
    location.reload();
}



