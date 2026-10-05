let registros = JSON.parse(localStorage.getItem("tarefas")) || [];

const formulario = document.getElementById("formulario");
const tarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");
const limpar = document.getElementById("limpar");

function mostrarTarefas() {
    lista.innerHTML = "";

    for (const registro of registros) {
        const item = document.createElement("li");

        item.textContent = registro.nome;

        lista.appendChild(item);
    }
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const registro = {
        nome: tarefa.value
    };

    registros.push(registro);

    localStorage.setItem("tarefas", JSON.stringify(registros));

    tarefa.value = "";

    mostrarTarefas();
});

limpar.addEventListener("click", function () {
    registros = [];

    localStorage.setItem("tarefas", JSON.stringify(registros));

    mostrarTarefas();
});

mostrarTarefas();