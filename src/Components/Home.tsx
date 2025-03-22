import { useState } from "react";
import AboutImg from "../assets/about.png";
import TechStackImg from "../assets/techstack1.png";
import About from "./About/About";
import { motion } from "framer-motion";
import TectStack from "./TechStack/TectStack";
import MyProject from "./MyProject/MyProject";
import Contact from "./Contact/Contact";

type BoxShadow = {
  purple: string;
  blue: string;
  green: string;
  red: string;
  yellow: string;
  orange: string;
  discordTheme: string;
};

type IsHovered = {
  firstContainer: boolean;
  secondContainer: boolean;
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

  const [isHovered, setIsHovered] = useState<IsHovered>({
    firstContainer: false,
    secondContainer: false,
  });
  const [hasBeenHovered, setHasBeenHovered] = useState<IsHovered>({
    firstContainer: false,
    secondContainer: false,
  });

  const handleFirstContainerHoverStart = () => {
    setIsHovered({
      firstContainer: true,
      secondContainer: false, // Ensure second container animation doesn't trigger
    });

    setHasBeenHovered((prevState) => ({
      ...prevState,
      firstContainer: true,
    }));
  };

  const handleSecondContainerHoverStart = () => {
    setIsHovered({
      firstContainer: false, // Ensure first container animation doesn't trigger
      secondContainer: true,
    });

    setHasBeenHovered((prevState) => ({
      ...prevState,
      secondContainer: true,
    }));
  };

  const handleHoverEnd = () => {
    if (!hasBeenHovered.firstContainer && !hasBeenHovered.secondContainer) {
      setIsHovered({
        firstContainer: true,
        secondContainer: true,
      });
    }
  };

  return (
    <div className="w-full h-svh flex items-center justify-center bg-black gap-2.5">
      <div className="flex flex-col gap-2.5">
        <motion.div
          whileHover={{
            scale: 0.9,
            boxShadow: `-1px 0px 6px 9px ${boxShadows.purple}`,
            transition: { duration: 0.5 },
          }}
          animate={{
            boxShadow: `0px 0px 0px 0px ${boxShadows.blue}`,
            transition: { duration: 1, easings: "easeInOut" },
          }}
          className="w-[30rem] h-[18rem] rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url(${AboutImg})`,
            backgroundSize: "cover",
            width: "30rem",
            height: "18rem",
          }}
        >
          <div className="w-full h-full rounded-lg bg-[#440c3d58] backdrop-blur-sm">
            <About
              title="ABOUT ME"
              paragraph="I am a frontend developer with a passion for creating beautiful and functional websites."
            />
          </div>
        </motion.div>

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
            onHoverStart={handleFirstContainerHoverStart}
            onHoverEnd={handleHoverEnd}
            className="w-full h-full flex items-center justify-center rounded-lg bg-[#02031145] backdrop-blur-sm"
          >
            <div className="text-white font-mono flex flex-col absolute -left-[9rem]">
              {(isHovered.firstContainer || hasBeenHovered.firstContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[3rem] font-bold"
                >
                  My
                </motion.h1>
              )}
              {(isHovered.firstContainer || hasBeenHovered.firstContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[3rem] font-bold"
                >
                  Tech
                </motion.h1>
              )}
              {(isHovered.firstContainer || hasBeenHovered.firstContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[3rem] font-bold"
                >
                  Stack
                </motion.h1>
              )}
            </div>
            <TectStack />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <motion.div
          onHoverStart={handleSecondContainerHoverStart}
          onHoverEnd={handleHoverEnd}
          className="cursor-pointer"
        >
          <div className="flex flex-row-reverse absolute left-[77rem] text-white font-mono">
            <div>
              {(isHovered.secondContainer ||
                hasBeenHovered.secondContainer) && (
                  
                  // <motion.div
                  // initial={{
                  //   opacity: 0,
                  //   x: -30,
                  // }}
                  // animate={{
                  //   opacity: 1,
                  //   x: 0,
                  //   transition: { duration: 2, easings: "ease" },
                  // }}
                  // viewport={{ once: true }}>
                  //    {project.map((letters, index) => (
                  //   <div key={index}>
                  //     <motion.h1 className="text-[2rem] font-bold font-mono">{letters}</motion.h1>
                  //   </div>
                  // ))}
                  // </motion.div>
                  <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  P
                </motion.h1>
              
                 
              )}
              {(isHovered.secondContainer || hasBeenHovered.secondContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  r
                </motion.h1>
              )}
              {(isHovered.secondContainer || hasBeenHovered.secondContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  o
                </motion.h1>
              )}
              {(isHovered.secondContainer || hasBeenHovered.secondContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2.5, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  j
                </motion.h1>
              )}
              {(isHovered.secondContainer || hasBeenHovered.secondContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 3, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  e
                </motion.h1>
              )}
              {(isHovered.secondContainer || hasBeenHovered.secondContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 3.5, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  c
                </motion.h1>
              )}
              {(isHovered.secondContainer || hasBeenHovered.secondContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 4, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  t
                </motion.h1>
              )}
              {(isHovered.secondContainer || hasBeenHovered.secondContainer) && (
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 4.5, easings: "ease" },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-end text-[2rem] font-bold"
                >
                  s
                </motion.h1>
              )}
             
            </div>
          </div>
          <div className="cursor-pointer rounded-lg">
            <MyProject />
          </div>
        </motion.div>

        <div className="w-[25rem] h-[11rem] bg-yellow-300 rounded-lg cursor-pointer">
          <Contact 
            title="Contact Me"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
