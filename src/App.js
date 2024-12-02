import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handleadd() {
    setStep((step) => step + 1);
  }
  function handleneg() {
    setStep((step) => step - 1);
  }
  function handlecountadd() {
    setCount((c) => Number(step) + c);
  }
  function handlecountsub() {
    setCount((c) => c - Number(step));
  }
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={handleneg}>-</button>
        <span>Step:{step}</span>
        <button onClick={handleadd}>+</button>
      </div>
      <div>
        <button onClick={handlecountsub}>-</button>
        <span>Count:{count}</span>
        <button onClick={handlecountadd}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${Math.abs(count)} days from today is `
            : `${Math.abs(count)}days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
