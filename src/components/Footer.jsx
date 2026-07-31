import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-dark border-t border-luxury-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-luxury-black font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-serif font-bold text-gradient-gold">LUXE</span>
            </div>
            <p className="text-luxury-silver/70 text-sm leading-relaxed">
              Curating the finest luxury products for discerning individuals who appreciate excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-luxury-white font-semibold mb-4 tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-luxury-white font-semibold mb-4 tracking-wider">CATEGORIES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/watches" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  Luxury Watches
                </Link>
              </li>
              <li>
                <Link to="/category/tech" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  High-End Tech
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  Designer Wear
                </Link>
              </li>
              <li>
                <Link to="/category/audio" className="text-luxury-silver/70 hover:text-luxury-gold transition-colors duration-300 text-sm">
                  Premium Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-luxury-white font-semibold mb-4 tracking-wider">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-luxury-silver/70 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Luxury Avenue, Manhattan, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-luxury-silver/70 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>+1 (888) LUXE-001</span>
              </li>
              <li className="flex items-center space-x-3 text-luxury-silver/70 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>concierge@luxe.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-gray/30 mt-12 pt-8 text-center">
          <p className="text-luxury-silver/50 text-sm">
            © 2024 LUXE. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
