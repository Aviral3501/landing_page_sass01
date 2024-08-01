"use client";
import { useEffect, useState } from "react";
import helixImage from "../assets/images/helix2.png";
import imojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useTransform, useMotionValue } from "framer-motion";

export const CallToAction = () => {
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
  const helixX = useMotionValue(0);
  const helixY = useMotionValue(0);
  const starX = useMotionValue(0);
  const starY = useMotionValue(0);

  // Transform motion values based on mouse position
  const helixXTransform = useTransform(helixX, [0, window.innerWidth], [-50, 50]);
  const helixYTransform = useTransform(helixY, [0, window.innerHeight], [-30, 30]);
  const starXTransform = useTransform(starX, [0, window.innerWidth], [-40, 40]);
  const starYTransform = useTransform(starY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    helixX.set(mouseX);
    helixY.set(mouseY);
    starX.set(mouseX);
    starY.set(mouseY);
  }, [mouseX, mouseY]);

  return (
    <div className="text-white bg-black py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <motion.div
          style={{ x: helixXTransform, y: helixYTransform }}
          drag
          dragSnapToOrigin
        >
          <Image
            src={helixImage}
            alt="helixImage"
            className="absolute top-6 left-[calc(100%+36px)]"
            draggable="false"
          />
        </motion.div>
        <motion.div
          style={{ x: starXTransform, y: starYTransform }}
          drag
          dragSnapToOrigin
        >
          <Image
            src={imojiStarImage}
            alt="imojiStarImage"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
            draggable="false"
          />
        </motion.div>
        <h2 className="font-bold tracking-tight text-5xl sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track
          your progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-12 bg-white/20 rounded-lg font-medium px-5 py-4 sm:py-0 flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg hover:bg-white/80 px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};


// "use client";
// import helixImage from "../assets/images/helix2.png";
// import imojiStarImage from "../assets/images/emojistar.png";
// import Image from "next/image";
// import {motion,useScroll, useTransform} from "framer-motion";
// import {useEffect, useRef} from "react";

// export const CallToAction = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const {scrollYProgress}=useScroll({
//     target:containerRef,
//     offset: ["start end" , "end end"],
//   });

//   useEffect(()=>{ 
//     scrollYProgress.on("change",(value)=>console.log("value",value));
//   },[]);

//   const translateY = useTransform(scrollYProgress , [0,1] , [80,-80])
//   return (
//     <>
//       <div className="text-white bg-black py-[72px] sm:py-24 text-center" ref={containerRef}>
//         <div className="container max-w-xl relative">
//          <motion.div style={{translateY}} drag dragSnapToOrigin>
//          <Image
//             src={helixImage}
//             alt="helixImage"
//             className="absolute top-6 left-[calc(100%+36px)]"
//             draggable="false"
//           />
//          </motion.div>
//          <motion.div style={{translateY}} drag dragSnapToOrigin>
//          <Image
//             src={imojiStarImage}
//             alt="imojiStarImage"
//             className="absolute -top-[120px] right-[calc(100%+24px)]"
//             draggable="false"
//           />
//          </motion.div>
//           <h2 className="font-bold tracking-tight text-5xl sm:text-6xl ">
//             Get instant access
//           </h2>
//           <p className="text-xl text-white/70 mt-5">
//             Celebrate the joy of accompolishment with an app designed to track
//             your progress and motivate your efforts.
//           </p>
//           <form className="mt-10 flex flex-col gap-2.5  max-w-sm mx-auto sm:flex-row">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="h-12 bg-white/20 rounded-lg font-medium px-5 py-4 sm:py-0 flex-1 "
//             />
//             <button className="bg-white text-black h-12 rounded-lg hover:bg-white/80 px-5 ">
//               Get access
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
