import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  otw,
  abs,
  ql,
  imavi,
  rentcar,
  pos,
  php,
  laravel,
  vue,
  bootstrap,
  mysql,
  sislap,
  kopi,
  postman,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "System Analyst",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Fullstack Developer - Magang",
    company_name: "CV. OTW Computer Gusaha",
    icon: otw,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Surabaya, Jawa Timur - Dimana Saja",
    ],
  },
  {
    title: "Backend Developer - Magang",
    company_name: "CV. Apparel Berkah Selalu",
    icon: abs,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Des 2024",
    points: [
      "Surabaya, Jawa Timur - Jarak Jauh",
    ],
  },
  {
    title: "Frontend Developer - Magang",
    company_name: "PT Qlcom Solusi Bisnis",
    icon: ql,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Apr 2020",
    points: [
      "Surabaya, Jawa Timur - Di lokasi",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#383E56",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sistem Point of Sale (POS)",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://github.com/azizahnurwafiq/magang-abs",
  },
  {
    name: "Web IMAVI",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: imavi,
    source_code_link: "https://github.com/ilhammarvelous/web-imavi",
  },
  {
    name: "Rental Mobil",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
      {
        name: "Livewire",
        color: "orange-text-gradient",
      },
    ],
    image: rentcar,
    source_code_link: "https://github.com/ilhammarvelous/rent-car",
  },
  {
    name: "Sistem Manajemen Penjualan",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "Mysql",
        color: "orange-text-gradient",
      },
    ],
    image: sislap,
    source_code_link: "https://github.com/ilhammarvelous/sistem-penjualan-laptop",
  },
   {
    name: "Web Kedai Kopi",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: kopi,
    source_code_link: "https://github.com/ilhammarvelous/kedai-kopi",
  },
];

export { services, technologies, experiences, testimonials, projects };