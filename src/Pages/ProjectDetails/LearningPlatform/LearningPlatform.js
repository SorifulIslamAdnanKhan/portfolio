import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import projectThree from '../../../assets/images/projects/project-three.png';
import projectImageOne from '../../../assets/images/projectDetails/learningPlatform/login-page.png';
import projectImageTwo from '../../../assets/images/projectDetails/learningPlatform/tutorial-page.png';
import projectImageThree from '../../../assets/images/projectDetails/learningPlatform/course-details-page.png';


const LearningPlatform = () => {
    return (
        <section className='p-4 mt-5 mb-5'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={projectThree} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Online Learning Platform- A Simple Online Learning Platform for Programmers</h1>
                        <div className='p-4 mt-3 mb-3'>
                            <ul>
                                <li>1. Users can sign up and log in to the website.</li>
                                <li>2. Students can also log in to the website using their Google and GitHub accounts.</li>
                                <li>3. Users can add his/her law services.</li>
                                <li>4. They can add reviews under each service.</li>
                                <li>5. Users can update and delete their reviews</li>
                            </ul>
                            <h3 className='text-md mt-3 mb-3'><b>Technology Used</b>: React, Firebase Authentication, React To PDF, Tailwind.</h3>
                        </div>
                        <div className="card-actions lg:flex-nowrap justify-center">
                            <a href='https://akj-tutorial.web.app/' className="btn btn-primary" target="_blank">Live Website</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/online-learning-platform' className="btn btn-primary" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-2 mb-4 p-3'>
                <h3 className='text-4xl font-bold text-center p-4 mb-5'>Project Images</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={projectImageOne}>
                            <figure><img src={projectImageOne} alt="Hands Fashion- A Second Hand Online Watch Store" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="card shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={projectImageTwo}>
                            <figure><img src={projectImageTwo} alt="Hands Fashion- A Second Hand Online Watch Store" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="card shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={projectImageThree}>
                            <figure><img src={projectImageThree} alt="Hands Fashion- A Second Hand Online Watch Store" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
        </section>
    );
};

export default LearningPlatform;