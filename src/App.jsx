import React, { useState, } from 'react';
import './App.css';
import logo from './logo1.png';
import './index.css';



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
        <div className="item1">Jump back in</div>
        </div>

        <div className= "Test">
        <div className="box"></div>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        
        </div>

       
     


      </Container>

    </div>
   
  );
}

export default App;
