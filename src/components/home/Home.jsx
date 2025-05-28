import { motion } from "framer-motion";
import "../home/Home.css";
import BookBack from "../../assets/book-back.png";

function Home(){
    return(
        <main className="main-bg">
            <div className="main-home">
                <div>
                    <img className="bookImage" src={BookBack} alt="book image" />
                </div>
                <div className="main-home-text">
                    <h1>Se você continuar pensando como todos, vai viver como todos.</h1>
                    <p>Um chamado para quem quer sair da mediocridade, abandonar a ilusão das redes e construir uma vida com caráter, propósito e atitude.</p>
                    <motion.button whileHover={{ scale: 1.1 }} className="btnBuy">Adquirir o Livro</motion.button>
                </div>
            </div>  
        </main>
        
    );
}

export default Home;