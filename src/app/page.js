"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

// Interactive Background with moving particles
const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Interactive Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 100,
              y: mousePosition.y + (Math.random() - 0.5) * 100,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Moving Code Elements */}
      <motion.div 
        className="absolute top-20 left-5 text-xs text-pink-400/40 font-mono opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        &lt;InnovativeCode /&gt;
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-10 text-xs text-purple-400/40 font-mono opacity-70"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      >
        function createMagic()
      </motion.div>
      
      {/* Floating Tech Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
      />
    </div>
  );
};

// Modern Hero Section with Framer Motion
const ModernHero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Digital Experiences", "Web Applications", "Mobile Apps", "Brand Identities"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen bg-darker flex items-center px-6 lg:px-12 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
              </div>
              <span className="text-purple-400 text-sm font-semibold">Trusted by 50+ Industry Leaders</span>
            </motion.div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1 className="text-4xl lg:text-6xl font-black leading-tight" variants={itemVariants}>
                <span className="text-white">We Create</span>
                <br />
                <div className="h-20 lg:h-24 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentWord}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-gradient text-4xl lg:text-6xl font-black"
                    >
                      {words[currentWord]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="text-white">That Drive</span>
                <br />
                <span className="text-purple-500">Real Business Growth</span>
              </motion.h1>
              
              <motion.p className="text-lg text-gray-300 leading-relaxed max-w-xl" variants={itemVariants}>
                Nautilus Verse transforms businesses through cutting-edge digital solutions. 
                We build <span className="text-purple-400 font-semibold">scalable web applications</span>, 
                <span className="text-pink-400 font-semibold"> engaging mobile experiences</span>, and 
                <span className="text-purple-400 font-semibold"> data-driven marketing strategies</span> that deliver real results.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div className="flex flex-wrap gap-6" variants={itemVariants}>
              {[
                { number: "150+", label: "Projects" },
                { number: "$50M+", label: "Revenue" },
                { number: "99.9%", label: "Uptime" },
                { number: "2.5X", label: "Growth" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-black text-purple-400">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project 🚀
              </motion.button>
              <motion.button 
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies 📊
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div 
              className="relative z-10"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                <div className="flex space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex-1 bg-gray-700 rounded-lg h-4 animate-pulse"></div>
                    <div className="w-16 bg-purple-500 rounded-lg h-4"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { emoji: "🚀", label: "Fast", color: "from-purple-500/20 to-pink-500/20" },
                      { emoji: "💎", label: "Secure", color: "from-green-500/20 to-emerald-500/20" },
                      { emoji: "📈", label: "Scalable", color: "from-purple-500/20 to-pink-500/20" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className={`bg-gradient-to-br ${item.color} rounded-xl p-4 text-center`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-2xl mb-2">{item.emoji}</div>
                        <div className="text-white text-sm font-semibold">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12"
                animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl -rotate-12"
                animate={{ y: [0, 15, 0], rotate: [-12, -15, -12] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

// About Nautilus Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">About Us</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            About Nautilus Verse
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We are a passionate team of digital innovators committed to transforming businesses through technology and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2018, Nautilus Verse began as a small team of developers and designers with a shared vision: 
              to create digital solutions that not only look beautiful but drive real business results.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Today, we've grown into a full-service digital agency serving clients across the globe, 
              from startups to Fortune 500 companies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Team Members" },
                { number: "12+", label: "Industries Served" },
                { number: "99%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-gray-900/50 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-purple-400 text-xl font-bold">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: "🎯", title: "Mission", desc: "Deliver exceptional digital experiences" },
              { icon: "👁️", title: "Vision", desc: "Shape the future of digital innovation" },
              { icon: "💎", title: "Values", desc: "Quality, integrity, and innovation" },
              { icon: "🚀", title: "Approach", desc: "Data-driven and user-focused" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-6 rounded-2xl text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section with updated headings
const ServicesSection = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web applications with modern tech stacks",
      features: ["React/Next.js", "Node.js", "Tailwind CSS", "MongoDB"]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions",
      features: ["React Native", "Flutter", "iOS & Android", "Firebase"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design systems",
      features: ["Figma", "Prototyping", "User Testing", "Design Systems"]
    },
    {
      icon: "🚀",
      title: "Digital Marketing",
      description: "Data-driven growth strategies",
      features: ["SEO", "PPC", "Social Media", "Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            Services We Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Process Section with better design
const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals and create a comprehensive digital strategy",
      icon: "🔍",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating stunning visual designs and interactive prototypes",
      icon: "🎨",
      color: "from-purple-600 to-pink-600"
    },
    {
      step: "03",
      title: "Development",
      description: "Building robust solutions with cutting-edge technologies",
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing to ensure flawless performance",
      icon: "🧪",
      color: "from-purple-600 to-pink-600"
    },
    {
      step: "05",
      title: "Launch & Deployment",
      description: "Seamless deployment with comprehensive monitoring",
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "06",
      title: "Growth & Optimization",
      description: "Continuous improvement and performance optimization",
      icon: "📈",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="process" className="py-20 px-6 lg:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Our Process</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            How We Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured approach to ensure your project's success from concept to launch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 h-full group hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-black text-lg`}>
                      {step.step}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gray-600 transform translate-x-full"></div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const PortfolioSection = () => {
  const portfolioProjects = [
    {
      emoji: "🛒",
      title: "E-Commerce Revolution",
      description: "Built a scalable e-commerce platform processing 10,000+ daily orders with 99.9% uptime and seamless user experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
      status: "Live",
      duration: "6 Months",
      budget: "$85,000"
    },
    {
      emoji: "📊",
      title: "Enterprise Analytics Dashboard",
      description: "Real-time business intelligence platform for Fortune 500 company with predictive analytics and custom reporting.",
      tech: ["Next.js", "D3.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
      status: "Live",
      duration: "8 Months",
      budget: "$120,000"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 lg:px-12 bg-darker">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-4xl">
                  {project.emoji}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                  <motion.button 
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Case Study
                  </motion.button>
                  <motion.button 
                    className="bg-white/20 text-white px-4 py-2 rounded-lg font-semibold backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Live Demo
                  </motion.button>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                    {project.status}
                  </span>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-xs border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>📅 {project.duration}</span>
                <span>💰 {project.budget}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button 
            className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            View All Case Studies →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials with Infinite Carousel
const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO, TechInnovate Inc.",
      content: "Nautilus Verse transformed our digital presence completely. Our revenue grew by 250% in just 6 months!",
      avatar: "👩‍💼",
      company: "TechInnovate Inc."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Marketing Director, Global Retail Co.",
      content: "The attention to detail and strategic approach exceeded our expectations. Best investment we've made.",
      avatar: "👨‍💼",
      company: "Global Retail Co."
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Founder, StartUp Ventures",
      content: "From concept to launch, the team was exceptional. They understood our vision perfectly.",
      avatar: "👩‍🎓",
      company: "StartUp Ventures"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-12 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Testimonials</span>
          <h2 className="text-purple-400 text-3xl lg:text-4xl font-black mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="flex space-x-6"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm font-semibold">{testimonial.role}</div>
                    <div className="text-gray-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-darker">
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
            >
              Schedule Free Consultation
            </motion.button>
            <motion.button 
              className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
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

// Original Detailed Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-black text-white mb-6">
              Nautilus<span className="text-purple-400">Verse</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We craft digital experiences that transform businesses and drive measurable growth through innovation and excellence.
            </p>
            <div className="flex space-x-4">
              {["🚀", "💎", "⚡", "🎯"].map((emoji, index) => (
                <div key={index} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-sm hover:bg-purple-500/20 transition-colors duration-300 cursor-pointer">
                  {emoji}
                </div>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Our Services",
              links: ["Web Development", "UI/UX Design", "Digital Marketing", "E-commerce Solutions", "SEO Optimization", "Tech Consulting"]
            },
            {
              title: "Company",
              links: ["About Us", "Our Process", "Case Studies", "Careers", "Blog", "Contact"]
            },
            {
              title: "Connect With Us",
              links: ["LinkedIn", "Twitter", "GitHub", "Dribbble", "Instagram", "Behance"]
            }
          ].map((column, index) => (
            <div key={index}>
              <h4 className="font-bold text-white text-lg mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
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
      className={`fixed pointer-events-none z-50 ${
        isPointer ? 'scale-50' : 'scale-100'
      }`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <motion.div 
        className={`w-2 h-2 bg-white rounded-full ${
          isPointer ? 'scale-150 bg-purple-500' : ''
        }`}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
      />
    </motion.div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 bg-darker flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-4 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            NV
          </motion.div>
          <div className="text-white text-xl font-semibold">Nautilus Verse</div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <main className="min-h-screen text-white w-full overflow-x-hidden bg-darker cursor-none">
      <InteractiveBackground />
      <CustomCursor />
      
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 glass-dark border-b border-gray-800/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-black text-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              NV
            </motion.div>
            <h1 className="text-xl font-black text-white">
              Nautilus<span className="text-purple-400">Verse</span>
            </h1>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            {["home", "about", "services", "work", "process", "testimonials", "contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                className={`text-sm font-semibold transition-all duration-300 ${
                  activeSection === link ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          <motion.button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.header>

      <ModernHero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}