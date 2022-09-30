import './App.css';
import React from 'react';
import './index.css';
import MyComponent from './components/apoy_component';
import userObject from './Data/users';


function App() {
  return (
    <div className="App">
      {
            userObject.map(({firsName, lastName, age, hairColor})=>{
              return <MyComponent firsName={firsName} lastName={lastName} age={age} hairColor={hairColor}/>
            })
          }
    </div>
  );
}

export default App;
