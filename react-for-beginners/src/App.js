import { useState, useEffect } from "react";

function Hello() {
  /* create 될 때는 return 전 함수, destroyed 될 때는 return 후 함수! 함수다 함수가 와야해! 

    useEffect(() => {
    console.log("create :) ");
    return () => console.log("destroyed X(");
  }, []);

  */

  // 이런식으로 익명함수 말고 미리 만들어둔 함수를 적을 때는
  // destroyed 될 때 그 함수 안에 return된 값이 나타난다

  function byFn() {
    console.log("bye :)");
  }
  function hiFn() {
    console.log("hi :)");
    return byFn; // destroyed 될 때 나타날 함수
  }

  useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

function App() {
  /* cleanup */
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((current) => !current);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
    </div>
  );
}

export default App;
