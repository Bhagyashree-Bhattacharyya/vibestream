import React from 'react';
import {loginURL} from '../vibestream';
import "../styles/login.css";

function Login() {
  return (
    <div className='login'>
     <img src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg'
     alt='Spotify Logo'/>  
     {/* will change the image later */}
     <a href={loginURL}>Login With Spotify</a> 
    </div>
  )
}

export default Login