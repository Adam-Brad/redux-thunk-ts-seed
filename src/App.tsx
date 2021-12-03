import React from 'react';
import './App.css';
import { connect } from "react-redux";


function App() {
  return (
    <div>
      <span>Make it count</span>
      <div>Current count: </div>
      <button onClick={() => ({})}>Increment</button>
    </div>
  );
}

export const CounterContainer = connect(
  null,
  () => ({})
)(App);
