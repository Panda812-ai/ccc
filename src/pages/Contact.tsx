import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <h2>Our Location</h2>
            <p>123 Coffee Lane, Brewtown, CA 12345</p>
            <div>
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153165!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0e1b5f%3A0x5045675218ceed30!2sBrewed%20Awakenings!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
            <h2>Follow Us</h2>
            <p>Facebook | Instagram | Twitter</p>
        </div>
    );
};

export default Contact;