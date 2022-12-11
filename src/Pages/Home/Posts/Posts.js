import React from 'react';
import postOne from '../../../assets/images/posts/post-one.png';
import postTwo from '../../../assets/images/posts/post-two.jpg';
import postThree from '../../../assets/images/posts/post-three.png';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <section className='p-4 mt-5 mb-5'>
            <div>
                <h3 className='text-4xl font-bold text-center p-4 mb-5'>Latest Posts</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={postOne} alt="How to Solve WordPress Website Not Loading Issues" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How to Solve WordPress Website Not Loading Issues</h2>
                        <div className="card-actions justify-center">
                            <a href='https://wedevs.com/blog/304599/wordpress-website-not-loading/' className="btn btn-primary" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={postTwo} alt="How to create a web design portfolio website like a pro" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How to create a web design portfolio website like a pro</h2>
                        <div className="card-actions justify-center">
                            <a href='https://wpastra.com/guides-and-tutorials/create-web-design-portfolio-website/' className="btn btn-primary" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={postThree} alt="How To Increase PHP Memory Limit In WordPress" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How To Increase PHP Memory Limit In WordPress</h2>
                        <div className="card-actions justify-center">
                            <a href='https://happyaddons.com/how-to-increase-php-memory-limit-wordpress/' className="btn btn-primary" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center p-4 mb-5'>
                <Link to='/blog' className='btn btn-primary'>Explore Blog</Link>
            </div>
        </section>
    );
};

export default Posts;