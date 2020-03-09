import React, { useState, } from 'react';
import './App.css';
import logo from './logo1.png';




const Container = props =>{
  return <div> {props.children} </div>;
  };


function App () {
  return (
    <div> 

      <Container>
        
        <nav className="Dez"> 
        <img className="logo" src={ logo } alt="logo"/>
        Hpotify
        </nav>

        <div className= "todo">
        <div className="item1">Velkommen til Hpotify</div>
        </div>
     


      </Container>

    </div>
   
  );
}

export default App;
