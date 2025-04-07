import { useState } from "react";
import About from "./About/About";
import TectStack from "./TechStack/TechStack";
import MyProject from "./MyProject/MyProject";
import Contact from "./Contact/Contact";
import AboutOpen from "./About/AboutModal";
import { motion } from "motion/react";
import ProjectModal from "./MyProject/ProjectModal";

// Type Definitions
// type BoxShadow = {
//   purple: string;
//   blue: string;
//   green: string;
//   red: string;
//   yellow: string;
//   orange: string;
//   discordTheme: string;
// };

type Container = {
  isOpen: boolean;
};

type ContainerState = {
  about: Container;
  project: Container;
};

const Home = () => {
  // const boxShadows: BoxShadow = {
  //   purple: "rgb(151,12,185)",
  //   blue: "rgba(5,5,224,0.75)",
  //   green: "rgba(0,255,0,0.75)",
  //   red: "rgba(255,0,0,0.75)",
  //   yellow: "rgba(255, 211, 0)",
  //   orange: "rgba(255,165,0,0.75)",
  //   discordTheme: "rgb(88,31,149)",
  // };

  const NEW_CONTAINER: Container = {
    isOpen: false,
  };

  const [containerAbout, setContainerAbout] = useState<ContainerState>({
    about: NEW_CONTAINER,
    project: NEW_CONTAINER,
  });

  const handleOpenModal = (containerName: keyof ContainerState) => {
    setContainerAbout((prev) => ({
      ...prev,
      [containerName]: {
        ...prev[containerName],
        isOpen: true, 
      },
    }));
  };

  const handleCloseModal = (containerName: keyof ContainerState) => { 
    setContainerAbout((prev) => ({
    ...prev,
    [containerName]: {
      ...prev[containerName],
      isOpen: false, 
    },
  }));
};
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#020003] gap-2.5">
      <div className="flex flex-col gap-2.5">
        <div onClick={() => handleOpenModal("about")}>
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
        <div 
        onClick={() => handleOpenModal("project")}
        className="cursor-pointer">
          <MyProject />
        </div>

        {/* Contact Section */}
        <div className="w-[25rem] h-[11rem] bg-[#000000] shadow-xs shadow-[#553e68] rounded-2xl cursor-pointer flex justify-center">
          <Contact title="Contact Me" />
        </div>
      </div>
      {containerAbout.about.isOpen && (
        <motion.div
        initial={{ opacity: 1, scaleX: 0.70, scaleY: 0.42, x: -205, y: -150 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
         className="fixed w-[45%] h-screen bg-[#000000e0] backdrop-blur-lg z-50 gap-10 rounded-3xl">
          <AboutOpen handleCloseModal={() => handleCloseModal("about")}/>
        </motion.div>
      )}
      {containerAbout.project.isOpen && (
        <motion.div
        initial={{ opacity: 1, scaleX: 0.58, scaleY: 0.57, x: 248, y: -92 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
         className="fixed w-[45%] h-screen bg-[#000000e0] backdrop-blur-lg z-50 gap-10 rounded-3xl">
          <ProjectModal handleCloseModal={() => handleCloseModal("project")}/>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
