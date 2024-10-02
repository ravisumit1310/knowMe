import React from "react";

interface ExperienceProps{
    setExperienceActive: (page:string) => void;
    imageUrl:String,
    body:String,
    title:String
}

const ExperienceCards:React.FC<ExperienceProps> = (props: ExperienceProps) => {
    return (
        <>
        <h1>Hi I am sumit</h1>
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
        </>
    );

}

export  default ExperienceCards;

