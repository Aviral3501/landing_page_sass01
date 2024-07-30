"use client"
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

  return(
    <>
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-lg text-center sm:text-2xl md:text-xl">Trusted by the world's most innovative teams.</h2>
        <div className="overflow-hidden gap-16">
           <div className="flex">
           {images.map(({src,alt})=>(
              <Image src={src} alt={alt} className="flex-none h-8 w-auto"/>
            ))}
           </div>
        </div>
      </div>


    </div>
    </>
  )
};
