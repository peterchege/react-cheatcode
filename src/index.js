import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
   console.log(`Field 1: ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`Field 2: ${val2}`);
   }, [val2]);

    return(
      <>
        <label>
          Favourite Phase: 
          <input
            value={val}
            onChange={e => setVal(e.target.value)}
          />
        </label>
        <br />
        <label>
          Favourite Phase: 
          <input
            value={val2}
            onChange={e => setVal2(e.target.value)}
          />
        </label>
                    
      </>
    );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

