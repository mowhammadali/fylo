import React , { useContext } from 'react';

// images
import illustration1 from "../assets/images/illustration-intro.png"

const Hero = () => {
    return (
        <div className='container flex flex-col items-center space-y-12 mx-auto my-20 px-6 sm:px-10'>
            <img className='select-none' alt='illustration' src={illustration1}/>
            <h1 className='text-2xl sm:text-4xl text-center leading-[3rem] font-bold max-w-2xl '>
                All your files in one secure location, assessible anywhere.
            </h1>
            <p className='text-md sm:text-xl text-center max-w-2xl'> 
                Fylo stores all your most important files in one secure location.
                Access them wherever you need, share and collaborate with friends family, and co-workers. 
            </p>
            <button className='btn-cyan'>Get Start</button>
        </div>
    );
};

export default Hero;