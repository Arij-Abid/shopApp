import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/styles";

const Sponsored = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt="Sony Logo"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            alt="Dell Logo"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="data:image/png;base64,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"
            alt="LG Logo"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>



        <div className="flex justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="data:image/png;base64,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"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
       </Slider>
      </div>
  
  );
};

export default Sponsored;
