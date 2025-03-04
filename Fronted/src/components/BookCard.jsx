import React, { useEffect, useState } from "react";
import Card from "./Card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  pauseOnFocus: true,
  adaptiveHeight: true,
  centerMode: false, 
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false, 
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
      },
    },
  ],
};

const BookCard = () => {
  const[book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data.filter((data)=> data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    }
   getBook();
  },[]);
  
  return (
    <>
    <div className=" md:m-12">
      {/* Heading */}
      <div className="mb-4 my-2 ml-2 md:ml-16">
        <p className="font-bold text-2xl md:text-4xl md:my-4 md:text-start">
          Free Offered Courses Book
        </p>
        <p className="my-2 md:text-start text-gray-700">
          "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
        </p>
      </div>

      {/* Carousel Section */}
      

    <Slider {...settings} className="z-10">
      {book.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Slider>
      </div>
    </>
  );
};

export default BookCard;
