import React, { Component } from "react";
import FeedbackColector from "./Feedback/Feedback";
import StatBlock from "./StatBlock/StatBlock";
import Section from "./Section/Section";
import Notification from "./StatBlock/Notіfication";

import styles from "./App.module.css";

class AppFeedbackStat extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasFeedback: false,
  };

  handleFeedbackClick = (feedbackType, event) => {
    event.preventDefault();
    this.setState(
      (prevState) => ({
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
        hasFeedback: true,
      }),
      () => {
        this.updateChart();
      }
    );
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
    const { good, neutral, bad, hasFeedback } = this.state;

    const totalFeed = good + neutral + bad;
    const positiveRate = this.calculatePositiveRate();

    return (
      <div className={styles.feedbackContainer}>
        <Section>
          <FeedbackColector feedByClick={(type, event) => this.handleFeedbackClick(type, event)} />
        </Section>
        <Section>
          {hasFeedback ? (
            <StatBlock
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeed={totalFeed}
              positiveRate={positiveRate}
            />
          ) : (
            <Notification message="Ви перший, ще немає відгуків" />
          )}
        </Section>
      </div>
    );
  }
}

export default AppFeedbackStat;
