import React from 'react';

const EarlyAccess = () => {
    return (
        <div className='dark:bg-darkBlue2 h-64 w-full relative'>
            <div className='bg-slate-200 dark:bg-darkBlue1
            flex flex-col items-center text-center
            w-[85%] md:w-[100%] lg:w-[80%] absolute top-0 p-10 space-y-6
            left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h2 className='text-2xl'>Get early access today</h2>
                <p className='text-sm'>It only takes a minute to sign up and our
                    free starter tier is extremely generous. 
                    If you have any questions, our support team
                    would be happy to help you. 
                </p>
                <div className='w-full flex flex-col items-center 
                space-y-6 md:flex-row md:justify-between md:space-y-0 md:space-x-5'>
                    <input className='email-box w-full md:w-full' type="text" placeholder='email@example.com'/>
                    <button className='btn-cyan w-full md:w-96 px-10'>Get Start For Free</button>
                </div>
            </div>
        </div>
    );
};

export default EarlyAccess;