import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [titleVisible, setTitleVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [sweetGreenVisible, setSweetGreenVisible] = useState(false);
    const [foodMoodVisible, setFoodMoodVisible] = useState(false);

    const sweetGreenRef = useRef(null);
    const foodMoodRef = useRef(null);

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
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSweetGreenVisible(true);
            setFoodMoodVisible(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);
    const handleScroll = () => {
        if (sweetGreenRef.current && foodMoodRef.current) {
            const sweetGreenTop = sweetGreenRef.current.getBoundingClientRect().top;
            const foodMoodTop = foodMoodRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sweetGreenTop < windowHeight * 0.75) {
                setSweetGreenVisible(true);
            }
            if (foodMoodTop < windowHeight * 0.75) {
                setFoodMoodVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const images = [
        'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://i.pinimg.com/originals/a3/1f/8d/a31f8de21dbb5eb14e32a409cc525d68.gif',
    ];

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
            
            <div className='relative h-screen flex flex-col justify-center items-center w-screen'>
      <h1
        ref={sweetGreenRef}
        className={`absolute text-7xl  bg-teal-300  ${
          sweetGreenVisible
            ? 'opacity-100 translate-x-[-50%] -top-20'
            : 'opacity-0 translate-x-[20px]'
        } transition-all duration-500 ease-in-out left-1/2 transform -translate-x-1/2`}
        style={{ top: '30%' }}
      >
        Sweet Green
      </h1>
      <img
        className='absolute top-[58%] transform -translate-y-1/2 w-1/2 max-w-xs mx-auto'
        src='https://i.gifer.com/1hsF.gif'
        alt='Sweet Green GIF'
      />
      <h1
        ref={foodMoodRef}
        className={`absolute text-7xl rounded-full  bg-teal-300 px-7 ${
          foodMoodVisible ? 'opacity-100 translate-x-[-50%] bottom-20' : 'opacity-0 translate-x-[20px]'
        } transition-all duration-500 ease-in-out left-1/2 transform -translate-x-1/2`}
        
      >
        Food Mood
      </h1>
    </div>
        </div>
    );
};

export default Home;
