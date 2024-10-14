import "./App.css";
import data from "../data.json";
import logoMatana from "./assets/FA_Logo-Matana-University-(2)-copy-new A 1.png";
import footerImg from "./assets/foot.png";
import { useEffect, useState } from "react";

const SortWorker = new Worker(new URL("./sortWorker.js", import.meta.url));

function App() {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    console.log("Sending data to worker:", data); // Log saat mengirim data ke worker
    // Kirim data ke Web Worker untuk diproses
    SortWorker.postMessage(data);

    // Terima data yang sudah di-sort dari Web Worker
    SortWorker.onmessage = e => {
      console.log("Received sorted data from worker:", e.data); // Log data yang diterima dari worker
      setSortedData(e.data);
    };

    // Cleanup worker saat komponen unmount
    return () => {
      SortWorker.terminate();
    };
  }, []);

  console.log(sortedData);

  return (
    <>
      {sortedData.length > 0 ? ( // Tampilkan jika ada data
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
                  src={d.foto ? d.foto : "src.jpg"}
                  alt="fiola image"
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
