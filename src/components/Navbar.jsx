import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { layout } from '../styles';
import { navLinks } from '../constants';
import { Logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`${layout.paddingX} w-full fixed flex items-center padding top-0 z-30 bg-primary border-b border-white/10`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="logo" className="w-8 h-8 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Ilham &nbsp;</p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id
                  ? "text-white bg-[#915eff]/20 backdrop-blur-sm rounded-lg px-3 py-1"
                  : "text-secondary"
              } hover:text-white hover:bg-[#915eff]/20 hover:backdrop-blur-sm hover:rounded-lg hover:px-3 hover:py-1 text-[15px] font-medium cursor-pointer transition-all duration-300`}
                onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* perangkat mobile */}
          <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-14 right-0 mx-4 my-2 min-w-35 z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.id
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.id);
                      }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar