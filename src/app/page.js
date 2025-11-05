"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

// Contact Form Component
const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp message format
    const message = `🌟 *New Project Inquiry - Nautilus Verse* 🌟%0A%0A` +
                   `*Name:* ${formData.name}%0A` +
                   `*Email:* ${formData.email}%0A` +
                   `*Phone:* ${formData.phone}%0A` +
                   `*Project Details:* ${formData.project}%0A` +
                   `*Budget:* ${formData.budget}%0A` +
                   `*Timeline:* ${formData.timeline}%0A%0A` +
                   `🚀 *Let's Build Something Amazing!*`;
    
    // YOUR WHATSAPP NUMBER - YAHAN APNA NUMBER DALNA
    const whatsappNumber = '916396464369'; // +91 format mein without +
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    onClose();
    
    // Form reset
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      budget: '',
      timeline: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-purple-500/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-2xl font-bold">Start Your Project</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">Project Details *</label>
            <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              rows="3"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
              placeholder="Tell us about your project requirements..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              >
                <option value="">Select Budget</option>
                <option value="Under ₹25k">Under ₹25k</option>
                <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                <option value="₹50k - ₹1L">₹50k - ₹1L</option>
                <option value="₹1L - ₹2L">₹1L - ₹2L</option>
                <option value="₹2L+">₹2L+</option>
                <option value="To be discussed">To be discussed</option>
              </select>
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              >
                <option value="">Select Timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Send via WhatsApp</span>
            <span>📱</span>
          </motion.button>

          <p className="text-gray-400 text-xs text-center">
            We'll contact you within 2 hours during business hours
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

