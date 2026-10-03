import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  return (
    <div className="app">
      <div className="clock-box">
        <h1>Digital Clock ⏰</h1>
        <div className="clock">
          {hours}:{minutes}:{seconds}
        </div>
        <p>Current Time</p>
      </div>
    </div>
  );
}
export default App;
//padStart() JavaScript ka string method hai jo string ke start (left side) 
//par characters add karta hai jab tak string ki desired length na ho jaye
// time → current time ko store karega
// setTime → time ko update karega
// new Date() → abhi ki current date + time deta hai