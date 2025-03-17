import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithubSquare  } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiVitess, SiVercel } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

type TechStackProps = {
  title: string;
};

type TechStackIcon = {
  title: string;
  icon: React.ReactNode;
};

const sizeIcons: number = 40;

const techStackIcons: TechStackIcon[] = [
  { title: 'HTML', icon: <FaHtml5 size={sizeIcons} color='orange'/> },
  { title: 'CSS', icon: <FaCss3Alt size={sizeIcons} color='blue'/> },
  { title: 'JavaScript', icon: <FaJsSquare size={sizeIcons} color='yellow'/> },
  { title: 'TypeScript', icon: <BiLogoTypescript size={sizeIcons} color='blue'/> },
  { title: 'Tailwind CSS', icon: <BiLogoTailwindCss size={sizeIcons} color='blue'/> },
  { title: 'Vite', icon: <SiVitess size={sizeIcons} /> },
  { title: 'Framer Motion', icon: <TbBrandFramerMotion size={sizeIcons} /> },
  { title: 'Vercel', icon: <SiVercel size={sizeIcons} /> },
  { title: 'Github', icon: <FaGithubSquare size={sizeIcons} /> },
];

const TechStack = ({ title }: TechStackProps) => {
    const constraintsRef = useRef<HTMLDivElement>(null)
  return (
      <motion.div 
      ref={constraintsRef}
      className="w-[30rem] h-[18rem] grid grid-cols-3 p-7">
        {techStackIcons.map((icon, index) => (
          <motion.div
            ref={constraintsRef}
            key={index}
            className="flex items-center justify-center cursor-pointer gap-2 bg-white rounded-lg"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
          >
                {icon.icon}
            
          </motion.div>
        ))}
      </motion.div>
  );
};

export default TechStack;
