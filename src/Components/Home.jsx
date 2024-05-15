import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [titleVisible, setTitleVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [sweetGreenVisible, setSweetGreenVisible] = useState(false);
    const [foodMoodVisible, setFoodMoodVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleVisible(true);
        }, 500);
        setTimeout(() => {
            setTextVisible(true);
        }, 700);
        setTimeout(() => {
            setButtonVisible(true);
        }, 900);
        setTimeout(() => {
            setSweetGreenVisible(true);
        }, 1100);
        setTimeout(() => {
            setFoodMoodVisible(true);
        }, 1300);
    }, []);

    const images = [
        'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://i.pinimg.com/originals/a3/1f/8d/a31f8de21dbb5eb14e32a409cc525d68.gif',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 2000); 

        return () => clearInterval(interval);
    }, []);

    const renderImage = () => {
        return (
            <img
                className={`w-[50%] py-11 px-5 rounded-full float-right mr-4 ${
                    imageIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px]'
                } transition-all duration-500 ease-in-out`}
                src={images[imageIndex]}
                alt=""
            />
        );
    };

    return (
        <div className='relative bg-cyan-800 h-screen'>
            {renderImage()}
            <h1
                className={`text-7xl  tracking-wider text-center font-[Voyage] text-white font-bold py-20 px-20 ${
                    titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                } transition-all duration-500 ease-in-out`}
            >
                Healthy Food <br />
                Wealthy Food !!
            </h1>
            <p
                className={`px-40 font-[gilroy]  text-3xl ${
                    textVisible ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-[20px]'
                } transition-all duration-500 ease-in-out`}
            >
                The Foundational guide to balancing 
                Your Nutritional Diets and Everyday
                <br />
                Lifestyle
            </p>
            <Link to="/recipe">
                <button
                    className={`absolute left-36 my-5 bg-gradient-to-r from-sky-500 to-green-500 hover:from-red-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105 ${
                        buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                    } transition-all duration-500 ease-in-out`}
                >
                    Get Started
                </button>
            </Link>
            <div className='absolute bottom-0 left-0 right-0 top-[150%] flex justify-center items-center '>
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h1 className={`text-7xl text-gray-900 mb-4 ${
            sweetGreenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
        } transition-all duration-500 ease-in-out`}>
            Sweet Green
        </h1>
        <h1 className={`text-7xl text-gray-900 ${
            foodMoodVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px]'
        } transition-all duration-500 ease-in-out`}>
            Food Mood
        </h1>
    </div>
            </div>
        </div>
    );
};

export default Home;
