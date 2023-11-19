import court from "../images/maurits_bausenhart_XtcZbSPVJ3A_unsplash_half_trans_compressed.png";
import "../Artikel/Article.css";
import { useParams } from "react-router-dom";
import API from "../api";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../../components/scroll.css";
import {
  useLocomotiveScroll,
  LocomotiveScrollProvider,
} from "react-locomotive-scroll";
import ImageGallery from "react-image-gallery";
import imageUrlBuilder from "@sanity/image-url";

function Article() {
  const builder = imageUrlBuilder(API);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const { articleId } = useParams();
  const [article, setArticle] = useState([]);
  const [gallery, setGallery] = useState([]);

  function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getUTCDate();
    const month = new Intl.DateTimeFormat("de-DE", { month: "long" }).format(
      date
    );
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  }

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

  useEffect(() => {
    API.fetch(
      `*[_type == 'blog']{
        blogposts[][_key == "${articleId}"] {
           headline,
            date,
            image,
            section,
            imagesGallery
        }
      }`
    )
      .then((data) => setArticle(data[0].blogposts[0]))
      .catch(console.error);
  }, []);

  const galleryfunction = () => {
    article.imagesGallery !== undefined && Array.isArray(article.imagesGallery)
      ? setGallery(
          article.imagesGallery.map((sanityImage) => ({
            original: urlFor(sanityImage)
              .maxWidth(50)
              .maxHeight(50)
              .quality(50)
              .url(),
            thumbnail: urlFor(sanityImage)
              .maxWidth(50)
              .maxHeight(50)
              .quality(50)
              .url(),
          }))
        )
      : console.log("error");
  };

  useEffect(() => {
    galleryfunction();
  }, [article]);

  useEffect(() => {
    if (scroll) {
      scroll.update();
    }
  }, [article, galleryfunction]);

  return (
    <main className="article disabled-mobile" data-scroll-container>
      <section
        class="single-article position-relative object-fit-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${court})`,
        }}
        data-scroll-section
        data-scroll-speed="4"
        id="article-header"
      >
        <div className="navbar-agb row">
          <span className="col-3"></span>
          <a href="/" className="col-6">
            Home
          </a>
          <div className=" col-3 px-5 text-end">
          <a href="/blog" className="back-to-article">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 20 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 10L3.64645 10.3536L3.29289 10L3.64645 9.64645L4 10ZM20.5 18C20.5 18.2761 20.2761 18.5 20 18.5C19.7239 18.5 19.5 18.2761 19.5 18L20.5 18ZM8.64645 15.3536L3.64645 10.3536L4.35355 9.64645L9.35355 14.6464L8.64645 15.3536ZM3.64645 9.64645L8.64645 4.64645L9.35355 5.35355L4.35355 10.3536L3.64645 9.64645ZM4 9.5L14 9.5L14 10.5L4 10.5L4 9.5ZM20.5 16L20.5 18L19.5 18L19.5 16L20.5 16ZM14 9.5C17.5898 9.5 20.5 12.4101 20.5 16L19.5 16C19.5 12.9624 17.0376 10.5 14 10.5L14 9.5Z"
                  fill="#222222"
                ></path>{" "}
              </g>
            </svg>
          <p>Artikel</p>
          </a>
          </div>
        </div>

        {article !== [] ? (
          <div class="container text-white py-5 justify-content-center article-header">
            <div class="row py-lg-5 ">
              <div class="col-sm-12 my-auto">
                <h1>{article.headline}</h1>
                <p>
                  {article.date !== undefined
                    ? convertTimestamp(article.date)
                    : null}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </section>
      <section id="article-content" data-scroll-section data-scroll-speed="0">
        {article.section !== undefined ? (
          article.section.map((sec) => {
            return (
              <div class="row  article-content">
                <div class="row text-justify">
                  <div class="col px-2 px-md-5 ">
                    <h3 class="h3 py-2">{sec.secondheadline}</h3>
                    <p class="text-lg fw-light lh-lg mb-0 align-justify text-justify">
                      {sec.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>loading</p>
        )}
        {article.imagesGallery !== undefined &&
        Array.isArray(article.imagesGallery) ? (
          <ImageGallery items={gallery} showPlayButton={false} />
        ) : null}
      </section>
    </main>
  );
}

export default Article;
