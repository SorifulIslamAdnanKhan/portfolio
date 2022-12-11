import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='p-3'>
                    <h1 className="text-3xl font-bold">K. M. Soriful Islam Adnan</h1>
                    <h2 className="text-2xl font-bold mt-4 mb-4">Web Developer</h2>
                    <h3 className="text-md font-bold mt-4 mb-4">JavaScript | React.js | Node JS | Express JS | MongoDB</h3>
                    <div>
                        <p>I'm a web developer with an extensive passion for designing and developing professional websites using JavaScript, React, Node JS, Express JS, and MongoDB. I’ve developed several websites for a dental website, a law firm website, an eCommerce website, an online course website, and more.</p>
                    </div>
                    <br/>                      
                    <div>
                        <p> While developing these websites, I've used these technologies <b>JavaScript, React JS, Node JS, Express JS, MongoDB, React Router, Firebase, Stripe Payment Gateway, JSON Web Tokens, Tailwind, Bootstrap</b>, and more. I'm also striving for learning new technologies and improving my skills.</p>
                    </div>
                    <br/>                      
                    <div>
                        <p>I'm also an experienced Content Writer with 4+ years of experience in content writing, editing, and SEO. Wrote <b>120+</b> unique content for companies like <b>Brainstorm Force</b>, <b>weDevs</b> and more. Helped users to understand the product by writing <b>40+</b> technical documentation.</p>
                    </div>
                    <div className="grid grid-flow-col gap-2 justify-start p-4 mb-4">
                        <a href='https://github.com/SorifulIslamAdnanKhan' target="_blank"><FaGithub className='text-2xl'></FaGithub></a>
                        <a href='https://www.linkedin.com/in/soriful-islam-adnan/' target="_blank"><FaLinkedin className='text-2xl'></FaLinkedin></a>
                        <a href='https://twitter.com/adnankhan7792' target="_blank"><FaTwitter className='text-2xl'></FaTwitter></a>
                    </div>
                    <div>
                        <a href='https://drive.google.com/file/d/12eZRek9WNqFwxQ8Mypy8Yzk-tPTBbQlj/view?usp=sharing' target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Resume</a>
                    </div>
                </div>
                <div className='p-3'>
                    <button className="btn btn-outline mx-1 mb-1">React.JS</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-secondary">React Router</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-primary">JavaScript</button>
                    <button className="btn btn-outline mx-1 mb-1">DOM</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-secondary">Node JS</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-primary">Express JS</button>
                    <button className="btn btn-outline mx-1 mb-1">MongoDB</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-secondary">Firebase Authentication</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-primary">JSON Web Tokens</button>
                    <button className="btn btn-outline mx-1 mb-1">Stripe Payment Gateway</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-secondary">Tailwind</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-primary">React Bootstrap</button>
                    <button className="btn btn-outline mx-1 mb-1">Bootstrap</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-secondary">JSX</button>
                    <button className="btn btn-outline mx-1 mb-1 btn-primary">HTML5</button>
                    <button className="btn btn-outline mx-1 mb-1">CSS3</button>
                </div>
            </div>
        </div>
    );
};

export default About;