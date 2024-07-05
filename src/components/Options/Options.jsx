// import css from "./Options.module.css";

export default function Options({ onUpdate, reset, totalFeedback }) {
  return (
    <div>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
