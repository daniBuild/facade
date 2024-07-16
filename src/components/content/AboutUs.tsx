import about from '../../photos/images/about.jpg'
import './contentCss/aboutUs.css'
import {scrollToSection} from "../utils/utils";

const AboutUs = () => {
    return (
        <div className="about-willerroof" id="about">
            <div className="content-container">
                <h1>
                    À propos de <span className="highlight">Façade+</span>.
                </h1>
                <p>
                    Façade+ est une entreprise familiale belge dédiée à l'embellissement et à la rénovation de façades depuis de nombreuses années. Notre mission est de transformer les façades de manière à rehausser l'esthétique et la durabilité des bâtiments, en combinant savoir-faire artisanal et technologies modernes.</p>
                <p>
                    Nous offrons une large gamme de services, allant de la conception à la réalisation de projets de rénovation. Que vous ayez besoin d'une nouvelle façade, d'une réparation ou d'une rénovation complète, nous sommes là pour vous aider à chaque étape. Notre équipe est composée de professionnels expérimentés qui s'engagent à fournir un travail de haute qualité.
                    En plus de nos services de base, nous sommes également spécialisés dans la reprise de travaux inachevés et la supervision de projets de construction. Nous comprenons l'importance de la précision et du détail dans chaque projet, c'est pourquoi nous nous assurons que chaque aspect de votre façade est pris en compte et réalisé avec soin.
                </p>
                <p>
                    Chez Façade+, nous sommes fiers de notre capacité à nous déplacer partout en
                    Belgique pour répondre aux besoins de nos clients. Peu importe où vous vous trouvez, nous sommes prêts à intervenir rapidement et efficacement pour vous offrir des solutions de qualité supérieure. Nous croyons que chaque façade raconte une histoire, et nous sommes ici pour vous aider à écrire la vôtre.

                    Avec Façade+, vous pouvez être assuré que votre façade est entre de bonnes mains. Nous nous engageons à fournir des résultats exceptionnels qui non seulement répondent à vos attentes, mais les dépassent. Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons transformer l'apparence de votre maison ou bâtiment.
                </p>
                <div className="buttons-container">
                    <button onClick={() => scrollToSection("showcase")} className="showcase-button">Réalisations
                    </button>
                    <button onClick={() => scrollToSection("contact")} className="contact-button">Contactez-nous
                    </button>
                </div>
            </div>
        </div>

    );
}
export default AboutUs;