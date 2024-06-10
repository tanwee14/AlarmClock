import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [alarmHour, setAlarmHour] = useState('00');
  const [alarmMinute, setAlarmMinute] = useState('00');
  const [isAlarmRinging, setIsAlarmRinging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);

      const currentHour = String(now.getHours()).padStart(2, '0');
      const currentMinute = String(now.getMinutes()).padStart(2, '0');

      if (alarmHour === currentHour && alarmMinute === currentMinute) {
        setIsAlarmRinging(true);
        alert('⏰ Alarm Ringing!');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmHour, alarmMinute]);

  const generateOptions = (range) =>
    [...Array(range).keys()].map((i) => (
      <option key={i} value={String(i).padStart(2, '0')}>
        {String(i).padStart(2, '0')}
      </option>
    ));

  return (
    <div className="container">
      <div className="app">
        <h1>⏰ Alarm Clock</h1>
        <p className="time-display">
          Current Time: {time.toLocaleTimeString('en-GB')}
        </p>

        <div className="dropdowns">
          <label>Set Alarm:</label>
          <div className="dropdown-group">
            <select value={alarmHour} onChange={(e) => setAlarmHour(e.target.value)}>
              {generateOptions(24)}
            </select>
            <span>:</span>
            <select value={alarmMinute} onChange={(e) => setAlarmMinute(e.target.value)}>
              {generateOptions(60)}
            </select>
          </div>
        </div>

        {isAlarmRinging && <p className="alarm-text">🔔 Alarm is ringing!</p>}
      </div>
    </div>
  );
}

export default App;
