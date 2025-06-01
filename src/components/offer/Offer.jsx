import { motion, scale } from "framer-motion";
import "../offer/Offer.css"
import LivroBack from "../../assets/livro-back.png"

function Offer(){
    return(
        <motion.div initial={{ x:-400, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 6, ease:"easeIn" }} className="mainOffer">
            <div>
                <img className="imgLivro" src={LivroBack} alt="livro background" />
            </div>
            <div className="offerText">
                <h1>Transforme sua mentalidade por menos do que custa um lanche.</h1>
                <p>Você pode continuar se distraindo nas redes, vivendo no automático, reclamando da vida…
                Ou pode investir em um conteúdo real, direto e transformador — criado por alguém que viveu na pele o que está escrito.</p>
                <motion.button onClick={() =>  window.open("https://buy.stripe.com/fZuaEX84h9Ozd9B6mZ0Ba00")} whileHover={{ scale: 1.1 }} className="btnBuy">Adquirir o Livro</motion.button>
                <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 6.5, ease:"easeIn" }} className="span-main">
                    <motion.div whileHover={{ scale: 1.1 }} className="span-datas">
                       <span>100+<br/> <p>Livros Vendidos</p></span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="span-datas">
                        <span>200+<br/> <p>Mentes Abertas</p></span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="span-datas">
                        <span>99%<br/> <p>Aprovação</p></span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Offer;