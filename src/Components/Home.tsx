import { useState } from "react";
import AboutImg from "../assets/about.png";
import TechStackImg from "../assets/techstack1.png";
import About from "./About/About";
import { motion } from "framer-motion";
import TectStack from "./TechStack/TectStack";
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
    <div className="w-full h-svh flex items-center justify-center bg-[#000000] gap-2.5">
      <div className="flex flex-col gap-2.5">
        {/* (About Section) */}
        <div className="w-[30rem] h-[18rem] cursor-pointer border border-[#bb8ce4] rounded-3xl bg-gradient-to-t from-[#bb8ce49a] via-[#000000] to-[#000000] opacity-50 hover:bg-gradient-to-b hover:from-[#c69bebe5] hover:duration-500 transform hover:scale-95 hover:opacity-80 transition-all ease-in-out">
          <About
            title="ABOUT ME"
            paragraph="I am a 2nd-year BSIT student at Ateneo de Davao University, specializing in frontend development"
          />
        </div>

        {/* Tech Stack Section */}
        <div
          className="w-[30rem] h-[18rem] rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url(${TechStackImg})`,
            backgroundSize: "cover",
            width: "30rem",
            height: "18rem",
          }}
        >
          <motion.div
            onHoverStart={() => {
              handleHoverStart("techStack");
              handleContainerStart("techStack");
            }}
            onMouseLeave={() => handleHoverEnd("techStack")}
            className="w-full h-full flex items-center justify-center rounded-lg bg-[#02031145] backdrop-blur-sm"
          >
            <div className="text-white font-mono flex flex-col absolute -left-[9rem]">
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
            </div>
            <TectStack />
          </motion.div>
        </div>
      </div>

      {/* Second Container (Projects Section) */}
      <div className="flex flex-col gap-2.5">
        <motion.div
          onHoverStart={() => {
            handleHoverStart("projects");
            handleContainerStart("projects");
          }}
          onHoverEnd={() => handleHoverEnd("projects")}
          className="cursor-pointer"
        >
          <div className="flex flex-row-reverse absolute left-[77rem] text-white font-mono">
            <div>
              {showProjects &&
                "Projects".split("").map((text, index) => (
                  <motion.h1
                    key={index}
                    // TODO: customizability with functions per index
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 1 + index * 0.5,
                        easings: "ease",
                      },
                    }}
                    className="flex justify-end text-[2rem] font-bold"
                  >
                    {text}
                  </motion.h1>
                ))}
            </div>
          </div>
          <div className="cursor-pointer rounded-lg">
            <MyProject />
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="w-[25rem] h-[11rem] bg-yellow-300 rounded-lg cursor-pointer">
          <Contact title="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default Home;
