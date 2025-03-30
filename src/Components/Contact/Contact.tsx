
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

type Props = {
  title: string;
};

type Icons = {
  icon: React.ReactNode;
};

export const Icons = () => {
  const icons: Icons[] = [
    // { icon: <FaGithubSquare /> },
    { icon: <IoLogoLinkedin /> },
    { icon: <BiLogoGmail /> },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-7">
      {icons.map((icons, index) => (
        <div key={index} className="bg-[#6f3ef4] p-2 rounded-3xl hover:rounded-md duration-500 group">
          <h1
            className={`text-[2rem] duration-500 group-hover:text-[#000000] text-[#ffffff]`}
          >
            {icons.icon}
          </h1>
        </div>
      ))}
    </div>
  );
};

const Contact = ({ title }: Props) => {
  return (
    <div className="flex flex-col  gap-6">
      <h1 className="text-[3.5rem] text-[#6f3ef4] font-extrabold font-mono text-center uppercase">
        {title}
      </h1>
      <div>
        <Icons />
      </div>
    </div>
  );
};

export default Contact;
