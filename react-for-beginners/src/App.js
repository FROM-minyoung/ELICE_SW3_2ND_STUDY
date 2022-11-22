import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);

  /*
  누군가가 글자를 타이핑 할 때마다 api를 새로 호출한다면,,, 완전 비효율적!
  그럴 때 useEffect를 사용해서 api를 한번만 호출할 수 있지롱 
  해당 키워드가 변할때마다 api를 호출하고 싶은 것... 
  그럴 때 deps 자리에 state를 넣어주면 돼!
  
  즉 해당 state가 변할 때마다 useEffect 콜백함수 실행시켜줌 !@!@!@

  * deps 자리에 빈 배열 들어갔을 때 => 한 번만 실행해줌.
  왜? 리액트가 아무것도 지켜보지 않거든. [] 빈 배열이잖아!
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  * deps 자리에 state가 들어갔을 때 => state가 변경될 때마다 코드를 실행해줌.
  state가 변할 때 코드를 실행할 것이라고 react.js에게 알려주는 것!
  keyword를 계속 지켜보다가 엇 얘 변했어! 하고 변할때마다 실행하는거지~!!~~!~! 

  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);

    useEffect(() => {
    // 그냥 두면 페이지 로드시에도 검색되니까 keyword가 빈칸이 아닐때만 검색하게 하자.
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  */
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("keyword 바뀔 때만 나온다.");
  }, [keyword]);

  useEffect(() => {
    console.log("counter 바뀔 때만 나온다. ");
  }, [counter]);

  useEffect(() => {
    console.log("다 바뀔 때만 나온다. ");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
