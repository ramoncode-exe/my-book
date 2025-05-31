import { useState } from "react";
import "../faq/Faq.css"
import { motion } from "framer-motion";

function FaqItem({ question, answer }){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="faq-item">
            <motion.button whileHover={{ scale: 1.1 }} className="btnFaq" onClick={() => setIsOpen(!isOpen)}>{question}</motion.button>
            {isOpen && <p className="textFaq">{answer}</p>}
        </div>
        
    );
}

export default FaqItem;