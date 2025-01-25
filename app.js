
/*Desafio Amigo secreto*/



let amigos = []; // Lista de amigos
let sorteados = []; // Lista de amigos sorteados


// Função para limpar o campo de entrada
function limparCampo(){
    let entrada = document.querySelector("#nomes");
    entrada.value = "";
}

function adicionarAmigo() {
    let entrada = document.querySelector("#nomes");
    let nomeDosAmigos = entrada.value.trim().toLowerCase(); // Normalizando para minúsculas

    if (nomeDosAmigos === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Dividir os nomes por vírgulas e remover espaços extras
    let nomesArray = nomeDosAmigos.split(",").map(nome => nome.trim());

    for (let nome of nomesArray) {
        if (nome === "") continue; // Pular nomes vazios resultantes de vírgulas extras
        if (amigos.includes(nome)) {
            alert(`O nome ${nome} já foi adicionado.`);
        } else {
            amigos.push(nome);
        }
    }

    exibirListaAmigos(); // Atualiza a lista
    limparCampo(); // Limpa o campo de entrada
}


// Função para exibir a lista de amigos
function exibirListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens

    amigos.sort(); // Ordena em ordem alfabética

    // Cria um novo elemento de lista com os amigos já formatados
    listaAmigos.innerHTML = amigos.join(", ");
}

function exibirListaSorteados() {
    let listaSorteados = document.querySelector("#lista-sorteados");
    listaSorteados.innerHTML = sorteados.join(", ");
}

// Função para sortear um amigo secreto
function sortearAmigo() {

    // Verifica se ainda há amigos disponíveis para o sorteio
    let amigosDisponiveis = amigos.filter(nome => !sorteados.includes(nome));

    if (amigosDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }

    // Sorteia um nome aleatório da lista de amigos disponíveis
    let sorteado = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];

    // Adiciona o nome sorteado à lista de sorteados
    sorteados.push(sorteado);

    // Exibe o nome sorteado no elemento resultado
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado foi: ${sorteado}`;

    exibirListaSorteados(); // Atualiza a lista de sorteados
}


// Função para resetar o sorteio
function resetarSorteio() {
    amigos = []; // Limpa a lista de amigos
    exibirListaAmigos(); // Atualiza a lista na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado do sorteio
}