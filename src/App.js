import './App.css';
import React,{Component} from 'react'
import tarjeta from './img/webibang.png'
import video from './video/ibang.mp4'


class App extends Component{
  render () {
    return (
    <div className='App'>
      <video src={video} className='video' controls ></video>
      <img className="imagen" src={tarjeta} alt="Tarjeta" />
    </div>
    )
  }
}


export default App;