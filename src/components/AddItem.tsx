import  { useState } from 'react';
import { useStore } from '../store';

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

export const AddItem = () => {
  const [title, setTitle] = useState('');

  const handleAddItem = () => {
    
    const currentItems = useStore.getState().items;
    const newItem: Item = { id: currentItems.length + 1, title, completed: false };
    
    useStore.setState({ items: [...currentItems, newItem] });
    setTitle('');
  };
  

  return (
    <div className='box-add-item'>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className='btn-add-item'>
      <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
};
