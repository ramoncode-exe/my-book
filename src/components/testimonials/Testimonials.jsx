import { motion } from "framer-motion";
import "../testimonials/Testimonials.css"
import Camila from "../../assets/camila.png"
import Joao from "../../assets/joao.png"
import Lucas from "../../assets/lucas.png"
import { Star } from 'lucide-react';

function Testimonials(){
    return(
        <div className="main-test">
            <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 5, ease:"easeIn" }} className="container-test">
                <img className="img" src={Lucas} alt="lucas foto" />
                <h2>Lucas M.</h2>
                <p>É como se alguém tivesse colocado no papel tudo o que eu precisava ouvir, mas ninguém teve coragem de dizer. Um soco na alma. Obrigado, Ramon.</p>
                <div>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                </div>
            </motion.div>
            <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 5, ease:"easeIn" }} className="container-test">
                <img className="img" src={Camila} alt="camila foto" />
                <h2>Camila R.</h2>
                <p>Achei que fosse só mais um livro de autoajuda... Me enganei. É direto, verdadeiro e diferente de tudo que já li. Já reli 2 vezes.</p>
                <div>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                </div>
            </motion.div>
            <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 5, ease:"easeIn" }} className="container-test">
                <img className="img" src={Joao} alt="joao foto" />
                <h2>João V.</h2>
                <p>Me identifiquei muito com a história. Me fez pensar em onde estou errando e por que ainda não dei o primeiro passo. Recomendo pra qualquer jovem.</p>
                <div>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                    <Star color="#ffb703"/>
                </div>
            </motion.div>
        </div>
    );
}

export default Testimonials;