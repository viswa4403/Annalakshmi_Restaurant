/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
import { useState } from "react";
import AppLayout from "../../layouts/app-layout";
import Footer from "../../components/Footers/RestaurantFooter";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaUtensils,
  FaClipboardList,
  FaGift,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { FaClock } from "react-icons/fa6";

// Register Swiper modules (for v6–v8)
SwiperCore.use([Navigation, Pagination, Autoplay]);

const CateringPage = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("Catering");
  const goToSection = (e, link, tab) => {
    setSelectedTab(tab);
    if (link == "#0") e.preventDefault();

    const section = document.querySelector(
      `[data-scroll-index="${e.target.dataset.scrollNav}"]`
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    document.body.classList.add("index-restaurant");

    const removeClasses = [
      "index-bus1",
      "index-corporate",
      "index-freelancer",
      "nft-market",
      "cr-agency",
      "mobile-app",
      "gr-orange-bg",
      "land-demo2",
      "index-main",
      "index-arch",
    ];

    document.body.classList.remove(...removeClasses);
  }, []);
  const features = [
    { icon: <FaUtensils size={22} color="white" />, text: "Freshly Cooked" },
    {
      icon: <FaClipboardList size={22} color="white" />,
      text: "Customizable Menus",
    },
    { icon: <FaClock size={22} color="white" />, text: "On-time Delivery" },
    {
      icon: <FaMoneyBillWave size={22} color="white" />,
      text: "Affordable Bulk Pricing",
    },
  ];

  const nav_links = [
    { name: "Home", href: "/" },
    { name: "Catering", href: "/Catering" },
    { name: "Hall", href: "/Hall" },
    { name: "Contact", href: "/contact-creative" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    noMembers: "",
    date: "",
    location: "",
    info: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, noMembers, date, location, info, phone } = formData;

    const whatsappNumber = "919843021844";

    const message = `Hi, This is _*${name}*_, I am reserving for *${noMembers}* members on *${date}* at *${location}*. Additional Info: ${info}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <>
      <Head>
        <title>Catering - Annalakshmi</title>
      </Head>

      <AppLayout
        type="restaurant"
        links={nav_links}
        navTheme="dark"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      >
        <main className="position-re">
          <section className="container text-center py-5 mt-50">
            <h2
              className="fw-bold "
              style={{
                fontFamily: "Gilroy-Black",
                fontSize: "51px",
                marginBottom: "70px",
              }}
            >
              Bulk Orders & Catering Page
            </h2>
            <div className="row justify-content-center mt-4 g-3">
              {features.map((feature, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 col-12 bulk-order"
                  // style={{
                  //   marginTop: "50px",
                  // }}
                  key={index}
                >
                  <div
                    className="d-flex flex-column align-items-center justify-content-center text-center position-relative pt-4 h-100"
                    style={{
                      border: "1px solid #D39A98",
                      borderRadius: "30px",
                      padding: "20px",
                      background: "#fff",
                    }}
                  >
                    <div
                      className="position-absolute order-icons"
                      style={{
                        background: "#9B1915",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "10px",
                        top: "-30px",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <p
                      className="mb-0 mt-5 pt-3 fw-semibold"
                      style={{
                        fontFamily: "Gilroy-Bold",
                        fontWeight: 600,
                        color: "#1f2d3d",
                        fontSize: "20px",
                        lineHeight: "22px",
                      }}
                    >
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="container py-5">
            <h3 className="fw-bold text-center mb-4 cat-package">
              Catering Packages
            </h3>
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="shadow-sm h-100">
                  <img
                    src="/img/Frame 702.png"
                    className="card-img-top"
                    alt="Package 1"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow-sm h-100">
                  <img
                    src="/img/Frame 769.png"
                    className="card-img-top"
                    alt="Package 2"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className=" shadow-sm h-100">
                  <img
                    src="/img/Frame 770.png"
                    className="card-img-top"
                    alt="Package 3"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="container py-5">
            <h3 className="fw-bold text-center mb-4 gallery">Our Gallery</h3>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {[
                "/img/Rectangle 1728.png",
                "/img/Frame 855.png",
                "/img/Frame 855.png",
                "/img/Frame 855.png",
                "/img/Frame 855.png",
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery-slide">
                    <img src={src} alt={`Gallery ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="container text-center py-5">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4 ">
                <p className="orders">Orders Served</p>
                <h2 className="fw-bold text-danger">5000+</h2>
              </div>
              <div className="col-md-4">
                <p className="orders">Serving Since</p>
                <h2 className="fw-bold text-danger">1989</h2>
              </div>
              <div className="col-md-4">
                <p className="orders">Meals Prepared Everyday</p>
                <h2 className="fw-bold text-danger">200+</h2>
              </div>
            </div>
          </section>

          <section className="container py-5">
            <h3 className="fw-bold text-center mb-30 cat-enquiry">
              Catering Enquiry
            </h3>

            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-md-6 ">
                <form
                  className="p-4 rounded shadow-sm bg-white text-start"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        placeholder="Name"
                        required
                        style={{
                          backgroundColor: "#F3F8F6",
                          padding: "15px",
                          border: "1px solid #F3F8F6",
                        }}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="number"
                        name="noMembers"
                        value={formData.noMembers}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        placeholder="Number of Guests"
                        required
                        min="1"
                        style={{
                          backgroundColor: "#F3F8F6",
                          padding: "15px",
                          border: "1px solid #F3F8F6",
                        }}
                      />
                    </div>

                    {/* Date */}
                    <div className="col-12 mb-3">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        required
                        style={{
                          backgroundColor: "#F3F8F6",
                          padding: "15px",
                          border: "1px solid #F3F8F6",
                        }}
                      />
                    </div>

                    {/* Location */}
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        placeholder="Location / Address"
                        required
                        style={{
                          backgroundColor: "#F3F8F6",
                          padding: "15px",
                          border: "1px solid #F3F8F6",
                        }}
                      />
                    </div>

                    {/* Additional Info */}
                    <div className="col-12 mb-3">
                      <textarea
                        name="info"
                        value={formData.info}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        rows="3"
                        placeholder="Additional Information"
                        required
                        style={{
                          backgroundColor: "#F3F8F6",
                          padding: "15px",
                          border: "1px solid #F3F8F6",
                        }}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-danger w-40 shadow-sm"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-md-6 text-center">
                <img
                  src="/img/Rectangle 1731.png"
                  className="img-fluid rounded shadow-sm"
                  alt="Quote"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </AppLayout>
    </>
  );
};

export default CateringPage;
