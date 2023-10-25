
import { useState } from 'react';
import './App.css';
import data from './data';
import List from './list'
function App() {
  const[people, setpeople] = useState(data);
  return (
    <main>
      <section className='container'>
  <h3>{people.length} birthdays today</h3>
  <List people={people}/>
  <button onClick={()=>setpeople([])}>clear all</button>
  </section>
    </main>

  );
}

export default App;
