import React, {useState} from 'react';
import '../App.css';

function HexConverter() {
  const[hex, setHex] = useState("");
  let[rgb, setRgb] = useState("");

  const changeColor = (evt) => {
    setHex(evt.target.value);
    if(evt.target.value.length === 7) {
      hex2rgb(evt.target.value);
    } 
  }

  const styleColor = {
    background: rgb,
  }

const errorColor = {
 background: "red",
}

  const hex2rgb = (a) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    if (result) {
      setRgb(rgb = `rgb(${parseInt(result[1],16)}, ${parseInt(result[2],16)}, ${parseInt(result[3],16)} )`)
   } else  {
    setRgb(rgb = "Ошибка");
  }
}
  return (
    <main className="App" style={rgb==="Ошибка"? errorColor : styleColor}>
    <div className="Converter">
    <input className="hex" placeholder="Введите HEX" type="text" value={hex} onChange={changeColor}/>
    <div className="rgb" >{rgb}</div>
    </div>
    </main>
  );
}

export default HexConverter;
