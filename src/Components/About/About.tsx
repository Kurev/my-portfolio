type AboutProps = {
  title: string;
  paragraph: string;
};

const About = ({ title, paragraph }: AboutProps) => {
  return (
    <div className="group w-[30rem] h-[18rem] cursor-pointer border border-[#bb8ce4] rounded-3xl bg-gradient-to-t from-[#bb8ce49a] via-[#000000] to-[#000000] opacity-50 hover:bg-gradient-to-b hover:from-[#c69bebe5] hover:duration-500 transform hover:scale-95 hover:opacity-80 transition-all ease-in-out">
      <div className="flex flex-col gap-2.5 p-5">
        <h1 className="text-[5rem] text-[#a280fd] group-hover:text-[#000000] duration-1000 font-extrabold font-mono text-center">
          {title}
        </h1>
        <p className="text-[1rem] text-[#ffffff] font-extrabold font-mono text-center">
          {paragraph}
        </p>
        <p className="text-[1rem] text-white font-extrabold font-mono text-center mt-[2rem]">
          Lives in: Davao City, Philippines
        </p>
      </div>
    </div>
  );
};

export default About;
