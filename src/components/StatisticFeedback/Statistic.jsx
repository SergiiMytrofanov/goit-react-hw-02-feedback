import { Component } from "react";

class StatBlock extends Component {
  state = {  }
  render() {
    return (<div className="statContainer">
    <h2 className="statHeader"> Що тутко ми маємо</h2>
    <p className="statValue">Екселент:</p>
    <p className="statValue">Типу того:</p>
    <p className="statValue">Таке собі:</p>
  </div>);
  }
}

export default StatBlock;


// exelent, someLikeThat, soSo
{/* <p className="statValue">{exelent}:</p>
<p className="statValue">{someLikeThat}:</p>
<p className="statValue">{soSo}:</p> */}
