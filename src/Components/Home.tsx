import { useState } from "react";
import About from "./About/About";
import { motion } from "framer-motion";
import TectStack from "./TechStack/TechStack";
import MyProject from "./MyProject/MyProject";
import Contact from "./Contact/Contact";
import AboutOpen from "./About/AboutOpen";

// Type Definitions
type BoxShadow = {
  purple: string;
  blue: string;
  green: string;
  red: string;
  yellow: string;
  orange: string;
  discordTheme: string;
};

type Container = {
  isClick: boolean;
  exit: boolean;
};

type ContainerState = {
  about: Container;
};

const Home = () => {
  const boxShadows: BoxShadow = {
    purple: "rgb(151,12,185)",
    blue: "rgba(5,5,224,0.75)",
    green: "rgba(0,255,0,0.75)",
    red: "rgba(255,0,0,0.75)",
    yellow: "rgba(255, 211, 0)",
    orange: "rgba(255,165,0,0.75)",
    discordTheme: "rgb(88,31,149)",
  };

  const NEW_CONTAINER: Container = {
    isClick: false,
    exit: false,
  };

  const [containerAbout, setContainerAbout] = useState<ContainerState>({
    about: NEW_CONTAINER,
  });

  const handleOpenAbout = () => {
    setContainerAbout((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        isClick: true, // Update isClick to true
      },
    }));
  };

  const handleCloseAbout = () => { 
    setContainerAbout((prev) => ({
    ...prev,
    about: {
      ...prev.about,
      isClick: false, 
      exit: true
    },
  }));
};

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#020003] gap-2.5">
      <div className="flex flex-col gap-2.5">
        <div onClick={handleOpenAbout}>
          <About
            title="ABOUT ME"
            paragraph="I am a 2nd-year BSIT student at Ateneo de Davao University, specializing in frontend development"
          />
        </div>

        <div className="w-[30rem] h-[18rem] rounded-2xl cursor-pointer shadow-xs shadow-[#553e68]">
          <div className="w-full h-full flex items-center justify-center bg-[#000000] backdrop-blur-sm rounded-2xl">
            <TectStack />
          </div>
        </div>
      </div>

      {/* Second Container (Projects Section) */}
      <div className="flex flex-col gap-2.5 rounded-2xl">
        <div className="cursor-pointer">
          <MyProject />
        </div>

        {/* Contact Section */}
        <div className="w-[25rem] h-[11rem] bg-[#000000] shadow-xs shadow-[#553e68] rounded-2xl cursor-pointer flex justify-center">
          <Contact title="Contact Me" />
        </div>
      </div>
      {containerAbout.about.isClick && (
        <div className="fixed w-[45%] h-screen bg-[#0a0909] backdrop-blur-lg z-50 gap-10">
          <AboutOpen handleCloseAbout={handleCloseAbout}/>
        </div>
      )}
    </div>
  );
};

export default Home;
