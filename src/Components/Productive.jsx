import React from 'react';

// images
import productivePng from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";

const Productive = () => {
    return (
        <div className='container mx-auto mb-36 py-14 px-6
        flex flex-col items-center space-y-10 md:flex-row md:space-x-16'>
            <img className='sm:max-w-sm lg:max-w-lg' alt='productive' src={productivePng}/>
            <div className='flex flex-col space-y-6'>
                <h1 className='text-xl max-w-xs md:text-4xl sm:max-w-md font-bold'>
                    Stay productive, wherever you are
                </h1>
                <p className='text-base md:text-lg'> 
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.<br />
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. 
                </p>
                <p className='inline-flex gap-2 underline 
                underline-offset-4 text-accentCyan cursor-pointer'>
                    See how Flyo works <img alt='arrow' src={arrow}/>
                </p>
            </div>
        </div>
    );
};

export default Productive;