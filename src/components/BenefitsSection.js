// src/app/components/BenefitsSection.js
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Clarity in Career Decisions",
      description: "Get guidance on job changes, business timing, and career growth opportunities",
      points: [
        "Identify ideal career paths",
        "Best timing for job changes",
        "Business start-up guidance",
        "Growth opportunities"
      ]
    },
    {
      icon: "💖",
      title: "Relationship Harmony",
      description: "Understand compatibility, timing for marriage, and relationship improvements",
      points: [
        "Marriage compatibility analysis",
        "Relationship timing",
        "Conflict resolution",
        "Family harmony"
      ]
    },
    {
      icon: "💰",
      title: "Financial Prosperity",
      description: "Learn auspicious times for investments and remedies for financial stability",
      points: [
        "Wealth accumulation timing",
        "Investment guidance",
        "Debt reduction remedies",
        "Business expansion"
      ]
    },
    {
      icon: "🏠",
      title: "Home & Property",
      description: "Vastu guidance for home/office and property investment timing",
      points: [
        "Vastu correction remedies",
        "Property purchase timing",
        "Home construction muhurta",
        "Office setup guidance"
      ]
    },
    {
      icon: "🌿",
      title: "Health & Wellness",
      description: "Remedies for health issues and guidance for preventive care",
      points: [
        "Health issue remedies",
        "Preventive care timing",
        "Meditation guidance",
        "Lifestyle improvements"
      ]
    },
    {
      icon: "🧘",
      title: "Spiritual Growth",
      description: "Personalized spiritual practices and remedies for inner peace",
      points: [
        "Personalized mantras",
        "Meditation techniques",
        "Spiritual growth timing",
        "Karmic balance"
      ]
    }
  ];

  const [selectedBenefit, setSelectedBenefit] = useState(benefits[0]);

  return (
    <section className="py-20 px-4 md:px-6 lg:px-12 bg-transparent section-wrapper">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            How We Help
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Transform Your Life Through Astrology
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how Rekha Sharma Ji's guidance can positively impact every aspect of your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.button
                key={index}
                className={`p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${selectedBenefit.title === benefit.title
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50'
                    : 'bg-gray-900/50 border border-gray-700 hover:border-purple-500/30'
                  }`}
                onClick={() => setSelectedBenefit(benefit)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected Benefit Details */}
          <motion.div
            key={selectedBenefit.title}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">{selectedBenefit.icon}</div>
              <div>
                <h3 className="text-white text-2xl font-bold">{selectedBenefit.title}</h3>
                <p className="text-purple-300">{selectedBenefit.description}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-white font-semibold text-lg">What You Get:</h4>
              {selectedBenefit.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-purple-300 text-sm">
                <span className="font-bold">Result:</span> Clients report significant improvements within 3-6 months of following personalized guidance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;