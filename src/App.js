
import './App.css';
import { useState } from "react"
import Header from './Components/Header.jsx';
import InputSection from './Components/InputSection';
import Counter from './Components/Counter';
import TasksSection from './Components/TasksSection';



function App() {
  const [inputText, setInputText] = useState("")
  const [listToDoes, setListToDoes] = useState([])

  return (
    <div className="App">
      <Header/>
      <InputSection  setListToDoes = {setListToDoes} listToDoes={listToDoes} inputText={inputText} setInputText = {setInputText} />
      <Counter listToDoes={listToDoes}/>
      <TasksSection  listToDoes={listToDoes}/>
      
    </div>
  );
}

export default App;
