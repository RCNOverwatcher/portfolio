import React, { useState } from 'react';

const MedianCalculator = (numlistinput: string) => {
  let numlist = numlistinput.split(/,\s*/).map(Number);
  let median,
    numsLen = numlist.length;
  numlist.sort((a, b) => a - b);

  if (numsLen % 2 === 0) {
    median = (numlist[numsLen / 2 - 1] + numlist[numsLen / 2]) / 2;
  } else {
    median = numlist[(numsLen - 1) / 2];
  }

  return median;
};

const ModeCalculator = (numlistinput: string) => {
  let numlist = numlistinput.split(/,\s*/).map(Number);
  let mode: number | null = null;
  let modeCount = 0;
  let numCount: { [key: number]: number } = {};

  numlist.forEach((num) => {
    if (numCount[num]) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }

    if (numCount[num] > modeCount) {
      mode = num;
      modeCount = numCount[num];
    }
  });

  return mode;
};

export default function Test4() {
  const [numListInput, setNumListInput] = useState('');
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumListInput(event.target.value);
    setMedian(MedianCalculator(event.target.value));
    setMode(ModeCalculator(event.target.value));
  };

  return (
    <div>
      <h1>Median and Mode Calculator</h1>
      <label htmlFor="numListInput">
        Enter a list of numbers (comma-separated):
      </label>
      <input
        type="text"
        id="numListInput"
        value={numListInput}
        onChange={handleInputChange}
      />
      <p>Median: {median}</p>
      <p>Mode: {mode !== null ? mode : 'N/A'}</p>
    </div>
  );
}
