import { useState } from "react";
import "../faq/Faq.css"

function FaqItem({ question, answer }){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="faq-item">
            <button className="btnFaq" onClick={() => setIsOpen(!isOpen)}>{question}</button>
            {isOpen && <p className="textFaq">{answer}</p>}
        </div>
        
    );
}

export default FaqItem;