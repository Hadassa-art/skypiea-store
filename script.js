function simularCompra() {
  // Preços (iguais aos da página)
  const precoManga = 30;
  const precoChaveiro = 10;
  const precoCamisa = 25;

  // Perguntando as quantidades e transformando em número
  const qtdManga = Number(prompt("Quantos mangás você quer?"));
  const qtdChaveiro = Number(prompt("Quantos chaveiros você quer?"));
  const qtdCamisa = Number(prompt("Quantas camisas você quer?"));

  // Se tudo for zero, avisa e para
  if (qtdManga === 0 && qtdChaveiro === 0 && qtdCamisa === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  // Calculando: preço × quantidade
  const totalManga = precoManga * qtdManga;
  const totalChaveiro = precoChaveiro * qtdChaveiro;
  const totalCamisa = precoCamisa * qtdCamisa;
  const totalCompra = totalManga + totalChaveiro + totalCamisa;

  // Mostrando o resultado
  alert(
    "Mangá: " + qtdManga + " = R$ " + totalManga + ",00\n" +
    "Chaveiro: " + qtdChaveiro + " = R$ " + totalChaveiro + ",00\n" +
    "Camisa: " + qtdCamisa + " = R$ " + totalCamisa + ",00\n" +
    "TOTAL DA COMPRA: R$ " + totalCompra + ",00"
  );
}