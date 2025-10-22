import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Touch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [confirmation, setConfirmation] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Construct the templateParams to match your email template's placeholders
        const templateParams = {
            from_name: formData.name,      // Sender's name
            from_email: formData.email,    // Sender's email
            message: formData.message      // Sender's message
        };
    
        // Send email via EmailJS with the correct templateParams
        emailjs.send('service_u6rii7b', 'template_xwcwj88', templateParams, '8yrJktKuiZIDLTERv')
        .then((response) => {
            setConfirmation('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        })
        .catch((err) => {
            setConfirmation('Failed to send message. Please try again later.');
        });
    };
    
    return (
        <section className="touch" id="contact">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-info">
                <p>Email: sakliadem94@gmail.com</p>
                <p>Phone: +33 773576489</p>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleInputChange}
                            required 
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send Message" />
                    </div>
                </form>
                {confirmation && <p className="confirmation-message">{confirmation}</p>}
            </div>
        </section>
    );
}

export default Touch;
