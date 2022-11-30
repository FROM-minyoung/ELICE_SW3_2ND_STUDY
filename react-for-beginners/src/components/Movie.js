import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

// summary 의 maximum length 만들기
const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div className="movie">
      <div className="movie_img_div">
        <img className="movie_img" src={coverImg} alt={title} />
      </div>
      <h2>
        <Link
          className="movie_title"
          to={`${process.env.PUBLIC_URL}/movie/${id}`}
        >
          {title}
        </Link>
      </h2>
      <ul className="movie_genres">
        {genres.map((g) => (
          <li className="movie_genre" key={g}>
            {g}
          </li>
        ))}
      </ul>
      <p className="movie_summary">
        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
      </p>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
