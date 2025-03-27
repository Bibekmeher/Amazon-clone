import { WatchDetail, ProductDetail, LaptopDetail, headphonesDetail} from "../Details/ProductDetail";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductSlider.css";
import { Link } from "react-router-dom";
import React from "react";

const ProductSlider = () => {

  const styles = {
    container: {
      backgroundColor: '#fff',
      margin: '1rem'
    },
    titleBox: {
      display: 'flex',
      justifyContent: 'start',
      padding: '0 5px',
      alignItems: 'center'
    },
    h1 : {
      color: 'black'
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.titleBox}>
        <h1 className="allProductsHeading">All Products</h1>

          <span className="product-offer">
  <Link to="/search?category=all" style={{ color: "black", textDecoration: "none" }}>
    See all
  </Link>
</span>
        </div>
         
       </div>
       <ProductCardSlider Product={headphonesDetail}/>
       <ProductCardSlider Product={WatchDetail}/> 
       <ProductCardSlider Product={ProductDetail}/> 
       <ProductCardSlider Product={LaptopDetail}/> 

       <div style={styles.container}>
        <div style={styles.titleBox}>
          <h1 className="allProductsHeading">Today's Deals </h1>
          {/* <span className="product-offer">See all deals</span> */}
        </div>
        
       </div>
       <ProductCardSlider3 Product={LaptopDetail}/>
    </>
  );
};

export default ProductSlider;

const ProductCardSlider = ( { Product }) => {

  var settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings2} className="slierCarousel">
    {Product.map((item) => (
         <div><ProductCard2 id={item.id} productImage={item.image} productName={item.name} /></div>
       ))}  
     </Slider>
  );
};

const ProductCard2 = ( { productImage, productName, id }) => {
  return (
    <Link to={`/ProductPaga/`+id} key={id}>
    <div className="product-card" >
      <div className="card-img">
        <img className="product-card-img" src={`../image/ProductImage/${productImage}`} alt="" />
      </div>
      <div className="product-discription">
        <p>
          <span className="discount">Up to 17% off</span>
          {/* <span className="dealOfTheDay">Deal of the Day</span> */}
        </p>
        <p className="top-bottom-padding product-name">{productName}</p>
      </div>
    </div>
    </Link>
  );
};


const ProductCardSlider3 = ( { Product }) => {

  var settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings2} className="slierCarousel">
    {Product.map((item) => (
         <div><ProductCard4 id={item.id} productImage={item.image} productName={item.name} /></div>
       ))}  
     </Slider>
  );
};

const ProductCard4 = ( { productImage, productName, id }) => {
  return (
    <Link to={`/ProductPaga/`+id} key={id}>
    <div className="product-card" >
      <div className="card-img">
        <img className="product-card-img" src={`../image/ProductImage/${productImage}`} alt="" />
      </div>
      <div className="product-discription">
        <p>
          <span className="discount">Up to 17% off</span>
          <span className="dealOfTheDay">Deal of the Day</span>
        </p>
        <p className="top-bottom-padding product-name">{productName}</p>
      </div>
    </div>
    </Link>
  );
};