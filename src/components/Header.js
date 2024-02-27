import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
// import { CART_IMG } from "../utils/constants";
const Header = () => {
    const [btnName , setBtnName] = useState("Login")
    // let btnName = "Login"
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMG} />
                <span>React Food</span>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button className="lgn-button"
                    onClick={() => {
                        btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
                        console.log(setBtnName)
                    }}
                >{btnName}</button>
            </div>
        </div>
    )
};
export default Header;