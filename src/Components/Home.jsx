import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Recipe from "./Recipe";

const Home = () => {
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

    return (
        <div className="bg-[#96be8c] w-full min-h-screen text-white">
            
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center">
                    <img
                        className={`w-48 md:w-64 rounded-full mb-8 ${
                            sweetGreenVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px]'
                        } transition-all duration-500 ease-in-out`}
                        src={images[1]}
                        alt="Sweet Green"
                    />
                    <h1
                        className={`text-4xl md:text-6xl font-bold tracking-wider text-center mb-6 ${
                            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                        } transition-all duration-500 ease-in-out`}
                    >
                        Healthy Food <br />
                        Wealthy Food !!
                    </h1>
                    <p
                        className={`text-lg md:text-xl text-center mb-8 ${
                            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                        } transition-all duration-500 ease-in-out`}
                    >
                        The Foundational Guide to Balancing <br />
                        Your Nutritional Diets and Everyday Lifestyle
                    </p>
                    <Link to="/recipe">
                        <button
                            className={`bg-gradient-to-r from-sky-500 to-green-500 hover:from-red-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 ${
                                buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                            } transition-all duration-500 ease-in-out`}
                        >
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className="relative flex flex-col items-center my-16">
                    <h1
                        ref={sweetGreenRef}
                        className={`text-4xl md:text-6xl font-bold mb-6 ${
                            sweetGreenVisible ? 'opacity-100 translate-x-[-50%]' : 'opacity-0 translate-x-[20px]'
                        } transition-all duration-500 ease-in-out`}
                    >
                        Sweet Green
                    </h1>
                    <img
                        className="w-1/2 max-w-xs mx-auto mb-12"
                        src="https://i.gifer.com/1hsF.gif"
                        alt="Sweet Green GIF"
                    />
                    <h1
                        ref={foodMoodRef}
                        className={`text-4xl md:text-6xl font-bold rounded-full bg-teal-300 px-7 ${
                            foodMoodVisible ? 'opacity-100 translate-x-[-50%]' : 'opacity-0 translate-x-[20px]'
                        } transition-all duration-500 ease-in-out`}
                    >
                        Food Mood
                    </h1>
                </div>
                <div className="bg-opacity-80 py-12 px-6 rounded-lg">
                    <h2 className="text-4xl font-bold mb-6 text-white">Recipe Section</h2>
                    <Recipe />
                </div>
            </div>
        </div>
    );
};

export default Home;
