document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".botao");
  const abas = document.querySelectorAll(".aba-conteudo");

  function activate(index) {
    botoes.forEach((b) => b.classList.remove("ativo"));
    abas.forEach((a) => (a.style.display = "none"));
    if (botoes[index]) botoes[index].classList.add("ativo");
    if (abas[index]) abas[index].style.display = "block";
  }

  botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => activate(i));
  });

  const initialIndex = Array.from(botoes).findIndex((b) => b.classList.contains("ativo"));
  activate(initialIndex === -1 ? 0 : initialIndex);
});