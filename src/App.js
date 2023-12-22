import React, { useState, useEffect } from 'react';

const TimerToSaturday = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextSaturday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + ((6 - now.getDay() + 7) % 7),
      0, 0, 0
    );
    return nextSaturday.getTime() - now.getTime();
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = () => {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    return `${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;
  };

  return (
    <div>
      <h1>Час до наступної суботи</h1>
      <div>{formatTimeLeft()}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TimerToSaturday />
    </div>
  );
}

export default App;