import React, { useState } from 'react';
import Header from './components/Header';
import FormCom from './components/Form';
import Result from './components/Result';
import './App.css';
import { createContext } from 'react';

export const cityContext = createContext<any>([]);

function App() {
  const [ city, setCity] = useState('');

  return (
    <cityContext.Provider  value={{ city, setCity }}>
      <div className="App">
        <Header></Header>
        <FormCom></FormCom>
        <Result></Result>
      </div>
    </cityContext.Provider >
  );
}

export default App;
