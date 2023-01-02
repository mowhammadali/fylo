import React from 'react';

// components
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Productive from './Components/Productive';
import Testimonials from './Components/Testimonials';
import EarlyAccess from './Components/EarlyAccess';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Productive />
            <Testimonials />
            <EarlyAccess />
            <Footer />
        </div>
    );
};

export default App;