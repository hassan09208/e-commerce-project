import { Award, Globe, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mt-4 mb-6">
            About LUXE
          </h1>
          <p className="text-luxury-silver/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Founded in 2024, LUXE represents the pinnacle of premium e-commerce, curating the finest products for discerning individuals who appreciate excellence in every detail.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-luxury p-12 mb-16 text-center"
        >
          <h2 className="text-3xl font-serif font-bold text-gradient mb-6">Our Mission</h2>
          <p className="text-luxury-silver/80 text-lg max-w-2xl mx-auto leading-relaxed">
            To provide an unparalleled shopping experience by offering only the highest quality products from the world's most prestigious brands, combined with exceptional service and attention to detail.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Award, title: 'Excellence', description: 'We curate only the finest products that meet our rigorous standards of quality and craftsmanship.' },
            { icon: Globe, title: 'Global Reach', description: 'Our network spans the globe, bringing you exclusive products from renowned manufacturers worldwide.' },
            { icon: Heart, title: 'Passion', description: 'Every product in our collection is selected with passion and dedication to the art of luxury.' },
            { icon: Users, title: 'Service', description: 'Our concierge team provides personalized service to ensure your complete satisfaction.' }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-luxury p-6 text-center"
            >
              <value.icon className="text-luxury-gold mx-auto mb-4" size={32} />
              <h3 className="text-luxury-white font-semibold text-lg mb-3">{value.title}</h3>
              <p className="text-luxury-silver/70 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-serif font-bold text-gradient mb-6">Our Story</h2>
            <div className="space-y-4 text-luxury-silver/80 leading-relaxed">
              <p>
                LUXE was born from a simple observation: the modern luxury shopping experience was fragmented and impersonal. We set out to change that by creating a destination where excellence is the standard, not the exception.
              </p>
              <p>
                Our team of experts travels the world, building relationships with artisans, manufacturers, and brands that share our commitment to quality. Each product in our collection tells a story of craftsmanship, heritage, and innovation.
              </p>
              <p>
                Today, LUXE serves discerning customers across the globe, offering a curated selection of luxury watches, high-end technology, designer fashion, and premium audio equipment. Our commitment to excellence remains unwavering.
              </p>
            </div>
          </div>
          <div className="card-luxury h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 flex items-center justify-center mb-4">
                <span className="text-5xl font-serif font-bold text-gradient-gold">L</span>
              </div>
              <p className="text-luxury-silver/50 text-sm tracking-widest uppercase">Est. 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Premium Brands' },
            { number: '10K+', label: 'Happy Customers' },
            { number: '50+', label: 'Countries' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">{stat.number}</p>
              <p className="text-luxury-silver/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
