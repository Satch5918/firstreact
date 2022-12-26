import logo from './logo.svg';
import './App.css';

function App() {
  const plusSlides = () =>{
    console.log("añklsdj")
  }
  return (
    <div className="App">
     <header>
    <nav>
      <a href="#">Comic Logo</a>
      <a href="#">Comics</a>
      <a className="login-button" href="#">Iniciar Sesión</a>
    </nav>
    <div className="section">
      <span span>
        Anunciamos nuestra próxima ronda de financiación. <a>Leer más →</a>
      </span>
      <h1>Tu tienda de comics favorita</h1>
      <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      <a className="button-started" href="#main">Empezar → </a>
    </div>
  </header>
  <main id="main">
        <div className="slideshow-container">


          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="https://occ-0-300-990.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUhJMx1ZGjVQ6PrRpwkawoR_l5TWtESU4TTngpctPd5SyCN91X2TNF6IAKmXJpv9oISMu_brPcvDToTLAYabaOykcOfpmLeyCDvF.jpg?r=60a"  alt=""/>
            <div className="text">Caption Text</div>
          </div>
    
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="./assets/bkg.png" alt=""/>
            <div className="text">Caption Two</div>
          </div>
    
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="./assets/bkg.png"  alt=""/>
            <div className="text">Caption Three</div>
          </div>
    
  
          <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a className="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
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
