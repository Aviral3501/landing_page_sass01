"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import clsx from "clsx";
import MinusIcon from "../assets/icons/minus.svg";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const AccordionItem =({question,answer}:{question:string , answer:string})=>{
  const [isOpen,setIsOpen] = useState(false);
  return(
    <>
      <div className="py-7  border-b border-white/30 " onClick={()=>setIsOpen(!isOpen)}>
              <div className="flex items-center justify-center  md:max-w-4xl mx-auto mt-2">
                <span className="flex-1 text-xl lg:text-2xl font-bold">{question}</span>
                {isOpen ?  <MinusIcon/> : <PlusIcon/>} 
              </div>
              <div className={clsx("mt-4",{hidden:!isOpen,"text-lg text-white/70 lg:text-xl":isOpen ===true})}>{answer}</div>
            </div>
    </>
  )
}

export const FAQs = () => {
  return(
    <>
    <div className="bg-black text-white  py-[72px] sm:py-24">
      <div className="container">
        <h2 className=" text-center tracking-tight text-5xl font-bold sm:text-7xl">Frequently asked questions</h2>
        <div className="mt-10 lg:mt-[45px] max-w-3xl mx-auto px-10 lg:p-0">
          {items.map(({question,answer})=>(
           <AccordionItem question={question} answer={answer} key={question}/>
          ))}
        </div>

      </div>

    </div>
    </>
  )
};
