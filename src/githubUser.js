/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function GithubUser({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data){
      return(
        <div>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} width={100} />
          <p>{data.bio}</p>
        </div>
      );
  }
    return null;
}

function App() {
  return <GithubUser login="peterchege"/>;
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

