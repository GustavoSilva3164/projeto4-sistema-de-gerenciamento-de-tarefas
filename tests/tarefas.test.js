const { adicionarTarefa, concluirTarefa } = require("../src/tarefas");

test("Adicionar tarefa válida", () => {
  const lista = adicionarTarefa([], "Estudar JavaScript");

  expect(lista.length).toBe(1);
  expect(lista[0].texto).toBe("Estudar JavaScript");
  expect(lista[0].concluida).toBe(false);
});

test("Adicionar tarefa vazia", () => {
  const lista = adicionarTarefa([], "");

  expect(lista.length).toBe(0);
});

test("Concluir tarefa", () => {
  const lista = adicionarTarefa([], "Criar projeto com CRUD");
  const resultado = concluirTarefa(lista, 0);

  expect(resultado[0].concluida).toBe(true);
});