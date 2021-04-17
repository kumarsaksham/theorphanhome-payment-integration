import './Header.css';
import Navbar from './Navbar';
import './Navbar.css';

function Header(){
    return(
        <div className="hero-img">
            <Navbar />
            <div className="hero-text">
                {/* <h1>Join Us. Change their lives.</h1> */}
                {/* <p>Change Yours. This Will Change Everything.</p> */}
            </div>
            <a href='https://rzp.io/l/T0JcLR3M' className="donate-link donate-link-pos">Donate</a>
        </div>
    );
}

export default Header;