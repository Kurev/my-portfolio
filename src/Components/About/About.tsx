import { PiMapPinAreaFill } from "react-icons/pi";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { useState } from "react";
import { ContainerState } from '../Home';

type AboutProps = {
  title: string;
  paragraph: string;
  handleOpenModal: (containerName: keyof ContainerState) => void; // expecting containerName argument here
};

type IconsProps = {
  iconHover: boolean;
  handleOpenModal: (containerName: keyof ContainerState) => void; // pass containerName here
};

type Icons = {
  icon: React.ReactNode;
  title: string;
  link?: string;
};

export const Icons = ({ iconHover, handleOpenModal }: IconsProps) => {
  const icons: Icons[] = [
    { icon: <IoMdDownload />, title: "Resume" },
    {
      icon: <FaGithubSquare />,
      title: "Github",
      link: "https://github.com/Kurev",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-7">
      {icons.map((icons, index) => (
        <div
          key={index}
          className={`bg-[#6f3ef4] hover:bg-[#6f3ef4b3] flex px-3 py-2 duration-500 border border-[#fff] rounded-md gap-2`}
        >
          <h1
            className={`text-[1.3rem] duration-500 hover:text-[#ffffff] ${
              iconHover ? "text-[#ffffff]" : "text-[#000000]"
            }`}
          >
            {icons.icon}
          </h1>
          <p
            className={`text-[0.8rem]  font-mono font-bold ${
              iconHover ? "text-[#ffffff]" : "text-[#000000]"
            }`}
          >
            {icons.link ? (
              <a
                href={icons.link}
                target="_blank"
                rel="noopener"
                onClick={(e) => e.stopPropagation()} // Prevent modal from opening
              >
                {icons.title}
              </a>
            ) : (
              <span onClick={() => handleOpenModal("githubLink")}>
                {icons.title}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

const About = ({ title, paragraph, handleOpenModal }: AboutProps) => {
  const [iconHover, setIconHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIconHover(true)}
      onMouseLeave={() => setIconHover(false)}
      className="group rounded-2xl w-[30rem] h-[18rem] cursor-pointer shadow-xs shadow-[#553e68] bg-gradient-to-t from-[#6f3ef4] via-[#080808] to-[#000000]  hover:bg-gradient-to-b hover:from-[#6f3ef4] hover:duration-500 transform hover:scale-95 transition-all ease-in-out"
    >
      <div className="flex flex-col gap-2.5">
        <h1 className="text-[5rem] text-[#6f3ef4] group-hover:text-[#000000] duration-1000 font-extrabold font-mono text-center">
          {title}
        </h1>
        <div className="-mt-1 flex flex-col gap-5">
          <p className="text-[1rem] text-[#ffffff] font-extrabold font-mono text-center">
            {paragraph}
          </p>
          <div className="flex items-center justify-center gap-2 group-hover:text-white duration-500">
            <PiMapPinAreaFill />
            <p className="text-[0.8rem] text-white font-extrabold font-mono text-center group-hover:text-[#6f3ef4] duration-500">
              Davao City, Philippines
            </p>
          </div>
          <div>
            <Icons handleOpenModal={handleOpenModal} iconHover={iconHover} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
