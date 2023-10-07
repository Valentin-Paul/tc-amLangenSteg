import "../Blog/Blog.css";
import court from "../images/maurits_bausenhart_XtcZbSPVJ3A_unsplash_half_trans_compressed.png";
import { NavLink, Link } from "react-router-dom";
import API from "../api";
import { useEffect, useState, useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";
import placeholderimage from "../images/pexels-cottonbro-studio-5740517.jpg";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Blog() {
  const [blog, setBlog] = useState([]);

  const builder = imageUrlBuilder(API);

  const urlFor = (source) => {
    return builder.image(source);
  };

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
    // Blog Request
    API.fetch(`*[_type == "blog"]`)
      .then((data) => setBlog(data[0]))
      .catch(console.error, "blog");
  }, []);

  useEffect(() => {
    if (scroll) {
      scroll.update();
    }
  }, [blog]);

  return (
    <main className="blog disabled-mobile" data-scroll-container>
      <section
        id="header-blog"
        class=" text-center"
        data-scroll-section
        data-scroll-speed="1"
      >
        <div className="navbar-agb">
          <a href="/">Home</a>
        </div>
        {blog.length !== 0 ? (
          <>
            <h1 class="display-1 mt-4">{blog.headline}</h1>
            <p class="lead">{blog.text}</p>
          </>
        ) : (
          console.log("error displaying header")
        )}
      </section>

      <section
        id="gallery"
        data-scroll-section
        data-scroll-speed="1"
        className="mb-3"
      >
        <div class="container-fluid ">
          <div class="row mx-2 ">
            {blog.length !== 0
              ? blog.blogposts.map((article) => {
                  return (
                    <>
                      <div class="col-lg-4 mb-4">
                        <div class="card">
                          <img
                            src={
                              article.image
                                ? urlFor(article.image)
                                    .maxWidth(50)
                                    .maxHeight(50)
                                    .quality(50)
                                    .url()
                                : placeholderimage
                            }
                            alt=""
                            className="card-image"
                          />
                          <div class="card-body">
                            <h5 class="card-title mt-2">{article.headline}</h5>
                            <p class="card-text text-justify">
                              {article.section[0].description
                                .split(/\s+/)
                                .slice(0, 20)
                                .join(" ")}
                              ...
                            </p>
                            <a
                              href={`/blog/${article._key}`}
                              class="btn btn-outline-success btn-sm mx-5"
                            >
                              Artikel lesen
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : console.log("error getting blog")}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
