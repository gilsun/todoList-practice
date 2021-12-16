import "./App.css";
import { useState } from "react";
//import components
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoListStatus, setTodoListStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Gilsun's Todo List </h1>
      </header>
      <InputForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setTodoListStatus={setTodoListStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
