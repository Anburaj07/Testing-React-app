import React from 'react'

const TimeConversion = ({milliseconds}) => {
    if (typeof milliseconds !== 'number' || isNaN(milliseconds) || milliseconds < 0) {
        throw new Error('Invalid input. Please provide a non-negative number of milliseconds.');
      }
    
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
    
      const timeParts = [];
      if (hours > 0) {
        timeParts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
      }
      if (minutes % 60 > 0) {
        timeParts.push(`${minutes % 60} ${minutes % 60 === 1 ? 'minute' : 'minutes'}`);
      }
      if (seconds % 60 > 0 || (hours === 0 && minutes === 0)) {
        timeParts.push(`${seconds % 60} ${seconds % 60 === 1 ? 'second' : 'seconds'}`);
      }
    
      // return timeParts.join(' ');
      let ans=timeParts.join(' ');
  return (
    <div>
      <h1 data-testId="timer">{ans}</h1>
    </div>
  )
}

export default TimeConversion
