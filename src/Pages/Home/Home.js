import React from 'react';
import Hero from './Hero/Hero';
import Posts from './Posts/Posts';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Projects></Projects>
           <Posts></Posts>
        </div>
    );
};

export default Home;