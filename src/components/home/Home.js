import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Gallery } from "react-grid-gallery";
import ICU from "i18next-icu";
import HomeSlider from "../home-slider/HomeSlider"; // adjust the path according to your file structure
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, Typography, Box } from "@mui/material";
// import logo from "../../images/logoMM.jpg";
import backgroundImage from "../../images/OIP.jpeg";
import "./Home.css";

function Home() {
  const [isExpandedPochette, setIsExpandedPochette] = useState(false);
  const [isExpandedMirror, setIsExpandedMirror] = useState(false);
  const [isExpandedBadge, setIsExpandedBadge] = useState(false);
  const images = [
    {
      src: require("../../images/gallery/mirrorEaster.jpg"),
      original: require("../../images/gallery/mirrorEaster.jpg"),
      width: 200,
      height: 174,
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "Mirror", title: "Flora" },
      ],
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: require("../../images/gallery/mirrorGrey.jpg"),
      original:
      require("../../images/gallery/mirrorGrey.jpg"),
      width: 220,
      height: 212,
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: require("../../images/gallery/mirrorMix.jpg"),
      original:
      require("../../images/gallery/mirrorMix.jpg"),
      width: 150,
      height: 152,
      caption: "Color Pencils (Jeshu John - designerspics.com)",
    },
    {
      src: require("../../images/gallery/mirrorMix2.jpg"),
      original:
      require("../../images/gallery/mirrorMix2.jpg"),
      width: 220,
      height: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
    },
    {
      src: require("../../images/gallery/mirrors.jpg"),
      original:
      require("../../images/gallery/mirrors.jpg"),
      width: 220,
      height: 183,
      caption: "37H (gratispgraphy.com)",
    },
    {
      src: require("../../images/gallery/pochettecute.jpg"),
      original:
      require("../../images/gallery/mirrors.jpg"),
      width: 270,
      height: 320,
      tags: [{ value: "Nature", title: "Nature" }],
      caption: "8H (gratisography.com)",
    },
    {
      src: require("../../images/gallery/pochettePink.jpg"),
      original:
      require("../../images/gallery/pochettePink.jpg"),
      width: 320,
      height: 190,
      caption: "286H (gratisography.com)",
    },
    {
      src: require("../../images/gallery/pochettesStanding.jpg"),
      original:
      require("../../images/gallery/pochettesStanding.jpg"),
      width: 200,
      height: 148,
      tags: [{ value: "People", title: "People" }],
      caption: "315H (gratisography.com)",
    },
    {
      src: require("../../images/gallery/soniaExample.jpg"),
      original: require("../../images/gallery/soniaExample.jpg"),
      width: 420,
      height: 313,
      caption: "201H (gratisography.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      original: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      alt: "Big Ben - London",
      width: 248,
      height: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
      src: require("../../images/gallery/pochetteBest.jpg"),
      original: require("../../images/gallery/pochetteBest.jpg"),
      alt: "Red Zone - Paris",
      width: 200,
      height: 213,
      tags: [{ value: "People", title: "People" }],
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },
    {
      src: require("../../images/gallery/badge.jpg"),
      original: require("../../images/gallery/badge.jpg"),
      alt: "Wood Glass",
      width: 313,
      height: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    },
    {
      src: require("../../images/gallery/badge3.jpg"),
      original: require("../../images/gallery/badge3.jpg"),
      width: 320,
      height: 213,
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    },
    // {
    //   src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    //   original: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    //   width: 320,
    //   height: 194,
    //   caption: "Old Barn (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    //   original: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    //   alt: "Cosmos Flower",
    //   width: 320,
    //   height: 213,
    //   caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    //   original: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    //   width: 271,
    //   height: 320,
    //   caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    //   original: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    //   width: 320,
    //   height: 213,
    //   tags: [
    //     { value: "Nature", title: "Nature" },
    //     { value: "People", title: "People" },
    //   ],
    //   caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    //   original: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    //   width: 320,
    //   height: 213,
    //   tags: [
    //     { value: "People", title: "People" },
    //     { value: "Sport", title: "Sport" },
    //   ],
    //   caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    //   original: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    //   width: 320,
    //   height: 213,
    //   caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    //   original: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    //   width: 320,
    //   height: 213,
    //   caption: "Time to Think (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    //   original: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    //   width: 320,
    //   height: 179,
    //   tags: [
    //     { value: "Nature", title: "Nature" },
    //     { value: "Fauna", title: "Fauna" },
    //   ],
    //   caption: "Untitled (Jan Vasek - jeshoots.com)",
    // },
    // {
    //   src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    //   original: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    //   width: 320,
    //   height: 215,
    //   tags: [{ value: "People", title: "People" }],
    //   caption: "Untitled (moveast.me)",
    // },
    // {
    //   src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    //   original: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    //   width: 257,
    //   height: 320,
    //   caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    // },
    // {
    //   src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    //   original: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    //   width: 226,
    //   height: 320,
    //   caption: "A photo by Matthew Wiebe. (unsplash.com)",
    // },
  ];
  return (
    <div>
      <div className="home-container">
        <h1 className="text-center text-camfoot">OSOL Supplies Store</h1>
      </div>

      {/* <div className="text-light">
        <img
          src={backgroundImage}
          className="img-fluid"
          alt="Responsive image"
        />
      </div> */}
      <div className="home-slider">
        <HomeSlider />
      </div>

      <div>
        {/* <h1 className="text-center quotes-font">"</h1> */}
        <h5 className="text-center text-font-plus">Discover our creations - uniquely made for you.</h5>
      </div>
      <div className="parent-container">
      <button className="find-out-more "
            onClick={() =>
              document.getElementById("shop-products").scrollIntoView()
            }
          >
            Find Out More
          </button>
          </div>
      <hr className="line-spacing-top"></hr>

      <div>
        {/* <h1 className="text-center quotes-font">"</h1> */}
        <h1 id='shop-products' className="text-center text-font">Our Products</h1>
      </div>

      <hr className="line-spacing-bottom"></hr>

      <div>
        {/* <h1 className="text-center quotes-font">"</h1> */}
        <p className="text-center text-font-history">
          <h3>Stylish and versatile POCHETTE</h3>
          <h3>$15</h3>
          {isExpandedPochette
            ? `epitomizes elegance and sophistication with its compact dimensions and graceful silhouette, this pochette effortlessly elevates any ensemble, making it a coveted choice for those who appreciate convenience of having all your necessairy materials at hand while saving lifes.`
            : `Crafted from high quality materials and adorned with exquisite details, this petite envelope-shaped clutch exudes a sense of luxury and refinement`}
          <a
            href="#"
            className="expand-link"
            onClick={(e) => {
              e.preventDefault();
              setIsExpandedPochette(!isExpandedPochette);
            }}
          >
            {isExpandedBadge ? "Show Less" : "Show More"}
          </a>
        </p>

        <p className="text-center text-font-history">
          <h3>A diminutive yet opulent MIRROR DE POCHE</h3>
          <h3>$10</h3>
          {isExpandedMirror
            ? `Encased in sumptuous materials and often adorned with intricate designs or embellishments, this compact looking glass presents a refined amalgamation of utility and elegance.`
            : ` Fit for the discerning aesthete, the mirror de poche serves as a symbol of exquisite taste and refined luxury, offering a portable portal to beauty and grace wherever it is gracefully unveiled`}
          <a
            href="#"
            className="expand-link"
            onClick={(e) => {
              e.preventDefault();
              setIsExpandedMirror(!isExpandedMirror);
            }}
          >
            {isExpandedMirror ? "Show Less" : "Show More"}
          </a>
        </p>

        <p className="text-center text-font-history">
          <h3>Our BADGE is a testament to both utility and style</h3>
          <h3>$7</h3>
          {isExpandedBadge
            ? `A symbol of refined practicality and timeless elegance, the badge carrier embodies a harmonious fusion of functionality and fashion, making it a must-have for the discerning individual who values both form and function.`
            : `With its sleek and versatile form, the badge carrier serves as a distinguished statement piece, allowing its wearer to exude professionalism and sophistication while effortlessly carrying their identification or emblem of honor.`}
          <a
            href="#"
            className="expand-link"
            onClick={(e) => {
              e.preventDefault();
              setIsExpandedBadge(!isExpandedBadge);
            }}
          >
            {isExpandedBadge ? "Show Less" : "Show More"}
          </a>
        </p>
      </div>

      <div>
        <div>
          <hr className="line-spacing-top"></hr>
          <div>
            <h1 className="text-center text-font">Our Gallery</h1>
          </div>
          <hr className="line-spacing-bottom"></hr>
          <Gallery images={images} />
        </div>
      </div>

      <hr className="line-spacing-top"></hr>
      <div>
        <h1 className="text-center text-font">Our Values</h1>
      </div>
      <hr className="line-spacing-bottom"></hr>
      
      <br />

      <div className="container-fluid">
        <div className="row ml-4 mr-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Quality</h5>
                <p className="card-text body-card">
                  By prioritizing quality in every aspect of the design and
                  production process, the company ensures that its accessories
                  are durable, functional, and aesthetically pleasing, providing
                  customers with products they can trust and enjoy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Creativity</h5>
                <p className="card-text body-card">
                  Embracing innovation, originality, and creativity in the
                  design and development of accessories that stand out for their
                  uniqueness and distinctiveness. By fostering a culture of
                  creativity within the company, the business can offer a
                  diverse range of accessories that cater to different tastes
                  and preferences, setting itself apart in a competitive market
                  and continuously delighting customers with fresh and exciting
                  designs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Customer-Centricity</h5>
                <p className="card-text body-card">
                  We place the customer at the heart of everything we do.
                  We prioritize building strong relationships,
                  understanding customer needs and preferences, and delivering
                  exceptional service at every touchpoint. We target a
                  personalized and rewarding experience for every customer,
                  by fostering loyalty and trust in the brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
