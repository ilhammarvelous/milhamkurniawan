// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from '@emailjs/browser'

// import { text } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({ ...form, [name]: value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.send()
//   }

//   return (
//     <div className="contact xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn('left', "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-motion-contact rounded-2xl"
//       >
//         <div className="text-center">
//           <h3 className={text.sectionHeadText}>Contact</h3>
//           <p className="text-[15px] text-secondary">Anda dapat menghubungi saya dengan mengisi form dibawah ini</p>
//         </div>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="form-contact flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium form-span">Nama</span>
//             <input  
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Masukkan nama..."
//               className="bg-tertiary py-px-form-input placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium form-span">Email</span>
//             <input  
//               type="text"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Masukkan email..."
//               className="bg-tertiary py-px-form-input placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium form-span">Pesan</span>
//             <textarea  
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Masukan pesan..."
//               className="bg-tertiary py-px-form-input placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-px-form-button outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? 'Mengirim' : 'Kirim'}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn('right', "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas  />
//       </motion.div>
//     </div>
//   )
// }

// export default SectionWrapper(Contact, "contact")

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { text } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Maaf, semua data wajib diisi!",
        background: "#fff",
        color: "#151030",
        confirmButtonColor: "#915eff",
        timer: 3000
      });
      return;
    }

    // template_mkxyfwb
    // service_07is9rg
    // D1QFqnlJtxh1GheJF

    try {
      setLoading(true);

      await emailjs.send(
        'service_07is9rg',
        'template_mkxyfwb',
        {
          from_name: form.name,
          to_name: 'Ilham',
          from_email: form.email,
          to_email: 'ilhamkurwn@gmail.com',
          message: form.message,
        },
        'D1QFqnlJtxh1GheJF'
      );

      // ✅ sukses
      Swal.fire({
        icon: "success",
        title: "Berhasil 🎉",
        text: "Pesan berhasil terkirim, Terimakasih!",
        background: "#fff",
        color: "#151030",
        confirmButtonColor: "#915eff",
        timer: 3000
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error); 

      Swal.fire({
        icon: "error",
        title: "Gagal ❌",
        text: "Terjadi kesalahan saat mengirim pesan.",
        background: "#fff",
        color: "#151030",
        confirmButtonColor: "#915eff",
        timer: 2000
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-motion-contact rounded-2xl"
      >
        <div className="text-center">
          <h3 className={text.sectionHeadText}>Contact</h3>
          <p className="text-[15px] text-secondary">
            Anda dapat menghubungi saya dengan mengisi form dibawah ini
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form-contact flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium form-span">Nama</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama..."
              className="bg-tertiary py-px-form-input placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium form-span">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan email..."
              className="bg-tertiary py-px-form-input placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium form-span">Pesan</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Masukan pesan..."
              className="bg-tertiary py-px-form-input placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-px-form-button outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");