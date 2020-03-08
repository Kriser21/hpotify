import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo1.png';


const FetchPage = props => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchController = new AbortController();
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

  // **********************************************
 //  laver en fetch 
// ************************************************
// fetch('https://deezerdevs-deezer.p.rapidapi.com/track/854914322', {
fetch('https://deezerdevs-deezer.p.rapidapi.com/album/127270232', {
    // **********************************************
 //  sætter method og headers
// ************************************************
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': 'aee2130728mshc250038c75dd0d2p181ea1jsn58e75ec5d280'
  }
})
  .then(response => {
    return response.json();
  })
  // **********************************************
 //  sætter data til at være consten setApiData
// ************************************************
  .then(data => setApiData(data))
  // **********************************************
 //  fanger hvis der er en fail
// ************************************************
  .catch(err => {
    console.log(err);
  });
    }

    return () => fetchController.abort();
  }, [apiData]);
  return (
    <div>
    {apiData && apiData.title}
  </div>
  );
};

const Container = props => {
  return <div> {props.children} </div>;
};

function App() {
  return (
    <div>
      <Container>
        <nav className="Dez">
          <img className="logo" src={logo} alt="logo" />
          Hpotify
        </nav>

        <div className="todo">
          <div className="item1">Jump back in</div>
        </div>
      </Container>
      <FetchPage />
    </div>
  );
}

export default App;
