

import { Card } from './Card';
import { useStore } from '../../src/store';


export const List = () => {
  const { items } = useStore();

  return (
    <div className='fondoLista'>
      <h1>Lista de Tareas</h1>
      <div className='cards'>
      {items.map((item) => (
        <Card key={item.id} id={item.id} title={item.title} completed={item.completed} />
      ))}
      </div>
    </div>
  );
};
