document.addEventListener("DOMContentLoaded", () => {
  const sendEmailLink = document.getElementById("send_email");
  const form = document.getElementById("contact_form");

  sendEmailLink.addEventListener("click", (event) => {
    event.preventDefault();

    // Captura os valores do formulário
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validação básica
    if (!name || name.length < 3) {
      alert("O nome deve ter pelo menos 3 caracteres.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Digite um email válido.");
      return;
    }
    if (!message) {
      alert("A mensagem não pode estar vazia.");
      return;
    }

    // Cria o link mailto
    const mailtoLink = `mailto:luizh4321@gmail.com?subject=Nova mensagem de ${encodeURIComponent(
      name
    )}&body=Nome: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMensagem: ${encodeURIComponent(message)}`;

    // Atualiza o link e aciona o clique
    sendEmailLink.href = mailtoLink;
    sendEmailLink.click();
  });
});
