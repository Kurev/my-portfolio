import { FaHouseUser } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import { a } from "motion/react-client";

type AppsType = {
  title: string;
  icon: React.ReactNode;
  appsOpen: keyof AppsState;
};

type Apps = {
  openApps: boolean;
};

type AppsState = {
  about: Apps;
  project: Apps;
  TeckStack: Apps;
  gmailForm: Apps;
};

type AppRenderProps = {
    openApp: AppsState;
  };

  export const AppRender = ({ openApp }: AppRenderProps) => {
    return (
      <>
        {openApp.about.openApps && (
          <div className="text-white text-2xl font-bold">
            About Component Opened!
          </div>
        )}
        {openApp.project.openApps && (
          <div className="text-white text-2xl font-bold">
            Project Component Opened!
          </div>
        )}
        {/* Add others if needed */}
      </>
    );
  };

const Apps = () => {
  const NEW_OPEN_APP: Apps = {
    openApps: false,
  };

  const [openApp, setOpenApp] = useState<AppsState>({
    about: NEW_OPEN_APP,
    project: NEW_OPEN_APP,
    TeckStack: NEW_OPEN_APP,
    gmailForm: NEW_OPEN_APP,
  });

  const apps: AppsType[] = [
    { title: "About", icon: <FaHouseUser />, appsOpen: "about" },
    { title: "Project", icon: <HiPencilSquare />, appsOpen: "project" },
    { title: "Tools", icon: <FaTools />, appsOpen: "TeckStack" },
    { title: "Contack", icon: <BsFillTelephoneFill />, appsOpen: "gmailForm" },
  ];

  const handleOpenApps = (appsName: keyof AppsState) => {
    const isAnyOpen = Object.values(openApp).some(appIsExist => appIsExist.openApps);

    if (!isAnyOpen) {
        setOpenApp((prev) => ({
            ...prev,
            [appsName]: {
                ...prev[appsName],
                openApps: true,
            },
        }))
    }
  }

  const handleCloseApps = (appName: keyof AppsState) => {
    setOpenApp((prev) => ({
        ...prev,
        [appName]: {
            ...prev[appName],
            openApps: false,    
        }
    }))
  }



  return (
    <div>
      <div className="w-[100%] h-[100%] grid grid-cols-2 gap-[6rem] px-5">
        {apps.map((app, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center cursor-pointer rounded-lg "
          >
            <div 
            onClick={() => handleOpenApps(app.appsOpen)}
            className="text-[#6f3ef4] hover:text-[#ffffff] duration-500 flex flex-col items-center w-[30rem] bg-[#000000]">
              <h1 className="text-[4rem] min-[606px]:text-[6rem]">
                {app.icon}
              </h1>
              <div className="text-[0.8rem] text-[#ffffff] font-mono font-light ">
                {app.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <AppRender openApp={openApp}/>
    </div>
  );
};

export default Apps;
