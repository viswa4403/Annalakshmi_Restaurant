/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "../../../data/restaurant/testimonials.json";

const Testimonials = () => {
  return (
    <section className="section-padding" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-80">
              <h5 className="ls2 mb-15 test-text-one saman">
                happy customers<span></span>
              </h5>
              <h2 className="gilroyEB">Our Guestbook</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div className="testim-grid">
          <Swiper
            id="content-carousel-container-unq-2"
            className="swiper-container"
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            speed={1000}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {testimonials.map((testimonial, idx) => (
              // <SwiperSlide key={idx}>
              //   <div className="item">
              //     <div className="icon-img icon-img-40 mb-30">
              //       <img src="restaurant/img/icons/quotes.png" alt="" />
              //     </div>
              //     <div className="text mb-30">
              //       <p>{ testimonial.comment }</p>
              //     </div>
              //     <div className="cont flex">
              //       <div className="img-flex">
              //         <div className="img">
              //           <img src={testimonial.image} alt="" className="circle-img" />
              //         </div>
              //       </div>
              //       <div className="info valign ml-20">
              //         <div>
              //           <h6>{ testimonial.name }</h6>
              //           <span className="text-u ls1 fz-12">{ testimonial.position }</span>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </SwiperSlide>
              <SwiperSlide key={idx}>
                <div
                  className="item"
                  style={{
                    width: "100%", // Full width of slide
                    height: "550px", // Fixed height for all
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <div className="icon-img icon-img-40 mb-30">
                    <img src="restaurant/img/icons/quotes.png" alt="" />
                  </div>
                  <div className="text mb-30" style={{ flexGrow: 1 }}>
                    <p>{testimonial.comment}</p>
                  </div>
                  <div className="cont flex">
                    <div className="img-flex">
                      <div className="img">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="circle-img"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                    <div className="info valign ml-20">
                      <div>
                        <h6>{testimonial.name}</h6>
                        <span className="text-u ls1 fz-12">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
