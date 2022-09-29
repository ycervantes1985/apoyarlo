
import { useState } from 'react';
import '../App.css';


const userObject = [
  {
      firsName:'Yoisell',
      lastName: 'Cervantes',
      age: 37,
      hairColor:'Black'
  },
  {
    firsName:'Jany',
    lastName: 'Garcia',
    age: 35,
    hairColor:'Black'
  },
  {
    firsName:'Kevin',
    lastName: 'Cervantes',
    age: 9,
    hairColor:'Black'
  },
  {
    firsName:'Alejandro',
    lastName: 'Pulido',
    age: 10,
    hairColor:'Black'
  }
]



  function MyComponent(){

    const [ages, setAges] = useState(0)

    
    return (
    <>
    {userObject.map(({firsName, lastName, age, hairColor}) => (
        <div className="apoyo">
            <h1>
                <strong>{lastName},{firsName}</strong>
            </h1>
            <h4>Age:{age}</h4>
            <h4>Hair Color:{hairColor}</h4>
            <div>
                <button onClick={() => setAges(age+1)}>+</button>
            </div>
        </div>
))}
    </>
    );
}

export default MyComponent;