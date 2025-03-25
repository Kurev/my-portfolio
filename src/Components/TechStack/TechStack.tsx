import React, { useState } from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithubSquare } from 'react-icons/fa'
import { BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi'
import { SiVitess, SiVercel } from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'

type TechStackIcon = {
  title: string
  icon: React.ReactNode
}

const sizeIcons: number = 35

const techStackIcons: TechStackIcon[] = [
  { title: 'HTML', icon: <FaHtml5 size={sizeIcons} color="orange" /> },
  { title: 'CSS', icon: <FaCss3Alt size={sizeIcons} color="blue" /> },
  { title: 'JavaScript', icon: <FaJsSquare size={sizeIcons} color="yellow" /> },
  {
    title: 'TypeScript',
    icon: <BiLogoTypescript size={sizeIcons} color="blue" />,
  },
  {
    title: 'Tailwind CSS',
    icon: <BiLogoTailwindCss size={sizeIcons} color="blue" />,
  },
  { title: 'Vite', icon: <SiVitess size={sizeIcons} color="pink" /> },
  {
    title: 'Framer Motion',
    icon: <TbBrandFramerMotion size={sizeIcons} color="yellow" />,
  },
  { title: 'Vercel', icon: <SiVercel size={sizeIcons} color="white" /> },
  { title: 'Github', icon: <FaGithubSquare size={sizeIcons} color="orange" /> },
]

const Text = () =>
  'My Tech Stack'.split(' ').map((text, index) => (
    <motion.h1
      key={index}
      initial={{ opacity: 0, x: 15 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1 + index * 0.5,
          easings: 'ease',
        },
      }}
      className="flex justify-end text-[3rem] font-bold"
    >
      {text}
    </motion.h1>
  ))

const Content = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-[100%]">
      <motion.div
        ref={constraintsRef}
        className="w-[30rem] h-[18rem] grid grid-cols-3 gap-5 py-[5%] pr-[20%] pl-[20%]"
      >
        {techStackIcons.map((icon, index) => (
          <motion.div
            ref={constraintsRef}
            key={index}
            className="flex items-center justify-center cursor-pointer bg-[#000000] rounded-lg"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
          >
            {icon.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const TechStack = () => {
  const [showText, setShowText] = useState(false)

  return (
    <motion.div
      onHoverStart={() => {
        setShowText(true)
      }}
      className="w-full h-full flex items-center justify-center rounded-lg bg-[#02031145] backdrop-blur-sm"
    >
      <div className="text-white font-mono flex flex-col absolute -left-[9rem]">
        {showText && <Text />}
      </div>
      <Content />
    </motion.div>
  )
}

export default TechStack
