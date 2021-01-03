import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('')


  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <div>
        {
          error && (
            <div data-test='error-msg'>
              {error}
            </div>
          )
        }
      </div>
      <button
        onClick={(e) => {
          setError('')
          setCount(count + 1)
        }} data-test='increment-button'
      >
        Increment
      </button>
      <button
        onClick={() => {
          setError('')
          if (count > 0) {
            setCount(count - 1)
          }

          if (count === 0) {
            setError("You can't decrement below 0")
          }
        }}
        data-test='decrement-button'
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
