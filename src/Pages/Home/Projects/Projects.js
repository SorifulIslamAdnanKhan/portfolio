import React from 'react';
import projectOne from '../../../assets/images/projects/project-one.png';
import projectTwo from '../../../assets/images/projects/project-two.png';
import projectThree from '../../../assets/images/projects/project-three.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section className='p-4 mt-5 mb-5'>
            <div>
                <h3 className='text-4xl font-bold text-center p-4 mb-5'>Projects</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={projectOne} alt="Hands Fashion- A Second Hand Online Watch Store" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hands Fashion- A Second Hand Online Watch Store</h2>
                        <Link to='/hands-fashion' target="_blank" className='btn btn-primary'>Project Details</Link>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={projectTwo} alt="Lawyer Service- A Personal Lawyer Service Website" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lawyer Service- A Personal Lawyer Service Website</h2>
                        <Link to='/lawyer-service' target="_blank" className='btn btn-primary'>Project Details</Link>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={projectThree} alt="Online Learning Platform- A Simple Online Learning Platform for Programmers" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Online Learning Platform- A Simple Online Learning Platform for Programmers</h2>
                        <Link to='/learning-platform' target="_blank" className='btn btn-primary'>Project Details</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;