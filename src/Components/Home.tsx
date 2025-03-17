
import AboutImg from '../assets/about.png';
import TechStackImg from '../assets/techstack.png';
import About from './About/About';
import { motion } from 'framer-motion';
import TectStack from './TechStack/TectStack';


type BoxShadow = {
  purple: string;
  blue: string;
}

const Home = () => {

  const boxShadows: BoxShadow = {
    purple: 'rgb(151,12,185)',
    blue: 'rgba(5,5,224,0.75)',
  }

  return (
    <div className='w-full h-svh flex items-center justify-center bg-black gap-2.5'>
      <div
      className='flex flex-col gap-2.5'>
        <motion.div 
        whileHover={{ 
          scale: 0.9,
          boxShadow: `-1px 0px 6px 9px ${boxShadows.purple}`,
          transition: { duration: 0.5 }
         }}
         animate={{
          boxShadow: `0px 0px 0px 0px ${boxShadows.blue}`,
          transition: { duration: 1, easings: 'easeInOut' },
        }}
        className='w-[30rem] h-[18rem] rounded-lg cursor-pointer' 
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: 'cover',
          width: '30rem',
          height: '18rem',
        }}>
        <div className=' w-full h-full rounded-lg bg-[#440c3d58] backdrop-blur-sm'>
        <About 
          title='ABOUT ME'
          paragraph='I am a frontend developer with a passion for creating beautiful and functional websites.'
          />
        </div>
          
        </motion.div>

        <div 
          className='w-[30rem] h-[18rem] rounded-lg cursor-pointer'
            style={{
            backgroundImage: `url(${TechStackImg})`,
            backgroundSize: 'cover',
            width: '30rem',
            height: '18rem',
          }}>
            <div className='w-full h-full flex items-center justify-center rounded-lg bg-[#1c144ea2] backdrop-blur-sm'>
              <TectStack 
              title='TECH STACK'
              />
            </div>
           
        </div>
      </div>
      <div className='flex flex-col gap-2.5'>
        <div className='w-[25rem] h-[25rem] bg-green-500 rounded-lg cursor-pointer'>i</div>
        <div className='w-[25rem] h-[11rem] bg-pink-500 rounded-lg cursor-pointer'>n</div>
      </div>
    </div>
  )
}

export default Home