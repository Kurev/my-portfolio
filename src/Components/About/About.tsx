
type AboutProps = {
  title: string;
  paragraph: string;
}


const About = ({ title, paragraph }: AboutProps ) => {
  return (
    <div className="flex flex-col gap-2.5 p-5">
      <h1 className="text-[5rem] text-white font-extrabold font-mono text-center">{title}</h1>
      <p className="text-[1rem] text-white font-extrabold font-mono text-center">{paragraph}</p>
      <p className="text-[1rem] text-white font-extrabold font-mono text-center mt-[2rem]">"Useless but use less" - Kurt</p>
    </div>
  )
}

export default About