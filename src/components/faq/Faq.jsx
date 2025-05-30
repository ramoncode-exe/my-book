import { motion } from "framer-motion";
import FaqItem from "./FaqItem"
import "../faq/Faq.css"

function Faq(){

    const faqData = [
        {
            question: "Para quem é este livro?",
            answer: "Este livro é para quem sente que está preso na mediocridade, no comodismo ou na ilusão das redes sociais — e quer dar um passo real em direção à mudança. Jovens, empreendedores, sonhadores e inconformados vão se identificar profundamente.",
        },
        {
            question: "Esse livro é motivacional?",
            answer: "Não. Ele é real. O objetivo não é te agradar, mas te sacudir. São reflexões diretas sobre caráter, propósito, ego, ações e mentalidade — com base em experiências verdadeiras e duras.",
        },
        {
            question: "Quantas páginas tem o livro?",
            answer: "O livro tem cerca de 70 a 100 páginas (dependendo da formatação), com leitura rápida, objetiva e impactante. Você pode ler em 1 ou 2 dias — mas vai refletir por muito mais tempo.",
        },
        {
            question: "Em qual formato está disponível?",
            answer: "Por enquanto, está disponível em formato digital (PDF), com acesso imediato após a compra. Versões impressas e em outras plataformas estão nos planos futuros.",
        },
    ];

    return(
        <div className="faq">
            <h2>Perguntas Frequentes</h2>
            {faqData.map((item, index) => (
                <FaqItem 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
}

export default Faq;