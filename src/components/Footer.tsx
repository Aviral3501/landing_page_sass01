"use client";
import Insta from '../assets/icons/insta.svg';
import X from '../assets/icons/x-social.svg';
import Tiktok from '../assets/icons/tiktok.svg';
import Youtube from '../assets/icons/youtube.svg';

export const Footer = () => {
  return(
    <>
   <footer className='bg-black py-5 text-white/60 border-t border-white/20'>
    <div className="container">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <div className="text-center">© 2024 - Aviral Singh</div>
        <ul className='flex flex-row gap-2.5 justify-center'>
          <li><Insta/></li>
          <li><X/></li>
          <li><Tiktok/></li>
          <li><Youtube/></li>
        </ul>

      </div>
    </div>
   </footer>
    </>
  )
};
