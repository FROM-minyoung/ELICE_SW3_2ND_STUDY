import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "./../components/Movie";

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

  return (
    <div>
      <h1>Detail</h1>
      <h2>{movieDetail.title_long}</h2>
      <img src={`${movieDetail.large_cover_image}`} />
      <p>{movieDetail.description_full}</p>
    </div>
  );
};

export default Detail;
