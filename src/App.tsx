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

  // handleSubmit関数を定義
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // enterキーでリロードされないようにしておく
    e.preventDefault();
    // 新しいtodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };
    // スプレッド構文を使って既存のtodosにnewTodoを追加する
    setTodos([newTodo, ...todos]);
    // 作成後はフォームの中を空にしておく
    setInputValue("");
  };

  // handleEdit関数を定義
  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map(todo => (
            <li key={todo.id}>
              <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} className="inputText" value={todo.inputValue} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
