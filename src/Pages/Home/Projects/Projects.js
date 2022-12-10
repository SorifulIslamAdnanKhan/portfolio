import React from 'react';
import projecctOne from '../../../assets/images/projects/project-one.png';
import projecctTwo from '../../../assets/images/projects/project-two.png';
import projecctThree from '../../../assets/images/projects/project-three.png';

const Projects = () => {
    return (
        <section className='p-4 mt-5 mb-5'>
            <div>
                <h3 className='text-4xl font-bold text-center p-4 mb-5'>Projects</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={projecctOne} alt="Hands Fashion- A Second Hand Online Watch Store" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Hands Fashion- A Second Hand Online Watch Store</h2>
                        <div className="card-actions lg:flex-nowrap justify-center">
                            <a href='https://ak-hands-fashion-shop.web.app/' className="btn btn-primary" target="_blank" >Live Website</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/hands-fashion-shop' className="btn btn-primary" target="_blank">GitHub Client</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/hands-fashion-shop-server' className="btn btn-primary" target="_blank">GitHub Server</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={projecctTwo} alt="Lawyer Service- A Personal Lawyer Service Website" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lawyer Service- A Personal Lawyer Service Website</h2>
                        <div className="card-actions lg:flex-nowrap justify-center">
                            <a href='https://akl-lawyer-service.web.app/' className="btn btn-primary" target="_blank">Live Website</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/lawyer-service' className="btn btn-primary" target="_blank">GitHub Client</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/lawyer-service-server' className="btn btn-primary" target="_blank">GitHub Server</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={projecctThree} alt="Online Learning Platform- A Simple Online Learning Platform for Programmers" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Online Learning Platform- A Simple Online Learning Platform for Programmers</h2>
                        <div className="card-actions lg:flex-nowrap justify-center">
                            <a href='https://akj-tutorial.web.app/' className="btn btn-primary" target="_blank">Live Website</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/online-learning-platform' className="btn btn-primary" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;