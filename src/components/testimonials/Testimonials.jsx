import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


const data = [
  {
    avatar: AVTR1,
    name: "Joaquin Diaz",
    review:
      "Lorem upsum o or sut amet consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur, consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur totam dicta, repellendus a voluptatibus Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR2,
    name: "Santiago Rosso",
    review:
      "Lorem upsum o or sut amet consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur, consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur totam dicta, repellendus a voluptatibus Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR3,
    name: "Jhon E. Luna",
    review:
      "Lorem upsum o or sut amet consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur, consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur totam dicta, repellendus a voluptatibus Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVTR4,
    name: "Carolina Salazar",
    review:
      "Lorem upsum o or sut amet consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur, consectetur a Ipxsxcxng e It. lusto quo nam ampe It so uta odio possimus Quas sint dignissirnos distinctio alias rerum laborum aperiam minus pariatur totam dicta, repellendus a voluptatibus Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem deserunt explicabo nostrum ducimus quasi?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
        navigation={{clickable:true}}
        modules={[Navigation]}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=''/>
              </div>
              <h5 className="client__name" >{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
