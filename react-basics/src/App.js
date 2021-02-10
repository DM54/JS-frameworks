import React, {Component, useState, useEffect} from 'react';
import AppView from './AppView';

/*function App(){
  return ( <div class='container'>
       <h1 class='title'>Hello world</h1>
     </div>)
 }*/
// either way works!
 const App = (props) => {
  const [counter, setcounter] = useState(0); // return arrays with two values, 1. is the state 2. is the function to mutate the state.
  const increment = (num) =>{
    setcounter(counter + num);
  }

   const testFunction = () => {
     alert('executing a test function');
   }

  return (
    //it should always be wrapped in a container
     <div className='container'>
        <AppView //title={props.title} number={props.number}
        {...props}
        counter = {counter}  testfunction = {testFunction}></AppView>
        {/* provide here function expression which will be executed when clicking
        on button onClick={() => this.increment(1)}*/}
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => increment(-1)}>Decrement</button>
      </div>
     )

 }
// or this way
/* class App extends React.Component { */

  /* constructor(){
    super();
    this.state = {
      counter: 0
    }
  } */

// this is called only once and after render(), and another example of lifecycle
/* componentDidMount(){
  this.setState({counter: 100});
  console.log('calling componentDidMount');
 }*/

 /*
 // Executed initialy and every time component will update
 // this will execute once doesn't matter how many time you click the buttons (in the console).
  useEffect(() => {
    console.log('calling useEffect!');
    setCounter(100);
  }, [])
 //this will show how many you execute counter in the console.
  useEffect(() => {
    console.log('calling my other useEffect!');
  }, [counter])

  */

 /* state = {
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

  //Lifecycle function is called after constructor and every time the component is updated, an example is render()
  render(){

  //it can be used in inspect and see how it increment this.state.counter
  //debugger
  // const {title, number} = this.props;
  // const {counter} = this.state;
  return(
    <div className='container'>
       <h1 className='title'>Hello world</h1>*/
       {/*how props are used in component! <h1>{title}: {counter}</h1> <p>{number}</p>*/}
      /*  <h1>Counter Application {this.state.counter}</h1>*/
       {/* provide here function expression which will be executed when clicking
        on button onClick={() => this.increment(1)}*/}
      /* <button onClick={this.increment(1)}>Increment</button>
       <button onClick={this.increment(-1)}>Decrement</button>
     </div>
  )}

 }*/

 export default App;
