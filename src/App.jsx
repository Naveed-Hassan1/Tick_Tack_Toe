import { useState } from "react";
import "./styler.css";
const App = () => {

  let [count, setcounter] = useState(1);
  let [win, setwinner] = useState({ win: false, winner: "" });
  let [restart, setrestart] = useState(false);
  function restarter()
  {
    for(var i =1;i<=9;i++)
    {
      var target = document.getElementById(i);
      target.innerText = "";
      target.classList.remove("blue");
      target.classList.remove("red");
      setwinner({win:false,winner:""});
    }
  }
  const handler = (val) => {
    const value = val.target.id;
    const target = document.getElementById(value);

    if (target.innerText == "X" || target.innerText == "O" || win.win) return;
    //Prevents overriding

    if (count % 2 === 0) {
      target.innerText = "X";
      target.classList.add("red");
    }
    else {
      target.innerText = "O";
      target.classList.add("blue");

    }
    setcounter(count + 1);

    //Function to return value 
    const getText = (id) => document.getElementById(id).innerText;
    const winningCombos = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // cols
      [1, 5, 9], [3, 5, 7]             // diagonals
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo.map(id => getText(id));
      if (a !== "" && a === b && b === c) {
        setwinner({ win: true, winner: a });
        break;
      }
    }
  };

  return (
    <div className="outer">
      <div className="box">
        <div className="innerbox">
          <div className="boxes" id="1" onClick={handler}></div>
          <div className="boxes" id="2" onClick={handler}></div>
          <div className="boxes" id="3" onClick={handler}></div>
        </div>
        <div className="innerbox">
          <div className="boxes" id="4" onClick={handler}></div>
          <div className="boxes" id="5" onClick={handler}></div>
          <div className="boxes" id="6" onClick={handler}></div>
        </div>
        <div className="innerbox">
          <div className="boxes" id="7" onClick={handler}></div>
          <div className="boxes" id="8" onClick={handler}></div>
          <div className="boxes" id="9" onClick={handler}></div>
        </div>
      </div>
      {
        win.win ?
          <div className="Winnername">
            {
              <>
                <h3>Winner ICON : {win.winner} 
                  <span onClick={restarter} id="winner-icon" className="fa fa-repeat"></span>
                </h3>
              </>
            }
          </div> : null
      }


    </div>
  );
};

export default App;
