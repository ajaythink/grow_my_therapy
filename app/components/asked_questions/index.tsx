"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Asked_Questions = () => {
  
  const QuestionsList = [
    {
      question: "What are your fees?",
      answer: "My fees are $60 for individual, $90 for couple.",
    },
    {
      question: "Do you take insurance?",
      answer:
        "No, I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for out-of-network benefits with your insurance company.",
    },
    {
      question: "Do you provide online counseling?",
      answer: "No, I do not provide online counseling.",
    },
    {
      question: "What are your office hours?",
      answer:
        "My office hours are Monday through Thursday, 11:00 AM to 6:30 PM.",
    },
    {
      question: "What geographic areas do you serve?",
      answer:
        "My practice is located in Richmond, VA, and I serve clients in Central Virginia.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I offer Individual Therapy and Couples Therapy. My practice focuses on areas such as Christian counseling, spiritual growth, deepening relationships, healing past wounds, and discovering your life purpose.",
    },
  ];

  const [show, setShow] = useState(Array(QuestionsList.length).fill(false));
  const toggleAnswer = (index: number) => {
    const updatedShow = [...show];
    console.log("Toggling answer for index:", index);
    console.log("Current show state:", updatedShow);
    updatedShow[index] = !updatedShow[index];
    setShow(updatedShow);
  };

  return (
    <>
      <div className="p-24 bg-[rgb(181,219,223)] ">
        <h1 className="text-6xl font-bold text-[rgb(30,65,69)] ">
          Frequently Asked Questions
        </h1>
        {QuestionsList.map((item, index) => (
          <div
            key={index}
            className="mt-10 pt-5 border-t-1 border-[rgb(30,65,69)]"
          >
            <div className="flex items-center justify-between">
              <p
                onClick={() => toggleAnswer(index)}
                className="text-2xl font-bold text-[rgb(30,65,69)] cursor-pointer hover:text-[rgb(74,110,114)] transition-all duration-300 ease-in-out"
              >
                {item.question}
              </p>
              {show[index] ? (
                <FaAngleUp
                  onClick={() => toggleAnswer(index)}
                  className="inline-block ml-2 text-[rgb(30,65,69)] hover:cursor-pointer hover:text-[rgb(74,110,114)] transition-all duration-300 ease-in-out"
                />
              ) : (
                <FaAngleDown
                  onClick={() => toggleAnswer(index)}
                  className="inline-block ml-2 text-[rgb(30,65,69)] hover:cursor-pointer hover:text-[rgb(74,110,114)] transition-all duration-300 ease-in-out"
                />
              )}
            </div>
            {show[index] && <p className="py-3 text-lg">{item.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Asked_Questions;
