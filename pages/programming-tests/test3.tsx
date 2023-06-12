import React, { useState } from 'react';

type ConsecutiveCharsResult = {
  count: number;
  startIndex: number;
  endIndex: number;
};

const CountConsecutiveChars = (input: string): ConsecutiveCharsResult => {
  let maxCount = 0;
  let currentCount = 1;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        startIndex = i - maxCount + 1;
        endIndex = i;
      }
      currentCount = 1;
    }
  }

  return {
    count: maxCount,
    startIndex,
    endIndex,
  };
};

export default function Test3() {
  const [inputValue, setInputValue] = useState('');
  const { count, startIndex, endIndex } = CountConsecutiveChars(inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Test 3</h1>
      <p>Count consecutive chars</p>
      <input value={inputValue} onChange={handleInputChange} />
      <br />
      <label>Input: </label>
      <p>Output: {count}</p>
      <p>Start Index: {startIndex}</p>
      <p>End Index: {endIndex}</p>
    </div>
  );
}
