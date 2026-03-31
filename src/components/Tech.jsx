import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { text } from "../styles";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        className="text-center"
      >
        <h2 className={text.sectionHeadText}>Skills</h2>
        <p className={`${text.sectionSubText} mt-3`}>Beberapa skill yang saya miliki</p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-9">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills");