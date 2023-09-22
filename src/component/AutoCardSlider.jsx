// import React, { useState, useEffect } from 'react';
// import './AutoCardSlider.css'; // Create this CSS file for additional styling

// const AutoCardSlider = ({ data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === data.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change slide every 3 seconds (adjust as needed)

//     return () => clearInterval(interval);
//   }, [data]);

//   return (
//     <div className="auto-card-slider">
//       <div
//         className="slider-container"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           transition: 'transform 1s',
//         }}
//       >
//         <div className="container-fluid">
//           <div className="row">
//             {data.map((item, index) => (
//               <div key={index} className="col-12 col-md-4">
//                 <div className="slide ">
//                   <h2>{item.title}</h2>
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AutoCardSlider;
