import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { originals, trendings, actions, romance, comedy, horror } from './Urls'
import "./App.css";
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Banner/>
      <div className="row-container">
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={trendings} title='Trendings' isSmall/>
        <RowPost url={actions} title='Actions' isSmall/>
        <RowPost url={romance} title='Romance' isSmall/> 
        <RowPost url={comedy} title='Comedy ' isSmall/> 
        <RowPost url={horror} title='Horror ' isSmall/> 
      </div>
    </div>
  );
}

export default App;
