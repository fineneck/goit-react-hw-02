import { useState, useEffect } from "react";

// import css from "./App.module.css";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [value, setValue] = useState(() => {
    const savedValue = window.localStorage.getItem("KEY");
    return savedValue !== null ? JSON.parse(savedValue) : state;
  });

  const updateFeedback = (feedbackType) => {
    setValue({ ...value, [feedbackType]: value[feedbackType] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem("KEY", JSON.stringify(value));
  }, [value]);

  const resetFeedback = () => {
    setValue({ ...state });
  };

  const totalFeedback = value.good + value.neutral + value.bad;

  const positiveFeedback =
    Math.round(((value.good + value.neutral) / totalFeedback) * 100) || 0;

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        reset={resetFeedback}
      />
      <div>
        {totalFeedback > 0 ? (
          <Feedback
            value={value}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
