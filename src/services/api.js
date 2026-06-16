export async function buscarXml(chave) {
  console.log("Chamando backend...");

  const response = await fetch(
    "https://consulta-nfe-facil-back.onrender.com/api/nfe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chave }),
    }
  );

  console.log("Status:", response.status);

  const dados = await response.json();

  console.log("Dados recebidos:", dados);

  return dados;
}