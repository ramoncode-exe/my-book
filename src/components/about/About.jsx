import { motion } from "framer-motion";
import "../about/About.css"
import BookPhotos from "../../assets/book-photos.png"

function About(){
    return(
        <div className="main">
            <motion.div initial={{ y:+200, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ duration: 4.5, ease:"easeIn" }} className="main-author">
                <div>
                    <img className="bookPhotos" src={BookPhotos} alt="photos of autor" />
                </div>
                <div>
                    <h1>Sobre o Livro</h1>
                    <p className="p-width">Este livro foi escrito por Ramon Patrick, um jovem brasileiro de apenas 20 anos, que saiu do Brasil aos 19 anos — completamente sozinho e sem dinheiro no bolso — em busca de uma vida melhor. <br/> Imigrar foi um salto no escuro, mas também o início de uma transformação profunda. <br/>Durante essa jornada, Ramon viu de perto as dificuldades, a solidão e o preço de tentar mudar de vida em um mundo que não te espera. <br/> Foi nesse processo de amadurecimento e superação que nasceu este livro — não como um manual cheio de promessas vazias, mas como uma mensagem real, direta e necessária.</p>
                </div>
            </motion.div>
        </div>
    );
}

export default About;