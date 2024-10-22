import React from "react";
import Header from "../../components/topbar";
import Footer from "../../components/bottombar/footer";
import atsicon from './ats100.png';
import cehIcon from './cehpointIcon.png';
function ExperiencePage() {

    return (
        <>
            <section className="bg-white p-2 ">
                <div className="text-left mb-5">
                    <h1 className="text-3xl font-bold font-kanit text-gray-600">Career Projects: - </h1>
                </div>

                {/* Testimonials Section */}
                <section className="space-y-8">
                    <div className="bg-pink-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <a href="https://adityatrading.com/" target="_blank" rel="noopener noreferrer">
                                <img src={atsicon} alt="ATS" className="w-16 h-16 rounded-full" />
                            </a>

                            <div>
                                <p className="text-gray-700">“ Developed a cross-platform mobile trading platform with Flutter, enabling users to trade on NSE and BSE.
                                    Integrated key features for GTT and IPO orders, improving trading efficiency.
                                    Collaborated on secure API integrations and focused on UI/UX enhancements for a seamless user experience. ”</p>
                                <p className="font-bold text-gray-800 mt-2">Trading App - Android+IOS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <a href="https://adityatrading.com/" target="_blank" rel="noopener noreferrer">
                                <img src={atsicon} alt="ATS" className="w-16 h-16 rounded-full" />
                            </a>

                            <div>
                                <p className="text-gray-700">“ Migrated Pocket App's functionalities to a web platform using Next.js for server-side rendering.
                                    Optimized API integrations for real-time trading and investing, enhancing performance and usability.
                                    Improved UI/UX to ensure a cohesive experience across mobile and web platforms.”</p>
                                <p className="font-bold text-gray-800 mt-2">Tradin Web App</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <a href="https://cehpoint.co.in" target="_blank" rel="noopener noreferrer">
                                <img src={cehIcon} alt="Cehpoint" className="w-16 h-16 rounded-full" />
                            </a>

                            <div>
                                <p className="text-gray-700">“Led development of a commercial app for over 10,000 users, offering services like travel, hotel bookings, and shopping.
                                    Integrated Google Maps and Firebase, optimizing logic and UI for better app efficiency.
                                    Participated in code reviews to maintain high-quality standards and reduce code defects.”</p>
                                <p className="font-bold text-gray-800 mt-2">ThaiSeva Application</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="bg-purple-200 py-16 mt-16">
                    <h2 className="text-center text-2xl font-bold text-white mb-12">Some personal projects  I have worked on</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">01</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">Contact Book - Flutter</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">02</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">Calculator - Flutter</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">03</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">Smooth Animated Web Page</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                    </div>


                </section>
            </section>
            <Footer />
        </>
    );
}

export default ExperiencePage;
