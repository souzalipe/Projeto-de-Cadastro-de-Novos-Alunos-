class Aluno {
    constructor(nome, idade, turma, id) {
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
        this.id = id;
    }
}

const paragrafo = document.getElementById("mostrar");
const botao_enviar = document.getElementById("btn-enviar");

function deletarAluno(nome, idade, turma) {
    const alunos = paragrafo.getElementsByTagName('p');
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].getAttribute('data-nome') === nome && 
            alunos[i].getAttribute('data-idade') === idade && 
            alunos[i].getAttribute('data-turma') === turma) {
            paragrafo.removeChild(alunos[i]);
            break;
        }
    }
}

botao_enviar.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("Nome").value;
    const idade = document.getElementById("Idade").value;
    const turma = document.getElementById("Turma").value;
    const id = document.getElementById("iD").value;

    const aluno = new Aluno(nome, idade, turma, id);

    // Verificar se o aluno já existe
    const alunoExistente = document.getElementById(aluno.id);
    if (alunoExistente) {
        alunoExistente.innerHTML = `Nome: ${aluno.nome}<br> Idade: ${aluno.idade}<br> Turma: ${aluno.turma}<br> Código de Identificação: ${aluno.id}<br> 
        <button class="btn_delete" data-nome="${aluno.nome}" data-idade="${aluno.idade}" data-turma="${aluno.turma}"> Deletar </button>`;
    } else {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.id = aluno.id;
        novoParagrafo.setAttribute('data-nome', aluno.nome);
        novoParagrafo.setAttribute('data-idade', aluno.idade);
        novoParagrafo.setAttribute('data-turma', aluno.turma);
        novoParagrafo.innerHTML = `Nome: ${aluno.nome}<br> Idade: ${aluno.idade}<br> Turma: ${aluno.turma}<br> Código de Identificação: ${aluno.id}<br> 
        <button class="btn_delete" data-nome="${aluno.nome}" data-idade="${aluno.idade}" data-turma="${aluno.turma}"> Deletar </button>`;

        paragrafo.appendChild(novoParagrafo);
    }

    // Adicionar evento de clique ao botão "Deletar"
    document.querySelectorAll('.btn_delete').forEach(button => {
        button.addEventListener('click', function () {
            const nome = this.getAttribute('data-nome');
            const idade = this.getAttribute('data-idade');
            const turma = this.getAttribute('data-turma');
            deletarAluno(nome, idade, turma);
        });
    });
});
