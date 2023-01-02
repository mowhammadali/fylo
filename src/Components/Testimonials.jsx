import React, { useState } from 'react';

// images
import quote from "../assets/images/bg-quotes.png";

// data
import { userData } from './data';

// components
import Box from './Box';

const Testimonials = () => {
    const [users] = useState(userData);
    return (
        <div className='container mx-auto mb-80 px-6
        relative flex flex-col items-center space-y-8
        md:space-x-4 md:flex-row md:justify-between'>
            <img className='absolute left-0 top-[0] translate-y-[-50%]
            sm:left-6'
            alt='quote' src={quote}/>
            {
                users.map(user => <Box key={user.id} {...user}/>)
            }
        </div>
    );
};

export default Testimonials;