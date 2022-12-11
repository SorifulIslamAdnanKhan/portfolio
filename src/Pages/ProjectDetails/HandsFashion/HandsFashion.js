import React from 'react';
import projectOne from '../../../assets/images/projects/project-one.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import projectImageOne from '../../../assets/images/projectDetails/handsFashion/sign-page.png';
import projectImageTwo from '../../../assets/images/projectDetails/handsFashion/order-page.png';
import projectImageThree from '../../../assets/images/projectDetails/handsFashion/seller-dashboard.png';

const HandsFashion = () => {
    return (
        <section className='p-4 mt-5 mb-5'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={projectOne} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Hands Fashion- A Second Hand Online Watch Store</h1>
                        <div className='p-4 mt-3 mb-3'>
                            <ul>
                                <li>1. Seller/Buyer can sign up and log in to the website.</li>
                                <li>2. Role wise dashboard for admin/seller/buyers.</li>
                                <li>3. Sellers can add and advertise watches.</li>
                                <li>4. Buyers can buy watches and make card payments using Stripe.</li>
                                <li>5. Admin can delete seller and buyers.</li>
                            </ul>
                            <h3 className='text-md mt-3 mb-3'><b>Technology Used</b>: React, Firebase Authentication, MongoDB, Stripe, Tailwind.</h3>
                        </div>
                        <div className="card-actions lg:flex-nowrap justify-center">
                            <a href='https://ak-hands-fashion-shop.web.app/' className="btn btn-primary" target="_blank" >Live Website</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/hands-fashion-shop' className="btn btn-primary" target="_blank">GitHub Client</a>
                            <a href='https://github.com/SorifulIslamAdnanKhan/hands-fashion-shop-server' className="btn btn-primary" target="_blank">GitHub Server</a>
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

export default HandsFashion;