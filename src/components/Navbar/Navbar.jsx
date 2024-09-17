import { useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="wick-navbar">
        <div className="wick-logo">
          WICK.PLAY
        </div>

        {/* Hamburger button for mobile view */}
        <div className="wick-hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Navigation List */}
        <div className={`wick-navlist ${menuOpen ? 'wick-open' : ''}`}>
          <ul>
            <li>
              <Link to='/' onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to='/matches' onClick={toggleMenu}>Matches</Link>
            </li>
            <li>
              <Link to='/turnaments' onClick={toggleMenu}>Tournamnet</Link>
            </li>
            <li>
              <Link to='/registor' onClick={toggleMenu}>Register</Link>
            </li>
            <li>
              <Link to='/contact' onClick={toggleMenu}>Contact us</Link>
            </li>
            <li>
              <Link to='/profile' onClick={toggleMenu} className='wick-icon'><CgProfile  /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;