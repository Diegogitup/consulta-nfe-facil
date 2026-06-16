export async function buscarXml(chave) {
  const result = await fetch(
    "http://localhost:3000/api/nfe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chave: chave,
      }),
    }
  );

  const dados = await result.json();

  return dados;
}