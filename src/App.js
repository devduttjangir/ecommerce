import React from 'react';
import Root from './Components/Root';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Post from './Components/Post'
import Home from './Components/Home'
function App() {
  return (
    <div>
      <Header/>
      
      <Root />
      <Home/>
      <About />
      <Contact/>
      <Post/>
      <Footer/>
      
    </div>
  );
}

export default App;
