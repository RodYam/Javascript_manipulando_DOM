const lista = document.querySelector("[data-lista]");
const button = querySelectorAll("[data-acao]");

button.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      if (elemento.dataset.acao === "esconderLista") {
        lista.dataset.lista = "esconder";
      } else {
        lista.dataset.lista = "mostrar";
      }
    });
  });
