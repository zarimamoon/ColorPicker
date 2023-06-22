// Write your Color component here
import { useState } from 'react';

const Color = ({ color, setSelectedColor }) => {
  return (
<div className={color} onClick={() => setSelectedColor(color)}></div>
); 
};


const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="orange" setSelectedColor={setSelectedColor} />
        <Color color="yellow" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};


export default App;
