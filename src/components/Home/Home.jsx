import '../Home/Home.css';
import Sponsers from '../Sponsers/Sponsers';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

function Home() {
  return (
    <div>
      <div>
        <div className="home-container">
          <header className="hero-section">
            <h1>Welcome to Cricket Tournaments</h1>
            <h1>WickPlay.com</h1>
            <p>Join and compete in the most exciting cricket tournaments!</p>
            <div className="btns">
              <a href="/registor" className="cta-button">Register Now</a>
              <a href="/login" className="cta-button">Login</a>
            </div>
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
