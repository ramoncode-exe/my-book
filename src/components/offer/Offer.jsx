import { motion } from "framer-motion";
import "../offer/Offer.css"
import LivroBack from "../../assets/livro-back.png"

function Offer(){
    return(
        <div className="mainOffer">
            <div>
                <img className="imgLivro" src={LivroBack} alt="livro background" />
            </div>
            <div className="offerText">
                <h1>Transforme sua mentalidade por menos do que custa um lanche.</h1>
                <p>Você pode continuar se distraindo nas redes, vivendo no automático, reclamando da vida…
                Ou pode investir em um conteúdo real, direto e transformador — criado por alguém que viveu na pele o que está escrito.</p>
                <motion.button whileHover={{ scale: 1.1 }} className="btnBuy">Adquirir o Livro</motion.button>
                <div className="span-main">
                    <div className="span-datas">
                       <span>100+<br/> <p>Livros Vendidos</p></span>
                    </div>
                    <div className="span-datas">
                        <span>200+<br/> <p>Mentes Abertas</p></span>
                    </div>
                    <div className="span-datas">
                        <span>99%<br/> <p>Aprovação</p></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;