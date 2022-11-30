import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css";

const Detail = () => {
  // Parameter 값 가져오는 라우터-돔에서 제공해주는 useParams 함수!
  // read/1 => useParams값은 {id: '1'}
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  // Detail 컴포넌트가 실행되면, 영화 상세정보를 알 수 있는 api로 요청을 보내고
  // 영화상세정보를 가지고 올 것임.
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieDetail(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieDetail);
  return (
    <div>
      <div
        className="detail__img"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgb(255, 255, 255, 1) 10%,
            rgb(255, 255, 255, 0.75) 25%,
            rgb(255, 255, 255, 0.5) 50%,
            rgb(255, 255, 255, 0.25) 75%,
            rgb(255, 255, 255, 0) 100%
          ), 
          url(${movieDetail.background_image})`,
        }}
      >
        <div className="detail__title">DETAIL</div>
      </div>
      <div className="movie_header">
        <h2>{movieDetail.title_long}</h2>
      </div>
      <div className="movie_contents">
        <img
          className="movie_contents_img"
          src={`${movieDetail.large_cover_image}`}
        />
        <div>
          <span>Rating </span>
          <span>{movieDetail.rating}/10</span>
          <p>{movieDetail.description_full}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
