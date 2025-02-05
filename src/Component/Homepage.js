import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Homepage.css";
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const Homepage = () => {
    // Refs for smooth scrolling
    const homeRef = useRef(null);
    const whyUsRef = useRef(null);
    const howItWorksRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const orderRef = useRef(null);
    const navigate = useNavigate();

    // State for form data and status message
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Handle input changes in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Send email via EmailJS
    const sendEmail = (e) => {
        e.preventDefault();
    
        // Check for missing fields
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }
    
        const emailParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_message: formData.message
        };
    
        // Log email data for debugging
        console.log("Sending email with data:", emailParams);
    
        emailjs.send(
            'service_gm70m4q',  // Service ID
            'template_n03sumf',  // Template ID
            emailParams,         // Form data
            'Gr1UQpy3Ovk6TULX_'  // Public Key
        )
        .then(() => {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            setStatus('Failed to send message. Please try again later.');
        });
    };
    

    return (
        <div className="homepage">
            <Navbar
                scrollToHome={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}
                scrollToWhyUs={() => whyUsRef.current.scrollIntoView({ behavior: 'smooth' })}
                scrollToHowItWorks={() => howItWorksRef.current.scrollIntoView({ behavior: 'smooth' })}
                scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
                scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
                scrollToOrder={() => orderRef.current.scrollIntoView({ behavior: 'smooth' })}
            />

            {/* Home Section */}
            <div className="home-section" ref={homeRef}>
                <div className="home-content">
                    <h1>Fresh Fruits & Vegetables</h1>
                    <p>Directly from Farmers to Your Doorstep</p>
                    <button className="btn-order" onClick={() => orderRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        Order Now
                    </button>
                </div>
            </div>

           {/* Why Us Section */}
           <section className="section why-us" ref={whyUsRef}> {/* Ref for scrolling */}
                <div className="section-content">
                    <h2>Why Choose Us?</h2> {/* Section title */}
                    <p>
                        We provide high-quality, fresh fruits and vegetables that are sourced directly from local farmers.
                        Our goal is to support sustainable agriculture and bring farm-fresh produce to your doorstep.
                        You can trust us to deliver the best products while promoting local farmers and reducing food miles.
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section how-it-works" ref={howItWorksRef}>
                <div className="section-content">
                    <h2>How It Works</h2>
                    <ol>
                        <li>Browse our wide range of fresh produce.</li>
                        <li>Add items to your cart and check out.</li>
                        <li>We deliver directly to your doorstep.</li>
                    </ol>
                </div>
            </section>

           
            {/* About Us Section */}
            <section className="section about-us" ref={aboutRef}> {/* Ref for scrolling */}
                <div className="section-content">
                    <h2>About Us</h2> {/* Section title */}
                    <p>
                        We are a marketplace designed to connect consumers with local farmers. Our platform enables
                        you to buy the freshest produce directly from farmers in your region. By eliminating intermediaries,
                        we ensure better prices for farmers and fresher produce for you.
                    </p>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="section contact-us" ref={contactRef}>
                <div className="section-content">
                    <h2>Contact Us</h2>
                    <p>Have questions? Reach out to us!</p>
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message:</label>
                            <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                        {status && <p>{status}</p>}
                    </form>
                </div>
            </section>

            {/* Order Section */}
            <section className="section order" ref={orderRef}>
                <div className="section-content">
                    <h2>Order Fresh Produce</h2>
                    <p>Select your favorite fruits and vegetables for doorstep delivery!</p>
                    <button className="btn-order" onClick={() => navigate("/LoginForm")}>
                        Start Ordering
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Homepage;
