"use client";
import helixImage from "../assets/images/helix2.png";
import imojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return(
    <>
    <div className="text-white bg-black py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image src={helixImage} alt="helixImage" className="absolute top-6 left-[calc(100%+36px)]"/>
        <Image src={imojiStarImage} alt="imojiStarImage" className="absolute -top-[120px] right-[calc(100%+24px)]"/>
        <h2 className="font-bold tracking-tight text-5xl sm:text-6xl ">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5">Celebrate the joy of accompolishment with an app designed to track your progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5  max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="Enter your email address" className="h-12 bg-white/20 rounded-lg font-medium px-5 flex-1" />
          <button className="bg-white text-black h-12 rounded-lg hover:bg-white/80 px-5 ">Get access</button>
        </form>
      </div>
    </div>
    </>
  );
};
