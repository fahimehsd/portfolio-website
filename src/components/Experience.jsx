import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import sass from "../assets/sass.png";
const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      name: "Html",
      style: "shadow-red-500"
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style: "shadow-blue-600"
    },
    {
      id: 3,
      src: js,
      name: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      src: react,
      name: "React",
      style: "shadow-cyan-400"
    },
    {
      id: 5,
      src: tailwind,
      name: "Tailwind",
      style: "shadow-cyan-700"
    },
    {
      id: 6,
      src: sass,
      name: "SASS",
      style: "shadow-pink-500"
    },
    {
      id: 7,
      src: github,
      name: "GitHub",
      style: "shadow-gray-600"
    }
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 via-gray-800 to-black w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={name} className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
