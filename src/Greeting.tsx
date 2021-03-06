import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>ㅋㅋ</p>}
      <div>
        <button onClick={handleClick}>
          버튼
        </button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: '!'
}

export default Greetings;