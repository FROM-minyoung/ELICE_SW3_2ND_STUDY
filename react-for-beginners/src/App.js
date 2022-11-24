import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/*
v6 버전
Routes(Switch) -> Route를 찾음. 여기서 Route=> http://localhost:3000 >>/movie/123 <<
Route를 찾으면 컴포넌트를 렌더링함.

Link - 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
*/

/* movie app 만들기 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
