import { useState } from 'react';
import CharacterCount from '../../components/CharacterCount';

const CommonCharacterCount = (
  s1: string,
  s2: string,
): Record<string, number> => {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const charCount: Record<string, number> = {};

  s1Arr.forEach((char) => {
    const index = s2Arr.indexOf(char);
    if (index !== -1) {
      // Increment the count for the common character
      charCount[char] = (charCount[char] || 0) + 1;
      s2Arr.splice(index, 1);
    }
  });

  return charCount;
};

const CommonCharacters = (s1: string, s2: string): string => {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let result = '';

  s1Arr.forEach((char) => {
    const index = s2Arr.indexOf(char);
    if (index !== -1) {
      result += char;
      s2Arr.splice(index, 1);
    }
  });

  return result;
};
function ButtonClick(input1: string, input2: string) {
  const result = CommonCharacterCount(input1, input2);
  const result2 = CommonCharacters(input1, input2);
  console.log(result, result2);
}

const CommonCharacterCountComponent = () => {
  const [input1, setInput1] = useState('abcde');
  const [input2, setInput2] = useState('aabbc');
  const result = CommonCharacterCount(input1, input2);
  const result2 = CommonCharacters(input1, input2);

  // Function to handle button click
  const handleClick = () => {
    ButtonClick(input1, input2);
  };

  return (
    <div>
      <h1>Common Characters</h1>
      <p>
        Write a function called CommonCharacters that takes two strings as input
        and returns a string containing the common characters between the two
        strings. The common characters should be returned in the order they
        appear in the first string.
      </p>
      <input
        id="input1"
        onChange={(event) => setInput1(event.target.value)}
        value={input1}
      />
      <br />
      <br />
      <input
        id="input2"
        onChange={(event) => setInput2(event.target.value)}
        value={input2}
      />
      <br />
      <br />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <br />
      <CharacterCount charCount={result} />
      <br />
      <p>Repeated Characters: {result2}</p>
      <br />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Common Characters - Programming Tests' },
  };
}

export default CommonCharacterCountComponent;
