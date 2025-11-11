/* eslint-disable @next/next/no-css-tags */
import { useEffect, useState } from "react";
import Head from "next/head";
import AppLayout from "../../layouts/app-layout";
import Footer from "../../components/Footers/RestaurantFooter";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/router";


const HallPage = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("Hall");

  const goToSection = (e, link, tab) => {
    setSelectedTab(tab);
    if (link === "#0") e.preventDefault();

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

  const nav_links = [
    { name: "Home", href: "/" },
    { name: "Catering", href: "/Catering" },
    { name: "Hall", href: "/Hall" },
    { name: "Contact", href: "/contact-creative" },
  ];

  return (
    <>
      <Head>
        <title>Our Hall - Annalakshmi</title>
      </Head>

      <AppLayout
        type="restaurant"
        links={nav_links}
        navTheme="dark"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      >
        <main className="position-re">
          {/* Section: About Hall */}
          <section className="container py-5">
            <h2 className="text-center mb-40 fw-bold mt-30 helo">Our Hall</h2>
            <div className="row align-items-center">
              <div className="col-md-6 d-flex gap-3 justify-content-center">
                <img
                  src="/img/Frame 771.png"
                  alt="Hall 1"
                  className="img-fluid rounded shadow Hall-img"
                />
                <div>
                  <img
                    src="/img/Frame 772.png"
                    alt="Hall 2"
                    className="img-fluid rounded shadow Hall-img1"
                  />
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-md-0">
                <h5 className="fw-bold text-danger mb-10">About the Hall</h5>
                <p className="About-hall">
                  Guru Kelucharan Nritya Natanam, named after the legendary
                  Odissi maestro Guru Kelucharan Mohapatra, is a renowned
                  cultural space designed to host dance performances, music
                  concerts, lectures, and workshops. Adorned with elegant
                  traditional wooden pillars and décor, it reflects the richness
                  of our heritage while offering spacious and welcoming areas
                  for artists and audiences alike. Serving as a vibrant hub of
                  creativity, it continues to inspire and nurture cultural and
                  artistic expression.
                </p>
                <button className="btn btn-danger mt-3">Book Now</button>
              </div>
            </div>
          </section>

          {/* Section: Gallery */}
          <section className="container py-5">
            <h2 className="text-center mb-4">Our Hall Gallery</h2>
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="/img/Frame 855.png"
                  alt="Gallery 1"
                  className="img-fluid"
                />
              </div>
            </div>
          </section>

          {/* Section: Contact Information */}
          <section className="py-5">
            <h2 className="text-center mb-4 fw-bold">Contact Information</h2>

            <div className="contact-container">
              {/* Phone */}
              <div className="contact-card">
                <div className="contact-icon">
                  <FaPhoneAlt color="#fff" size={24} />
                </div>
                <h6>Phone / WhatsApp</h6>
                <p>+91 99620 37816</p>
              </div>

              {/* Email */}
              <div className="contact-card">
                <div className="contact-icon">
                  <MdEmail color="#fff" size={26} />
                </div>
                <h6>Email Address</h6>
                <p>annalakshmashophall@gmail.com</p>
              </div>

              {/* Location */}
              <div className="contact-card">
                <div className="contact-icon">
                  <FaMapMarkerAlt color="#fff" size={26} />
                </div>
                <h6>Location</h6>
                <p>
                  No. 18/1, New Avadi Road, Kilpauk,
                  <br /> Chennai - 600010
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </AppLayout>
    </>
  );
};

export default HallPage;
