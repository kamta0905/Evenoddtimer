
import React, { useState } from "react";
export default function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const cssStyle = {};


  function update() {
    time = new Date().toLocaleTimeString();

    setTime(time);


  }
  setInterval(update, 1000);
  var d = new Date();
  var n = d.getSeconds();

  // console.log(n)
  if (n % 2 === 0) {
    cssStyle.backgroundColor = 'black';
    cssStyle.padding = "400px";


  }
  //

  return (
    <div >
      <h1 >{ctime}</h1>
      <div style={cssStyle}>

      </div>

    </div>

  );
}
