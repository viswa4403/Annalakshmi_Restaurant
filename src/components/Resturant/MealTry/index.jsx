// import React from "react";
// import { FaUtensils } from "react-icons/fa";
// const Index = () => {
//   return (
//     <div>
//       <div className="container">
//         <h1 className="MealTry">Meal Try</h1>
//         <p className="MealTry-content">
//           Enjoy our freshly prepared vegetarian meal trays crafted with care
//         </p>

//         <div className="row align-items-center mb-5">
//           {/* First Row - Image Left, Text Right */}
//           <div className="col-lg-6">
//             <img
//               src="./img/Rectangle 3.png"
//               alt="Meal Tray"
//               className="img-fluid"
//             />
//           </div>
//           <div className="col-lg-6">
//             <div className="food-card">
//               <h4>5 Course Meal Try</h4>
//               <p>Includes</p>
//               <p>Starters</p>
//               <p>Sweet</p>
//               <p>Main Course</p>
//               <p>Chapathi/Phulika</p>
//               <p>Gravy</p>
//               <p>etc</p>
//               <p><strong>Rs. 250 / Only</strong></p>
//             </div>
//           </div>
//         </div>

//         <div className="row align-items-center mb-5">
//           {/* Second Row - Text Left, Image Right */}
//           <div className="col-lg-6">
//             <div className="food-card">
//               <h4>8 Course Meal Try</h4>
//               <p>Includes</p>
//               <p>Starters</p>
//               <p>Main Course</p>
//               <p>Chapathi/Phulika</p>
//               <p>Gravy</p>
//               <p>Curd Rice</p>
//               <p>Pickle</p>
//               <p><strong>Rs. 400 / Only</strong></p>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <img
//               src="./img/Rectangle 4.png"
//               alt="Meal Tray"
//               className="img-fluid"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;

import React from "react";
import { FaUtensils } from "react-icons/fa";

const Index = () => {
  return (
    <div data-scroll-index="2">
      <div className="container" >
        <h1 className="MealTry">Meal Try</h1>

        <p className="MealTry-content">
          Enjoy our freshly prepared vegetarian meal trays crafted with care
        </p>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-md-12">
            <img
              src="./img/Rectangle 3.png"
              alt="Meal Tray"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="food-card">
              <h4>5 Course Meal Try</h4>
              <ul className="food-list">
                <li>
                  <FaUtensils className="icon" /> Starters
                </li>
                <li>
                  <FaUtensils className="icon" /> Sweet
                </li>
                <li>
                  <FaUtensils className="icon" /> Main Course
                </li>
                <li>
                  <FaUtensils className="icon" /> Chapathi / Phulka
                </li>
                <li>
                  <FaUtensils className="icon" /> Gravy
                </li>
                <li>
                  <FaUtensils className="icon" /> etc..
                </li>
              </ul>
              <hr />
              <p>
                <strong>Rs. 250 / Only</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Text Left, Image Right */}
        <div className="row align-items-center  mb-5">
          <div className="col-lg-6 col-md-12">
            <div className="food-card">
              <h4>8 Course Meal Try</h4>
              <ul className="food-list">
                <li>
                  <FaUtensils className="icon" /> Starters
                </li>
                <li>
                  <FaUtensils className="icon" /> Main Course
                </li>
                <li>
                  <FaUtensils className="icon" /> Chapathi / Phulka
                </li>
                <li>
                  <FaUtensils className="icon" /> Gravy
                </li>
                <li>
                  <FaUtensils className="icon" /> Curd Rice
                </li>
                <li>
                  <FaUtensils className="icon" /> Pickle
                </li>
              </ul>
              <hr />
              <p>
                <strong>Rs. 400 / Only</strong>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src="./img/Rectangle 4.png"
              alt="Meal Tray"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
