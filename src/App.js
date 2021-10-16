import React, { useState } from "react";
import GifTitle from './components/GifTitle';
import Button from './components/Button';
import GifDisplay from './components/GifDisplay';
import './App.css';

function App() {
  //variable with my own apiKey
  const apiKey = "J9lTJGjNfnIp2XQ9IxKMAYhaC8zjQVki";

  // State to hold gif data
  const [gif, setGif] = useState(null);

  //Function to getGif
  const getGif = async () => {
    //make fetch request and store response
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    //Parse JSON response into a javascript object
    const data = await response.json();
    setGif(data);
  };

  return (
    <div className="App">
      <GifTitle />
      <Button Giphy={getGif} />
      <GifDisplay gif={gif}/>
    </div>
  );
}

export default App;
