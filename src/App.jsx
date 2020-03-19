import React, { useState, useEffect } from 'react';
import './App.scss';
import logo from './logo1.png';
import ReactPlayer from 'react-player';

const FetchPage = props => {
  const [apiData, setApiData] = useState(null);
  // laver en state
  const [showPlaylist, setShowPlaylist] = useState(false);
  useEffect(() => {
    if (!apiData) {
      // const fetchHeaders = new Headers();
      // fetchHeaders.append('Accept', 'application/json');

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
  // **********************************************
  // loopper igemen array til tracks
  // ************************************************

  let playList =
    apiData &&
    apiData.tracks.data.map(track => {
      return (
        <div key={track.id} className="playlistInfo">
          <p>song title: {track.title}</p>
          <p>{track.artist.name}</p>
            <ReactPlayer
              url={track.preview}
              className="react-player"
              controls
              width="250px"
              height="50px"
            />
          </div>
      );
    });

  return (
    <section>
        {/* laver en onclick der bruger den state til at vise playlisten og game den igen */}
        <img
          className="playList1"
          src={apiData && apiData.cover_medium}
          alt=""
          onClick={() => setShowPlaylist(!showPlaylist)}
        />
        {showPlaylist && (
          <div className="test">
            <p onClick={() => setShowPlaylist(!showPlaylist)} className="close">x</p> {playList}
          </div>
        )}
    </section>
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

