import React from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    
    this.dropdown = React.createRef()


  }

  toggleShow = () => {
    console.log(this.dropdown.current);
    let {current} = this.dropdown
    if(current.classList.contains('show-animation')){
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    } else{
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
      
    }
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
            <p id='header-text'>Start Bootstrap</p>
            <div id='header-button-container'>
              <div className='header-button'>SERVICES</div>
              <div className='header-button'>PORTFOLIO</div>
              <div className='header-button'>ABOUT</div>
              <div className='header-button'>TEAM</div>
              <div className='header-button'>CONTACT</div>
            </div>
            <button id='dropdown-button'>
              MENU
              <i className='fas fa-bars' id='hamburger-icon' onClick={this.toggleShow}/>
            </button>
          </div>

          <div className='dropdown' ref={this.dropdown}>
            <div className='dropdown-buttons'>SERVICES</div>
            <div className='dropdown-buttons'>PORTFOLIO</div>
            <div className='dropdown-buttons'>ABOUT</div>
            <div className='dropdown-buttons'>TEAM</div>
            <div className='dropdown-buttons'>CONTACT</div>
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
