"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const border = useRef<HTMLDivElement>(null);
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offSetX.set(e.clientX - borderRect.left);
      offSetY.set(e.clientY - borderRect.top);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <div
        key={title}
        className="relative rounded-xl px-5 py-16 text-center sm:flex-1 rainbow-border"
      >
        <motion.div
          className="border-2 border-purple-400 absolute inset-0 rounded-xl"
          style={{
            WebkitMaskImage: maskImage,
            maskImage,
          }}
          ref={border}
        ></motion.div>
        <div className="inline-flex h-10 w-10 bg-white text-black justify-center items-center rounded-lg">
          <EcosystemIcon />
        </div>
        <h3 className="mt-6 font-bold rainbow-text opacity-80 text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-white/60">{description}</p>
      </div>
    </>
  );
};

export default Feature;

