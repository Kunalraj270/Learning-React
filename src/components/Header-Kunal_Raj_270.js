import { useEffect, useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { CART_IMG } from "../utils/constants";
const Header = () => {
    const [btnName , setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus()
    // let btnName = "Login"
    console.log("body rendered!!")

    useEffect(()=>{
        console.log("useEffect called!!")
    },[btnName])

    return (
        <div className="flex justify-between w-full p-3 fixed shadow-md  bg-white">
            <div className="flex items-center">
                <img className="w-14" src={LOGO_IMG} />
                <span className="text-fuchsia-600">React Food</span>
            </div>
            <div className="flex m-4 gap-3 text-base">
                <ul className="flex items-center gap-5">
                    <li>OnlineStatus : {onlineStatus ? "💚" : "❤️"}</li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
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