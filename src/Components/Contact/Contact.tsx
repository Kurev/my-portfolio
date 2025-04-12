import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { ContainerState } from "../Home";

type Props = {
  title: string;
  handleOpenModal: (containerName: keyof ContainerState) => void;
};

type Icons = {
  icon: React.ReactNode;
  title: string;
  modalOrLink?: string;
};

type PropIcons = {
  handleOpenModal: (containerName: keyof ContainerState) => void;
};

export const Icons = ({ handleOpenModal }: PropIcons) => {
  const icons: Icons[] = [
    // { icon: <FaGithubSquare /> },
    {
      icon: <IoLogoLinkedin />,
      title: "Linkedin",
      modalOrLink: "https://www.linkedin.com/in/",
    },
    { icon: <BiLogoGmail />, 
      title: "GmailForm", 
      modalOrLink: "gmailForm" 
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-7">
      {icons.map((icons, index) => (

        icons.title == "Linkedin" ? (
          <a
          key={index}
          href={icons.modalOrLink}
          target="_blank"
          rel="noopener"
          className="bg-[#6f3ef4] p-2 rounded-3xl hover:rounded-md duration-500 group"
        >
          <h1
            className={`text-[2rem] duration-500 group-hover:text-[#000000] text-[#ffffff]`}
          >
            {icons.icon}
          </h1>
        </a>
        ) : (
          <div
          key={index}
          onClick={() => handleOpenModal("gmailForm")}
          className="bg-[#6f3ef4] p-2 rounded-3xl hover:rounded-md duration-500 group"
        >
          <h1
            className={`text-[2rem] duration-500 group-hover:text-[#000000] text-[#ffffff]`}
          >
            {icons.icon}
          </h1>
        </div>
        )

        
      ))}
    </div>
  );
};

const Contact = ({ title, handleOpenModal }: Props) => {
  return (
    <div className="flex flex-col  gap-6">
      <h1 className="text-[3.5rem] text-[#6f3ef4] font-extrabold font-mono text-center uppercase">
        {title}
      </h1>
      <div>
        <Icons handleOpenModal={handleOpenModal} />
      </div>
    </div>
  );
};

export default Contact;
