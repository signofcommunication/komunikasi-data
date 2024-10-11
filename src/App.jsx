import "./App.css";
import data from "../data.json";
import logoMatana from "./assets/FA_Logo-Matana-University-(2)-copy-new A 1.png";
import footerImg from "./assets/foot.png";

function App() {
  console.log(data);

  return (
    <>
      {data.map((d, i) => (
        <div key={i}>
          <div className="container">
            <div className="head">
              <img src={logoMatana} alt="logo-matana" className="logo-matana" />
              <img src={d.foto} alt="fiola image" className="foto-mahasiswa" />
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
      ))}
    </>
  );
}

export default App;
