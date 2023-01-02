import React from 'react';

// images
import icon1 from "../assets/images/icon-access-anywhere.svg";
import icon2 from "../assets/images/icon-security.svg";
import icon3 from "../assets/images/icon-collaboration.svg";
import icon4 from "../assets/images/icon-any-file.svg";

const Features = () => {
    return (
        <div className='dark:bg-darkBlue1 dark:text-white text-zinc-800'>
            <div className='container mx-auto px-6 py-24 
            grid grid-rows-4 grid-cols-1 gap-20 md:grid-rows-2 md:grid-cols-2'>
                <div className='text-center space-y-6'>
                    <img className='mx-auto' alt='icon' src={icon1}/>
                    <h1 className='text-lg xs:text-xl font-bold'>
                        Access your file from anywhere
                    </h1>
                    <p className='text-sm md:text-lg max-w-md mx-auto'>
                        The ability to use a smartphone, tablet, or
                        computer to access your account means your
                        files follow you everywhere. 
                    </p>
                </div>
                <div className='text-center space-y-6'>
                    <img className='mx-auto' alt='icon' src={icon2}/>
                    <h1 className='text-lg xs:text-xl font-bold'>
                        Security you can trust
                    </h1>
                    <p className='text-sm md:text-lg max-w-md mx-auto'>
                        2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. 
                    </p>
                </div>
                <div className='text-center space-y-6'>
                    <img className='mx-auto' alt='icon' src={icon3}/>
                    <h1 className='text-lg xs:text-xl font-bold'>
                        Access your file from anywhere
                    </h1>
                    <p className='text-sm md:text-lg max-w-md mx-auto'>
                        The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere. 
                    </p>
                </div>
                <div className='text-center space-y-6'>
                    <img className='mx-auto' alt='icon' src={icon4}/>
                    <h1 className='text-lg xs:text-xl font-bold'>
                        Security you can trust
                    </h1>
                    <p className='text-sm md:text-lg max-w-md mx-auto'>
                        2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;