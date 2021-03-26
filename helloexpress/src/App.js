import { useEffect, useState } from "react";
import View from "./Components/View";
import { getData } from "./fetch";
import "./style/index.scss";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState("a");
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [inputMovies, setInputMovies] = useState("");

  const get = async () => {
    const movieData = await getData();
    setMovies(movieData);
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id,
      isim: name,
      filmler: inputMovies.split(","),
    };

    try {
      await axios.post("http://localhost:5000/aktorler", data);
      alert("Veri Eklendi");
      get();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="website">
      <form onSubmit={handleSubmit}>
        <input type="text" value={id} placeholder="id" onChange={(e) => setId(e.target.value)} />
        <input
          type="text"
          placeholder="isim"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="filmler"
          value={inputMovies}
          onChange={(e) => setInputMovies(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
      <div className="view">
        {loading ? <h1>Yükleniyor...</h1> : <View movies={movies} />}
      </div>
      <div className="add">2</div>
      <div className="delete">c</div>
    </div>
  );
};

export default App;
