import "./App.css";
import { useState } from "react";
import Header from "./Components/Header.jsx";
import InputSection from "./Components/InputSection";
import TasksSection from "./Components/TasksSection";

function App() {
  const [listToDos, setListToDos] = useState([]);

  return (
    <div className="App">
      <Header />
      <InputSection setListToDos={setListToDos} />
      <TasksSection listToDos={listToDos} setListToDos={setListToDos} />
    </div>
  );
}

export default App;
