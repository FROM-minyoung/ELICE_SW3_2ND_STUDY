import { useEffect, useState } from "react";

/* movie app 만들기 */
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /*
  fetch then,catch 쓸 때
useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
*/

  /*
  async await 쓸 때
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
    );

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

*/

  // 그걸 더 간결하게 쓸 때
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
