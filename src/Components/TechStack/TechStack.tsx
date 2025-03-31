import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare} from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiVitess, SiVercel } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";

type TechStackIcon = {
  title: string;
  icon: React.ReactNode;
};

const sizeIcons: number = 45;

const techStackIcons: TechStackIcon[] = [
  { title: "HTML", icon: <FaHtml5 size={sizeIcons} /> },
  { title: "CSS", icon: <FaCss3Alt size={sizeIcons} /> },
  { title: "JavaScript", icon: <FaJsSquare size={sizeIcons} /> },
  {
    title: "TypeScript",
    icon: <BiLogoTypescript size={sizeIcons} />,
  },
  {
    title: "Tailwind",
    icon: <BiLogoTailwindCss size={sizeIcons} />,
  },
  { title: "React", icon: <FaReact size={sizeIcons} /> },
  {
    title: "Framer Motion",
    icon: <TbBrandFramerMotion size={sizeIcons} />,
  },
  { title: "Vercel", icon: <SiVercel size={sizeIcons} /> },
  { title: "Vite", icon: <SiVitess size={sizeIcons} /> },
];

const TechStack = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="w-[100%]">
        <motion.div
          ref={constraintsRef}
          className="w-[30rem] h-[18rem] grid grid-cols-3 gap-5 py-[5%] px-[5%]"
        >
          
          {techStackIcons.map((icon, index) => (
            <motion.div
              ref={constraintsRef}
              key={index}
              className="w-full flex items-center justify-center cursor-pointer rounded-lg "
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
            >
              <div className="text-[#6f3ef4] hover:text-[#ffffff] duration-500 flex flex-col items-center w-auto bg-[#000000]">
                {icon.icon}
                <div className="text-[0.8rem] text-[#ffffff] font-mono font-light ">
                  {icon.title}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default TechStack;
