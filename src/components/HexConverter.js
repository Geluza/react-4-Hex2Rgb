import React, {useState} from 'react';
import '../App.css';

function HexConverter() {
  const[hex, setHex] = useState("");
  let[rgb, setRgb] = useState("");

  const changeColor = (evt) => {
    setHex(evt.target.value);
    if(hex.length === 7) hex2rgb(hex);
  }

  const styleColor = {
    background: hex,
  }

  const hex2rgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      setRgb(rgb = `rgb(${parseInt(result[1],16)}, ${parseInt(result[2],16)}, ${parseInt(result[3],16)} )`)
   } else {
    setRgb(rgb = "Ошибка")
  }
}
  return (
    <main className="App" style={styleColor}>
    <div className="Converter">
    <input className="hex" type="text" value={hex} onChange={changeColor}/>
    <div className="rgb">{rgb}</div>
    </div>
    </main>
  );
}

export default HexConverter;
