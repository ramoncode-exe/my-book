import { motion } from "framer-motion";
import "../footer/Footer.css"


function Footer(){
    return(
        <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 8, ease:"easeIn" }} className="footer">
            <p>Todos os direitos reservados. RamonAqui Inc. 2025</p>
        </motion.div>
    );
}

export default Footer;