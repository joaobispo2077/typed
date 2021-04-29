import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/index';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <Counter initialValue={0}/>
    </div>
  );
}

export default App;
