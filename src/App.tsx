import React, { useState } from 'react';
import './App.css';

function App() {
  // フォームに打ち込まれた文字を取得、初期値は空
  const [inputValue, setInputValue] = useState("");
  // useStateにTodo型を指定、初期値は空配列
  const [todos, setTodos] = useState<Todo[]>([]);

  // 型エイリアス
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  // handleChange関数を定義
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト</h2>
        <form onSubmit={() => {}}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
          <input type="submit" value="作成" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default App;
