// Declaração de variáveis para armazenar a lista de amigos e a lista de sorteados
let amigos = []; // Lista de amigos
let sorteados = []; // Lista de amigos sorteados

// Função para limpar o campo de entrada
function limparCampo(){
    let entrada = document.querySelector("#nomes");  // Seleciona o campo de entrada pelo ID "nomes"
    entrada.value = ""; // Limpa o valor do campo de entrada
}

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let entrada = document.querySelector("#nomes"); // Seleciona o campo de entrada
    let nomeDosAmigos = entrada.value.trim().toLowerCase(); // Normaliza a entrada para minúsculas

    // Verifica se o campo de entrada está vazio
    if (nomeDosAmigos === "") {
        alert("Por favor, insira um nome."); // Exibe um alerta se o campo estiver vazio
        return;
    }

    // Divide os nomes inseridos por vírgulas e remove espaços extras
    let nomesArray = nomeDosAmigos.split(",").map(nome => nome.trim());

    // Itera sobre os nomes inseridos
    for (let nome of nomesArray) {
        if (nome === "") continue; // Pula nomes vazios que podem ocorrer devido a vírgulas extras
        // Verifica se o nome já foi adicionado à lista
        if (amigos.includes(nome)) {
            alert(`O nome ${nome} já foi adicionado.`); // Exibe um alerta se o nome já existe na lista
        } else {
            amigos.push(nome); // Adiciona o nome à lista de amigos
        }
    }

    exibirListaAmigos(); // Atualiza a exibição da lista de amigos
    limparCampo(); // Limpa o campo de entrada após a adição
}

/* vesão diferente

// Função para exibir a lista de amigos na tela
function exibirListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); // Seleciona o elemento onde a lista será exibida
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.sort(); // Ordena a lista de amigos em ordem alfabética

    // Exibe os nomes dos amigos em uma lista separada por vírgulas
    listaAmigos.innerHTML = amigos.join(", ");
}

// Função para exibir a lista de sorteados na tela
function exibirListaSorteados() {
    let listaSorteados = document.querySelector("#lista-sorteados"); // Seleciona o elemento onde a lista de sorteados será exibida
    listaSorteados.innerHTML = sorteados.join(", "); // Exibe os nomes sorteados, separados por vírgulas
}*/


// Função para exibir a lista de amigos na tela
function exibirListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos"); // Seleciona o elemento onde a lista será exibida
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.sort(); // Ordena a lista de amigos em ordem alfabética

    // Itera pela lista de amigos e cria um elemento <li> para cada um
    amigos.forEach((amigo) => {
        let li = document.createElement("li"); // Cria um elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o <li> à lista
    });
}

// Função para exibir o último amigo sorteado na tela
function exibirUltimoSorteado() {
    let resultado = document.querySelector("#resultado"); // Seleciona o elemento onde o sorteado será exibido
    resultado.textContent = `${sorteados[sorteados.length - 1]}`; // Exibe apenas o último sorteado
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Filtra os amigos que ainda não foram sorteados
    let amigosDisponiveis = amigos.filter(nome => !sorteados.includes(nome));

    // Verifica se ainda há amigos disponíveis para o sorteio
    if (amigosDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados."); // Exibe um alerta se todos já foram sorteados
        return;
    }

    // Sorteia um amigo aleatoriamente da lista de amigos disponíveis
    let sorteado = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];

    // Adiciona o amigo sorteado à lista de sorteados
    sorteados.push(sorteado);

    exibirUltimoSorteado(); // Exibe apenas o último sorteado
}

// Função para resetar o sorteio e limpar a lista
// Função para resetar o sorteio e limpar a lista
function resetarSorteio() {
    amigos = []; // Limpa a lista de amigos
    sorteados = []; // Limpa a lista de sorteados
    exibirListaAmigos(); // Atualiza a exibição da lista de amigos
    let resultado = document.getElementById("resultado"); // Seleciona o elemento onde o resultado será exibido
    resultado.innerHTML = ""; // Limpa o conteúdo do resultado do sorteio
}