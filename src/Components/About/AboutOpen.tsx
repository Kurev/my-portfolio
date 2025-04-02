import React from "react";
import { FaWindowClose } from "react-icons/fa";

type PropsType = {
  handleCloseAbout: () => void;
};

const AboutOpen = ({ handleCloseAbout }: PropsType) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 p-[10%]">
        <div className="flex justify-end w-full">
          <h1 className="text-[2rem] text-[#f64343] hover:text-[#f6434399] duration-500F cursor-pointer">
            <FaWindowClose onClick={handleCloseAbout} />
          </h1>
        </div>
        <div
          className="flex flex-col text-[4rem] text-white text-mono  font-bold h-screen w-full overflow-auto gap-[2rem]"
          style={{ height: "80vh" }}
        >
          <h1 className="leading-[1.2]">
            My name is
            <span className="text-[#6f3ef4] capitalize">
              {" "}
              Kurt John A. Montes
            </span>
          </h1>

          <p className="text-[1rem] font-light text-[#aba7b2]">
            I’m a Frontend Developer skilled in creating beautiful, responsive
            websites. With strong expertise in React, I build seamless,
            high-performance web applications that work flawlessly across all
            devices.
          </p>

          <div>
            <h1 className="text-[1.5rem] font-bold mb-2 font-mono text-[#ddd7e7]">Work Experience</h1>
            <div>
              <p className="text-lg font-light">
                Freelance Frontend Developer (2024)
              </p>
              <ul className="list-disc list-inside text-[1rem] text-[#aba7b2] font-light space-y-2 pl-[1rem]">
                <li>Templating websites to match client requirements</li>
                <li>Enhancing designs for better user experience</li>
                <li>Ensuring responsiveness and mobile-friendliness</li>
                <li>Adding new features to meet client expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOpen;
