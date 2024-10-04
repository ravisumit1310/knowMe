import React from "react";
import Footer from "../../components/bottombar/footer";

const EducationInfo: React.FC = () => {
    return (
        <div>
          <main>
            {/* Schooling */}
            <section className="bg-white text-center py-20">
              <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4">Make an appointment</h1>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  nisl eros, pulvinar facilisis justo mollis.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded">
                    Contact us
                  </button>
                  <button className="bg-gray-200 text-gray-600 px-6 py-3 rounded">
                    Read more
                  </button>
                </div>
              </div>
            </section>
    
            {/* Intermideat */}
            <section className="bg-gray-50 py-20">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="bg-white p-8 rounded shadow">
                    <i className="fas fa-calendar-alt text-blue-600 text-4xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Online appointment</h3>
                    <p className="text-gray-600 mb-4">Make an appointment</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Make an appointment
                    </button>
                  </div>
                  <div className="bg-white p-8 rounded shadow">
                    <i className="fas fa-phone-alt text-blue-600 text-4xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Emergency Case</h3>
                    <p className="text-gray-600 mb-4">+48 102 103 104</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Contact us
                    </button>
                  </div>
                  <div className="bg-white p-8 rounded shadow">
                    <i className="fas fa-user-md text-blue-600 text-4xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Our Doctors</h3>
                    <p className="text-gray-600 mb-4">Meet our doctors</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Doctors
                    </button>
                  </div>
                </div>
              </div>
            </section>
    
            {/* college */}
            <section className="bg-white py-20">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Meet our clinic</h2>
                <div className="flex justify-center">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Doctors discussing"
                    className="rounded shadow"
                  />
                </div>
                <p className="text-gray-600 mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded mt-4">
                  About us
                </button>
              </div>
            </section>
    
            {/* Development */}
            <section className="bg-gray-50 py-20">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Doctors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Doctor 1 */}
                  <div className="bg-white p-8 rounded shadow">
                    <img
                      src="https://placehold.co/200x200"
                      alt="Doctor Jennifer Lee"
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Jennifer Lee</h3>
                    <p className="text-gray-600 mb-4">Pediatric Clinic</p>
                    <div className="flex justify-center space-x-2">
                      <i className="fab fa-facebook text-blue-600"></i>
                      <i className="fab fa-twitter text-blue-600"></i>
                      <i className="fab fa-linkedin text-blue-600"></i>
                      <i className="fab fa-instagram text-blue-600"></i>
                    </div>
                  </div>
                  {/* Doctor 2 */}
                  <div className="bg-white p-8 rounded shadow">
                    <img
                      src="https://placehold.co/200x200"
                      alt="Doctor Sara Wright"
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Sara Wright</h3>
                    <p className="text-gray-600 mb-4">Dental Clinic</p>
                    <div className="flex justify-center space-x-2">
                      <i className="fab fa-facebook text-blue-600"></i>
                      <i className="fab fa-twitter text-blue-600"></i>
                      <i className="fab fa-linkedin text-blue-600"></i>
                      <i className="fab fa-instagram text-blue-600"></i>
                    </div>
                  </div>
                  {/* Doctor 3 */}
                  <div className="bg-white p-8 rounded shadow">
                    <img
                      src="https://placehold.co/200x200"
                      alt="Doctor Rabit Dihomasi"
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Rabit Dihomasi</h3>
                    <p className="text-gray-600 mb-4">Pediatric Clinic</p>
                    <div className="flex justify-center space-x-2">
                      <i className="fab fa-facebook text-blue-600"></i>
                      <i className="fab fa-twitter text-blue-600"></i>
                      <i className="fab fa-linkedin text-blue-600"></i>
                      <i className="fab fa-instagram text-blue-600"></i>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            {/* More sections follow in similar structure */}
          </main>
          <Footer/>
        </div>
      );
}

export  default EducationInfo;
