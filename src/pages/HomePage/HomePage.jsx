import "./HomePage.css";
import court from "../images/maurits_bausenhart_XtcZbSPVJ3A_unsplash_half_trans.png"
import second from "../images/raphael-lovaski-xLS_W6RVx-8-unsplash.jpg"
import third from "../images/moises-alex-WqI-PbYugn4-unsplash.jpg"
import forth from "../images/pexels-cottonbro-studio-5740517.jpg"
import  fifth from "../images/ben-hershey-K9HgyI3qmqA-unsplash.jpg"
import sixth from "../images/erwan-hesry-uJ-OO3aZsSQ-unsplash.jpg"
import telephone from "../images/telephone.png"
import mail from "../images/mail.png"
import upArrows from "../images/up-arrows.png"
import {useLocomotiveScroll, LocomotiveScrollProvider} from 'react-locomotive-scroll';
import "../../components/scroll.css"
import { useEffect, useState, useRef, containerRef, componentDidMount, createRef} from "react";
import { Map, Marker,  ZoomControl } from "pigeon-maps"
import Navbar from "../../components/Navbar/Navbar";
import Aufnahmeantrag from "../images/Aufnahmeantrag TC mit Datenschutz.pdf"

// import { useLocomotiveScroll } from 'react-locomotive-scroll';



