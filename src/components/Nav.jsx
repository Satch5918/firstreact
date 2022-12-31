import React,{ useState }  from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
       <button className='buton' onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      {menuOpen && (
        <ul className='liA'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    <a href="#">Comic Logo</a>
    <a href="#">Comics</a>
    <a className="login-button" href="#">Iniciar Sesión</a>    

  </nav>
  )
}

