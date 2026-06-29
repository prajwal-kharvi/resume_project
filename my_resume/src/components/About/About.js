import React from 'react';
import ReactTypingEffect from "react-typing-effect"
import Tilt from  "react-parallax-tilt"
import {IMAGES} from "../../constants";

const About = () => {
    return (

        <section id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* left side*/}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting*/}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Hi,I am
                    </h1>
                    {/*Name*/}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Prajwal Kharvi
                    </h2>
                    {/* Skills heading with typing effect*/}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight" >
                        <span className="text-white">
                            I am a{" "}
                        </span>
                        <ReactTypingEffect
                        text={[
                            "MERN Stack Developer",
                            "Frontend Developer",
                            "React Developer",
                            "Web Developer",
                            "Node.js Developer",
                            "Software Developer",
                        ]}
                        speed={100}
                        eraseSpeed={50}
                        typingDelay={500}
                        eraseDelay={2000}
                        cursorRenderer={(cursor)=>(
                            <span className="text-[#8245ec]">{cursor}</span>
                        )}
                        ></ReactTypingEffect>

                    </h3>
                    {/* about me paragraph*/}
                        <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                            MERN Stack Developer with hands-on experience building responsive web applications using MongoDB, Express.js, React.js, and
                            Node.js. Skilled in developing REST APIs, database management, React Hooks, state management, and modern web development
                            practices. Built projects including a Food Delivery Application, Finance Dashboard, and Personal Portfolio Website. Quick learner with
                            strong problem-solving abilities seeking an entry-level Software Developer or MERN Stack Developer role.
                        </p>
                    {/*Resume button*/}

                    <a href={process.env.REACT_APP_CV_LINK}
                    target="_blank" rel="noopener noreferrer"
                       className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                    style={{
                        background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                        boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                    }}>
                        DOWNLOAD CV
                    </a>
                </div>
                {/*right side (profile image)*/}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                    >
                        <img

                            src={IMAGES.profile}  alt="Prajwal Kharvi"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />

                    </Tilt>

                </div>
            </div>
        </section>
    );
};

export default About;