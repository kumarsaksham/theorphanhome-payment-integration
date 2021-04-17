import './Navbar.css'

function Navbar () {
    return(
        <nav className="navigation">
            <h2 className="name">The Orphan Home</h2>
            <div className="nav-links">
                <a href='/' className="nav-link">Home</a>
                <a href="#about" className="nav-link">About Us</a>
                <a href='#contact' className="nav-link">Contact</a>
                <a href='https://rzp.io/l/T0JcLR3M' className=" donate-link">Donate</a>
            </div>
        </nav>
    );
}

export default Navbar;