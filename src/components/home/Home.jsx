import { motion } from "framer-motion";
import "../home/Home.css";
import BookBack from "../../assets/book-back.png";

function Home(){
    return(
        <main className="main-bg">
            <motion.div initial={{ x:-200, opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{ duration: 1.5, ease:"easeIn" }} className="main-home">
                <div>
                    <img className="bookImage" src={BookBack} alt="book image" />
                </div>
                <div className="main-home-text">
                    <h1>Se você continuar pensando como todos, vai viver como todos.</h1>
                    <p>Um chamado para quem quer sair da mediocridade, abandonar a ilusão das redes e construir uma vida com caráter, propósito e atitude.</p>
                    <motion.button  onClick={() => window.open("https://buy.stripe.com/fZuaEX84h9Ozd9B6mZ0Ba00")} whileHover={{ scale: 1.1 }} className="btnBuy">Adquirir o Livro</motion.button>
                </div>
            </motion.div>  
        </main>
        
    );
}

export default Home;