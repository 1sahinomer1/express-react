function View({ movies }) {
  return (
    <div>
      <h2>View</h2>
      {movies && (
        <>
          {movies.map((movie) => {
            return (
              <div className="listMovie">
                <p>Author id: {movie.id}</p>
                <p>Movie Name: {movie.isim}</p>
                <p>Movies : {movie.filmler}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default View;
