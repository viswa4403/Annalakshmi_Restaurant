// /* eslint-disable @next/next/no-img-element */
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <div>
//       <img src="img/decbg.png" alt="background images" />
//       <footer className="main-footer" style={{ backgroundColor: "#b8671e" }}>
//         <div className="container reservation pt-40 pb-40 ">
//           <div className="row">
//             <div className="col-lg-3 col-md-6">
//               <div className="clumn">
//                 <div className="logo">
//                   <Link href="/landing-preview">
//                     <a>
//                       <img
//                         src="img/annalogo.png"
//                         alt="Logo"
//                         style={{
//                           width: "250px",
//                           height: "74.95px",
//                           marginTop: "80px",
//                           transform: "rotate(0deg)",
//                           opacity: 1,
//                           objectFit: "contain",
//                         }}
//                       />
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-6">
//               <div className="clumn">
//                 <div className="flex">
//                   {/* <div className="icon-flex mr-10">
//                     <span className="icon main-color fz-22 pe-7s-map-marker text-white"></span>
//                   </div>
//                   <div className="cont-flex">
//                     <span className="fz-16 line-height-30 text-white">
//                       106, Race Course Rd, Gopalapuram, Coimbatore, Tamil Nadu
//                       641018
//                     </span>
//                   </div> */}
//                   <div
//                     style={{
//                       fontFamily: "Gilroy-ExtraBold, sans-serif",
//                       fontWeight: 400,
//                       fontStyle: "normal",
//                       fontSize: "15.4px",
//                       lineHeight: "32.48px",
//                       letterSpacing: "0",
//                       verticalAlign: "middle",
//                       color: "white",
//                     }}
//                   >
//                     Useful links
//                     <ul
//                       style={{
//                         listStyle: "none",
//                         padding: 0,
//                         margin: "8px 0 0 0",
//                       }}
//                     >
//                       <li style={{ marginBottom: "6px", cursor: "pointer" }}>
//                         Home
//                       </li>
//                       <li style={{ marginBottom: "6px", cursor: "pointer" }}>
//                         About
//                       </li>
//                       <li style={{ marginBottom: "6px", cursor: "pointer" }}>
//                         Meal Tray
//                       </li>
//                       <li style={{ marginBottom: "6px", cursor: "pointer" }}>
//                         Catering
//                       </li>
//                       <li style={{ marginBottom: "6px", cursor: "pointer" }}>
//                         Hall
//                       </li>
//                       <li style={{ marginBottom: "6px", cursor: "pointer" }}>
//                         Blogs
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="col-lg-3 col-md-6">
//               <div
//                 style={{
//                   fontFamily: "Gilroy-ExtraBold, sans-serif",
//                   fontWeight: 400,
//                   fontStyle: "normal",
//                   fontSize: "15.4px",
//                   lineHeight: "32.48px",
//                   letterSpacing: "0",
//                   verticalAlign: "middle",
//                   color: "white",
//                 }}
//               >
//                 Contact information

//               </div>
//             </div> */}
//             <div className="col-lg-3 col-md-6">
//               {/* Title */}
//               <div
//                 style={{
//                   fontFamily: "Gilroy-ExtraBold, sans-serif",
//                   fontWeight: 700,
//                   fontStyle: "normal",
//                   fontSize: "15.4px",
//                   lineHeight: "32.48px",
//                   letterSpacing: "0",
//                   verticalAlign: "middle",
//                   color: "white",
//                   backgroundColor: "#b8671e",
//                   padding: "6px 12px",
//                   borderRadius: "4px",
//                   display: "inline-block",
//                 }}
//               >
//                 Contact Information
//               </div>

//               <div
//                 style={{
//                   borderRadius: "8px",
//                   padding: "20px",

