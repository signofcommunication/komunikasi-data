import "./App.css";
import data from "../data.json";
import logoMatana from "./assets/FA_Logo-Matana-University-(2)-copy-new A 1.png";
import footerImg from "./assets/foot.png";
import { useEffect, useState } from "react";

const SortWorker = new Worker(new URL("./sortWorker.js", import.meta.url));

function App() {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Kirim data ke Web Worker untuk diproses
    SortWorker.postMessage(data);

    // Terima data yang sudah di-sort dari Web Worker
    SortWorker.onmessage = e => {
      setSortedData(e.data);
    };

    // Cleanup worker saat komponen unmount
    return () => {
      SortWorker.terminate();
    };
  }, []);

  return (
    <>
      {sortedData.length > 0 ? (
        sortedData.map((d, i) => (
          <div key={i}>
            <div className="container">
              <div className="head">
                <img
                  src={logoMatana}
                  alt="logo-matana"
                  className="logo-matana"
                />
                <img
                  src={
                    d.foto
                      ? d.foto
                      : "data:image/jpeg;base64,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"
                  }
                  alt={`${d.foto} image`}
                  className="foto-mahasiswa"
                />
              </div>
              <div className="main">
                <h3 className="mahasiswa">{d.namamahasiswa}</h3>
                <h3 className="prodi">{d.programstudi}</h3>
                <h4 className="nim">student code : {d.nim}</h4>
              </div>
              <div className="footer">
                <img src={footerImg} alt="" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p> // Tampilkan pesan saat data belum ada
      )}
    </>
  );
}

export default App;
