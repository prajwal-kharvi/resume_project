import React, {useState} from 'react';
import {Certifications} from "../../constants";

const Certification = () => {

    const[selectedCertificate,setSelectedCertificate]=useState(null)

    const handleOpenModel=(project)=>{
        setSelectedCertificate(project)
    }

    const handleCloseModel=()=>{
        setSelectedCertificate(null)
    }

    return (
        <>
        <section
            id="certifications"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg-px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
            {/*section title*/}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold"> My education has been a journey of learning and development. Here are the details of my academic background</p>
            </div>

            {/*Education TimeLine*/}
            <div className="relative">
                <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

                {/*Education Entries*/}
                {Certifications.map((certificate,index)=>(
                    <div
                        key={certificate.id}
                        onClick={()=>handleOpenModel(certificate)}
                        className={`flex flex-col sm:flex-row  mb-16   ${index %2===0 ?"sm:justify-end":"sm:justify-start"}`}
                    >
                        {/*TimeLine cricle*/}
                        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                            <img src={certificate.imgLogo}
                                 alt={certificate.company}
                                 className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        {/*Content section*/}
                        <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                            index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
                        >
                            {/*Flex container for image and text*/}
                            <div className="flex items-center space-x-6">
                                {/*Company logo*/}
                                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                                    <img
                                        src={certificate.img}
                                        alt={certificate.company}
                                        className="w-full h-full object-cover"/>
                                </div>
                                {/*Degree, School Name, and Date*/}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{certificate.course}</h3>
                                        <h4 className="text-md sm:text-sm text-gray-300">{certificate.company}</h4>
                                    </div>

                                </div>
                            </div>
                            <p className="mt-4 text-gray-400">{certificate.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

            {/*modal container*/}
            {selectedCertificate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 pointer-events-none">
                    <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative pointer-events-auto">

                        <div className="flex justify-end p-4">
                            <button
                                onClick={handleCloseModel}
                                className="text-white text-3xl font-bold hover:text-purple-500"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex justify-center bg-gray-900 px-4">
                                <img
                                    src={selectedCertificate.img}
                                    alt={selectedCertificate.course}
                                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                                />
                            </div>

                            <div className="lg:p-8 p-6">
                                <h3 className="lg:text-3xl font-bold text-white mb-4">
                                    {selectedCertificate.course}
                                </h3>
                                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                                    {selectedCertificate.desc}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


            )}
        </>
    );
};

export default Certification;