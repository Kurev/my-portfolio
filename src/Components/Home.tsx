import { useState } from "react";
import TechStackImg from "../assets/techstack1.png";
import About from "./About/About";
import { motion } from "framer-motion";
import TectStack from "./TechStack/TechStack";
import MyProject from "./MyProject/MyProject";
import Contact from "./Contact/Contact";

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
  isHovered: boolean;
  hasBeenHovered: boolean;
};

type ContainerState = {
  about: Container;
  techStack: Container;
  projects: Container;
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

  // New container state initialization
  const NEW_CONTAINER: Container = {
    isHovered: false,
    hasBeenHovered: false,
  };

  const [container, setContainer] = useState<ContainerState>({
    about: NEW_CONTAINER,
    techStack: NEW_CONTAINER,
    projects: NEW_CONTAINER,
  });
 

  const handleHoverStart = (containerName: keyof ContainerState) => {
    setContainer((prevState) => ({
      ...prevState,
      [containerName]: {
        ...prevState[containerName],
        isHovered: true,
      },
    }));
  };

  const handleHoverEnd = (containerName: keyof ContainerState) => {
    setContainer((prevState) => ({
      ...prevState,
      [containerName]: {
        ...prevState[containerName],
        isHovered: false,
      },
    }));
  };

  const handleContainerStart = (containerName: keyof ContainerState) => {
    setContainer((prevState) => ({
      ...prevState,
      [containerName]: {
        ...prevState[containerName],
        hasBeenHovered: true,
      },
    }));
  };

  const showMyTechStack =
    container.techStack.isHovered || container.techStack.hasBeenHovered;
  const showProjects =
    container.projects.isHovered || container.projects.hasBeenHovered;

  return (
    <div className="w-full h-svh flex items-center justify-center bg-[#020003] gap-2.5">
      <div 
       
        className="flex flex-col gap-2.5">
        {/* (About Section) */}

        <About
          title="ABOUT ME"
          paragraph="I am a 2nd-year BSIT student at Ateneo de Davao University, specializing in frontend development"
        />
        {/*bg-[#bb8ce4] bg-[radial-gradient(circle,_rgba(187,_140,_228,_1)_0%,_rgba(0,_0,_0,_1)_69%)]  opacity-50
        {/* Tech Stack Section */}
        <div className="w-[30rem] h-[18rem] rounded-2xl cursor-pointer shadow-xs shadow-[#553e68]">
          <motion.div
            onHoverStart={() => {
              handleHoverStart("techStack");
              handleContainerStart("techStack");
            }}
            onMouseLeave={() => handleHoverEnd("techStack")}
            className="w-full h-full flex items-center justify-center bg-[#000000] backdrop-blur-sm rounded-2xl"
          >
            {/* <div className="text-white font-mono flex flex-col absolute -left-[9rem]">
              {showMyTechStack &&
                "My Tech Stack".split(" ").map((text, index) => (
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 1 + index * 0.5,
                        easings: "ease",
                      },
                    }}
                    className="flex justify-end text-[3rem] font-bold"
                  >
                    {text}
                  </motion.h1>
                ))}
            </div> */}
            <TectStack />
          </motion.div>
        </div>
      </div>

      {/* Second Container (Projects Section) */}
      <div className="flex flex-col gap-2.5 rounded-2xl">
        <motion.div
          onHoverStart={() => {
            handleHoverStart("projects");
            handleContainerStart("projects");
          }}
          onHoverEnd={() => handleHoverEnd("projects")}
          className="cursor-pointer"
        >
          {/* <div className=" text-white font-mono flex absolute z-50 px-2 py-1 bg-[#000000] rounded-3xl rounded-tl-1xl">
            
              {showProjects &&
                "Projects".split("").map((text, index) => (
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 1 + index * 0.5,
                        easings: "ease",
                      },
                    }}
                    className="text-[1.5rem] font-bold"
                  >
                    {text}
                  </motion.h1>
                ))}
            
          </div> */}
          <MyProject />
        </motion.div>

        {/* Contact Section */}
        <div className="w-[25rem] h-[11rem] bg-[#000000] shadow-xs shadow-[#553e68] rounded-2xl cursor-pointer flex justify-center">
          <Contact title="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default Home;
