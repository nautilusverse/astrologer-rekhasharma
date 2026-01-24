// src/app/components/ClientSuccessStories.js
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ClientSuccessStories = () => {
  const stories = [
    {
      name: "Rahul Verma",
      age: 32,
      problem: "Stuck in career for 5 years, no promotions",
      solution: "Career guidance + timing analysis",
      result: "Got promoted within 3 months, 60% salary hike",
      duration: "3 months",
      icon: "💼",
      beforeAfter: {
        before: "Stagnant career",
        after: "Rapid growth"
      }
    },
    {
      name: "Priya Sharma",
      age: 28,
      problem: "Multiple failed relationships, marriage delay",
      solution: "Relationship analysis + remedies",
      result: "Married within 1 year, happy relationship",
      duration: "1 year",
      icon: "💍",
      beforeAfter: {
        before: "Relationship struggles",
        after: "Happy marriage"
      }
    },
    {
      name: "Amit Patel",
      age: 45,
      problem: "Business losses for 3 consecutive years",
      solution: "Business timing + Vastu remedies",
      result: "Business turned profitable in 6 months",
      duration: "6 months",
      icon: "💰",
      beforeAfter: {
        before: "Financial losses",
        after: "Profitable growth"
      }
    },
    {
      name: "Sneha Kapoor",
      age: 35,
      problem: "Health issues, no diagnosis from doctors",
      solution: "Health remedies + planetary analysis",
      result: "Health improved, found right treatment",
      duration: "4 months",
      icon: "🌿",
      beforeAfter: {
        before: "Chronic health issues",
        after: "Improved health"
      }
    },
    {
      name: "Rajesh Kumar",
      age: 50,
      problem: "Family disputes, property conflicts",
      solution: "Family harmony remedies",
      result: "Family reunited, property settled",
      duration: "8 months",
      icon: "🏠",
      beforeAfter: {
        before: "Family conflicts",
        after: "Harmony restored"
      }
    },
    {
      name: "Anjali Singh",
      age: 29,
      problem: "Anxiety, lack of direction in life",
      solution: "Spiritual guidance + meditation",
      result: "Found purpose, anxiety reduced",
      duration: "2 months",
      icon: "🧘",
      beforeAfter: {
        before: "Anxiety & confusion",
        after: "Clarity & peace"
      }
    }
  ];

  const [selectedStory, setSelectedStory] = useState(stories[0]);
  const [showAll, setShowAll] = useState(false);

  const visibleStories = showAll ? stories : stories.slice(0, 3);

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
            Real Transformations
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real people, real problems, real solutions through Rekha Sharma Ji's guidance
          </p>
        </motion.div>

        {/* Featured Story */}
        <motion.div
          className="bg-gradient-to-r from-purple-500/10 via-gray-900/50 to-pink-500/10 rounded-3xl p-8 mb-12 border border-purple-500/20 backdrop-blur-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">{selectedStory.icon}</div>
                <div>
                  <h3 className="text-white text-2xl font-bold">{selectedStory.name}, {selectedStory.age}</h3>
                  <p className="text-purple-300">Featured Success Story</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">The Problem</h4>
                  <p className="text-gray-300">{selectedStory.problem}</p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">Rekha Ji's Solution</h4>
                  <p className="text-gray-300">{selectedStory.solution}</p>
                </div>

                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <h4 className="text-white font-semibold mb-2">The Result</h4>
                  <p className="text-green-300 font-medium">{selectedStory.result}</p>
                  <p className="text-gray-400 text-sm mt-1">Achieved in {selectedStory.duration}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-white font-bold text-xl mb-6 text-center">Transformation Journey</h4>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-2">Before</div>
                      <div className="text-red-400 font-semibold">{selectedStory.beforeAfter.before}</div>
                    </div>
                    <div className="text-purple-400 text-2xl">→</div>
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-2">After</div>
                      <div className="text-green-400 font-semibold">{selectedStory.beforeAfter.after}</div>
                    </div>
                  </div>

                  <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-4 bg-gradient-to-r from-red-500 via-purple-500 to-green-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2 }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-gray-800/50 rounded-xl">
                      <div className="text-white font-bold">{selectedStory.duration}</div>
                      <div className="text-gray-400 text-xs">Duration</div>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-xl">
                      <div className="text-white font-bold">100%</div>
                      <div className="text-gray-400 text-xs">Satisfaction</div>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-xl">
                      <div className="text-white font-bold">⭐⭐⭐⭐⭐</div>
                      <div className="text-gray-400 text-xs">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleStories.map((story, index) => (
            <motion.button
              key={index}
              className={`p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${selectedStory.name === story.name
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50'
                  : 'bg-gray-900/50 border border-gray-700 hover:border-purple-500/30'
                }`}
              onClick={() => setSelectedStory(story)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">{story.icon}</div>
                <div>
                  <h3 className="text-white font-bold">{story.name}</h3>
                  <p className="text-gray-400 text-sm">Age {story.age}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Problem</div>
                  <p className="text-gray-300 text-sm line-clamp-2">{story.problem}</p>
                </div>
                
                <div>
                  <div className="text-gray-400 text-xs mb-1">Result</div>
                  <p className="text-green-300 text-sm font-medium">{story.result.split(',')[0]}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{story.duration}</span>
                  <span className="text-purple-400 text-xs">View Details →</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Less Stories' : 'View All Success Stories'}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;