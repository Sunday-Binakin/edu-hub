import '/src/App.css'

const Navbar = () => {
    return (
        <div>
        <div className="logo-section">
            <span></span>
<p>Have  a Question </p>
        </div>
        <nav className="navbar">
            <div className="nurture"><a href="#">Nurture</a></div>
            <div className="nav-list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dropdown</a>
                    
                    </li>
                    <li><a href="#">Our Staff </a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="enroll"><a href="#">Enroll Now</a></div>
        </nav>
        </div>
    )
};

//default export and name export
export default Navbar 