import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './style.css';

const initialState = {
  counter: 0,
  moreData: "something else",
}
// Step 1, create reducer function
function reducer(state=initialState, action){
  const { type, payload } = action;
  switch (type){
    case "ADD_COUNTER":
      return {...state, counter: state.counter + payload}
    default:
      return state;
  }
}

// Step 2, add createStore function
const store = createStore(reducer);

//actions
//set data to store
function addCounter(){
  return {
    type: "ADD_COUNTER",
    payload: 15,
  }
}
//get data from store

const SmallComponent = () => {
  return <p>I am small</p>
}

class App extends Component {
  render() {
    return (
      <div >
        <p>{this.props.counter}</p>

        <br />
        <button onClick={this.props.addCounter}>I am a button</button>
      </div>
      
    );
  }
}

const mapDispatchToProps = {
  addCounter,
}

const mapStateToProps = state => {
  return  state;
}


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

// Step 3, pass the store into Provider Component
render(<Provider store={store}>
    <ConnectedApp />
</Provider>, document.getElementById('root2'));
