import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: 1, name: "Echo", trailhead: "Echo"},
  { id: 2, name: "Velma", trailhead: "Wrights"},
  { id: 3, name: "Shaggy", trailhead: "Bayview"},
  { id: 4, name: "Maud", trailhead: "juja"}
];

function App({lakes}) {
  return(
    <div className="text-align">
      { lakes.map(lake =>(
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Accessedy from : {lake.trailhead}</p>
        </div>
      ))}
    </div>
    
  );
}


ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);

