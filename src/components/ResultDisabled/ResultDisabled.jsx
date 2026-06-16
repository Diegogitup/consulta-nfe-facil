import "./ResultDisabled.css";
import "../ResultCard/ResultCard.css";

function ResultDisabled() {
  return (
    <div className="resultDisabled">
      
        <h4>NF-e Encontrada</h4>
        <div className="statusNfe">
          <p>Status:</p>

          <p>Tipo:</p>
        </div>
        <p>Chave: </p>

        <button className="btnDownloadDsisabled" disabled>
          Download XML
        </button>
      
    </div>
  );
}

export default ResultDisabled;