//                   color: "white",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginBottom: "12px",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src="./img/mail.svg fill.png"
//                     alt="phone icon"
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       marginRight: "8px",
//                     }}
//                   />
//                   <div>
//                     <div style={{ fontSize: "14px", color: "#fff" }}>
//                       Contact Number
//                     </div>
//                     <div
//                       style={{
//                         fontWeight: "600",
//                         fontSize: "16px",
//                         color: "#fff",
//                       }}
//                     >
//                       +91 98430 21844
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   style={{
//                     marginBottom: "12px",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     src="./img/mail.svg.png"
//                     alt="mail icon"
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       marginRight: "8px",
//                     }}
//                   />
//                   <div>
//                     <div style={{ fontSize: "14px", color: "#fff" }}>
//                       Email Address
//                     </div>
//                     <div
//                       style={{
//                         fontWeight: "600",
//                         fontSize: "16px",
//                         color: "#fff",
//                       }}
//                     >
//                       annalakshmihospitality@gmail.com
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div>
//                   <span style={{ fontSize: "2px", marginRight: "8px" }}>
//                   <img src="./img/mail.svg.png"/>
//                   </span>
//                   <span style={{ fontWeight: "600" }}>
//                     annalakshmihospitality@gmail.com
//                   </span>
//                 </div> */}
//               </div>

//               {/* Social Icons */}
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "12px",
//                   justifyContent: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                     border: "2px solid white",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                 >
//                   ✖
//                 </div>
//                 <div
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                     border: "2px solid white",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                 >
//                   f
//                 </div>
//                 <div
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                     border: "2px solid white",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                 >
//                   ⧫
//                 </div>
//                 <div
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                     border: "2px solid white",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                 >
//                   in
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-4 col-md-6 d-flex justify-content-end">
//               <div className="w-full">

//                 <div className="w-full h-full">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14890.772734869475!2d76.96801219853639!3d11.002777376559512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859bae53eb1c5%3A0x2e51fc1049394542!2sRace%20Course%2C%20Coimbatore%2C%20Tamil%20Nadu%20641018!5e1!3m2!1sen!2sin!4v1756809694370!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sub-footer pt-50 pb-50">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-3">
//                 <div className="horizontal-link fz-13">
//                   {/* <ul className="rest">
//                   <li className="mr-30">
//                     <Link href="">
//                       <a>Privacy policy</a>
//                     </Link>
//                   </li>
//                   <li className="mr-30">
//                     <Link href="">
//                       <a>Legal notice</a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="">
//                       <a>Terms of service</a>
//                     </Link>
//                   </li>
//                 </ul> */}
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="copyrights d-flex justify-content-center">
//                   <p className="fz-13 text-white">
//                     © 2022 Annalakshmi is Proudly Powered by{" "}
//                     <span className="underline">
//                       <a
//                         href="https://thedottech.in"
//                         rel="noreferrer"
//                         target="_blank"
//                         className="main-color text-white"
//                       >
//                         theDot Tech
//                       </a>
//                     </span>
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="horizontal-link fz-13">
//                   {/* <ul className="rest">
//                   <li className="mr-30">
//                     <Link href="">
//                       <a>Privacy policy</a>
//                     </Link>
//                   </li>
//                   <li className="mr-30">
//                     <Link href="">
//                       <a>Legal notice</a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="">
//                       <a>Terms of service</a>
//                     </Link>
//                   </li>
//                 </ul> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="helo" style={{ position: "relative", overflow: "hidden" }}>
      <img
        src="img/decbg.png"
        alt="background images"
        style={{ width: "100%", display: "block" }}
      />

      <footer
        style={{
          backgroundColor: "#b8671e",
          padding: "60px 0 20px",
          color: "white",
        }}
      >
        <div className="">
          <div className="row">
            {/* Logo */}
            <div className="col-lg-1 col-md-0 col-0"></div>
            <div className="col-lg-3 col-md-6 col-12">
              <div
                style={{
                  marginTop: isMobile ? "0px" : "50px",
                  marginBottom: isMobile ? "0px" : "30px",
                }}
              >
                <Link href="/landing-preview">
                  <a>
                    <img
                      src="img/annalogo.png"
                      alt="Logo"
                      style={{
                        width: "250px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>

            {/* Useful Links */}

            <div className="footer-links col-lg-2 col-md-6 col-12">
              <h4
                style={{
                  fontFamily: "Gilroy-ExtraBold, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  marginBottom: "12px",
                  lineHeight: "18.4px",
                }}
              >
                Useful Links
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "15.09px",
                  lineHeight: "25.4px",
                }}
              >
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "#0" },
                  { name: "Meal Tray", href: "#0" },
                  { name: "Caterings", href: "/Catering" },
                  { name: "Hall", href: "/Hall" },
                  { name: "Blog", href: "#0" },
                  { name: "Contact", href: "/contact-creative" },
                ].map((link, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "8px",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-address col-lg-2 col-md-6 col-12">
              <h4
                style={{
                  fontFamily: "Gilroy-ExtraBold, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  marginBottom: "12px",
                }}
              >
                Contact Information
              </h4>

              <div style={{ marginBottom: "1px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1px",
                  }}
                >
                  <img
                    src="./img/mail.svg fill.png"
                    alt="phone"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "13px", margin: 0, color: "white" }}>
                      Contact Number
                    </p>
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "15px",
                        margin: 0,
                        color: "white",
                      }}
                    >
                      +91 98430 21844
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <img
                    src="./img/mail.svg.png"
                    alt="mail"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "13px", margin: 0, color: "white" }}>
                      Email Address
                    </p>
                    <p
                      style={{
                        fontWeight: "600",
                        fontSize: "15px",
                        margin: 0,
                        color: "white",
                      }}
                    >
                      annalakshmihospitality@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "15px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "46px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  <RiTwitterXLine />
                </div>

                <div
                  style={{
                    width: "50px",
                    height: "46px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  <FaFacebook />
                </div>

                <div
                  style={{
                    width: "50px",
                    height: "46px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  <IoLogoInstagram />
                </div>

                <div
                  style={{
                    width: "50px",
                    height: "46px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  <FaLinkedin />
                </div>
              </div>
            </div>

            <div className="footer-map col-lg-3 col-md-6 col-12 d-flex justify-content-end">
              <div>
                <h4
                  style={{
                    fontFamily: "Gilroy-ExtraBold, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginBottom: "12px",
                  }}
                >
                  Location
                </h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14890.772734869475!2d76.96801219853639!3d11.002777376559512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859bae53eb1c5%3A0x2e51fc1049394542!2sRace%20Course%2C%20Coimbatore%2C%20Tamil%20Nadu%20641018!5e1!3m2!1sen!2sin!4v1756809694370!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{
                    border: 0,
                    borderRadius: "8px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-1 col-12"> </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            textAlign: "center",
            padding: "15px 0",
            fontSize: "13px",
          }}
        >
          © 2025 Annalakshmi. Proudly Managed by Young Mynds Infotech
        </div>
      </footer>
    </div>
  );
};

export default Footer;
