import React from 'react';

// icons
import { CgPhone } from 'react-icons/cg';
import { TfiEmail } from 'react-icons/tfi';
import { CgFacebook } from 'react-icons/cg';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-darkBlue2 text-white'>
            <div className='container mx-auto flex flex-col items-center py-16
            px-6 space-y-24 md:flex-row md:justify-between md:items-start
            md:space-y-0'>
                <div className='w-full flex flex-col
                space-y-3 md:w-auto'>
                    <p className='flex items-center gap-4 text-md'>
                        <CgPhone className='text-2xl'/> 
                        +1-543-123-4567
                    </p>
                    <p className='flex items-center gap-4 text-md'>
                        <TfiEmail className='text-2xl'/> 
                        example@fylo.com
                    </p>
                </div>
                <div className='w-full flex flex-col space-y-16 
                md:flex-row md:items-start md:w-auto md:space-y-0 md:space-x-10'>
                    <ul className='flex flex-col space-y-3 text-xl md:text-lg'>
                        <li className='inline cursor-pointer hover:text-accentCyan'>About</li>
                        <li className='inline cursor-pointer hover:text-accentCyan'>Jobs</li>
                        <li className='inline cursor-pointer hover:text-accentCyan'>Press</li>
                        <li className='inline cursor-pointer hover:text-accentCyan'>Blog</li>
                    </ul>
                    <ul className='flex flex-col space-y-3 text-xl md:text-lg'>
                        <li className='inline cursor-pointer hover:text-accentCyan'>Contact Us</li>
                        <li className='inline cursor-pointer hover:text-accentCyan'>Terms</li>
                        <li className='inline cursor-pointer hover:text-accentCyan'>Privacy</li>
                    </ul>
                </div>
                <div className='w-full flex items-center space-x-4 
                text-2xl text-black dark:text-white md:w-auto'>
                    <span className='p-2 cursor-pointer dark:bg-gray-500 bg-gray-200 hover:bg-emerald-500 dark:hover:bg-emerald-500 rounded-full' ><CgFacebook /></span>
                    <span className='p-2 cursor-pointer dark:bg-gray-500 bg-gray-200 hover:bg-emerald-500 dark:hover:bg-emerald-500 rounded-full'><AiOutlineInstagram /></span>
                    <span className='p-2 cursor-pointer dark:bg-gray-500 bg-gray-200 hover:bg-emerald-500 dark:hover:bg-emerald-500 rounded-full'><BsTwitter /></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;