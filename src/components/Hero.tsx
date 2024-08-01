"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const Hero = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  const handleMouseMove = (event: MouseEvent) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Define motion values for parallax effect
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const messageX = useMotionValue(0);
  const messageY = useMotionValue(0);

  // Transform motion values based on mouse position
  const cursorXTransform = useTransform(cursorX, [0, window.innerWidth], [-50, 50]);
  const cursorYTransform = useTransform(cursorY, [0, window.innerHeight], [-30, 30]);
  const messageXTransform = useTransform(messageX, [0, window.innerWidth], [-40, 40]);
  const messageYTransform = useTransform(messageY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    cursorX.set(mouseX);
    cursorY.set(mouseY);
    messageX.set(mouseX);
    messageY.set(mouseY);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_30%,#4F21A1_65%,#A46EDB_90%)] py-[72px] sm:py-24 relative overflow-clip">
      {/* black circle */}
      <div className="absolute bg-black h-[375px] w-[800px] sm:w-[1536px] sm:h-[768px] lg:w-[2800px] lg:h-[800px] rounded-[100%] -translate-x-1/2 left-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] bottom-24 top-[calc(100%-96px)] sm:top-[calc(100%-120px)] -z-1 "></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-2 px-4 rounded-lg border-gray-700 hover:border-gray-500 transition duration-300"
          >
            <span className="rainbow-text">Version 2.0 is here</span>
            <span className="flex items-center gap-2 text-gray-400 hover:text-white ml-2 transition duration-300">
              Read more
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a time
            </h1>
            <motion.div
              className="absolute top-[125px] right-[476px] lg:right-[580px] hidden sm:inline"
              style={{ x: cursorXTransform, y: cursorYTransform }}
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt={"cursorImage"}
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute top-[15px] left-[450px] lg:left-[580px] hidden sm:inline"
              style={{ x: messageXTransform, y: messageYTransform }}
              drag 
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt={"messageImage"}
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-2xl text-center mt-8">
            Celebrate the joy of accomplishment with an <br />
            app designed to track your progress, motivate <br />
            your efforts, and celebrate your successes.
          </p>
        </div>

        <div className="flex justify-center mt-8 z-10 ">
          <div className="relative p-1 bg-gradient-border rounded-lg z-10 ">
            <button className="relative py-3 px-5 rounded-lg z-10 text-white font-bold bg-black border-2 border-transparent">
              <a href="#" className="hover:text-gray-300">
                Get for free
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// "use client";
// import Image from "next/image";
// import ArrowIcon from "../assets/icons/arrow-w.svg";
// import cursorImage from "../assets/images/cursor.png";
// import messageImage from "../assets/images/message.png";
// import { motion } from "framer-motion";

// export const Hero = () => {
//   return (
//     <>
//       <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_30%,#4F21A1_65%,#A46EDB_90%)] py-[72px] sm:py-24 relative overflow-clip">
//         {/* black circle */}
//         <div className="absolute bg-black h-[375px] w-[800px] sm:w-[1536px] sm:h-[768px] lg:w-[2800px] lg:h-[800px]  rounded-[100%] -translate-x-1/2 left-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] bottom-24 top-[calc(100%-96px)] sm:top-[calc(100%-120px)]     -z-1 "></div>
//         <div className="container relative">
//           <div className="flex items-center justify-center">
//             <a
//               href="#"
//               className="inline-flex gap-3 border py-2 px-4 rounded-lg border-gray-700 hover:border-gray-500 transition duration-300"
//             >
//               <span className="rainbow-text">Version 2.0 is here</span>
//               <span className="flex items-center gap-2 text-gray-400 hover:text-white ml-2 transition duration-300">
//                 Read more
//                 <ArrowIcon />
//               </span>
//             </a>
//           </div>
//           <div className="flex justify-center items-center mt-8">
//             <div className="inline-flex relative">
//               <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter text-center  inline-flex">
//                 One Task <br /> at a time
//               </h1>
//               <motion.div className="absolute top-[125px] right-[476px] lg:right-[580px] hidden sm:inline "
//               drag
//               dragSnapToOrigin>
//                 <Image
//                   src={cursorImage}
//                   alt={"cursorImage"}
//                   height={200}
//                   width={200}
//                   className="max-w-none"
//                   draggable="false"
//                 />
//               </motion.div>
//               <motion.div className="absolute top-[15px] left-[450px] lg:left-[580px] hidden sm:inline"
//                drag
//                dragSnapToOrigin>
//                 <Image
//                   src={messageImage}
//                   alt={"messageImage"}
//                   height={200}
//                   width={200}
//                   className=" max-w-none"
//                   draggable="false"
//                 />
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex  justify-center items-center">
//             <p className="text-xl sm:text-2xl text-center mt-8">
//               {" "}
//               Celebrate the joy of accompolishment with an <br /> app designed
//               to track your progress, motivate <br /> your efforts, and
//               celebrate your successes.
//             </p>
//           </div>

//           <div className="flex justify-center mt-8 z-10 ">
//             <div className="relative p-1 bg-gradient-border rounded-lg z-10 ">
//               <button className="relative py-3 px-5 rounded-lg z-10 text-white font-bold bg-black border-2 border-transparent">
//                 <a href="#" className="hover:text-gray-300">
//                   Get for free
//                 </a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// button Component

{
  /* <div className="flex justify-center mt-8">
  <div className="relative p-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-lg">
    <button className="relative py-3 px-6 rounded-lg text-white font-bold bg-black border-2 border-transparent">
      Get for free
    </button>
  </div>
</div> */
}
