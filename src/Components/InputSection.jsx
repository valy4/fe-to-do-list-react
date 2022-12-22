const InputSection = (props) => {
  const handleClick = (event) => {
      // add the task to our list in App
    if (props.inputText === "") {
    } else {
      props.setListToDoes([props.inputText, ...props.listToDoes]);
    }
    // reset the input to be empty
    props.setInputText("");
  };
  return (
    <div>
      <input
        type="text"
        value={props.inputText}
        onChange={(event) => props.setInputText(event.target.value)}
      ></input>

      <button onClick={handleClick}>add</button>
    </div>
  );
};
export default InputSection;
