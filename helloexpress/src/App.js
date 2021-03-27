import { useEffect, useState } from "react";
import Add from "./Components/Add";
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
        <Add get={get} />
      </div>
      <div className="view">
        {loading ? <h1>Yükleniyor...</h1> : <View movies={movies} />}
      </div>
      <div className="delete">c</div>
    </div>
  );
};

export default App;
