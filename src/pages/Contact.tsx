import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => alert("Something went wrong, please try again."));
  };

  return (
    <div className="pt-16 min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our courses or want to learn more about our training programs?
            We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="text-accent mr-4" size={24} />
                  <span>support@cyberdefend.in</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="text-accent mr-4" size={24} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="text-accent mr-4" size={24} />
                  <span>512 Vaishnavi Enclave, Hebbal, Bangalore 560024</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-600 text-white p-6 rounded-lg flex items-center space-x-4"
              >
                <CheckCircle size={28} />
                <p className="text-lg font-medium">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-darkBg text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-darkBg text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-darkBg text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-darkBg text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-accent text-primary py-3 rounded-lg font-bold flex items-center justify-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
