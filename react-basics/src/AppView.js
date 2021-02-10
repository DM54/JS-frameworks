import React from 'react';

const AppView = ({title, number, counter, testfunction}) => {

  return (
    <div>
       <h1>{title}: {counter}</h1>
        <p>{number}</p>
        <button onClick={testfunction}>Test</button>
    </div>
  )

}

export default AppView;
