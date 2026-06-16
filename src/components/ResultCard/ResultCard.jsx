import "./ResultCard.css";

function ResultCard({ result }) {

  const handleDownloadXml = () => {
    const xmlString = atob(result.xml_base64);

    const blob = new Blob(
      [xmlString],
      { type: "application/xml" }
    );

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${result.chave}.xml`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="resultCard">
      <h4>NF-e Encontrada</h4>
    <div className="statusNfe">
      <p>Status: {result.status}</p>

      <p>Tipo: {result.tipo}</p>
    </div>
      <p>Chave: {result.chave.slice(0, 44)}</p>

      <button className="btnDownload" onClick={handleDownloadXml}>
        Download XML
      </button>
    </div>
  );
}

export default ResultCard;