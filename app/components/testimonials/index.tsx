"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      title: "Happy Client",
      subtitle:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.",
    },
    {
      id: 2,
      title: "Happy Client",
      subtitle:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.",
    },
    {
      id: 3,
      title: "Happy Client",
      subtitle:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.",
    },
    {
      id: 4,
      title: "Happy Client",
      subtitle:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.",
    },
    {
      id: 5,
      title: "Happy Client",
      subtitle:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.",
    },{
      id: 6,
      title: "Happy Client",
      subtitle:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <div className="bg-[rgb(181,219,223)] px-24 py-10 ">
        <h1 className="text-4xl font-bold ">What Former Clients Say</h1>
        <p>
          Real experiences from individuals who have found healing and growth
          through our work together.
        </p>
        <div className="w-full">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className=" flex justify-center items-center gap-5"
              >
                <div className="bg-[rgb(239,244,255)] shadow-lg rounded-lg p-7 max-w-sm m-5">
                  <p className="py-4">{item.title}</p>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};


export default Testimonials;
