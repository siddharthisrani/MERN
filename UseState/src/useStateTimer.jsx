import { useState } from "react";

let App=()=> {
  const [text, setText] = useState("Wait...");

  const start = () => {
    setTimeout(() => {
      setText("Time's up");
    }, 3000); // 3 seconds
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={start}>Start Timer</button>
    </div>
  );
}

export default App