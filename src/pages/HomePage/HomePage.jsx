import "./HomePage.css";
import court from "../images/maurits-bausenhart-XtcZbSPVJ3A-unsplash.jpg"
import second from "../images/raphael-lovaski-xLS_W6RVx-8-unsplash.jpg"
import third from "../images/moises-alex-WqI-PbYugn4-unsplash.jpg"
import forth from "../images/pexels-cottonbro-studio-5740517.jpg"
import  fifth from "../images/ben-hershey-K9HgyI3qmqA-unsplash.jpg"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";


function HomePage() {


  return (
    <div className="homepage">
    <div className="court" style={{ backgroundImage: `url(${court})` }}>
     <div className="header" id="home">
    <div className="grid"></div>
    <div className="lines"></div>
    <h1>
      <span className="span-first">Am Langen Steg</span>
      <span>Am Langen Steg</span>
    </h1>
    <h2>Tennis Club</h2>

    <h3>TC Am Langen Steg e.V. in Weiden in der Oberpfalz</h3>
    </div>
    </div>

    <div className="container" id="aktuelles">
    <div className="text">
    <h1>Aktuelles</h1>
    <h3>Hauptversammlung</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <h3>Wanderung</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
    </div>
    <div className="image" style={{ backgroundImage: `url(${forth})` }}>
    </div>
    </div>

    <div className="container" id="mannschaften">
    <div className="image" style={{ backgroundImage: `url(${third})` }}></div>
    <div className="text">
    <h1>Mannschaften</h1>

<div className="team">
<h3>Mädchen 15 Nordliga 2 Gr. 446</h3>
    <p>Trainingszeiten: Dienstag von 17:00 – 18:00 Uhr</p>
    <p> Mannschaftsspiele: jeweils am Freitag ab 16:00 Uhr</p>
    <p> Mannschaftsführer: Leni Strauß   Tel. 0961 / 3989899</p>
</div>
    
<div className="team">
<h3>Damen Nordliga 4 (4er) Gr. 130</h3>
    <p>Trainingszeiten:
        Mittwoch von 15:30 – 17:30 Uhr auf zwei Plätzen</p>
        <p> Mannschaftsspiele: jeweils am Sonntag um 10:00 Uhr</p>
        <p> Mannschaftsführerin: Claudia Bögl - Handy:  0171 3785160 </p>

</div>
    
    </div>
    </div>

   

    <div className="container" id="mitgliedschaft">
    <div className="text mitgliedschaft">
    <h1>Mitgliedschaft</h1>
    <p>Wir freuen uns, dass Sie sich für den TC Am Langen Steg interessieren! Möchten Sie selbst Mitglied werden? Im Folgenden finden Sie die aktuellen Beiträge für Mitglieder sowie einen Aufnahmeantrag zum downloaden und ausdrucken.</p>
    <h3>Beiträge</h3>
    <table className="beiträge">
      <tr>
        <td>Einzelmitglied</td>
        <td>130 €*</td>
      </tr>
      <tr>
        <td>Familie</td>
        <td>175 €*</td>
      </tr>
      <tr>
        <td>Erwachsener mit Kind bis 18</td>
        <td>140 €*</td>
      </tr>
      <tr>
        <td>Studierende / Auszubildende</td>
        <td>65 €*</td>
      </tr>
      <tr>
        <td>Jugendliche bis 18</td>
        <td>50€*</td>
      </tr>
      <tr>
        <td>Kinder bis 14</td>
        <td>30€</td>
      </tr>
      <tr>
        <td>Passivbeitrag</td>
        <td>20€</td>
      </tr>
    </table>
    <p className="zusatz">*Zusätzlich werden 20€ Arbeitsumlage verreichnet. Die Abgeltung kann auch durch drei Arbeitsstunden auf unserer Anlage erfolgen</p>
    <h3>Bankverbindungen</h3>
    <table className="bankverbindung">
      <tr>
        <td>Sparkasse Oberpfalz Nord</td>
        <td>IBAN:  DE37 7535 0000 0011 1149 15</td>
        <td>BIC: BYLADEM1WEN</td>
      </tr>
      <tr>
        <td>Volksbank Nordoberpfalz</td>
        <td>IBAN:  DE15 7539 0000 0000 0117 03</td>
        <td>BIC: GENODEF1WEN</td>
      </tr>
    </table>
    <h3>Antrag</h3>
    <p>Bitte drucken Sie den Aufnahmeantrag aus und reichen diesen in der Geschäftsstelle des TC Am Langen Steg ein.</p>
    <a className="link">Link zum PDF Formular</a>
    </div>

    <div className="image" style={{ backgroundImage: `url(${second})` }}>
    </div>
    </div>


    <div className="container">
    <div className="image" style={{ backgroundImage: `url(${fifth})` }}></div>
    <div className="text kontakt">
    <h1>Kontakt</h1>
    <h4>Solltest du Fragen, Anliegen oder Kritik haben - Schreibe uns einfach eine Nachricht oder rufe an! </h4>
    <div className="adressen">
    <div>
    <h3>Adresse</h3>
      <p>TC Am Langen Steg e.V.</p>  
      <p>Am Langen Steg 21</p>
      <p>92637  Weiden</p> 
    </div>
    <div>
    <h3>Postadresse</h3>
      <p>TC Am Langen Steg e.V.</p>  
      <p>Postfach 2501</p>
      <p>92615 Weiden</p> 
    </div>
    </div>
    
    <p>Telefon: 0961/38824610</p>
    <p>Email: info@tcamlangensteg.de</p>

    <h3>Satzung</h3>
    <p>Hier finden Sie die Satzung des TC Am Langen Steg in Weiden i. d. OPf. (Stand 30.06.2012)</p>
    <a className="link">Satzung</a>
 </div>
    </div>

    
      <div className="container">
    <div className="text">
    <h1>Vereinsleitung</h1>
    <h3>Vorstand</h3>
    <div className="vereinsleitung">
    
    <div className="person">
    <h4>1. Vorsitzender</h4>
      <p>Gerd Neumann</p>
      <p>Ziegelweg 6b</p>  
      <p>92615 Weiden</p> 
      <p>Telefon: 0160 91960835</p>
      <p>E-Mail: neumi.regis@web.de</p>
    </div>
    <div className="person">
    <h4>2. Vorsitzender</h4>
      <p>Manfred Kammerer</p>
      <p>Luitpoldstr. 20 a</p>  
      <p>92615 Weiden</p> 
      <p>Telefon: 0961/44701</p>
      <p>E-Mail: manfred.kammerer4747@web.de</p>
    </div>
    <div className="person">
    <h4>Schatzmeister</h4>
      <p>Herbert Beierl</p>
      <p>Haydnstr. 2</p>  
      <p>92665 Altenstadt</p> 
      <p>Telefon: 09602/61289</p>
      <p>E-Mail: herbert.beierl@gmx.de</p>
    </div>
    <div className="person">
    <h4>Schriftführer</h4>
      <p>Reinhold Weigert</p>
      <p>Sebastianstraße 30</p>  
      <p>92637 Weiden</p> 
      <p>Telefon: 0961/31534</p>
      <p>E-Mail: WeigertR@t-online.de</p>
    </div>
    </div>
    
    
    </div>
    <div className="image" style={{ backgroundImage: `url(${forth})` }}>
    </div>
    </div>


    </div>
 
  );
}

export default HomePage;
