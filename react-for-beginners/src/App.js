import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // toDo가 빈칸이면 submit이 되지 않게하고, 빈칸이 아니면 submit 후
    // input 칸 비워지게 하기
    if (toDo === "") {
      return;
    }
    // 주의! 객체인 경우는 이렇게!!! 기존값을 포함한 새 객체를 만들어 리턴해야함.
    /* setToDos((currentArray) => {
      const newArray = [toDo, ...currentArray];
      return newArray;
      }); */
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  return (
    <div>
      <h1>내 할 일 ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="작성해주세요."
        />
        <button>To do 추가하기</button>
        <hr />
        <ul>
          {toDos.map((toDo, index) => (
            <li key={index}>{toDo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
