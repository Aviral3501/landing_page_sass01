"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <>
      <div className="bg-black text-white py-[40px]">
        <div className="container">
          <h2 className="text-xl text-center sm:text-3xl md:text-2xl text-white/70">
            Trusted by the world&apos;s most innovative teams.
          </h2>
          {/* slight vanishing blurry effect - fadein and fadeout effect */}
          <div
            className="overflow-hidden mt-9 sm:mt-10 md:mt-11 lg:mt-12 before:content-[''] after:content-[''] before:absolute
            after:absolute before:h-full after:h-full before:w-10 after:w-10 relative  after:right-0 before:left-0 before:top-0 after:top-0
            before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]"
          >
            <div className="flex gap-16 sm:gap-x-28 animate-scroll">
              {images.map(({ src, alt }) => (
                <Image src={src} key={alt} alt={alt} className="flex-none h-8 w-auto" />
              ))}
              {images.map(({ src, alt }) => (
                <Image key={`duplicate-${alt}`} src={src} alt={alt} className="flex-none h-8 w-auto" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};






        // <div className="overflow-hidden mt-9 sm:mt-10 md:mt-11 lg:mt-12 relative before:content-[''] after:content-[''] before:absolute 
        // after:absolute before:h-full after:h-full before:w-10 after:w-10  after:right-0 before:left-0 before:top-0 after:top-0
        //  before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
        //   <div className="flex gap-16 sm:gap-x-28 animate-scroll">
        //     {images.map(({ src, alt }) => (
        //       <Image key={alt} src={src} alt={alt} className="flex-none h-8 w-auto" />
        //     ))}
        //     {images.map(({ src, alt }) => (
        //       <Image key={`duplicate-${alt}`} src={src} alt={alt} className="flex-none h-8 w-auto" />
        //     ))}
        //   </div>
        // </div>