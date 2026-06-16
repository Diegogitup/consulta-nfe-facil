import "./InputNfe.css";
import { useState } from "react";
import { buscarXml } from "../../services/api";
import ResultCard from "../ResultCard/ResultCard";

function InputNfe({ resultDisabled }) {
  const [chave, setChave] = useState("");
  const [erro, setErro] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const valor = event.target.value;

    const chaveLimpa = valor.replace(/\D/g, "").slice(0, 44);

    setChave(chaveLimpa);

    if (erro) {
      setErro("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!chave) {
      setErro("Informe uma chave de acesso.");
      return;
    }

    if (chave.length !== 44) {
      setErro("A chave deve possuir exatamente 44 dígitos.");
      return;
    }
    setErro("");

    const resposta = await buscarXml(chave);

    setResult(resposta);
    resultDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit} className="conteinerBtn">
      <input
        type="text"
        placeholder="Digite a chave de acesso (44 caracteres)"
        type="text"
        value={chave}
        onChange={handleChange}
        required
      />

      <button className="btnBuscar">Buscar</button>

      {erro && <p className="textError">{erro}</p>}
      {result && (<ResultCard result={result} />)}
    </form>
  );
}

export default InputNfe;