function HomePage() {



  const[imageSpeed, setImageSpeed] = useState(null)
  const [textSpeed, setTextSpeed] = useState(null)

  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll({
    el: containerRef.current,
    smooth: true,
    smoothMobile: 0,
    mobile: {
      breakpoint: 767,
        getDirection: true,
        smooth: true,
        scrollFromAnywhere: true,
        resetNativeScroll: true,
  },
  tablet: {
    smooth: true,
    breakpoint: 0,
},
  });



  const goToTop = () => {
    scroll && scroll.scrollTo(0,0)
  }


  useEffect(() => {
        let screenWidth = window.innerWidth
    if (screenWidth < 687){
      setImageSpeed("0.5")
      setTextSpeed("2.5")
    }
    else{
      setImageSpeed("0")
      setTextSpeed("1.5")
    }
    if (scroll) {
      scroll.update();
    }
  }, [scroll]);


  // useEffect(()=>{
  
  //   const scroll = new LocomotiveScroll({

    
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     // smartphone: {
  //     //   // breakpoint: 0,
  //     //   getDirection: true,
  //     //   smooth: true,
  //     //   smoothMobile: true,
  //     //   scrollFromAnywhere: true,
  //     //   resetNativeScroll: true,
  //     //   // lerp: 1,
  //     // },
  //     // tablet: {
  //     // //  breakpoint: 0,
  //     // getDirection: true,
  //     //   smooth: true,
  //     //   smoothMobile: true,
  //     //   scrollFromAnywhere: true,
  //     //   resetNativeScroll: true,
  //     //   // lerp: 1,
  //     // }
  //   })
  
  //   const anchorLinks = document.querySelectorAll(
  //     'a[href^=\\#]:not([href$=\\#])'
  //   );
  
  //   anchorLinks.forEach((anchorLink) => {
  //     let hashval = anchorLink.getAttribute('href');
  //     let target = document.querySelector(hashval);
  //     let coordinates = document.getElementById(target.id).getBoundingClientRect().top - 100
  
  //     anchorLink.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       e.stopPropagation();
  
  //       // anchorLinks.forEach((anchorLink) => {
  //       //   anchorLink.classList.remove('active');
  //       // });
  
  //       // e.target.classList.add('active');
  //       scroll.scrollTo(coordinates);
  //     });
    
  //   });
   

  //   let screenWidth = window.innerWidth
  //   if (screenWidth < 687){
  //     setImageSpeed("1")
  //     setTextSpeed("1")
  //   }
  //   else{
  //     setImageSpeed("1")
  //     setTextSpeed("3")
  //   }
  
  // }, [])

  const [hue, setHue] = useState(0)
  const color = `hsl(${hue +700 % 360}deg 60% 50%)`

  return (
    <>
         
      <Navbar />
    <main className="homepage disabled-mobile" data-scroll-container >
    <section id="home" className="court" style={{ backgroundImage: `url(${court})` }} data-scroll-section data-scroll-speed={imageSpeed}>
     <div className="header"  data-scroll data-scroll-speed="4">
    <div className="grid"></div>
    <div className="lines"></div>
    <h1>
      <span className="span-first">Am Langen Steg</span>
      <span>Am Langen Steg</span>
    </h1>
    <h2>Tennis Club</h2>

    <h3 >TC Am Langen Steg e.V. in Weiden in der Oberpfalz</h3>

    


    



    
    </div>
  
    </section>
    


    {/* // AKTUELLES */}

    <section className="container" id="aktuelles" data-scroll-section>
    <div className="text" data-scroll  data-scroll-speed={textSpeed} data-scroll-class="appear">
    <h1>Aktuelles</h1>


    <div className="kalender">
    <div className="date">
    <h5 className="month">jeden</h5>
    <h3 className="day">Mi</h3>
    </div>
    <div className="event align-center">
    <h3>Clubabend </h3>
    <p>Jeden Mittwoch ab 18 Uhr sind alle Clubmitglieder herzlich zum Clubabend im Tennisheim eingeladen. </p>
    </div>
    </div>

    <div className="kalender">
    <div className="date">
    <h5 className="month">jeden</h5>
    <h3 className="day">So</h3>
    </div>
    <div className="event align-center">
    <h3>Frühschoppen </h3>
    <p>Immer Sonntags und eventuell an Feiertagen findet im Vereinsheim unser Frühschoppen zwischen 10-12 Uhr statt. Wir freuen uns über euer Erscheinen </p>
    </div>
    </div>
 
 <h6 >Wichtiger Hinweis: nachdem unser Vereinsheim nicht öffentlich ist, dürfen nur Mitglieder bewirtet werden. Wir bitten um Verständnis.</h6>
   
    </div>
    <div className="image" style={{ backgroundImage: `url(${forth})` }} data-scroll  data-scroll-speed={imageSpeed}>
    </div>
    </section>



{/* // MANNSCHAFTEN */}

<section className="container" id="mannschaften" data-scroll-section>
    <div  className="image"  style={{ backgroundImage: `url(${third})` }} data-scroll  data-scroll-speed={imageSpeed} ></div>
    <div className="text" data-scroll  data-scroll-speed={textSpeed}>
    <h1 >Mannschaften</h1>

<div className="all-teams">


<div className="team">
<h3>Knaben 15 Nordliga 4 Gr. 406</h3>
    <p>Trainingszeiten Sommer: <br/> Dienstag von 17:00 – 18:00 Uhr</p>
    <p>Trainingszeiten Winter (Halle am Postkeller): <br/> Samstag von 10:00 – 11:00 Uhr</p>
    <p> Mannschaftsspiele: <br/> Freitags ab 15:00 Uhr</p>
    <p> Mannschaftsführer/in: <br/> Elisa Illing</p>
</div>
    
<div className="team">
<h3>Damen Nordliga 4 (4er) Gr. 132</h3>
    <p>Trainingszeiten Sommer: <br/> Mittwoch von 15:30 – 17:00 Uhr</p>
    <p>Trainingszeiten Winter (Halle am Postkeller): <br/> Samstag von 9:00 – 10:00 Uhr</p>
        <p> Mannschaftsspiele: <br/> Sonntags um 9:00 Uhr bzw. 14:00 Uhr</p>
        <p> Mannschaftsführer/in: <br/> Nicole Illing </p>

</div>

<div className="team">
<h3>Herren Nordliga 4 Gr. 049</h3>
    <p>Trainingszeiten Sommer: <br/> Samstag 11:00 - 12:00 Uhr</p>
    <p>Trainingszeiten Winter (Halle am Postkeller): <br/> (steht noch nicht fest)</p>
    <p> Mannschaftsspiele: <br/> Sonntags um 9.00 Uhr bzw. 14.00 Uhr</p>
    <p> Mannschaftsführer/in: <br/> Gerhard Neumann</p>
</div>
</div>

<div className="spielpläne">
<a href="https://www.btv.de/de/mein-verein/vereinsseite/tc-am-langen-steg-weiden.html" target="_blank">Spielpläne & Tabellen</a>
</div>
    </div>
    </section>


   

  
    <section className="container" id="mitgliedschaft" data-scroll-section>
    <div className="text mitgliedschaft" data-scroll data-scroll-speed={textSpeed}>
    <h1>Mitgliedschaft</h1>
    <p>Wir freuen uns, dass Sie sich für den TC Am Langen Steg interessieren! Möchten Sie selbst Mitglied werden? Hier finden Sie die aktuellen Beiträge für Mitglieder sowie einen Aufnahmeantrag zum downloaden und ausdrucken.</p>
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
    <div className="bankverbindungen">
    <div className="bankverbindung">
        <p>Sparkasse Oberpfalz Nord</p>
        <p>IBAN:  DE37 7535 0000 0011 1149 15</p>
        <p>BIC: BYLADEM1WEN</p>
    </div>
    <div className="bankverbindung">
        <p>Volksbank Nordoberpfalz</p>
        <p>IBAN:  DE15 7539 0000 0000 0117 03</p>
        <p> BIC: GENODEF1WEN </p>
    </div>
    </div>


    {/* <table className="bankverbindung">
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
    </table> */}
    <h3>Antrag</h3>
    <p>Bitte drucken Sie den Aufnahmeantrag aus und reichen diesen in der Geschäftsstelle des TC Am Langen Steg ein.</p>
    <a className="link" href={Aufnahmeantrag} target="_blank" download>Link zum PDF Formular</a>
    </div>

    <div className="image" style={{ backgroundImage: `url(${second})` }} data-scroll  data-scroll-speed={imageSpeed}>
    </div>
    </section>





    <section className="container" id="kontakt" data-scroll-section>
    <div className="image" style={{ backgroundImage: `url(${fifth})` }} data-scroll  data-scroll-speed={imageSpeed}></div>
    <div className="text kontakt" data-scroll  data-scroll-speed={textSpeed}>
    <h1>Kontakt</h1>
    <h4>Solltest du Fragen, Anliegen oder Kritik haben - Schreibe uns einfach eine Nachricht! </h4>
  
    <div className="adressen">
    <div>
    <h5>Adresse</h5>
      <p>TC Am Langen Steg e.V.</p>  
      <p>Am Langen Steg 21</p>
      <p>92637  Weiden</p> 
    </div>
    <div>
    <h5>Postadresse</h5>
      <p>TC Am Langen Steg e.V.</p>  
      <p>Postfach 2501</p>
      <p>92615 Weiden</p> 
    </div>
    </div>

    <div className="telefon-mail">
    <p>Kontaktzeiten: Mi 18:00-20:00, So 10:00 - 12:00   </p>
    <p>Ruft uns gerne zu diesen Zeiten an, oder schaut einfach am Tennisplatz vorbei.</p>
    <div className="telefon-mail-kontakt">
    <h4><img src={telephone}></img> 0961/38824610</h4>
    <h4><img src={mail}></img>info@tcamlangensteg.de</h4>
    </div>
    </div>

    <div className="map-div">
    <Map height={300} defaultCenter={[49.683893, 12.172768]} defaultZoom={15} id='map' metaWheelZoom="false">
      <Marker 
        width={35}
        anchor={[49.683893, 12.172768]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
      < ZoomControl/>
    </Map>
    </div>
   
  
    <div className="satzung">
    <h5>Satzung</h5>
    <p>Hier finden Sie die Satzung des TC Am Langen Steg in Weiden i. d. OPf. (Stand 30.06.2012)</p>
    <a className="link" href="https://www.tcamlangensteg.de/wp-content/uploads/2014/12/Satzung-TC-Am-Langen-Steg.pdf" target="_blank">Satzung</a>
    </div>
    
 </div>
    </section>

    
    <div className="last-item-with-footer" >
    <section className="container" id="vereinsleitung" data-scroll-section>
    <div className="text" data-scroll  data-scroll-speed={textSpeed}>
    <h1>Vereinsleitung</h1>
    <h3>Vorstand</h3>
    <div className="vereinsleitung-liste">
    
    <div className="person">
    <h4>1. Vorsitzender</h4>
      <p>Gerd Neumann</p>
      <p>Ziegelweg 6b</p>  
      <p>92637 Weiden</p> 
    </div>
    <div className="person">
    <h4>2. Vorsitzender</h4>
      <p>Manfred Kammerer</p>
      <p>Luitpoldstr. 20 a</p>  
      <p>92637 Weiden</p> 
    </div>
    <div className="person">
    <h4>Schatzmeister</h4>
      <p>Herbert Beierl</p>
      <p>Haydnstr. 2</p>  
      <p>92665 Altenstadt</p> 
    </div>
    <div className="person">
    <h4>Schriftführer</h4>
      <p>Reinhold Weigert</p>
      <p>Sebastianstraße 30</p>  
      <p>92637 Weiden</p> 
    </div>
    </div>

    <h3>Vereinsausschuss</h3>
    <div className="vereinsleitung-liste">
    
    <div className="person">
    <h4>Sport- & Jugendwart</h4>
      <p>Daniel Strobl</p>
      <p>Thomastr. 8</p>  
      <p>92665 Altenstadt</p> 
    
    </div>
    <div className="person">
    <h4>Vergnügungswart/in</h4>
      <p>Claudia Bögl</p>
      <p>Ziegelweg 6b</p>  
      <p>92637 Weiden</p> 
    </div>
    <div className="person">
    <h4>Technische Leitung</h4>
      <p>Marc Badhorn</p>
      <p>Landgerichtsstraße 20</p>  
      <p>92637 Weiden</p> 
    </div>
    <div className="person">
    <h4>Technische Leitung</h4>
      <p>Philipp Neubauer</p>
      <p>Sebastianstraße 30</p>  
      <p>92637 Weiden</p> 
      
    </div>
    </div>
    
    
    </div>
    <div className="image" style={{ backgroundImage: `url(${sixth})` }} data-scroll  data-scroll-speed={imageSpeed}>
    </div>

   
    

    <a className="footer" onClick={()=>{goToTop()}} >
    <img src={upArrows}></img>
    </a>
    </section>
    </div>


   


    </main>
    </>
  );
}

export default HomePage;





// export default Homepage;