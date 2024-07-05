// import css from "./Feedback.module.css";

export default function Feedback({
  value: { good, neutral, bad },
  positiveFeedback,
  totalFeedback,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}
