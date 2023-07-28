import PropTypes from 'prop-types';

const StatBlock = ({ good, neutral, bad, totalFeed, positiveRate }) => (
  <>
    <h2 className="statHeader">Що тутко ми маємо</h2>
    <p className="statValue">Екселент: {good}</p>
    <p className="statValue">Типу того: {neutral}</p>
    <p className="statValue">Таке собі: {bad}</p>
    <p className="statValue">Загалом: {totalFeed}</p>
    <p className="statValue">Що там у підсумку: {positiveRate.toFixed(2)}&#37;</p>
  </>
);

StatBlock.propTypes ={
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad:PropTypes.number,
  totalFeed:PropTypes.number,

}

export default StatBlock;

