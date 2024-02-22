import React, { useState } from 'react';

interface CardProps {
  id: number;
  title: string;
  completed: boolean;
}

export const Card: React.FC<CardProps> = ({ id, title, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const cardColor = isCompleted ? 'green' : 'red';

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <div style={{ backgroundColor: cardColor }}>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Completed: {isCompleted ? 'Yes' : 'No'}</p>
      </div>
      <button onClick={handleToggle}>Completed</button>
    </>
  );
};
