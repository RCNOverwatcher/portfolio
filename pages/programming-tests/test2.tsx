import React, { useState, useEffect } from 'react';

const RegularFibonacci = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib;
};

const RecursiveFibonacci = (n: number) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const sequence = RecursiveFibonacci(n - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2],
    );
    return sequence;
  }
};

const FibonacciPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [fib, setFib] = useState<number[]>([]);
  const [useRecursive, setUseRecursive] = useState(false);
  const [limitNumbers, setLimitNumbers] = useState(true);

  const calculateFibonacci = () => {
    if (inputValue) {
      if (useRecursive) {
        console.log('Calculating Recursive Fibonacci...');
        const start = Date.now();
        const fibonacci = RecursiveFibonacci(Number(inputValue));
        const end = Date.now();
        const elapsed = end - start;
        console.log(`Recursive Fibonacci calculated in ${elapsed} ms`);
        setFib(fibonacci);
      } else {
        console.log('Calculating Regular Fibonacci...');
        const start = Date.now();
        const fibonacci = RegularFibonacci(Number(inputValue));
        const end = Date.now();
        const elapsed = end - start;
        console.log(`Regular Fibonacci calculated in ${elapsed} ms`);
        setFib(fibonacci);
      }
    }
  };

  useEffect(() => {
    calculateFibonacci();
  }, [inputValue, useRecursive]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === 'useRecursive') {
      setUseRecursive(checked);
    } else if (name === 'limitNumbers') {
      setLimitNumbers(checked);
    }
  };

  const isValidInput = (value: string) => {
    if (limitNumbers) {
      const num = Number(value);
      return num >= 1 && num <= 10;
    }
    return true;
  };

  return (
    <div>
      <h1>Fibonacci</h1>
      <p>
        <b>Write a function that returns the first n Fibonacci numbers.</b>
      </p>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min={limitNumbers ? '1' : undefined}
      />
      <br />
      <label htmlFor="input1">
        <input
          type="checkbox"
          name="limitNumbers"
          checked={limitNumbers}
          onChange={handleToggleChange}
        />{' '}
        Limit numbers to 1-10
      </label>
      <br />
      <label htmlFor="input2">
        <input
          type="checkbox"
          name="useRecursive"
          checked={useRecursive}
          onChange={handleToggleChange}
        />{' '}
        Use Recursive Fibonacci
      </label>
      <br />
      {!isValidInput(inputValue) && <p>Invalid input</p>}
      {fib.length > 0 && isValidInput(inputValue) && (
        <div>
          <p>Result:</p>
          <ul>
            {fib.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// @ts-ignore
export default FibonacciPage;
