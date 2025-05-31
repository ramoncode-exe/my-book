import { motion } from "framer-motion";
import "../benefits/Benefits.css"
import { Flame, Rocket, Smartphone, Brain } from 'lucide-react';

function Benefits(){
    return(
        <div>
            <div className="main-benefits">
                <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 3, ease:"easeIn" }} className="main-benefits-cont">
                    <Flame size={28} className="icons" />
                    <h2>Propósito e direção</h2>
                    <p>Aprenda como desenvolver um caráter forte, baseado em princípios e valores inegociáveis.</p>
                </motion.div>
                <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 3, ease:"easeIn" }} className="main-benefits-cont">
                    <Rocket size={28} className="icons" />
                    <h2>Ação imediata</h2>
                    <p>Descubra como dar o primeiro passo agora mesmo, mesmo que você ache que não está pronto.</p>
                </motion.div>
                <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 3, ease:"easeIn" }} className="main-benefits-cont">
                    <Smartphone size={28} className="icons" />
                    <h2>Liberdade digital</h2>
                    <p>Entenda por que fugir das redes sociais pode ser a melhor decisão para recuperar sua mente.</p>
                </motion.div>
                <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 3, ease:"easeIn" }} className="main-benefits-cont">
                    <Brain size={28} className="icons" />
                    <h2>Alta Perfomance</h2>
                    <p>Saia do pensamento medíocre do "mínimo" e eleve seus padrões com coragem, foco e disciplina.</p>
                </motion.div>
            </div>
        </div>
    );
}

export default Benefits;