import React from 'react';

interface CharacterCountProps {
  charCount: Record<string, number>;
}

const CharacterCount: React.FC<CharacterCountProps> = ({ charCount }) => {
  return (
    <div>
      <h2>Character Count</h2>
      <ul>
        {Object.entries(charCount).map(([char, count]) => (
          <li key={char}>
            Character: {char}, Count: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCount;
