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
  shes: boolean;
};

export type ContainerState = {
  about: Container;
  project: Container;
  githubLink: Container;
  resumeLink: Container;
};

const Home = () => {
  const NEW_CONTAINER: Container = {
    isOpen: false,
    shes: true,
  };

  const [containerAbout, setContainerAbout] = useState<ContainerState>({
    about: NEW_CONTAINER,
    project: NEW_CONTAINER,
    githubLink: NEW_CONTAINER,
    resumeLink: NEW_CONTAINER,
  });

  const checkOpenAbout =
    containerAbout.about.isOpen && !containerAbout.githubLink.isOpen;
  const checkProjectAbout = containerAbout.project.isOpen;

  const handleOpenModal = (containerName: keyof ContainerState) => {
    const isAnyOpen = Object.values(containerAbout).some(
      (container) => container.isOpen
    );

    if (!isAnyOpen) {
      setContainerAbout((prev) => ({
        ...prev,
        [containerName]: {
          ...prev[containerName],
          isOpen: true,
        },
      }));
    }
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
      setContainerAbout((prev) => ({
        ...prev,
        githubLink: NEW_CONTAINER,
        resumeLink: NEW_CONTAINER,
      }));
    };

    const wowwankokabalo = () => {
      setContainerAbout((prev) => ({
        ...prev,
        about: NEW_CONTAINER,
        project: NEW_CONTAINER,
      }));
    };

    const wowsagol = () => {
      
      const handleLink:boolean = !containerAbout.githubLink.isOpen || !containerAbout.resumeLink.isOpen;
      const handleContainers:boolean = containerAbout.about.isOpen || containerAbout.project.isOpen;

      if (handleLink) {
        handleFocus();
      }

      if (handleContainers) {
        wowwankokabalo();
      }
    };

    window.addEventListener("focus", wowsagol);

    return () => {
      window.removeEventListener("focus", wowsagol);
    };
  }, [containerAbout.githubLink.isOpen, containerAbout.resumeLink.isOpen]); // added dependencies to keep it updated

  useEffect(() => {}, []);

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

      <div className="flex flex-col gap-2.5 rounded-2xl">
        <div
          onClick={() => handleOpenModal("project")}
          className="cursor-pointer"
        >
          <MyProject />
        </div>

        <div className="w-[25rem] h-[11rem] bg-[#000000] shadow-xs shadow-[#553e68] rounded-2xl cursor-pointer flex justify-center">
          <Contact title="Contact Me" />
        </div>
      </div>

      {checkOpenAbout && (
        <motion.div
          initial={{ opacity: 1, scaleX: 0.7, scaleY: 0.42, x: -205, y: -150 }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed w-[45%] h-screen bg-[#000000e0] backdrop-blur-lg z-50 gap-10 rounded-3xl"
        >
          <AboutOpen handleCloseModal={() => handleCloseModal("about")} />
        </motion.div>
      )}

      {checkProjectAbout && (
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
