import { useEffect } from 'react';
import { useStore } from './store';
import { fetchData } from '../src/api';
import { List } from './components/List';
import {AddItem} from './components/AddItem';

export const App = () => {
  const setItems = useStore((state) => state.setItems);

  useEffect(() => {
    fetchData().then((data) => {
      setItems(data);
    });
  }, [setItems]);

  return (
    <div>
      <h1>Todo List</h1>
      <div className='boxes'>
      <List />
      <div className='itemAdd'>
      <AddItem />
      </div>
      </div>
    </div>
  );
};
