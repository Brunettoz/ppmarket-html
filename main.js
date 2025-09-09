// Mostra/oculta campo de endereço se for entrega
function toggleEndereco() {
  const servico = document.getElementById("tipoServico").value;
  const campoEndereco = document.getElementById("enderecoEntrega");
  campoEndereco.classList.toggle("d-none", servico !== "entrega");
}

// Atualiza hora no rodapé
function atualizarHora() {
  const agora = new Date();
  document.getElementById("horaAtual").innerText =
    "Data e hora atual: " + agora.toLocaleString("pt-BR");
}
setInterval(atualizarHora, 1000);
atualizarHora();
