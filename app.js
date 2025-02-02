//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array de amigos
let amigos= [];

function adicionarAmigo(){
    let nomeDeAmigos = document.querySelector('input').value;

    // Validar o campo de entrada
    if(nomeDeAmigos == ''){
        alert('Por favor, insira um nome!');
    }else{
        amigos.push(nomeDeAmigos);
        limparCampo();
        listarAmigos();
        
    }
    
}

// Função para adicionar amigos a lista
function listarAmigos(){
    let lista =document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
            li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para limpar o campo de entrada de nomes
function limparCampo(){
    nomeDeAmigos = document.querySelector('input');
    nomeDeAmigos.value = '';
}