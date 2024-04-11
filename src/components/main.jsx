
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import image1 from "../assets/main.png.jpg";
import image2 from "../assets/75.png";
import image3 from "../assets/80.png";
import image4 from "../assets/clothes.jpg";
import image5 from "../assets/fashionWomen.jpg"
import image6 from "../assets/getDressed.webp"
const SliderHeader = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000
  };

  const images = [image5,image6,image1, image3,image4,image2, ];

  return (
    <div className="h-1/3 w-full">
      <Slider {...settings} className="h-">
        {images.map((image, index) => (
          <div key={index} className="h-full relative">
            <img
              className="object-cover "
              src={image}
              height={500}
             
              width={1600}
              alt="banners"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
               
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHeader