import { motion } from "framer-motion";
import "../header/Header.css";
import Logo from "../../assets/logo.png";

function Header(){
    return(
        <div className="navbar">
            <div>
                <img className="logo" src={Logo} alt="logo" />
            </div>
            <div>
                <ul className="nav-links">
                    <motion.button whileHover={{ scale: 1.1 }} className="btnChannel">Ver Canal</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="btnContact">Contato</motion.button>
                </ul>
            </div>
        </div>
    );
}

export default Header;