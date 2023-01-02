import React from 'react';

const Box = ({name , skill , image , capture}) => {
    return (
        <div className='flex flex-col space-y-5 p-10 
        bg-slate-200 dark:bg-darkBlue3 rounded-lg'>
            <p className='text-sm lg:text-base'>
                {capture}
            </p>
            <div className='flex items-center space-x-5'>
                <img className='w-[40px] rounded-full' alt='user' src={image}/>
                <section className='flex flex-col gap-1'>
                    <h5 className='text-sm font-semibold md:max-w-[40%] lg:max-w-[100%]'>{name}</h5>
                    <p className='text-xs md:text-[11px]'>{skill}</p>
                </section>
            </div>
        </div>
    );
};

export default Box;