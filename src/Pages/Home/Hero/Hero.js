import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-stone-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">K. M. Soriful Islam Adnan</h1>
                    <h2 className="text-2xl font-bold">Web Developer</h2>
                    <h3 className="text-lg font-bold mt-4 mb-4">JavaScript | React.js | Node JS | Express JS | MongoDB</h3>
                    <p className="text-lg py-6">I'm a web developer experienced in React.Js. I've developed several projects using JavaScript, React.Js, Node JS, Express JS, MongoDB, Tailwind, and Bootstrap.</p>
                        <div className="grid grid-flow-col gap-4 justify-center p-4 mb-4">
                            <a href='https://github.com/SorifulIslamAdnanKhan' target="_blank"><FaGithub className='text-2xl'></FaGithub></a>
                            <a href='https://www.linkedin.com/in/soriful-islam-adnan/' target="_blank"><FaLinkedin className='text-2xl'></FaLinkedin></a>
                            <a href='https://twitter.com/adnankhan7792' target="_blank"><FaTwitter className='text-2xl'></FaTwitter></a>
                        </div>
                    <Link to='/contact' className="btn btn-primary">Let's Talk</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;