import React , { useContext, useState } from 'react';


// import context
import { DarkModeContext } from './Context/DarkModeProvider';

// import images
import lightLogo from "../assets/images/logo-light-mode.svg";
import darkLogo from "../assets/images/logo-dark-mode.svg";

// icons
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

// components
import Dropdown from './Dropdown';

const Header = () => {
    const {theme} = useContext(DarkModeContext);
    const [show , setShow] = useState(false);
    return (
        <div className='container flex flex-col space-y-5 items-center justify-between 
        mx-auto pt-10 px-10 md:flex-row md:space-y-0'>
            <img  alt='logo' src={`${theme === 'dark' ? darkLogo : lightLogo}`} className='select-none'/>
            <div className='flex items-center space-x-4 md:space-x-10 font-medium'>
                <a className='select-none hover:text-accentCyan' href='features'>Features</a>
                <a className='select-none hover:text-accentCyan' href='testimonials'>Testimonials</a>
                <div onClick={() => setShow(!show)}
                className='relative border-2 rounded-xl border-zinc-200
                hover:bg-slate-200 dark:border-slate-500 
                dark:hover:bg-darkBlue2  p-2 cursor-pointer'>
                    {theme === 'dark'
                    ? <BsSunFill className='text-2xl text-zinc-600 dark:text-slate-300'/>
                    : <FaMoon className='text-2xl text-zinc-600 dark:text-slate-300'/>
                    }
                    {show && <Dropdown />}
                </div>
            </div>
        </div>
    );
};

export default Header;