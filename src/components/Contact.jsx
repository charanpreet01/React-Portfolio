import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    setIsSubmitting(false);
                    setResponse('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    setIsSubmitting(false);
                    setResponse('Failed to send message, please try again later.');
                }
            );
    };

    const openAccount = (url) => {
        window.open(url, '_blank');
    }

    return (
        <section id='contact' className='bg-gray-950 py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
                <div className='grid lg:grid-cols-2 gap-10'>
                    {/* contact info */}
                    <div className='flex flex-col justify-center space-y-8'>
                        <div>
                            <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'>Let's Talk</h1>
                            <p className='text-gray-300 my-5'>
                                I'm always open to new opportunities, collaborations, and discussions on exciting web development projects. Feel free to reach out, and let's connect!
                            </p>

                            <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
                            <p className='mt-2 text-blue-500 hover:underline'>
                                charanpreetsinghrajput@gmail.com
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
                            <p className='mt-2 text-blue-500 hover:underline'>
                                +91 79862-47668
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
                            <div className='flex gap-3 text-2xl transition-all mt-5'>
                                <FaLinkedin onClick={() => openAccount("https://linkedin.com/in/charanpreet01")} className='hover:text-blue-400 text-white cursor-pointer' />
                                <FaGithub onClick={() => openAccount("https://github.com/charanpreet01")} className='hover:text-blue-400 text-white cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    {/* contact form */}
                    <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8'>
                        <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
                        <form onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        {response && <p className="mt-4 text-gray-300">{response}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
