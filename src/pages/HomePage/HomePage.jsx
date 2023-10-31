import "./HomePage.css";
import court1 from "../images/maurits_bausenhart_XtcZbSPVJ3A_unsplash_half_trans.png";
import court from "../images/maurits_bausenhart_XtcZbSPVJ3A_unsplash_half_trans_compressed.png";
import telephone from "../images/telephone.png";
import mail from "../images/mail.png";
import upArrows from "../images/up-arrows.png";
import {
  useLocomotiveScroll,
  LocomotiveScrollProvider,
} from "react-locomotive-scroll";
import "../../components/scroll.css";
import "../../components/spinner.css";
import {
  useEffect,
  useState,
  useRef,
  containerRef,
  componentDidMount,
  createRef,
} from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import Navbar from "../../components/Navbar/Navbar";
import Aufnahmeantrag from "../images/Aufnahmeantrag TC mit Datenschutz.pdf";
import API from "../api";
import imageUrlBuilder from "@sanity/image-url";

function HomePage() {
  const [imageSpeed, setImageSpeed] = useState(null);
  const [textSpeed, setTextSpeed] = useState(null);

  const [api, setApi] = useState();

  const [events, setEvents] = useState([]);
  const [mannschaften, setMannschaften] = useState([]);
  const [mitgliedschaft, setMitgliedschaft] = useState([]);
  const [kontakt, setKontakt] = useState([]);
  const [vereinsleitung, setVereinsleitung] = useState([]);

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
    scroll && scroll.scrollTo(0, 0);
  };

  useEffect(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth < 687) {
      setImageSpeed("0.5");
      setTextSpeed("2.5");
    } else {
      setImageSpeed("0");
      setTextSpeed("1.5");
    }
    if (scroll) {
      scroll.update();
    }

    // EVENTS Request
    API.fetch(`*[_type == "events"]`)
      .then((data) => setEvents(data[0]))
      .catch(console.error, "events");

    // MANNSCHAFTEN Request
    API.fetch(`*[_type == "teams"]`)
      .then((data) => setMannschaften(data[0]))
      .catch(console.error, "teams");

    // MITGLIEDSCHAFT Request
    API.fetch(`*[_type == "mitgliedschaft"]`)
      .then((data) => setMitgliedschaft(data[0]))
      .catch(console.error);

    // KONTAKT  Request
    API.fetch(`*[_type == "kontakt"]`)
      .then((data) => setKontakt(data[0]))
      .catch(console.error, "kontakt");

    // KONTAKT  Request
    API.fetch(`*[_type == "vereinsleitung"]`)
      .then((data) => setVereinsleitung(data[0]))
      .catch(console.error, "vereinsleitung");
  }, [scroll, events]);

  const getDate = (element) => {
    let months = [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ];
    console.log(element.slice(5, 7));
    return months[Number(element.slice(5, 7)) -2 ];
  };

  const [hue, setHue] = useState(0);
  const color = `hsl(${hue + (700 % 360)}deg 60% 50%)`;

  const builder = imageUrlBuilder(API);

  const urlFor = (source) => {
    return builder.image(source);
  };

  return (
    <>
      <Navbar />
      <main className="homepage disabled-mobile" data-scroll-container>
        {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
        {/* HEADER */}
        <section
          id="home"
          className="court"
          style={{ backgroundImage: `url(${court})` }}
          data-scroll-section
          data-scroll-speed={imageSpeed}
        >
          <div className="header" data-scroll data-scroll-speed="4">
            <div className="grid"></div>
            <div className="lines"></div>
            <h1>
              <span className="span-first">Am Langen Steg</span>
              <span>Am Langen Steg</span>
            </h1>
            <h2>Tennis Club</h2>

            <h3>TC Am Langen Steg e.V. in Weiden in der Oberpfalz</h3>
          </div>
        </section>

        {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
        {/* // AKTUELLES */}
        <section className="container" id="aktuelles" data-scroll-section>
          {events.length !== 0 ? (
            <div
              className="text"
              data-scroll
              data-scroll-speed={textSpeed}
              data-scroll-class="appear"
            >
              <h1>{events.headline}</h1>

              {/* Rendering single events */}
              {events.events
                ? events.events.map((event) => {
                    return (
                      <div className="kalender">
                        <div className="date">
                          <h5 className="month">{getDate(event.date)}</h5>
                          <h3 className="day">{event.date.substring(8, 10)}</h3>
                        </div>
                        <div className="event align-center">
                          <h3>{event.headline}</h3>
                          <p>{event.description}</p>
                        </div>
                      </div>
                    );
                  })
                : console.log("error single events")}

              {/* Rendering permanent events */}
              {events.permanentEvents
                ? events.permanentEvents.map((event) => {
                    return (
                      <div className="kalender">
                        <div className="date">
                          <h5 className="month">jeden</h5>
                          <h3 className="day">{event.day}</h3>
                        </div>
                        <div className="event align-center">
                          <h3>{event.headline}</h3>
                          <p>{event.description}</p>
                        </div>
                      </div>
                    );
                  })
                : console.log("error")}

              <h6>{events.text}</h6>
            </div>
          ) : (
            <div className="loader-div">
              <span className="loader"></span>
            </div>
          )}

          {events.length !== 0 ? (
            <div data-scroll data-scroll-speed={imageSpeed}>
              <img
                src={urlFor(events.image)
                  .quality(50)
                  .maxHeight(900)
                  .maxWidth(900)
                  .url()}
                className="image"
              ></img>
            </div>
          ) : (
            <span className="loader"></span>
          )}
        </section>

        {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
        {/* // MANNSCHAFTEN */}
        <section className="container" id="mannschaften" data-scroll-section>
          {mannschaften.length !== 0 ? (
            <div data-scroll data-scroll-speed={imageSpeed}>
              <img
                src={
                  events.image
                    ? urlFor(mannschaften.image)
                        .maxWidth(1000)
                        .maxHeight(1000)
                        .quality(50)
                        .url()
                    : ""
                }
                className="image"
              ></img>
            </div>
          ) : (
            <span className="loader"></span>
          )}

          {mannschaften.length !== 0 ? (
            <div className="text" data-scroll data-scroll-speed={textSpeed}>
              <h1>{mannschaften.headline}</h1>

              <div className="all-teams">
                {mannschaften.length != 0 ? (
                  mannschaften.teams.map((m) => {
                    return (
                      <div className="team">
                        <h3>{m.ueberschrift}</h3>
                        <p>
                          Trainingszeiten Sommer: <br /> {m.trainingSummer}
                        </p>
                        <p>
                          Trainingszeiten Winter (Halle am Postkeller): <br />{" "}
                          {m.trainingWinter}
                        </p>
                        <p>
                          {" "}
                          Mannschaftsspiele: <br /> {m.games}
                        </p>
                        <p>
                          {" "}
                          Mannschaftsführer/in: <br /> {m.teamleader}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <span className="loader"></span>
                )}
              </div>

              <div className="spielpläne">
                <a href={mannschaften.link} target="_blank">
                  Spielpläne & Tabellen
                </a>
              </div>
            </div>
          ) : (
            <span className="loader"></span>
          )}
        </section>

        {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
        {/* MITGLIEDSCHAFT */}
        <section className="container" id="mitgliedschaft" data-scroll-section>
          {mitgliedschaft.length !== 0 ? (
            <div
              className="text mitgliedschaft"
              data-scroll
              data-scroll-speed={textSpeed}
            >
              {mitgliedschaft != null ? (
                <div>
                  <h1>{mitgliedschaft.headline}</h1>
                  <p>{mitgliedschaft.description}</p>
                </div>
              ) : (
                console.log("error getting mitgliedschaft")
              )}

              <h3>Beiträge</h3>
              <table className="beiträge">
                {mitgliedschaft != null
                  ? mitgliedschaft.beitraege.map((b) => {
                      return (
                        <tr>
                          <td>{b.personengruppe}</td>
                          <td>{b.beitrag}</td>
                        </tr>
                      );
                    })
                  : console.log("loading beiträge")}
              </table>
              <p className="zusatz">
                {mitgliedschaft != null ? mitgliedschaft.zusatz : ""}
              </p>
              <h3>Bankverbindungen</h3>
              <div className="bankverbindungen">
                {mitgliedschaft != null ? (
                  mitgliedschaft.bankverbindungen.map((bankv) => {
                    return (
                      <div className="bankverbindung">
                        <p>{bankv.bank}</p>
                        <p>IBAN: {bankv.iban}</p>
                        <p>BIC: {bankv.bic}</p>
                      </div>
                    );
                  })
                ) : (
                  <span className="loader"></span>
                )}
              </div>

              <h3>Antrag</h3>
              <p>{mitgliedschaft != null ? mitgliedschaft.antrag : ""} </p>
              <a
                className="link"
                href={Aufnahmeantrag}
                target="_blank"
                download
              >
                Link zum PDF Formular
              </a>
            </div>
          ) : (
            <span className="loader"></span>
          )}

          {mitgliedschaft.length !== 0 ? (
            <div data-scroll data-scroll-speed={imageSpeed}>
              <img
                src={
                  events.image
                    ? urlFor(mitgliedschaft.image)
                        .maxWidth(1000)
                        .maxHeight(1000)
                        .quality(50)
                        .url()
                    : ""
                }
                className="image"
              ></img>
            </div>
          ) : (
            <span className="loader"></span>
          )}
        </section>

        <section className="container" id="kontakt" data-scroll-section>
          {kontakt.length !== 0 ? (
            <div data-scroll data-scroll-speed={imageSpeed}>
              <img
                src={urlFor(kontakt.image)
                  .maxWidth(1000)
                  .maxHeight(1000)
                  .quality(50)
                  .url()}
                className="image"
              ></img>
            </div>
          ) : (
            <span className="loader"></span>
          )}

          {kontakt.length != 0 ? (
            <div
              className="text kontakt"
              data-scroll
              data-scroll-speed={textSpeed}
            >
              <h1>{kontakt.headline}</h1>
              <h4>{kontakt.description}</h4>

              <div className="adressen">
                <div>
                  <h5>Adresse</h5>
                  <p>{kontakt.adress.name}</p>
                  <p>{kontakt.adress.street}</p>
                  <p>{kontakt.adress.city}</p>
                </div>
                <div>
                  <h5>Postadresse</h5>
                  <p>{kontakt.postadress.name}</p>
                  <p>{kontakt.postadress.street}</p>
                  <p>{kontakt.postadress.city}</p>
                </div>
              </div>

              <div className="telefon-mail">
                <p>{kontakt.contactTimes}</p>
                <div className="telefon-mail-kontakt">
                  <h4>
                    <img src={telephone}></img> {kontakt.telephone}
                  </h4>
                  <h4>
                    <img src={mail}></img>
                    {kontakt.mail}
                  </h4>
                </div>
              </div>

              <div className="map-div">
                <Map
                  height={300}
                  defaultCenter={[49.683893, 12.172768]}
                  defaultZoom={15}
                  id="map"
                  metaWheelZoom="false"
                >
                  <Marker
                    width={35}
                    anchor={[49.683893, 12.172768]}
                    color={color}
                    onClick={() => setHue(hue + 20)}
                  />
                  <ZoomControl />
                </Map>
              </div>

              <div className="satzung">
                <h5>Satzung</h5>
                <p>{kontakt.satzung}</p>
                <a
                  className="link"
                  href="https://www.tcamlangensteg.de/wp-content/uploads/2014/12/Satzung-TC-Am-Langen-Steg.pdf"
                  target="_blank"
                >
                  Satzung
                </a>
                {/* {kontakt.length != 0?
              <a href={`${ kontakt.file.asset}?dl=`}>Manuscript</a> :
              <p>fail</p>} */}
              </div>
            </div>
          ) : (
            "error"
          )}
        </section>

        <div className="last-item-with-footer">
          {vereinsleitung.length != 0 ? (
            <section
              className="container"
              id="vereinsleitung"
              data-scroll-section
            >
              <div className="text" data-scroll data-scroll-speed={textSpeed}>
                <h1>{vereinsleitung.headline}</h1>

                {vereinsleitung.groups.map((group) => {
                  return (
                    <>
                      <h3>{group.art}</h3>
                      <div className="vereinsleitung-liste">
                        {group.personArray.map((person) => {
                          return (
                            <div className="person">
                              <h4>{person.position}</h4>
                              <p>{person.name}</p>
                              <p>{person.strasse}</p>
                              <p>{person.stadt}</p>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
              <div data-scroll data-scroll-speed={imageSpeed}>
                <img
                  src={urlFor(vereinsleitung.image)
                    .maxWidth(1000)
                    .maxHeight(1000)
                    .quality(50)
                    .url()}
                  className="image"
                ></img>
              </div>
            </section>
          ) : (
            <span className="loader"></span>
          )}
        </div>
      </main>
    </>
  );
}

export default HomePage;

// export default Homepage;
