import { useState } from "react";

const InputSection = (props) => {
  const [inputText, setInputText] = useState("");


  const handleClick = (event) => {
    // add the task to our list in App
    if (inputText === "") {
    } else {
      props.setListToDos((currToDo) => {
        const newToDo = { id: currToDo.length, text: inputText };
        return [...currToDo, newToDo];
      });
    }
    // reset the input to be empty
    setInputText("");
  };
  return (
    <div className="place">
      <input 
      className="input-place"
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      ></input>
      <button className="btn-one"  onClick={handleClick}>add</button>
    </div>
  );
};
export default InputSection;
