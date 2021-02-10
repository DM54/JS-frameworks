import React, {useState} from 'react';
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
