function adicionarTarefa(lista, texto) {
  if (!texto || texto.trim() === "") {
    return lista;
  }

  return [
    ...lista,
    {
      texto: texto.trim(),
      concluida: false
    }
  ];
}

function concluirTarefa(lista, indice) {
  return lista.map((tarefa, i) => {
    if (i === indice) {
      return {
        ...tarefa,
        concluida: true
      };
    }

    return tarefa;
  });
}

module.exports = {
  adicionarTarefa,
  concluirTarefa
};