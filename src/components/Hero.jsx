import { motion } from "framer-motion";
import { layout, text } from "../styles";
// import { cn } from "../utils/cn";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${layout.paddingX}
          absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`
        }
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="margin">
          <h1 className={`${text.heroHeadText} text-white`}>
            Halo👋, saya <span className="text-[#915eff]">Ilham</span>
          </h1>
          <p className={`${text.heroSubText} text-white-100 mt-2`}>
            Saya seorang fullstack developer dan machine learning engineer
          </p>
        </div>
      </div>
      
        <ComputersCanvas />

        <div className="absolute lg:bottom-5 xs:bottom-13 bottom-14 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[25px] h-[47px] rounded-3xl border-4 border-secondary flex justify-center items-start">
              <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>

    </section>
  )
}

export default Hero