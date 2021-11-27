import React from 'react';
import './App.css';
import StoreState from "./interfaces/StoreState";
import { connect } from "react-redux";
import theThunk from "./services/api";

interface Props {
  count: number;
  onClick: () => void;
  berry: any;
}

function App({count, onClick, berry}: Props) {
  return (
    <div>
      <div>Current count: {count}</div>
      {berry && <div>Current berry: {berry.firmness.name}</div>}
      <button onClick={onClick}>Increment</button>
    </div>
  );
}

const mapStateToProps = (state: StoreState) => ({
  count: state.counter.count,
  berry: state.berry.berry
});


const mapDispatchToProps = (dispatch: any) => {
  return {
    onClick: () => {
      dispatch(theThunk);
    }
  }
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
