document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastro-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cadastro realizado com sucesso!");
      form.reset();
    });
  }
});
