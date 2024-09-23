import '../Home/Home.css';
import Sponsers from '../Sponsers/Sponsers';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Home() {
  const profileData = useSelector((val) => val.profile);
  return (
    <div>
      <div>
        <div className="home-container">
          <header className="hero-section">
            <h1>Welcome to Cricket Tournaments</h1>
            <h1>WickPlay.com</h1>
            <p>Join and compete in the most exciting cricket tournaments!</p>
            {
              profileData.length > 0 ? (<><h2 className='namehead'>Welcome @{profileData[0].name}</h2></>) : (<div className="btns">
                <Link to='/signup' className='signupbtn'>Sign UP</Link>
                <a href="/login" className="cta-button">Login</a>
              </div>)
            }
          </header>
        </div>
      </div>

      <Gallery />

      <Sponsers />
      <Footer />
    </div>
  );
}

export default Home;
