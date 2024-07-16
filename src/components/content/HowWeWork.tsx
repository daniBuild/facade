import './contentCss/main.css';
import * as React from 'react';

const HowWeWork = () =>  {
    return (
        <div>
            <div className="how">
                <h1 className="work">Notre méthode de travail.</h1>
                <p className="work">Besoin d'une façade ? Contactez-nous, et nous nous occuperons du travail.</p>
                <div className="steps">
                    <div className="step">
                        <h2>01.</h2>
                        <h3>Premier contact.</h3>
                        <p>Contactez notre commercial technique pour discuter des détails et établir un devis.</p>
                    </div>
                    <div className="step">
                        <h2>02.</h2>
                        <h3>Exécution des travaux.</h3>
                        <p>À la date convenue, notre équipe réalise les travaux conformément au contrat..</p>
                    </div>
                    <div className="step">
                        <h2>03.</h2>
                        <h3>Service après-vente.</h3>
                        <p>Nous restons à votre disposition pour toute question ou besoin de suivi, assurant ainsi une satisfaction continue.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HowWeWork;