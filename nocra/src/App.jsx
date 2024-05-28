import React from 'react'
import "./App.css"
import Img from './components/Img'
import ImgLoader from "./ImgLoader";
import {Img as ReactImg} from 'react-image'

const App = () => {
  return (
    <div id='app'>
      <span>React</span>
      <Img/>
      {/* <ReactImg
        src={[
          "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
        ]}
        loader={<ImgLoader />}
      /> */}
    </div>
  )
}

export default App;
