import React from "react";

import "../../styles/App.scss"

import Body from "./home_pieces/body";

import axios from "axios"

const Home = () => {

  window.onload = () => {
    axios.get("http://localhost:8000")
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <Body />
    </div>
  )
}

export default Home