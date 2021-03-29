import { useEffect, useState } from "react";
import Add from "./Components/Add";
import Filter from "./Components/Filter";
import View from "./Components/View";
import { getData } from "./fetch";
import "./style/index.scss";

const App = () => {
  const [movies, setMovies] = useState("a");
  const [loading, setLoading] = useState(true);

  const get = async () => {
    const movieData = await getData();
    setMovies(movieData);
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="website">
      <div className="add">
        <h3
          style={{ textAlign: "center", color: "white", marginBottom: "1em" }}
        >
          Add Data
        </h3>
        <Add get={get} />
      </div>
      <div className="view">
        {loading ? <h1>Yükleniyor...</h1> : <View movies={movies} />}
      </div>
      <div className="delete">
        <Filter movies={movies} />
      </div>
    </div>
  );
};

export default App;
