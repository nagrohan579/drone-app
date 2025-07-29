import React, { useState } from 'react';
import { Menu, X, Camera, BatteryCharging, Shield, Zap, Wind, RadioTower, ArrowRight, Twitter, Facebook, Instagram } from 'lucide-react';
import './App.css'

// Helper component for SVG background shapes
const SvgShapes = () => (
    <svg width="0" height="0">
        <defs>
            <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
                <path d="M0,1 L0,0.2 C0.1,0.1,0.2,0,0.3,0 C0.4,0,0.5,0.1,0.6,0.2 C0.7,0.3,0.8,0.2,0.9,0.1 L1,0 L1,1 Z" />
            </clipPath>
        </defs>
    </svg>
);


// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ["Products", "Resources", "Pricing", "Company"];

    return (
        <header className="absolute top-0 left-0 right-0 z-50 p-4">
            <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-2">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                            <div className="w-3 h-6 bg-purple-600 rounded-sm"></div>
                            <div className="w-3 h-6 bg-purple-400 rounded-sm mt-1"></div>
                        </div>
                        <span className="text-gray-800 font-bold text-2xl">ABS</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a href="#" key={link} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Sign Up Button */}
                    <div className="hidden lg:flex items-center">
                        <a href="#" className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                            Sign Up
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 mt-2 px-4">
                     <div className="bg-white rounded-2xl shadow-xl">
                        <nav className="flex flex-col items-center space-y-2 p-6">
                            {navLinks.map(link => (
                                <a href="#" key={link} className="text-gray-700 text-lg hover:bg-gray-100 w-full text-center p-2 rounded-md transition-colors">
                                    {link}
                                </a>
                            ))}
                            <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors w-full text-center mt-4">
                                Sign Up
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

// Hero Section Component
const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-[70vh] md:h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2940&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">Best place to buy drones</h1>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                    <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-transform transform hover:scale-105 w-full sm:w-auto">
                        Buy now
                    </a>
                    <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
                        How to buy
                    </a>
                </div>
            </div>
        </section>
    );
};

// Quality Section Component
const QualitySection = () => {
    const items = [
        { img: 'https://placehold.co/400x300/e2e8f0/333?text=Drone+Kit', title: 'Action proof body', description: 'Our drones are built to last with high-quality materials.' },
        { img: 'https://placehold.co/400x300/e2e8f0/333?text=Drone+Parts', title: 'More than 3,500 partners', description: 'A vast network ensuring support and availability.' },
        { img: 'https://placehold.co/400x300/e2e8f0/333?text=Remote+Control', title: 'Artoo launched Remote', description: 'Cutting-edge remote technology for precise control.' },
        { img: 'https://placehold.co/400x300/e2e8f0/333?text=Drone+in+Nature', title: 'Tarsus for agriculture', description: 'Specialized drones to revolutionize farming.' },
    ];

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Affordable, good quality.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start space-x-6">
                            <img src={item.img} alt={item.title} className="w-24 h-24 sm:w-32 sm:h-24 object-cover rounded-lg shadow-md" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Features Section Component
const FeaturesSection = () => {
    const features = [
        { icon: <Camera size={32} className="text-purple-600" />, title: '4K Camera', description: 'Crystal clear video and photo quality.' },
        { icon: <BatteryCharging size={32} className="text-purple-600" />, title: 'Long Battery Life', description: 'Fly longer with our extended batteries.' },
        { icon: <Shield size={32} className="text-purple-600" />, title: 'Obstacle Avoidance', description: 'Smart sensors for safer flights.' },
        { icon: <Zap size={32} className="text-purple-600" />, title: 'Fast & Responsive', description: 'High-performance motors for agility.' },
        { icon: <Wind size={32} className="text-purple-600" />, title: 'Wind Resistance', description: 'Stable flight even in breezy conditions.' },
        { icon: <RadioTower size={32} className="text-purple-600" />, title: 'Extended Range', description: 'Explore further with a strong signal.' },
    ];

    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Features you can's avoid</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6">
                            <div className="bg-purple-100 p-4 rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Blog Section Component
const BlogSection = () => {
    const posts = [
        {
            img: 'https://placehold.co/600x400/a78bfa/ffffff?text=Tech+Lab',
            title: 'TARSUS lab tests its space system',
            description: 'A deep dive into the rigorous testing protocols for our next-gen space systems.'
        },
        {
            img: 'https://placehold.co/600x400/a78bfa/ffffff?text=NASA+Rocket',
            title: "NASA's big rocket returns to its launchpad",
            description: 'An exciting update on the Artemis mission and the return of the SLS rocket.'
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Don't miss Rocket<br />Science blog</h2>
                    <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors hidden sm:inline-flex">
                        See all
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <a href="#" className="font-semibold text-purple-600 hover:text-purple-800 flex items-center">
                                    Read more <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-8 sm:hidden">
                    <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        See all
                    </a>
                </div>
            </div>
        </section>
    );
};

// Testimonials Section Component
const TestimonialsSection = () => {
    const testimonials = [
        {
            avatar: 'https://placehold.co/100x100/FBBF24/ffffff?text=JD',
            name: 'John Doe',
            title: 'Aerial Photographer',
            quote: 'Finally, a drone that meets all my needs. The camera quality is superb, and the flight time is impressive. Highly recommended for professionals!'
        },
        {
            avatar: 'https://placehold.co/100x100/F87171/ffffff?text=SA',
            name: 'Sarah Adams',
            title: 'Hobbyist Flyer',
            quote: "They said it's affordable and good quality, and they delivered. As a beginner, I found it incredibly easy to use and very durable. Love it!"
        },
        {
            avatar: 'https://placehold.co/100x100/60A5FA/ffffff?text=ML',
            name: 'Mike Lowery',
            title: 'Tech Reviewer',
            quote: 'A game-changer in the consumer drone market. The combination of features and price point is unbeatable. My top pick for 2024.'
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white">
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* About */}
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center space-x-2 mb-4">
                             <div className="flex space-x-1">
                                <div className="w-3 h-6 bg-purple-600 rounded-sm"></div>
                                <div className="w-3 h-6 bg-purple-400 rounded-sm mt-1"></div>
                            </div>
                            <span className="font-bold text-2xl">ABS</span>
                        </div>
                        <p className="text-purple-300">The best place to buy drones and accessories. We are committed to quality and customer satisfaction.</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Product</h4>
                        <ul className="space-y-2 text-purple-300">
                            <li><a href="#" className="hover:text-white">Drones</a></li>
                            <li><a href="#" className="hover:text-white">Accessories</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Features</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-lg mb-4">Help</h4>
                        <ul className="space-y-2 text-purple-300">
                            <li><a href="#" className="hover:text-white">Support</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                        <p className="text-purple-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none" />
                            <button className="bg-purple-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-purple-700">Go</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-purple-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-purple-400">
                    <p>&copy; {new Date().getFullYear()} ABSkart. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


// Main App Component
export default function App() {
    return (
        <div className="bg-white font-sans">
            <SvgShapes />
            <Header />
            <main>
                <Hero />
                <QualitySection />
                <FeaturesSection />
                <div className="relative">
                    {/* This creates the wavy top effect for the purple section */}
                    <div 
                        className="absolute top-0 left-0 w-full h-32 bg-purple-50"
                        style={{ clipPath: 'url(#waveClip)' }}
                    ></div>
                    <div className="bg-purple-50 pt-16">
                        <BlogSection />
                    </div>
                </div>
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
}
