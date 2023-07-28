import {Component} from "react";

class FeedbackBar extends Component {
  state = {  }
  render() {
    return (
      <div className="statisticContainer">
      <h2 className="statisticHeader">Просимо залишити ваш відчугук</h2>
      <button type="button" className="feedbackButton">Екселент</button>
      <button type="button" className="feedbackButton">Типу того</button>
      <button type="button" className="feedbackButton">Таке собі</button>
    </div>
    );
  }
}

export default FeedbackBar;
