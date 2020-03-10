import React, { useState, useEffect } from 'react';
import './App.scss';
import logo from './logo1.png';
import ReactPlayer from 'react-player'


const FetchPage = props => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

  // **********************************************
 //  laver en fetch 
// ************************************************

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
  .catch(err => {
    console.log(err);
  });
    }
  });
  function test6(){
  let test2 = apiData && apiData.tracks.data.map(track => {
    console.log(track);
    
    return(
      <div key={track.id}>
        <p>{track.title}</p><p>{track.artist.name}</p>
        <div className='player-wrapper'>
        <ReactPlayer
          url={track.preview}
          className='react-player'
          controls
          width='300px'
          height='50px'
        />
      </div>
      
      </div>
    );
  })
}
  return (
    <section className="grid_wrapper">
    <div className="wrapper">
    <img src={apiData && apiData.cover_medium} alt="" />
    <img src={apiData && apiData.cover_medium} alt="" />
  {/* <div>{apiData && apiData.tracks.data[0].title}</div> */}
  <button onClick={() => {test6()}}>
 click me</button>
      {/* {test2} */}
  </div>
  </section>
  );
};


// const Player = () => {
//     return (
//       <div className='player-wrapper'>
//         <ReactPlayer
//           url="https://cdns-preview-d.dzcdn.net/stream/c-de98e71ba0560593f855a280e96565ec-4.mp3"
//           className='react-player'
//           controls
//           width='300px'
//           height='100px'
//         />
//       </div>
//     )
// }




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
        {/* <Displaytitle /> */}
      </Container>
      <FetchPage />
      {/* <Player /> */}
    </div>
  );
}

export default App;
