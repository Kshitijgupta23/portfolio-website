import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../style';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';


const Navbar = () => {

  const [active,setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-5'>
        <Link 
            to='/' 
            className='flex items-center gap-2' 
            onClick={() =>{
              setActive("");
              window.scrollTo(0,0);
            }}
        >
          <img src={logo} alt="logo" className='h-10 w-10 object-contain mr-3'/>
          <p className='text-white font-bold text-[18px] cursor-pointer flex'>
            Kshitij &nbsp; <span className='sm:block hidden'> | Gupta</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white" 
                    : "text-secondary"
                } hover:text-white text-[18px] cursor-pointer font-medium`}
                onClick={() => setActive(link.title)}>
                <a 
                  href={link.title === "Resume" ? "https://drive.google.com/file/d/1N8gULczZN6EHKWEF4pUzKFmiveMEhxXC/view?usp=sharing" 
                  : `#${link.id}`} 
                  {...(link.title === "Resume" ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.title}
                </a>
              </li>
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={toggle ? close : menu}
              alt="menu"
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={()=> setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} 
              p-6 black-gradient top-20 right-0 mx-4 my-2
              min-w-[140px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li 
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white" 
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    }}>
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

export default Navbar;