// Interactive Background with improved particles
const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    let mouseMoveTimer;
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);

      clearTimeout(mouseMoveTimer);
      mouseMoveTimer = setTimeout(() => {
        setIsMouseMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseMoveTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full pointer-events-none"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={isMouseMoving ? {
              x: mousePosition.x + (Math.random() - 0.5) * 80,
              y: mousePosition.y + (Math.random() - 0.5) * 80,
            } : {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: isMouseMoving ? 0.8 : 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Moving Code Elements */}
      <motion.div
        className="absolute top-20 left-5 text-xs text-pink-400/40 font-mono opacity-60 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        &lt;InnovativeCode /&gt;
      </motion.div>

      <motion.div
        className="absolute top-40 right-10 text-xs text-purple-400/40 font-mono opacity-70 pointer-events-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      >
        function createMagic()
      </motion.div>

      {/* Floating Tech Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
      />
    </div>
  );
};

// Modern Hero Section with Framer Motion
const ModernHero = ({ setIsContactOpen }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Digital Experiences", "Web Applications", "Mobile Apps", "Brand Identities"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="space-y-12">
          {/* Enhanced Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-purple-300 text-sm font-medium">Innovating Since 2024</span>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Heading with Enhanced Animation */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight">
                We create
                <br />
                <div className="h-24 lg:h-28 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{
                        y: 50,
                        opacity: 0,
                        scale: 0.8,
                        filter: "blur(10px)"
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)"
                      }}
                      exit={{
                        y: -50,
                        opacity: 0,
                        scale: 1.2,
                        filter: "blur(10px)"
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                      className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-5xl lg:text-6xl font-normal inline-block"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                that drive impact
              </h1>

              <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
                We transform your vision into powerful digital solutions that deliver
                measurable results and exceptional user experiences.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {[
                {
                  icon: "⚡",
                  title: "Fast Delivery",
                  description: "Quick turnaround without compromising quality"
                },
                {
                  icon: "💎",
                  title: "Premium Quality",
                  description: "Pixel-perfect designs and robust code"
                },
                {
                  icon: "🚀",
                  title: "Scalable Solutions",
                  description: "Built to grow with your business"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center gap-12 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {[
                { number: "15+", label: "Projects" },
                { number: "100%", label: "Success Rate" },
                { number: "24/7", label: "Support" },
                { number: "1-4", label: "Weeks Delivery" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-purple-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsContactOpen(true)}
              >
                <span className="relative z-10">Start Your Project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  🚀
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: [0, 100, 0] }}
                  transition={{ duration: 1 }}
                />
              </motion.button>

              <motion.button
                className="border border-gray-600 text-white px-10 py-4 rounded-lg font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Our Work</span>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  📁
                </motion.span>
              </motion.button>
            </div>

            {/* Trust Badge */}
            <motion.div
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              Trusted by startups and established businesses worldwide
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Updated About Section with same background
// Updated About Section with more content
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">About Us</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            Why Choose Nautilus Verse?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We're not just developers - we're your strategic partners in digital transformation. 
            Combining cutting-edge technology with creative excellence to deliver exceptional results.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Our Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl font-bold">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2024, Nautilus Verse emerged from a simple yet powerful vision: to bridge the gap 
              between innovative ideas and their digital realization. We noticed that many businesses struggle 
              to find partners who truly understand both technology and business strategy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our name "Nautilus" represents exploration and depth - we dive deep into your business needs 
              to surface solutions that drive real impact. "Verse" symbolizes our comprehensive approach, 
              creating complete digital ecosystems for our clients.
            </p>
            
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <div className="text-purple-400 text-lg font-bold mb-3">🎯 Our Mission</div>
                <p className="text-gray-300 text-sm">
                  To empower businesses with transformative digital solutions that drive growth, 
                  enhance user experiences, and create lasting competitive advantages.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <div className="text-purple-400 text-lg font-bold mb-3">🚀 Our Vision</div>
                <p className="text-gray-300 text-sm">
                  To be the most trusted digital innovation partner for businesses seeking 
                  to thrive in the ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - What Makes Us Different */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl font-bold">What Makes Us Different</h3>
            
            <div className="space-y-4">
              {[
                {
                  icon: "💡",
                  title: "Problem-First Approach",
                  description: "We start by understanding your business challenges before proposing solutions."
                },
                {
                  icon: "🔄",
                  title: "Agile & Adaptive",
                  description: "We adapt to your needs and market changes with flexible development methodologies."
                },
                {
                  icon: "🔍",
                  title: "Attention to Detail",
                  description: "From code quality to user experience, we obsess over every detail."
                },
                {
                  icon: "🤝",
                  title: "Partnership Mindset",
                  description: "We see ourselves as an extension of your team, invested in your success."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Innovation",
                description: "Constantly pushing boundaries with latest technologies"
              },
              {
                icon: "💎", 
                title: "Excellence",
                description: "Never settling for anything less than exceptional"
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "Working together to achieve extraordinary results"
              },
              {
                icon: "📈",
                title: "Growth",
                description: "Helping businesses scale and evolve continuously"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Approach */}
        <motion.div
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Our Team Approach</h3>
              <p className="text-gray-300 mb-4">
                We believe that great digital products are born from collaboration. Our cross-functional 
                teams bring together diverse expertise in design, development, and strategy to create 
                holistic solutions that work seamlessly across all touchpoints.
              </p>
              <p className="text-gray-300">
                Every project is assigned a dedicated team that stays with you from discovery to launch 
                and beyond, ensuring consistency, deep understanding, and continuous improvement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎨", role: "UI/UX Designers", count: "3+" },
                { icon: "💻", role: "Developers", count: "5+" },
                { icon: "📱", role: "Mobile Experts", count: "2+" },
                { icon: "🚀", role: "Project Managers", count: "2+" }
              ].map((team, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">{team.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{team.role}</div>
                  <div className="text-purple-400 text-xs">{team.count} Experts</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company Stats - Updated */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { number: "2024", label: "Founded In", icon: "📅", description: "Started our journey with a vision to transform digital experiences" },
            { number: "15+", label: "Projects", icon: "🚀", description: "Successful projects delivered across various industries" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐", description: "Consistently exceeding client expectations" },
            { number: "10+", label: "Technologies", icon: "🛠️", description: "Mastered multiple modern tech stacks and frameworks" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-gray-900/30 rounded-2xl border border-gray-700 backdrop-blur-sm group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-purple-400 mb-1">{stat.number}</div>
              <div className="text-white font-semibold text-sm mb-2">{stat.label}</div>
              <div className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// COMPLETELY NEW Process Section - Modern Workflow
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive strategy that aligns with your vision.",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      features: ["Business Analysis", "Market Research", "Strategy Planning", "Goal Setting"]
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating stunning, user-centered designs and interactive prototypes that bring your vision to life with pixel-perfect precision.",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      features: ["UI/UX Design", "Wireframing", "Prototype Testing", "Design System"]
    },
    {
      number: "03",
      title: "Development",
      description: "Building robust, scalable solutions using cutting-edge technologies and best practices for optimal performance.",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      features: ["Agile Development", "Code Reviews", "CI/CD Pipeline", "Quality Assurance"]
    },
    {
      number: "04",
      title: "Testing & Quality",
      description: "Rigorous testing across all devices and scenarios to ensure flawless performance, security, and user experience.",
      icon: "🧪",
      color: "from-orange-500 to-red-500",
      features: ["Unit Testing", "Performance Testing", "Security Audit", "User Acceptance"]
    },
    {
      number: "05",
      title: "Launch & Deployment",
      description: "Seamless deployment with comprehensive monitoring, backup systems, and performance optimization.",
      icon: "🚀",
      color: "from-purple-500 to-indigo-500",
      features: ["Production Deployment", "Performance Monitoring", "Backup Systems", "Go-Live Support"]
    },
    {
      number: "06",
      title: "Growth & Optimization",
      description: "Continuous improvement, analytics, and optimization to drive ongoing success and business growth.",
      icon: "📈",
      color: "from-pink-500 to-rose-500",
      features: ["Analytics", "User Feedback", "Regular Updates", "Performance Tuning"]
    }
  ];

  return (
    <section id="process" className="py-20 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Our Process</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            How We Deliver Excellence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A streamlined 6-step process that transforms your vision into exceptional digital solutions
          </p>
        </motion.div>

        {/* Interactive Process Visualization */}
        <div className="relative">
          {/* Progress Bar */}
          <div className="relative mb-12">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  className={`flex flex-col items-center group cursor-pointer ${activeStep === index ? 'text-purple-400' : 'text-gray-500'
                    }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mb-2 ${activeStep === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-400'
                      }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                  <span className="text-xs font-medium hidden lg:block">{step.title.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>

            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-700 -z-10">
              <motion.div
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: '16.66%' }}
                animate={{ width: `${(activeStep + 1) * 16.66}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Active Step Display */}
          <motion.div
            key={activeStep}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Step Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${steps[activeStep].color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {steps[activeStep].icon}
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-2xl">{steps[activeStep].title}</h3>
                    <p className="text-purple-400 text-sm">Step {steps[activeStep].number}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {steps[activeStep].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-400 bg-gray-800/50 rounded-xl px-4 py-3 backdrop-blur-sm"
                      whileHover={{ x: 5, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="relative">
                <motion.div
                  className="w-full h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {steps[activeStep].icon}
                    </motion.div>
                    <div className="text-white font-bold text-lg">{steps[activeStep].title}</div>
                    <div className="text-purple-300 text-sm">In Progress</div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg"
                  animate={{
                    y: [0, 6, 0],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Step Navigation */}
          <div className="flex justify-between items-center">
            <motion.button
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors disabled:opacity-30"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              whileHover={{ x: -5 }}
            >
              <span>←</span>
              <span>Previous</span>
            </motion.button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${activeStep === index ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>

            <motion.button
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors disabled:opacity-30"
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              whileHover={{ x: 5 }}
            >
              <span>Next</span>
              <span>→</span>
            </motion.button>
          </div>
        </div>

        {/* Process Summary */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-white font-bold text-2xl mb-4">Why Our Process Works</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Our structured approach combines strategic thinking with technical excellence,
              ensuring every project delivers measurable results and exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "Efficient", desc: "Streamlined workflow for faster delivery" },
                { icon: "💎", title: "Quality", desc: "Rigorous testing and best practices" },
                { icon: "🚀", title: "Results", desc: "Focus on business outcomes and ROI" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/30"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section with transparent background
// Enhanced Services Section with more details
const ServicesSection = ({ setIsContactOpen }) => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and scalability",
      features: ["React/Next.js", "Node.js", "Tailwind CSS", "MongoDB", "TypeScript", "AWS"],
      details: "We create responsive, fast, and scalable web applications that provide exceptional user experiences across all devices.",
      deliverables: ["Custom Web App", "Admin Dashboard", "API Integration", "Performance Optimization"],
      timeline: "4-8 weeks"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Cross-platform mobile solutions for iOS and Android with native-like performance",
      features: ["React Native", "Flutter", "iOS & Android", "Firebase", "Redux", "Push Notifications"],
      details: "Build powerful mobile applications that work seamlessly across both major platforms with single codebase efficiency.",
      deliverables: ["iOS & Android App", "Backend Integration", "App Store Deployment", "Ongoing Maintenance"],
      timeline: "6-12 weeks"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design systems that combine aesthetics with functionality",
      features: ["Figma", "Prototyping", "User Testing", "Design Systems", "Wireframing", "User Research"],
      details: "Transform your ideas into intuitive, beautiful interfaces that users love and engage with.",
      deliverables: ["UI Design System", "Interactive Prototypes", "User Flows", "Design Assets"],
      timeline: "2-4 weeks"
    },
    {
      icon: "🚀",
      title: "Digital Marketing",
      description: "Data-driven growth strategies to boost your online presence and conversions",
      features: ["SEO Optimization", "PPC Campaigns", "Social Media", "Analytics", "Content Strategy", "Conversion Rate Optimization"],
      details: "Drive qualified traffic, increase brand awareness, and convert visitors into loyal customers.",
      deliverables: ["SEO Audit", "Marketing Strategy", "Content Plan", "Performance Reports"],
      timeline: "Ongoing",
      price: "Custom Packages"
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment integration",
      features: ["Shopify", "WooCommerce", "Payment Gateways", "Inventory Management", "Order Tracking", "Security"],
      details: "Launch your online store with all the features needed to sell products and grow your business.",
      deliverables: ["Online Store", "Payment Integration", "Product Management", "Analytics Dashboard"],
      timeline: "4-10 weeks"
    },
    {
      icon: "🔧",
      title: "WordPress Development",
      description: "Custom WordPress solutions with modern themes, plugins, and full customization",
      features: ["Custom Themes", "Plugin Development", "WooCommerce", "WordPress Optimization", "Security Hardening", "Performance Tuning"],
      details: "Build powerful, scalable WordPress websites with custom functionality and seamless user experiences.",
      deliverables: ["Custom WordPress Site", "Theme Development", "Plugin Customization", "Maintenance Setup"],
      timeline: "2-6 weeks"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end services to transform your digital presence and drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-xs text-purple-400 font-medium bg-purple-500/10 px-2 py-1 rounded-full">
                    {service.timeline}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {service.price}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                {/* Detailed Description */}
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                  {service.details}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-white text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-white text-sm font-semibold mb-2">Deliverables</h4>
                  <div className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <span>{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsContactOpen(true)}
              >
                <span>Get Started</span>
                <span>→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Services Summary */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "⚡",
                title: "Fast Delivery",
                description: "Quick project turnaround without compromising quality"
              },
              {
                icon: "💎",
                title: "Premium Quality",
                description: "Industry best practices and cutting-edge technologies"
              },
              {
                icon: "🛡️",
                title: "Ongoing Support",
                description: "Continuous maintenance and support after project completion"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Portfolio Section with transparent background
// Portfolio Section with enhanced visuals
const PortfolioSection = ({ setIsContactOpen }) => {
  const portfolioProjects = [
    {
      emoji: "⚔️",
      title: "The Frontline Fury",
      description: "A dynamic gaming news platform with real-time updates, community features, and interactive content for gamers worldwide.",
      tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js", "Cloudinary"],
      status: "Live",
      duration: "3 Months",
      image: "/frontline.png",
      link: "https://thefrontlinefury.com",
      features: ["Real-time News", "Community Forum", "User Profiles", "Content Management"]
    },
    {
      emoji: "🏢",
      title: "SGEPC Portal",
      description: "A complete website redesign for Sports Goods Export Promotion Council (SGEPC) - transforming their outdated website into a modern, responsive portal.",
      tech: ["React", "Netlify", "Responsive Design", "Modern UI/UX", "Performance Optimization"],
      status: "Live/Under Development",
      duration: "3 Days",
      budget: "Government Project",
      image: "/sgepc-inciterz.jpg",
      link: "https://sgepc-inciterz.netlify.app",
      features: ["Website Redesign", "Government Portal", "Responsive Layout", "Content Restructuring", "Modern UI/UX", "Fast Performance"]
    },
    {
      emoji: "🏠",
      title: "PropertyMaps - Real Estate Platform",
      description: "Advanced real estate platform with live interactive maps showing available properties, search filters, and property details with modern UI/UX design.",
      tech: ["React", "Tailwind CSS", "Netlify", "Interactive Maps", "Real-time Search", "Responsive Design"],
      status: "Live/Under Development",
      duration: "1 Day",
      budget: "Real Estate Tech",
      image: "/propertymaps.jpg",
      link: "https://propertymapsc.netlify.app",
      features: ["Interactive Maps", "Property Search", "Live Listings", "Filter System", "Modern Dashboard"]
    },
    {
      emoji: "🎪",
      title: "Lowercase Events",
      description: "A comprehensive event management platform for organizing and promoting events with ticket booking, schedules, and attendee management features.",
      tech: ["React", "Tailwind CSS", "Netlify", "Event Management", "Responsive Design", "Modern UI"],
      status: "Live",
      duration: "2 weeks", 
      budget: "Event Management Platform",
      image: "/lowercase.jpg",
      link: "https://lowercase.netlify.app",
      features: ["Event Listings", "Ticket Booking", "Event Schedules", "Attendee Management", "Responsive Design"]
    }
  ];

  return (
    <section id="work" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Our Portfolio</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore how we've helped businesses across industries achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Header with Emoji and Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{project.emoji}</div>
                <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30 font-medium">
                  {project.status}
                </span>
              </div>

              {/* Project Title and Description */}
              <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              {/* Project Visual - Placeholder with gradient */}
              <div className="relative overflow-hidden rounded-xl mb-4 h-48 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  {project.emoji}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      Visit Website
                    </motion.button>
                  </a>
                </div>
              </div>

              {/* Project Features */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-xs border border-purple-500/20 font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Meta */}
              <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-700/50 pt-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{project.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span></span>
                    <span>{project.budget}</span>
                  </span>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1"
                  whileHover={{ x: 5 }}
                >
                  <span>View Live</span>
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-white font-bold text-2xl mb-4">Have a Project in Mind?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section with transparent background
const CTASection = ({ setIsContactOpen }) => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Get Started</span>
          <h2 className="text-purple-400 text-4xl lg:text-5xl font-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together. We're here to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
            >
              Schedule Free Consultation
            </motion.button>
            <motion.button
              className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
            >
              Contact Our Team
            </motion.button>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            ⚡ Typically respond within 2 hours during business hours
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Updated Header Component
const Header = ({ setIsContactOpen }) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <motion.header
      className="fixed top-0 w-full z-50 glass-dark border-b border-gray-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <motion.div
            className="text-2xl font-black text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Nautilus<span className="text-purple-400">Verse</span>
          </motion.div>
        </div>

        <nav className="hidden lg:flex space-x-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Work", id: "work" },
            { name: "Process", id: "process" },
            { name: "Contact", id: "contact" }
          ].map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-semibold transition-all duration-300 relative ${activeSection === link.id ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                }`}
              whileHover={{ y: -2 }}
              onClick={() => setActiveSection(link.id)}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  layoutId="activeSection"
                />
              )}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsContactOpen(true)}
        >
          Get Started
        </motion.button>
      </div>
    </motion.header>
  );
};

// Original Detailed Footer
const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-800/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-black text-white mb-6">
              Nautilus<span className="text-purple-400">Verse</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We craft digital experiences that transform businesses and drive measurable growth through innovation and excellence.
            </p>
          </div>

          {[
            {
              title: "Our Services",
              links: ["Web Development", "UI/UX Design", "Digital Marketing", "E-commerce Solutions", "SEO Optimization", "Wordpress Development"]
            },
            {
              title: "Company",
              links: ["About Us", "Our Process", "Careers", "Blog", "Contact"]
            },
            {
              title: "Connect With Us",
              links: ["LinkedIn", "Twitter", "GitHub"]
            }
          ].map((column, index) => (
            <div key={index}>
              <h4 className="font-bold text-white text-lg mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Nautilus Verse. All rights reserved. Crafting digital excellence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Custom Cursor with Framer Motion
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      );
    };
    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <motion.div
      className={`fixed pointer-events-none z-50 ${isPointer ? 'scale-50' : 'scale-100'
        }`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <motion.div
        className={`w-2 h-2 bg-white rounded-full ${isPointer ? 'scale-150 bg-purple-500' : ''
          }`}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
      />
    </motion.div>
  );
};

// Updated Loader
const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-20 h-20 mx-auto mb-4"
        >
          <motion.div
            className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-transparent border-t-pink-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-black text-lg">NV</span>
          </div>
        </motion.div>
        <motion.div
          className="text-white text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Nautilus Verse
        </motion.div>
        <motion.div
          className="text-purple-400 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Loading awesome experience...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen text-white w-full overflow-x-hidden bg-black">
      <InteractiveBackground />

      <Header setIsContactOpen={setIsContactOpen} />
      <ModernHero setIsContactOpen={setIsContactOpen} />
      <AboutSection />
      <ServicesSection setIsContactOpen={setIsContactOpen} />
      <PortfolioSection setIsContactOpen={setIsContactOpen} />
      <ProcessSection />
      <CTASection setIsContactOpen={setIsContactOpen} />
      <Footer />

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactForm 
            isOpen={isContactOpen} 
            onClose={() => setIsContactOpen(false)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}