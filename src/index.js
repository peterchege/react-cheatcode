import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}) {
  return (
      <div>
        <h1> Visit {name}!</h1>
      </div>
  );
}

function SkinResort({name}) {
  return (
      <div>
        <h1> Visit {name} Mountain Resort</h1>
      </div>
  );
}

function App(props) {
  if(props.season === "summer"){
    return <Lake name="Jenny Lake" />
  } else if (props.season === "winter"){
    return <SkinResort name="Jackson Hole"/>
  }
}


ReactDOM.render(
  <App season="summer"/>,
  document.getElementById('root')
);

