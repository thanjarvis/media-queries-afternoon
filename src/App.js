import React from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    
  }







  render(){
    return(
      <div>
        <head>
          <style>
           @import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat&display=swap');
          </style>
        </head>
        <div id='background-image'>
          <div id='header'>
            {/* <i className='fas fa-bars'/> */}
            <p id='header-text'>Start Bootstrap</p>
            <div id='header-button-container'>
              <div className='header-button'>SERVICES</div>
              <div className='header-button'>PORTFOLIO</div>
              <div className='header-button'>ABOUT</div>
              <div className='header-button'>TEAM</div>
              <div className='header-button'>CONTACT</div>
            </div>
            <button id='dropdown'>MENU</button>

          </div>
          <div id='body'>
            <p id='body-text-one'>Welcome To Our Studio!</p>
            <p id='body-text-two'>IT'S NICE TO MEET YOU</p>
            <button id='more-button'>TELL ME MORE</button>
          </div>
        </div>
      </div>

    )
  }

}

export default App;
