import React , {useContext} from 'react';

// import context
import { DarkModeContext } from './Context/DarkModeProvider';

// icons
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import {FiMonitor} from "react-icons/fi"

const Dropdown = () => {
    const {theme , setTheme , defaultTheme , defaultSystem , setDefaultSystem} = useContext(DarkModeContext);
    return (
        <section className='dropdown absolute left-0 xs:left-[50%] top-[150%] 
        translate-x-[-60%] xs:translate-x-[-50%] h-[140px] w-[130px] xs:w-[140px] flex flex-col
        items-left justify-between py-2 select-none z-20 bg-slate-100
        dark:bg-slate-700 rounded-xl shadow-lg cursor-auto'>
            <div onClick={() => {setTheme('light'); setDefaultSystem(false)}} 
            className={`light-mode flex items-center space-x-3 px-3 py-2
            hover:bg-slate-600 font-medium cursor-pointer
            ${theme === 'light' && !defaultSystem && "text-accentBlue"}`}>
                <BsSunFill />
                <p>Light</p>
            </div>
            <div onClick={() => {setTheme('dark'); setDefaultSystem(false)}}
            className={`dark-mode flex items-center space-x-3 px-3 py-2 
            hover:bg-slate-600 font-medium cursor-pointer
            ${theme === 'dark' && !defaultSystem && "text-accentCyan"}`}>
                <FaMoon />
                <p>Dark</p>
            </div>
            <div onClick={() => {setTheme(defaultTheme); setDefaultSystem(true)}}
            className={`default flex items-center space-x-3 px-3 py-2 
            hover:bg-slate-600 font-medium cursor-pointer
            ${defaultSystem && (theme === 'dark' ? "text-accentCyan" : "text-accentBlue")}`}>
                <FiMonitor />
                <p>System</p>
            </div>
        </section>
    );
};

export default Dropdown;