class Aluno {
    constructor(nome, idade, turma, id) {
        this.nome = nome
        this.idade = idade
        this.turma = turma
        this.id = id
    }
}


const paragrafo = document.getElementById("mostrar")

const botao_enviar = document.getElementById("btn-enviar")
const botao_editar = document.getElementById("btn-editar")
const botao_deletar = document.getElementById("btn-deletar")

function deletarAluno(id) { // remove o elemento da tela 
    console.log(document.getElementById(id))
    paragrafo.removeChild(document.getElementById(id))
}

botao_enviar.addEventListener('click', (e) => {
    e.preventDefault()
    const nome = document.getElementById("Nome").value
    const idade = document.getElementById("Idade").value
    const turma = document.getElementById("Turma").value
    const id = document.getElementById("iD").value

    const aluno = new Aluno(nome, idade, turma, id);


    if (document.getElementById(aluno.id)) {
        document.getElementById(aluno.id).innerHTML = `Nome: ${aluno.nome}<br> Idade: ${aluno.idade}<br> Turma: ${aluno.turma}<br> Código de Identificação: ${aluno.id}<br> 
        <button id="btn_delete_${aluno.id}"> Deletar </button>`
    } else {
        // Criar um novo elemento de parágrafo para exibir os detalhes do aluno novo 
        const novoParagrafo = `<p id="${aluno.id}"> Nome: ${aluno.nome}<br> Idade: ${aluno.idade}<br> Turma: ${aluno.turma}<br> Código de Identificação: ${aluno.id}<br> 
 <button id="btn_delete_${aluno.id}"> Deletar </button> </p>`;

        // pega o que ja tem no HTML e adiciona o paragrafo fo aluno 
        paragrafo.innerHTML += novoParagrafo
    }


    const deleteBtn = document.getElementById("btn_delete_" + aluno.id)  // busca o id do aluno 

    //remove o elemento da tela 
    deleteBtn.addEventListener('click', function () { deletarAluno(aluno.id) })





})



