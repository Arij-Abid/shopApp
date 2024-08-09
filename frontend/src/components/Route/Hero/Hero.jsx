import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import home from '../../../Assests/images/home.png';

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    >
      <img 
        className="absolute top-0 right-0 object-cover w-300 h-100" 
        src={home} 
        alt="Home" 
      />

      <div className={`${styles.section} w-[90%] 800px:w-[60%] flex flex-col items-start ml-[50px]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Enjoy your shopping  <br />
        with the best quality <br />
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Experience unparalleled shopping with our top-quality products. <br />
        We are dedicated to offering you a carefully curated selection <br />
        that meets all your expectations,
        combining excellence and reliability. 
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
