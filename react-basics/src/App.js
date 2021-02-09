import React from 'react';


/*function App(){
  return ( <div class='container'>
       <h1 class='title'>Hello world</h1>
     </div>)
 }*/
// either way works!
 /*const App = () => {

  return ( <div class='container'>
  <h1 class='title'>Hello world</h1>
</div>)

 }*/
// or this way
 class App extends React.Component {

  /* constructor(){
    super();
    this.state = {
      counter: 0
    }
  } */

  state = {
    counter: 0
  }

  // increment by 1, works like a loop
  // a function return a function
  //increment = (num) => () => {

    increment = (num) => () => {
    //it can be used in inspect and see how it increment this.state.counter
    //debugger
    this.setState({
      counter: this.state.counter + num
    })
  }

  // function declaration -> function hello(){}
  // function expression -> const hello = () => {}
  render(){
  //it can be used in inspect and see how it increment this.state.counter
  //debugger
  return(
    <div className='container'>
       <h1 className='title'>Hello world</h1>
       <h1>Counter Application {this.state.counter}</h1>
       {/* provide here function expression which will be executed when clicking
        on button onClick={() => this.increment(1)}*/}
       <button onClick={this.increment(1)}>Increment</button>
       <button onClick={this.increment(-1)}>Decrement</button>
     </div>
  )}

 }

 export default App;
