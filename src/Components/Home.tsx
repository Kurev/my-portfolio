import { useState, useEffect } from "react";
import About from "./About/About";
import TectStack from "./TechStack/TechStack";
import MyProject from "./MyProject/MyProject";
import Contact from "./Contact/Contact";
import AboutOpen from "./About/AboutModal";
import { motion } from "motion/react";
import ProjectModal from "./MyProject/ProjectModal";

type Container = {
  isOpen: boolean;
};

export type ContainerState = {
  about: Container;
  project: Container;
  githubLink: Container; // to resolve the bug if I click the github link it will not open the modal
  resumeLink: Container;
};

const Home = () => {
  const NEW_CONTAINER: Container = {
    isOpen: false,
  };

  const [containerAbout, setContainerAbout] = useState<ContainerState>({
    about: NEW_CONTAINER,
    project: NEW_CONTAINER,
    githubLink: NEW_CONTAINER,
    resumeLink: NEW_CONTAINER,
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

  useEffect(() => {
    const handleFocus = () => {
      // Reset the state when the window is focused
      setContainerAbout({
        about: NEW_CONTAINER,
        project: NEW_CONTAINER,
        githubLink: NEW_CONTAINER,
        resumeLink: NEW_CONTAINER,
      });
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#020003] gap-2.5">
      <div className="flex flex-col gap-2.5">
        <div onClick={() => handleOpenModal("about")}>
          <About
            title="ABOUT ME"
            paragraph="I am a 2nd-year BSIT student at Ateneo de Davao University, specializing in frontend development"
            handleOpenModal={handleOpenModal}
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
          className="cursor-pointer"
        >
          <MyProject />
        </div>

        {/* Contact Section */}
        <div className="w-[25rem] h-[11rem] bg-[#000000] shadow-xs shadow-[#553e68] rounded-2xl cursor-pointer flex justify-center">
          <Contact title="Contact Me" />
        </div>
      </div>

      {containerAbout.about.isOpen && !containerAbout.githubLink.isOpen && (
        <motion.div
          initial={{ opacity: 1, scaleX: 0.7, scaleY: 0.42, x: -205, y: -150 }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed w-[45%] h-screen bg-[#000000e0] backdrop-blur-lg z-50 gap-10 rounded-3xl"
        >
          <AboutOpen handleCloseModal={() => handleCloseModal("about")} />
        </motion.div>
      )}

      {containerAbout.project.isOpen && (
        <motion.div
          initial={{ opacity: 1, scaleX: 0.58, scaleY: 0.57, x: 248, y: -92 }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed w-[45%] h-screen bg-[#000000e0] backdrop-blur-lg z-50 gap-10 rounded-3xl"
        >
          <ProjectModal handleCloseModal={() => handleCloseModal("project")} />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
