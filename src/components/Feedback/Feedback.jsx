
import PropTypes from 'prop-types';

const FeedbackColector = ({ feedByClick }) => (
  <div className="statisticContainer">
    <h2 className="statisticHeader">Вам сподобалося у нас &#9829;</h2>
    <button type="button" className="feedbackButton" onClick={() => feedByClick("good")}>
      Так ;)
    </button>
    <button type="button" className="feedbackButton" onClick={() => feedByClick("neutral")}>
     Тай таке :)(
    </button>
    <button type="button" className="feedbackButton" onClick={() => feedByClick("bad")}>
      Ні :(
    </button>
  </div>
);

FeedbackColector.propTypes ={
  feedByClick: PropTypes.func.isRequired,
}

export default FeedbackColector;
