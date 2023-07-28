import FeedbackBar from "./Feedback/Feedback";
import StatBlock from "./StatisticFeedback/Statistic";

export const App = () => {
  return (
    <div className="feedbackContainer">
    <FeedbackBar/>
    <StatBlock/>
    </div>
  );
};
