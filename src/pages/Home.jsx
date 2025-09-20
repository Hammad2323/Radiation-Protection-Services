// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-secondary min-h-screen text-white">
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Help Us Improve <span className="text-accent">Radiation Protection Services</span>
        </h1>

        {/* Three Images Row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link
            to="/services"
            className="bg-primary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src="/pic1.jpg"
                alt="services"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold py-4 text-center group-hover:text-accent">
              Services We Provide
            </h2>
          </Link>

          {/* Card 2 */}
          <Link
            to="/products"
            className="bg-primary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src="/pic2.jpg"
                alt="products"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold py-4 text-center group-hover:text-accent">
              Products
            </h2>
          </Link>

          {/* Card 3 */}
          <Link
            to="/experience"
            className="bg-primary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src="/pic3.jpg"
                alt="experience"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold py-4 text-center group-hover:text-accent">
              Radiation Protection Experience
            </h2>
          </Link>
        </div>

        {/* Accessibility Statement Button */}
        <div className="text-center mt-12 mb-12">
          <Link
            to="/accessibility"
            className="bg-accent text-black px-6 py-3 rounded-lg shadow hover:bg-green-500 transition-colors duration-300 font-semibold"
          >
            Accessibility Statement
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
