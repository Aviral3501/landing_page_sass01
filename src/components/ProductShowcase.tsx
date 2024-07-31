"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import useIntersectionObserver from "./useIntersectionObserver";

export const ProductShowcase = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.7, // 70% of the component must be visible
  });

  return (
    <div className="relative text-white bg-black py-12 overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(120)].map((_, index) => (
          <div
            key={index}
            className="star absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-20">
        <div ref={ref} className="text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isIntersecting ? "animate-fade-in" : "opacity-0"}`}>
            Intuitive Interface
          </h2>
          <p className={`text-xl text-white/70 mt-4 ${isIntersecting ? "animate-slide-in" : "opacity-0"}`}>
            Celebrate the joy of accomplishment with an app designed to track your progress
          </p>
        </div>
        <div className="relative mt-10 flex justify-center">
          <div className="absolute inset-0 bg-black z-20"></div>
          <Image src={appScreen} alt="appScreen" className={`rounded-lg shadow-lg relative z-30 ${isIntersecting ? "animate-zoom-in" : "opacity-0"}`} />
        </div>
      </div>
    </div>
  );
};



// "use client"
// import Image from "next/image";
// import appScreen from "../assets/images/app-screen.png";
// import useIntersectionObserver from "./useIntersectionObserver";

// export const ProductShowcase = () => {
//   const [ref, isIntersecting] = useIntersectionObserver({
//     threshold: 0.7, // 70% of the component must be visible
//   });

//   return (
//     <div className="relative text-white bg-black py-12 overflow-hidden">
//       {/* Star background */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         {[...Array(70)].map((_, index) => (
//           <div
//             key={index}
//             className="absolute w-1 h-1 bg-white rounded-full"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: Math.random() * 0.5 + 0.5,
//               transform: `scale(${Math.random() * 0.5 + 0.5})`,
//             }}
//           ></div>
//         ))}
//       </div>
//       <div className="container mx-auto px-6 relative z-10">
//         <div ref={ref} className="text-center">
//           <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isIntersecting ? "animate-fade-in" : "opacity-0"}`}>
//             Intuitive Interface
//           </h2>
//           <p className={`text-xl text-white/70 mt-4 ${isIntersecting ? "animate-slide-in" : "opacity-0"}`}>
//             Celebrate the joy of accomplishment with an app designed to track your progress
//           </p>
//         </div>
//         <div className={`mt-10 flex justify-center ${isIntersecting ? "animate-zoom-in" : "opacity-0"}`}>
//           <Image src={appScreen} alt="appScreen" className="rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };


// "use client"
// import Image from "next/image";
// import appScreen from "../assets/images/app-screen.png";
// import useIntersectionObserver from "./useIntersectionObserver";

// export const ProductShowcase = () => {
//   const [ref, isIntersecting] = useIntersectionObserver({
//     threshold: 0.7, // 50% of the component must be visible
//   });

//   return (
//     <div className="text-white bg-black py-12">
//       <div className="container mx-auto px-6">
//         <div ref={ref} className="text-center">
//           <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isIntersecting ? "animate-fade-in" : "opacity-0"}`}>
//             Intuitive Interface
//           </h2>
//           <p className={`text-xl text-white/70 mt-4 ${isIntersecting ? "animate-slide-in" : "opacity-0"}`}>
//             Celebrate the joy of accomplishment with an app designed to track your progress
//           </p>
//         </div>
//         <div className={`mt-10 flex justify-center ${isIntersecting ? "animate-zoom-in" : "opacity-0"}`}>
//           <Image src={appScreen} alt="appScreen" className="rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };