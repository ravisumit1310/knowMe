import React from "react";
import Header from "../../components/topbar";

function ExperiencePage () {

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
                            <img src="https://placehold.co/100x100" alt="Portrait of Nat Reynolds" className="w-16 h-16 rounded-full" />
                            <div>
                                <p className="text-gray-700">“ Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. ”</p>
                                <p className="font-bold text-gray-800 mt-2">Trading App - Android+IOS</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <img src="https://placehold.co/100x100" alt="Portrait of Celia Almeda" className="w-16 h-16 rounded-full" />
                            <div>
                                <p className="text-gray-700">“ Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum. ”</p>
                                <p className="font-bold text-gray-800 mt-2">Tradin Web App</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <img src="https://placehold.co/100x100" alt="Portrait of Bob Roberts" className="w-16 h-16 rounded-full" />
                            <div>
                                <p className="text-gray-700">“ Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum id venenatis a condimentum. ”</p>
                                <p className="font-bold text-gray-800 mt-2">Company's Main-Website</p>
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

                        {/* <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">04</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">Best Pricing</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">05</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">Innovations</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">06</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">24/7 Support</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div> */}
                    </div>

                    
                </section>
            </section>
        </>
    );
}

export default ExperiencePage;
