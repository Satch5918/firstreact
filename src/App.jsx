import './App.css';
import Nav from './components/Nav';
import Header from './layouts/Header';
import Carousel from './components/Carousel/Carousel';

function App() {
  
  return (
    <div className="App">
   
   <Nav/>
    <Header/>
    
  <main id="main">
        
        <Carousel />

    
      
     
  </main>
  <footer>
    <div className="section-footer">
      <img className="logo"src="./assets/logo.png" alt="logo"/>
      <p>Comics</p>
    </div>
    <p>©2022 Comic App.</p>
    <div className="pages">
      <h3>Pages</h3>
      <a href="#">Comics</a>
    </div>
  </footer>
    </div>
  );
}



export default App;
