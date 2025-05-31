import { motion } from "framer-motion";
import "../header/Header.css";
import Logo from "../../assets/logo.png";

function Header(){
    return(
        <div className="navbar">
            <div>
                <motion.img initial={{ x:-200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease:"easeIn" }} className="logo" src={Logo} alt="logo" />
            </div>
            <div>
                <motion.ul initial={{ x:+200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease:"easeIn" }} className="nav-links">
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => window.open("https://www.youtube.com/@ramonaqui", "_blank")} className="btnChannel">Ver Canal</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => window.open("https://www.linkedin.com/in/ramonprog/", "_blank")} className="btnContact">Contato</motion.button>
                </motion.ul>
            </div>
        </div>
    );
}

export default Header;