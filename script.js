class Aluno {
    constructor(nome,idade,turma,id){
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

botao_enviar.addEventListener('click', (e) =>{
    e.preventDefault()
    const nome = document.getElementById("Nome").value
    const idade = document.getElementById("Idade").value
    const turma = document.getElementById("Turma").value
    const id = document.getElementById("iD").value
    
    const aluno = new Aluno(nome, idade, turma, id);

    // Criar um novo elemento de parágrafo para exibir os detalhes do aluno novo 
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerHTML = `Nome: ${aluno.nome}<br> Idade: ${aluno.idade}<br> Turma: ${aluno.turma}<br> Código de Identificação: ${aluno.id}`;

    // Adicionar o novo parágrafo à seção de exibição de alunos
    paragrafo.appendChild(novoParagrafo);
})

botao_deletar.addEventListener('click', (e) => {
    e.preventDefault();

    // Verifica se há algum parágrafo na seção de exibição
    if (paragrafo.lastChild) {
        // Remove o último parágrafo que exibe os detalhes do último aluno cadastrado
        paragrafo.removeChild(paragrafo.lastChild);
        // Atualiza a variável do último aluno cadastrado para null aparece o alert
        ultimoAlunoCadastrado = null;
    } else {
        alert("Nenhum aluno cadastrado para deletar.");
    }
});


