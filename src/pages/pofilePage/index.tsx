import React from "react";
import Header from "../../components/topbar";

function ProfilePage () {

    return (
        <>
            <section className="bg-gray-100 p-2 ">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-gray-500">TESTIMONIALS</h2>
                    <h1 className="text-3xl font-bold text-blue-600">We are committed expert partners</h1>
                    <p className="text-gray-700 mt-4">
                        We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right.
                    </p>
                </div>
                
                {/* Testimonials Section */}
                <section className="space-y-8">
                    <div className="bg-pink-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <img src="https://placehold.co/100x100" alt="Portrait of Nat Reynolds" className="w-16 h-16 rounded-full" />
                            <div>
                                <p className="text-gray-700">“ Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. ”</p>
                                <p className="font-bold text-gray-800 mt-2">NAT REYNOLDS</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <img src="https://placehold.co/100x100" alt="Portrait of Celia Almeda" className="w-16 h-16 rounded-full" />
                            <div>
                                <p className="text-gray-700">“ Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum. ”</p>
                                <p className="font-bold text-gray-800 mt-2">CELIA ALMEDA</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <img src="https://placehold.co/100x100" alt="Portrait of Bob Roberts" className="w-16 h-16 rounded-full" />
                            <div>
                                <p className="text-gray-700">“ Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum id venenatis a condimentum. ”</p>
                                <p className="font-bold text-gray-800 mt-2">BOB ROBERTS</p>
                            </div>
                        </div>
                    </div>
                </section>

                <p className="text-center text-gray-500 mt-8">Images from Freepik</p>

                {/* Benefits Section */}
                <section className="bg-purple-200 py-16 mt-16">
                    <h2 className="text-center text-2xl font-bold text-white mb-12">Benefits of working with us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">01</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">High Quality</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">02</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">Creative Team</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-4xl font-bold text-purple-500">03</h3>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">Amazing Results</h4>
                            <p className="text-gray-600 mt-2">Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</p>
                            <button className="mt-4 text-purple-500 font-bold">more</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default ProfilePage;
