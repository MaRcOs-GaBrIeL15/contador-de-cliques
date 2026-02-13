import React from 'react';
import './Contador.css';
const { useState }  = React

function Contador() {
  
    const [count, setCount] = useState(0);

    function incrementarContador(){
        setCount((valorAntigo) => {
            return valorAntigo + 1;
        })
    }
    
  
    return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
}

export default Contador;
