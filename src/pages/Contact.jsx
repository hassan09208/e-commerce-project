import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-luxury-silver/80 text-lg max-w-2xl mx-auto">
            Have questions? Our concierge team is here to assist you with personalized service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif font-bold text-gradient mb-6">Contact Information</h2>
              <p className="text-luxury-silver/80 leading-relaxed mb-8">
                Our dedicated team is available to assist you with product inquiries, orders, and any other questions you may have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-luxury-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-luxury-white font-semibold mb-1">Address</h3>
                  <p className="text-luxury-silver/70">123 Luxury Avenue, Manhattan, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-luxury-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-luxury-white font-semibold mb-1">Phone</h3>
                  <p className="text-luxury-silver/70">+1 (888) LUXE-001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-luxury-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-luxury-white font-semibold mb-1">Email</h3>
                  <p className="text-luxury-silver/70">concierge@luxe.com</p>
                </div>
              </div>
            </div>

            <div className="card-luxury p-6">
              <h3 className="text-luxury-white font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-luxury-silver/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-luxury p-8">
              <h2 className="text-2xl font-serif font-bold text-gradient mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-luxury-silver/70 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-luxury w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-luxury-silver/70 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-luxury w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-luxury-silver/70 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-luxury w-full"
                    placeholder="Product Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-luxury-silver/70 text-sm mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-luxury w-full h-32 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="btn-luxury w-full flex items-center justify-center">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
