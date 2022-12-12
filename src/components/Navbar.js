import logo from '../images/kp_logo.jpg';
import './Navbar.css';
import {useState} from 'react';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const checkClick = () => {

        setClick(!click);
    }

    return (
        <nav className="navbar">
            <img className="navbar-logo" src={logo} alt="" />
            <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                <li>
                    <a href="#" className="navbar-menu-links">หน้าหลัก</a>
                </li>
                <li>
                    <a href="#" className="navbar-menu-links">แผนที่</a>
                </li>
                <li>
                    <a href="#" className="navbar-menu-links">โปรโมทชั่น</a>
                </li>
                <li>
                    <a href="#" className="navbar-menu-links">ติดต่อเรา</a>
                </li>
            </ul>
            <div className="navbar-icon">
                <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={checkClick}></i>
            </div>
        </nav>
    )
}

export default Navbar;