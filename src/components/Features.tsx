"use client"
import Image from "next/image";
import EcosystemIcon from "../assets/icons/ecosystem.svg";


const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return(
    <>
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl text-center font-bold tracking-tighter sm:text-6xl lg:text-8xl">Everything you need</h2>
       <div className=" max-w-xl mx-auto">
       <p className="text-xl text-white/70 text-center mt-5">
          Enjoy customizable lists, team work tools, and smart tracking all in one place.
          Set tasks, get reminders, and see your progress simply and quickly.
        </p>
       </div>
        <div className="flex flex-col mx-[40px] gap-6  sm:flex-row  lg:gap-10 mt-6 md:mt-10 ">
          {features.map(({title,description})=>(
            <div key={title} className=" border-white/30 rounded-xl px-5 py-16 text-center sm:flex-1 rainbow-border border-2">
              <div className="inline-flex h-10 w-10 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon/>
              </div>
              <h3 className="mt-6 font-bold rainbow-text opacity-80 text-2xl">{title}</h3>
              <p className="mt-4 text-white/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
};