const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/128/2718/2718224.png" />
            <span>React Food</span>
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><img src="https://cdn-icons-png.flaticon.com/128/2203/2203183.png" />Cart</li>
            </ul>
        </div>
    </div>
)
export default Header;