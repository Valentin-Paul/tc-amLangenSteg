import "./HomePage.css";
import court from "../images/maurits_bausenhart_XtcZbSPVJ3A_unsplash_half_trans.png"
import second from "../images/raphael-lovaski-xLS_W6RVx-8-unsplash.jpg"
import third from "../images/moises-alex-WqI-PbYugn4-unsplash.jpg"
import forth from "../images/pexels-cottonbro-studio-5740517.jpg"
import  fifth from "../images/ben-hershey-K9HgyI3qmqA-unsplash.jpg"
import sixth from "../images/erwan-hesry-uJ-OO3aZsSQ-unsplash.jpg"
import upArrows from "../images/up-arrows.png"
import LocomotiveScroll from 'locomotive-scroll';
import "../../components/scroll.css"
import { useEffect,useState } from "react";
import { Map, Marker,  ZoomControl } from "pigeon-maps"


function HomePage() {

  const[imageSpeed, setImageSpeed] = useState(null)
  const [textSpeed, setTextSpeed] = useState(null)



  useEffect(()=>{

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      resetNativeScroll: true,
      smartphone: {
        // breakpoint: 0,
        getDirection: true,
        smooth: true,
        smoothMobile: true,
        scrollFromAnywhere: true,
        resetNativeScroll: true,
        // lerp: 1,
      },
      tablet: {
      //  breakpoint: 0,
      getDirection: true,
        smooth: true,
        smoothMobile: true,
        scrollFromAnywhere: true,
        resetNativeScroll: true,
        // lerp: 1,
      }
    })
    const anchorLinks = document.querySelectorAll(
      'a[href^=\\#]:not([href$=\\#])'
    );
  
    anchorLinks.forEach((anchorLink) => {
      let hashval = anchorLink.getAttribute('href');
      let target = document.querySelector(hashval);
      let coordinates = document.getElementById(target.id).getBoundingClientRect().top - 100
  
      anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
  
        // anchorLinks.forEach((anchorLink) => {
        //   anchorLink.classList.remove('active');
        // });
  
        // e.target.classList.add('active');
        console.log(window.innerWidth)
        scroll.scrollTo(coordinates);
      });
    });
   

    let screenWidth = window.innerWidth
    if (screenWidth < 687){
      setImageSpeed("1")
      setTextSpeed("1")
    }
    else{
      setImageSpeed("1")
      setTextSpeed("3")
    }
  
  }, [])

  const [hue, setHue] = useState(0)
  const color = `hsl(${hue +700 % 360}deg 60% 50%)`

  const [date, setDate] = useState("2022-12-02")
  const months = ["Jan", "Feb", "M??r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  

  return (
    <div className="homepage" data-scroll-container>
    
    <div className="court" style={{ backgroundImage: `url(${court})` }} data-scroll data-scroll-speed={imageSpeed}>
     <div className="header" id="home" data-scroll data-scroll-speed="4">
    <div className="grid"></div>
    <div className="lines"></div>
    <h1>
      <span className="span-first">Am Langen Steg</span>
      <span>Am Langen Steg</span>
    </h1>
    <h2>Tennis Club</h2>

    <h3 >TC Am Langen Steg e.V. in Weiden in der Oberpfalz</h3>

    
    </div>
    </div>
    
    
 


    {/* // AKTUELLES */}

    <div className="container" id="aktuelles" >
    <div className="text" data-scroll data-scroll-speed={textSpeed}>
    <h1>Aktuelles</h1>

    <div className="kalender">
    <div className="date">
    <h5 className="month">{ months[Number(date.slice(5,7))-1] }</h5>
    <h3 className="day">{date.slice(8,9) == 0? date.slice(9,10): date.sclice(8,10)}</h3>
    </div>
    <div className="event align-center">
    <h3>Weihnachtsfeier 2022</h3>
    <p>Der TC am Langen Steg l??dt ein zur Weihnachtsfeier am Fr. 2.12. um 19:00 Uhr im Tennisheim. F??r Gl??hwein, Tee sowie Pl??tzchen ist gesorgt.</p>
    </div>
    </div>

    <div className="kalender">
    <div className="date">
    <h5 className="month">Jan</h5>
    <h3 className="day">14</h3>
    </div>
    <div className="event align-center">
    <h3>Fr??hshoppen</h3>
    <p>Der n??chste Fr??hschoppen findet am wieder am 14.01.2023 im Vereinsheim statt. Wir freuen uns ??ber euer Erscheinen</p>
    </div>
    </div>
 
 <h6 >Bei kommenden Terminen halten wir euch hier auf dem Laufenden...</h6>
   
    </div>
    <div className="image" style={{ backgroundImage: `url(${forth})` }} data-scroll data-scroll-speed={imageSpeed}>
    </div>
    </div>



{/* // MANNSCHAFTEN */}

<div className="container" id="mannschaften">
    <div className="image"  style={{ backgroundImage: `url(${third})` }} data-scroll data-scroll-speed={imageSpeed}></div>
    <div className="text" data-scroll data-scroll-speed={textSpeed}>
    <h1 >Mannschaften</h1>

<div className="team">
<h3>M??dchen 15 Nordliga 2 Gr. 446</h3>
    <p>Trainingszeiten: Dienstag von 17:00 ??? 18:00 Uhr</p>
    <p> Mannschaftsspiele: Freitags ab 16:00 Uhr</p>
    <p> Mannschaftsf??hrerin: Leni Strau??   Tel. 0961 / 3989899</p>
</div>
    
<div className="team">
<h3>Damen Nordliga 4 (4er) Gr. 130</h3>
    <p>Trainingszeiten: Mittwoch von 15:30 ??? 17:30 Uhr</p>
        <p> Mannschaftsspiele: Sonntags um 10:00 Uhr</p>
        <p> Mannschaftsf??hrerin: Claudia B??gl - Handy:  0171 3785160 </p>

</div>
    </div>
    </div>

   

  
    <div className="container" id="mitgliedschaft">
    <div className="text mitgliedschaft" data-scroll data-scroll-speed={textSpeed}>
    <h1>Mitgliedschaft</h1>
    <p>Wir freuen uns, dass Sie sich f??r den TC Am Langen Steg interessieren! M??chten Sie selbst Mitglied werden? Hier finden Sie die aktuellen Beitr??ge f??r Mitglieder sowie einen Aufnahmeantrag zum downloaden und ausdrucken.</p>
    <h3>Beitr??ge</h3>
    
    <table className="beitr??ge">
      <tr>
        <td>Einzelmitglied</td>
        <td>130 ???*</td>
      </tr>
      <tr>
        <td>Familie</td>
        <td>175 ???*</td>
      </tr>
      <tr>
        <td>Erwachsener mit Kind bis 18</td>
        <td>140 ???*</td>
      </tr>
      <tr>
        <td>Studierende / Auszubildende</td>
        <td>65 ???*</td>
      </tr>
      <tr>
        <td>Jugendliche bis 18</td>
        <td>50???*</td>
      </tr>
      <tr>
        <td>Kinder bis 14</td>
        <td>30???</td>
      </tr>
      <tr>
        <td>Passivbeitrag</td>
        <td>20???</td>
      </tr>
    </table>
    <p className="zusatz">*Zus??tzlich werden 20??? Arbeitsumlage verreichnet. Die Abgeltung kann auch durch drei Arbeitsstunden auf unserer Anlage erfolgen</p>
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
    <p>Bitte drucken Sie den Aufnahmeantrag aus und reichen diesen in der Gesch??ftsstelle des TC Am Langen Steg ein.</p>
    <a className="link" href="https://www.tcamlangensteg.de/wp-content/uploads/2020/01/Mitgliedsantrag-TC-Am-Langen-Steg.pdf" target="_blank">Link zum PDF Formular</a>
    </div>

    <div className="image" style={{ backgroundImage: `url(${second})` }} data-scroll  data-scroll-speed={imageSpeed}>
    </div>
    </div>


    <div className="container" id="kontakt">
    <div className="image" style={{ backgroundImage: `url(${fifth})` }} data-scroll  data-scroll-speed={imageSpeed}></div>
    <div className="text kontakt" data-scroll  data-scroll-speed={textSpeed}>
    <h1>Kontakt</h1>
    <h4>Solltest du Fragen, Anliegen oder Kritik haben - Schreibe uns einfach eine Nachricht oder rufe an! </h4>
    <div className="telefon-mail">
    <h5>Telefon: 0961/38824610</h5>
    <h5>Email: info@tcamlangensteg.de</h5>
    </div>
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

    <Map height={300} defaultCenter={[49.683893, 12.172768]} defaultZoom={15}>
      <Marker 
        width={35}
        anchor={[49.683893, 12.172768]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
      < ZoomControl/>
    </Map>
   
  
    <div className="satzung">
    <h3>Satzung</h3>
    <p>Hier finden Sie die Satzung des TC Am Langen Steg in Weiden i. d. OPf. (Stand 30.06.2012)</p>
    <a className="link" href="https://www.tcamlangensteg.de/wp-content/uploads/2014/12/Satzung-TC-Am-Langen-Steg.pdf" target="_blank">Satzung</a>
    </div>
    
 </div>
    </div>

    
    <div className="last-item-with-footer" >
    <div className="container" id="vereinsleitung">
    <div className="text" data-scroll  data-scroll-speed={textSpeed}>
    <h1>Vereinsleitung</h1>
    <h3>Vorstand</h3>
    <div className="vereinsleitung-liste">
    
    <div className="person">
    <h4>1. Vorsitzender</h4>
      <p>Gerd Neumann</p>
      <p>Ziegelweg 6b</p>  
      <p>92637 Weiden</p> 
      <p>Telefon: 0160 91960835</p>
      <p>E-Mail: neumi.regis@web.de</p>
    </div>
    <div className="person">
    <h4>2. Vorsitzender</h4>
      <p>Manfred Kammerer</p>
      <p>Luitpoldstr. 20 a</p>  
      <p>92637 Weiden</p> 
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
    <h4>Schriftf??hrer</h4>
      <p>Reinhold Weigert</p>
      <p>Sebastianstra??e 30</p>  
      <p>92637 Weiden</p> 
      <p>Telefon: 0961/31534</p>
      <p>E-Mail: WeigertR@t-online.de</p>
    </div>
    </div>

    <h3>Vereinsausschuss</h3>
    <div className="vereinsleitung-liste">
    
    <div className="person">
    <h4>Sport- & Jugendwart</h4>
      <p>Daniel Strobl</p>
      <p>Thomastr. 8</p>  
      <p>92665 Altenstadt</p> 
      <p>Telefon: 09602/615656</p>
    
    </div>
    <div className="person">
    <h4>Vergn??gungsw??rtin</h4>
      <p>Claudia B??gl</p>
      <p>Ziegelweg 6b</p>  
      <p>92637 Weiden</p> 
      <p>Telefon: 0961/42061</p>
      <p>E-Mail: C.Boegl@t-online.de</p>
    </div>
    <div className="person">
    <h4>Technische Leitung</h4>
      <p>Marc Badhorn</p>
      <p>Landgerichtsstra??e 20</p>  
      <p>92637 Weiden</p> 
      <p>Telefon: 0961/3988550</p>
      <p>E-Mail: mbadhorn@weiden.de</p>
    </div>
    <div className="person">
    <h4>Technische Leitung</h4>
      <p>Philipp Neubauer</p>
      <p>Sebastianstra??e 30</p>  
      <p>92637 Weiden</p> 
      <p>Telefon: 0151 46429978</p>
      
    </div>
    </div>
    
    
    </div>
    <div className="image" style={{ backgroundImage: `url(${sixth})` }} data-scroll  data-scroll-speed={imageSpeed}>
    </div>

   
    </div>

    <a className="footer"  href="#home">
    <img src={upArrows}></img>
    </a>
    
    </div>


   


    </div>
 
  );
}

export default HomePage;
