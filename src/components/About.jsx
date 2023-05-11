import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          possimus eum, optio nihil sit ipsam. Aut, magnam modi accusantium eum
          quasi nobis quidem velit nisi ipsa autem dicta ipsum. Aut!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          laboriosam totam blanditiis accusamus minus? Soluta quae vel nihil
          eligendi tenetur earum aspernatur doloremque. Quasi rem perferendis
          soluta modi, dolor molestiae?
        </p>
      </div>
    </div>
  );
};

export default About;
