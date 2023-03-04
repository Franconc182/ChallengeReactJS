import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cat, setCat] = useState();

  const handleSubmit = (e) =>{
    axios.get("https://some-random-api.ml/animal/cat")//uso axios para llamar a la API y luego seteo la respuesta
    .then((res) =>{
    setCat(res);
    });
  }

  useEffect(() =>{ //useEffect para que se ejecute la funcion y se vaya actualizando
    handleSubmit()
  }, []);

  return (
    <section className="main-container">
      <div className="div-container">
        <span>{cat?.data.fact} </span>
        <img className="img-animal" src={cat?.data.image} alt="gato" />
        <button onClick={handleSubmit}>Next fact</button>
      </div>
    </section>
  );
}

export default App;
