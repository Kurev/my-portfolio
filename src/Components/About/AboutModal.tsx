import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

type PropsType = {
  handleCloseModal: () => void;
};

export const WorkExperience = () => {
  const tasksList = [
    "Templating websites to match client requirements",
    "Enhancing designs for better user experience",
    "Ensuring responsiveness and mobile-friendliness",
    "Adding new features to meet client expectations",
  ];

  return (
    <>
      {tasksList.map((task, index) => (
          <motion.li 
          initial={{ opacity: 0, transform: "translateX(-0.8rem)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ delay: 2.5, duration: 0.5 + index * 0.2 }}
          exit={{ opacity: 0 }}
          key={index} className="text-[1rem] text-[#aba7b2] font-light">
            {task}
          </motion.li>
        ))}
    </>
      
  );
};

const AboutOpen = ({ handleCloseModal }: PropsType) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-[10%] py-[5%]"
      initial={{ opacity: 1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-end w-full">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(-100%)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          exit={{ opacity: 0, transform: "translateY(-100%)" }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-[2rem] text-[#f64343] hover:text-[#f6434399] duration-500F cursor-pointer"
        >
          <FaWindowClose onClick={handleCloseModal} />
        </motion.h1>
      </div>
      <div
        className="flex flex-col text-[4rem] text-white text-mono font-bold h-screen w-full gap-[1.5rem]"
        style={{ height: "80vh" }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="leading-[1.2]"
        >
          My name is
          <span className="text-[#6f3ef4] capitalize underline-offset-8">
            {" "}
            Kurt John A. Montes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, transform: "translateY(0.5rem)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-[1rem] font-light text-[#aba7b2]"
        >
          I’m a Frontend Developer skilled in creating beautiful, responsive
          websites. With strong expertise in React, I build seamless,
          high-performance web applications that work flawlessly across all
          devices.
        </motion.p>

        <div>
          <motion.h1
            initial={{ opacity: 0, transform: "translateX(-0.5rem)" }}
            animate={{ opacity: 1, transform: "translateX(0)" }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="text-[1.5rem] font-bold mb-2 font-mono text-[#ddd7e7]"
          >
            Work Experience
          </motion.h1>
          <div>
            <motion.p
              initial={{ opacity: 0, transform: "translateX(-0.5rem)" }}
              animate={{ opacity: 1, transform: "translateX(0)" }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="text-lg font-light"
            >
              Freelance Frontend Developer ( 2024-2025 )
            </motion.p>
            <ul className="list-disc list-inside text-[1rem] text-[#aba7b2] font-light space-y-2 pl-[1rem]">
              <WorkExperience />
            </ul>
          </div>
        </div>
        <div>
          <motion.h1 
          initial={{ opacity: 0, transform: "translateX(-0.5rem)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ delay: 3, duration: 0.8 }}
          exit={{ opacity: 0 }}
          className="text-[1.5rem] font-bold mb-2 font-mono text-[#ddd7e7]">
            Education
          </motion.h1>
          <motion.ul
           initial={{ opacity: 0, transform: "translateX(-0.5rem)" }}
           animate={{ opacity: 1, transform: "translateX(0)" }}
           transition={{ delay: 3.5, duration: 0.8 }}
           exit={{ opacity: 0 }}
          >
            <p className="text-lg font-light w-[60%]">
              BSIT Bachelor of Science in Information Technology{" "}
              <span className="">( 2nd Year Student )</span>
            </p>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutOpen;
