import { motion } from 'framer-motion';
import { text } from "../styles";
// import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { ilham } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedin, 
  faGithub, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";

// const ServiceCard = ({ index, title, icon }) => {
//   return(
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{
//             max:45,
//             scale: 1,
//             speed: 450
//           }}
//           className="bg-tertiary rounded-[20px] py-5 py-12 min-h-[280px] flex justify-evenly items-center flex-col"
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//           <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

// const About = () => {
//   return (
//     <>
//       <motion.div 
//         variants={textVariant()}
//         className="text-center"
//       >
//         <h2 className={text.sectionHeadText}>About</h2>
//         <p className={`${text.sectionSubText} mt-3`}>Perkenalan singkat tentang diri saya</p>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="margin-p-about text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         Saya seorang Fullstack developer dan machine learning engineer. Saya lulusan baru dari Universitas 17 Agusutus 1945 Surabaya, jurusan Teknik Informatika. Saya memiliki keahlian dalam hal membangun aplikasi web serta membangun model AI yang siap deploy di sisi server.
//       </motion.p>

//       <div className="margin-service flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   )
// }

const About = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={text.sectionHeadText}>About</h2>
        <p className={`${text.sectionSubText} mt-3`}>
          Perkenalan singkat tentang diri saya 
        </p>
      </motion.div>

      {/* Content */}
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="w-full lg:w-[40%] flex justify-center"
        >
          <div className="p-[2px] rounded-3xl green-pink-gradient shadow-card">
            <div className="bg-tertiary rounded-3xl p-4">
              <img
                src={ilham}
                alt="profile"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="w-full lg:w-[60%]"
        >
          <h3 className="text-white text-[28px] font-bold">
            Muhammad Ilham Kurniawan
          </h3>

          <p className="mt-4 text-secondary text-[16px] leading-[28px]">
            Saya seorang Fullstack Developer dan Machine Learning Engineer yang berbasis di Surabaya, saat ini saya sedang menempuh pendidikan S1 di Universitas 17 Agustus 1945 Surabaya, jurusan Teknik Informatika. Saya senang membangun aplikasi yang skalabel dan logika sisi server yang tangguh. Selain itu, saya juga mampu mengembangkan model machine learning  yang siap digunakan pada aplikasi nyata.
          </p>

          {/* Info Box */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            
            <div className="flex-1 bg-black-200 p-4 rounded-xl border border-white/10">
              <p className="text-secondary text-sm">Email</p>
              <p className="text-white text-sm mt-1">
                ilhamkurwn@gmail.com
              </p>
            </div>

            <div className="flex-1 bg-black-200 p-4 rounded-xl border border-white/10">
              <p className="text-secondary text-sm">Lokasi</p>
              <p className="text-white text-sm mt-1">
                Surabaya, Indonesia
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a href="#contact">
              <button 
                className="
                  px-5 py-2 rounded-xl text-white font-medium
                  bg-gradient-to-r from-[#915eff] to-[#00b3ce]
                  bg-[length:200%_100%] bg-[position:0%_0%]
                  transition-all duration-500 ease-in-out
                  hover:bg-[position:100%_0%]
                ">
                Contact 🚀
              </button>
            </a>

            <a 
              href="https://drive.google.com/file/d/1Zhzwc13JDdQsq5Ol3S5tMsh_WuS0iLga/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 py-2 rounded-xl bg-black-200 text-white border border-white/10 hover:bg-[#915eff]/20 transition-all duration-300">
                Download CV ⏫
              </button>
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-6 flex gap-4">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/muhammad-ilham-kurniawan-70187b33a"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                bg-black-200 border border-white/10 
                shadow-md backdrop-blur-sm
                transition-all duration-300
                hover:scale-110 hover:border-[#915eff] hover:shadow-[0_0_15px_#915eff]">
                
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-white text-xl group-hover:text-[#915eff] transition"
                />
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/ilhammarvelous"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                bg-black-200 border border-white/10 
                shadow-md backdrop-blur-sm
                transition-all duration-300
                hover:scale-110 hover:border-[#915eff] hover:shadow-[0_0_15px_#915eff]">
                
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="text-white text-xl group-hover:text-[#915eff] transition"
                />
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/ilhamkurwn"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                bg-black-200 border border-white/10 
                shadow-md backdrop-blur-sm
                transition-all duration-300
                hover:scale-110 hover:border-[#915eff] hover:shadow-[0_0_15px_#915eff]">
                
                <FontAwesomeIcon 
                  icon={faInstagram} 
                  className="text-white text-xl group-hover:text-[#915eff] transition"
                />
              </div>
            </a>

          </div>

        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")