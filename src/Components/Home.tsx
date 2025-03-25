import TechStackImg from '../assets/techstack1.png'
import About from './About/About'
import TechStack from './TechStack/TechStack'
import Contact from './Contact/Contact'
import MyProject from './MyProject/MyProject'

// Type Definitions
type BoxShadow = {
  purple: string
  blue: string
  green: string
  red: string
  yellow: string
  orange: string
  discordTheme: string
}

const Home = () => {
  const boxShadows: BoxShadow = {
    purple: 'rgb(151,12,185)',
    blue: 'rgba(5,5,224,0.75)',
    green: 'rgba(0,255,0,0.75)',
    red: 'rgba(255,0,0,0.75)',
    yellow: 'rgba(255, 211, 0)',
    orange: 'rgba(255,165,0,0.75)',
    discordTheme: 'rgb(88,31,149)',
  }

  return (
    <div className="w-full h-svh flex items-center justify-center bg-[#000000] gap-2.5">
      <div className="flex flex-col gap-2.5">
        {/* About Section */}
        <div className="w-[30rem] h-[18rem] cursor-pointer border border-[#bb8ce4] rounded-3xl bg-gradient-to-t from-[#bb8ce49a] via-[#000000] to-[#000000] opacity-50 hover:bg-gradient-to-b hover:from-[#c69bebe5] hover:duration-500 transform hover:scale-95 hover:opacity-80 transition-all ease-in-out">
          <About
            title="ABOUT ME"
            paragraph="I am a 2nd-year BSIT student at Ateneo de Davao University, specializing in frontend development"
          />
        </div>

        {/* Tech Stack Section */}
        <div
          className="w-[30rem] h-[18rem] rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url(${TechStackImg})`,
            backgroundSize: 'cover',
            width: '30rem',
            height: '18rem',
          }}
        >
          <TechStack />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {/* Projects Section */}
        <MyProject />
        {/* Contact Section */}
        <div className="w-[25rem] h-[11rem] bg-yellow-300 rounded-lg cursor-pointer">
          <Contact title="Contact Me" />
        </div>
      </div>
    </div>
  )
}

export default Home
