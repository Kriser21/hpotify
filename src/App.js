import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import logo from './logo1.png';

// const ArticleStuff = () =>{
//   return(
// //  <h1> HEJ </h1>

//   )
// }

const Container = props =>{
return <div> {props.children} </div>;
};

function App() {
  const [TAL,sætMinTæller] = useState(0);

 
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
      </Container>
      {/* <ArticleStuff/> */}
    </div>
  );
}

export default App;
