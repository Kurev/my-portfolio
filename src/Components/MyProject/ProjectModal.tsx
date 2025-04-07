import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import product1 from "../../assets/ecomerse.png";
import product2 from "../../assets/monlist.png";
import product3 from "../../assets/addu2.png";
import product4 from "../../assets/dailyBudie.png";
import product5 from "../../assets/clever.png";
import product6 from "../../assets/absentTracker.png";
import product7 from "../../assets/lastTaker.png";

type PropsType = {
  handleCloseModal: () => void;
};

type ProductType = {
  image: string;
  title: string;
  stack: string[];
  link: string;
};

export const MyProjects = () => {
  const products: ProductType[] = [
    {
      image: product7,
      title: "Last Taker",
      stack: ["HTML", "CSS", "JS", "React", "Vercel"],
      link: "https://lasttaker.vercel.app/",
    },
    {
      image: product6,
      title: "Absent Tracker",
      stack: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Tailwind",
        "Framer Motion",
        "Vercel",
      ],
      link: "https://absentracker.vercel.app/",
    },
    {
      image: product3,
      title: "ADDU2",
      stack: ["HTML", "CSS", "JS", "React", "Vercel"],
      link: "https://addu2.vercel.app/",
    },
    {
      image: product4,
      title: "dailyBudie",
      stack: ["HTML", "CSS", "JS", "React", "Animate.css", "Vercel"],
      link: "https://dailybudie.vercel.app/",
    },
    {
      image: product5,
      title: "Clever KobWeb",
      stack: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Tailwind",
        "Framer Motion",
        "Vercel",
      ],
      link: "https://clever-kobweb.vercel.app/",
    },
    {
      image: product1,
      title: "FurniShop",
      stack: ["HTML", "CSS", "JS", "React", "Vercel"],
      link: "https://e-commerce-website-snowy-nine.vercel.app/",
    },
    {
      image: product2,
      title: "Monlist",
      stack: ["HTML", "CSS", "JS", "React", "Vercel"],
      link: "https://monlist.vercel.app/",
    },
  ];

  return (
    <div
      className="overflow-y-auto overflow-x-hidden pb-[10%] w-full"
      style={{ height: "75vh" }}
    >
      <div className="flex gap-7 flex-col items-center justify-center">
        {products.map((product, index) => (
            <motion.div 
            initial={{ opacity: 0, transform: "translateY(3%)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.3, duration: 0.5 + index * 0.5 }}
            className="rounded-3xl border-2 border-[#ffffff07] w-[70%] py-7 bg-[#000000] backdrop-blur-md shadow-[-3px_4px_6px_0px_rgba(17,_12,_46,_0.15)]"
>
          <a
            key={index}
            href={product.link}
            rel="noopener"
            target="_blank"
            className="flex flex-col items-center justify-center"
          >
              <div
                key={index}
                className="w-[20rem] h-[20rem]"
               
              >
                <img
                  src={product.image}
                  alt={`product ${index}`}
                  className="w-full h-full object-cover rounded-3xl cursor-pointer hover:scale-105 duration-500"
                />
              </div>
              <div className="w-[100%] px-[3rem] flex flex-col items-center justify-center gap-2.5">
                <h1 className="text-[2rem] text-[#edeaf6] font-bold font-mono uppercase flex items-center justify-center mt-2.5">
                  {product.title}
                </h1>
                <ul className="text-[1rem] text-[#fff0f0] font-mono font-light flex items-center justify-center flex-wrap gap-3 mt-2">
                  {product.stack.map((tech, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 bg-[#6600ff] text-[0.8rem] text-[#ffffff] font-bold rounded-3xl hover:bg-[#6600ff53] cursor-pointer transition duration-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
          </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AboutOpen = ({ handleCloseModal }: PropsType) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-[10%] py-[5%]"
      initial={{ opacity: 1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-end w-full">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(-100%)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          exit={{ opacity: 0, transform: "translateY(-100%)" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[2rem] text-[#f64343] hover:text-[#f6434399] duration-500F cursor-pointer"
        >
          <FaWindowClose onClick={handleCloseModal} />
        </motion.h1>
      </div>
      <motion.h1
        initial={{ opacity: 0, transform: "translateX(-5%)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        exit={{ opacity: 0, transform: "translateY(-100%)" }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-[5rem] text-[#6f3ef4] font-bold font-mono uppercase"
      >
        Projects
      </motion.h1>

      <MyProjects />
    </motion.div>
  );
};

export default AboutOpen;
