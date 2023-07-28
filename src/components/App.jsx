import React, { Component } from "react";
import FeedbackColector from "./Feedback/Feedback";
import StatBlock from "./StatisticFeedback/Statistic";

class AppFeedbackStat extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = (feedbackType) => {
    this.setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  calculatePositiveRate = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    if (totalFeedback === 0) {
      return 0;
    }
    return (good / totalFeedback) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeed = good + neutral + bad;
    const positiveRate = this.calculatePositiveRate();

    return (
      <>
        <FeedbackColector feedByClick={this.handleFeedbackClick} />
        <StatBlock
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeed={totalFeed}
          positiveRate={positiveRate}
        />
      </>
    );
  }
}

export default AppFeedbackStat;
