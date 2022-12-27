import './App.css';
import Nav from './components/Nav';
import Header from './layouts/Header';
import Carrousel from './components/Carrousel';

function App() {
  
  return (
    <div className="App">
   
   <Nav/>
    <Header/>
    
  <main id="main">
        
        <Carrousel />
        <br/>
    
      
        <div >
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div> 
    
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
