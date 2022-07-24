import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Count from './Count';
import store from './store';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Counter />
      

      </header>
      <hr/>
      <h1>First Example Redux</h1>
      <Count store={store}/>
    </div>
  );
}

export default App;
