import {ProductCard, ProductCard2} from "./ProductCard";
import { AmazonPay, Upcominglaunches, StylesForMen } from '../Details/OfferDetail'
import ProductSlider from "./ProductSlider";
import { ProductDetail } from '../Details/ProductDetail'
import PrimeSlider from "./PrimeSlider";

const MainSection = () => {
  return (
    <>
      <div id="container">
         <PrimeSlider/>
        {/*<div className="product-gallery">
        <ProductCard
          title="Up to 70% off | Clearance store"
          img="../image/Productimage/b1.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={Upcominglaunches}  title="Latest and upcoming launches" />
        <ProductCard
          title="Amazon pay Book Travel Tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={AmazonPay}  title="Amazon pay Book Travel Tickets" />
        </div>
        <div className="product-gallery">
        <ProductCard
          title="Bluetooth Calling Smartwatch starts at ₹1,999"
          img="../image/Productimage/b2.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={StylesForMen}  title="Up to 60% off | Styles for men" />
        <ProductCard
          title="Amazon pay Book Travel Tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={AmazonPay}  title="Amazon pay Book Travel Tickets" />
        </div> */}
        <main class="main">
        <div class="card-product-container container">
            <div class="card-product">
                <h2>Up to 60% off | Styles for Men</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" />
                        <p>clothing</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" />
                        <p>Footwear</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Watches</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                        <p>Bags & language</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">see more</button> */}
            </div>
            <div class="card-product">
                <h2>Redefine your living room</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg" />
                        <p>Sofa cum beds</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg" />
                        <p>Office chairs</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg" />
                        <p>Bean bags</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg" />
                        <p>Explore all</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">Visit our furniture store</button> */}
            </div>
            <div class="card-product">
                <h2>Top rated, premium quality | Amazon Brands &</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">see more</button> */}
            </div>
            <div class="card-product">
                <h2>Starting ₹149 | Headphones</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" />
                        <p>boAt</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" />
                        <p>Noise</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" />
                        <p> boult</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" />
                        <p> Zebronics</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">see more</button> */}
            </div>
        </div>

        <div class="card-product-container container productBackgraound">
            <div class="card-product">
                <h2>Automotive essentials | Up to 60% off</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" />
                        <p>Cleaning accessories</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" />
                        <p>Tyre & rim care</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" />
                        <p>Helmets</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" />
                        <p>Vacuum cleaner</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">see more</button> */}
            </div>
            <div class="card-product">
                <h2>Starting ₹199 | Amazon Brands</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg" />
                        <p>Bedsheets</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg" />
                        <p>Curtains cover</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg" />
                        <p> Ironing</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg" />
                        <p> Home decor</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">see more</button> */}
            </div>
            <div class="card-product">
                <h2>Up to 60% off | Styles for women</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg" />
                        <p>Women's Clothing</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg" />
                        <p>Footwear+Handbags</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg" />
                        <p>Watches</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg" />
                        <p>Fashion jewellary</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">see more</button> */}
            </div>
            <div class="card-product">
                <h2>Revamp your home in style</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" />
                        <p>Cushion covers</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" />
                        <p>figurines</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" />
                        <p>Home storage</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" />
                        <p>Lighting solutions</p>
                    </div>
                </div>
                {/* <button class="card-product-btn">see more</button> */}
            </div>
        </div>

    
    {/* <!--today's deals --> */}
    {/* <section class="today_deals_container">
        <div class="today_deals_heading">
            <h1>Today's Deals</h1>
            <p><a href="#">See all deals</a></p>
        </div>

        <div class="today_deals_product_container">
            <div class="today_deals_btn_container">
                <button  class="today_deal_btn" id="today_deal_btn_prev">
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <button class="today_deal_btn" id="today_deal_btn_next">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

            <div class="today_deals_product_list">
                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>
            </div>
        </div>
    </section> */}

    </main>

        <ProductSlider />
      </div>
    </>
  );
};

export default MainSection;
