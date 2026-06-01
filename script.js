let tarefas = [];

const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

const total = document.getElementById("total");
const pendentes = document.getElementById("pendentes");
const concluidas = document.getElementById("concluidas");

function atualizarTela() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, indice) => {
    const item = document.createElement("li");
    item.classList.add("tarefa");

    item.innerHTML = `
      <div class="info-tarefa">
        <input 
          type="checkbox" 
          class="checkbox"
          ${tarefa.concluida ? "checked" : ""}
          onclick="concluirTarefaTela(${indice})"
        >

        <span class="texto-tarefa ${tarefa.concluida ? "concluida" : ""}">
          ${tarefa.texto}
        </span>
      </div>

      <div class="acoes">
        <span class="status ${tarefa.concluida ? "concluida" : "pendente"}">
          ${tarefa.concluida ? "Concluída" : "Pendente"}
        </span>

        <button class="btn-excluir" onclick="excluirTarefa(${indice})">
          🗑
        </button>
      </div>
    `;

    listaTarefas.appendChild(item);
  });

  atualizarContadores();
}

function adicionarTarefaTela() {
  const texto = inputTarefa.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  tarefas.push({
    texto,
    concluida: false
  });

  inputTarefa.value = "";
  atualizarTela();
}

function concluirTarefaTela(indice) {
  tarefas[indice].concluida = true;
  atualizarTela();
}

function excluirTarefa(indice) {
  tarefas.splice(indice, 1);
  atualizarTela();
}

function atualizarContadores() {
  const totalTarefas = tarefas.length;
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
  const tarefasPendentes = totalTarefas - tarefasConcluidas;

  total.textContent = totalTarefas;
  pendentes.textContent = tarefasPendentes;
  concluidas.textContent = tarefasConcluidas;
}

btnAdicionar.addEventListener("click", adicionarTarefaTela);

inputTarefa.addEventListener("keypress", function(evento) {
  if (evento.key === "Enter") {
    adicionarTarefaTela();
  }
});

atualizarTela();