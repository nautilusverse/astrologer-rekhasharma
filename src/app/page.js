// src/app/page.js - FIXED VERSION (NO FADE ISSUES)
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

// Custom hook to fix opacity issues
const useFixOpacity = () => {
  useEffect(() => {
    // Force all elements to be fully visible
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    });
  }, []);
};

// Vedic Astrology Knowledge Component
const VedicAstrologyKnowledge = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const knowledgeTopics = [
    {
      title: "Vedic Astrology Basics",
      icon: "📜",
      content: [
        "Vedic astrology (Jyotish) is an ancient Indian science of time and cycles",
        "Based on 27 Nakshatras (lunar mansions) and 12 Rashis (zodiac signs)",
        "Uses sidereal zodiac system (based on fixed stars)",
        "Considers 9 planets (Navagrahas) including Rahu and Ketu"
      ],
      fact: "Vedic astrology is over 5,000 years old!"
    },
    {
      title: "Kundli & Birth Chart",
      icon: "🪐",
      content: [
        "Kundli is a snapshot of celestial positions at birth time",
        "Contains 12 houses representing different life areas",
        "Planetary positions determine personality and destiny",
        "Dasha system predicts life events and timing"
      ],
      fact: "An accurate Kundli requires exact birth time and place"
    },
    {
      title: "Planetary Influences",
      icon: "🌟",
      content: [
        "Sun: Soul, authority, father, government",
        "Moon: Mind, emotions, mother, public",
        "Mars: Energy, courage, siblings, property",
        "Mercury: Intellect, communication, business",
        "Jupiter: Wisdom, wealth, children, spirituality",
        "Venus: Love, beauty, marriage, luxury",
        "Saturn: Discipline, career, obstacles, longevity",
        "Rahu: Material desires, foreign connections",
        "Ketu: Spirituality, past life, detachment"
      ],
      fact: "Planets influence different areas based on their position"
    },
    {
      title: "Remedies & Solutions",
      icon: "🙏",
      content: [
        "Gemstones for planetary strengthening",
        "Mantras and chants for specific deities",
        "Yantras for energy alignment",
        "Charity and donations (daan)",
        "Fasting on specific days",
        "Rudraksha and other spiritual beads",
        "Color therapy based on planetary influences"
      ],
      fact: "Remedies work by balancing planetary energies"
    }
  ];

  useFixOpacity(); // Fix opacity for this component

  return (
    <section className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            Vedic Astrology Knowledge
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Learn Ancient Wisdom
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the science behind Vedic astrology and how it can guide your life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Tabs */}
          <div className="space-y-4">
            {knowledgeTopics.map((topic, index) => (
              <button
                key={index}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${activeTab === index
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50'
                    : 'bg-gray-900/50 border border-gray-700 hover:border-purple-500/30'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{topic.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{topic.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Click to learn more about {topic.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right - Content */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg h-full">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">{knowledgeTopics[activeTab].icon}</div>
              <div>
                <h3 className="text-white text-2xl font-bold">{knowledgeTopics[activeTab].title}</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {knowledgeTopics[activeTab].content.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-xl">💡</span>
                <p className="text-purple-300 font-medium">{knowledgeTopics[activeTab].fact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Moon Phases & Planetary Movements Component
const MoonPhasesPlanetary = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentPlanet, setCurrentPlanet] = useState(0);
  
  const moonPhases = [
    {
      name: "New Moon",
      emoji: "🌑",
      date: "Today - Tomorrow",
      influence: "New beginnings, setting intentions",
      activities: ["Start new projects", "Set goals", "Plant seeds (literal & metaphorical)"],
      avoid: ["Making major decisions", "Signing contracts"]
    },
    {
      name: "Waxing Crescent",
      emoji: "🌒",
      date: "Dec 12-15",
      influence: "Growth and building momentum",
      activities: ["Take action", "Build foundations", "Learn new skills"],
      avoid: ["Giving up too soon", "Overcommitting"]
    },
    {
      name: "First Quarter",
      emoji: "🌓",
      date: "Dec 16-19",
      influence: "Decision making, overcoming challenges",
      activities: ["Make important decisions", "Solve problems", "Face obstacles"],
      avoid: ["Procrastination", "Avoiding conflicts"]
    },
    {
      name: "Waxing Gibbous",
      emoji: "🌔",
      date: "Dec 20-22",
      influence: "Refinement and adjustment",
      activities: ["Refine projects", "Adjust plans", "Seek feedback"],
      avoid: ["Perfectionism", "Ignoring feedback"]
    },
    {
      name: "Full Moon",
      emoji: "🌕",
      date: "Dec 23",
      influence: "Completion and manifestation",
      activities: ["Complete projects", "Release old patterns", "Celebrate"],
      avoid: ["Starting new ventures", "Emotional reactions"]
    }
  ];

  const planetaryMovements = [
    {
      planet: "Jupiter",
      emoji: "🪐",
      status: "Direct Motion",
      influence: "Expansion, wisdom, prosperity",
      duration: "Until March 2024",
      effect: "Good for education, travel, spiritual growth"
    },
    {
      planet: "Saturn",
      emoji: "🪐",
      status: "Retrograde",
      influence: "Karma, discipline, lessons",
      duration: "June-Nov 2024",
      effect: "Time for reflection, facing responsibilities"
    },
    {
      planet: "Rahu-Ketu",
      emoji: "🌗",
      status: "Changing Signs",
      influence: "Destiny, transformation",
      date: "Oct 2024",
      effect: "Major life shifts, spiritual awakening"
    },
    {
      planet: "Mercury",
      emoji: "☿",
      status: "Direct",
      influence: "Communication, business",
      duration: "All month",
      effect: "Good for contracts, studies, negotiations"
    }
  ];

  useFixOpacity(); // Fix opacity for this component

  return (
    <section className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            Cosmic Calendar
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Moon Phases & Planetary Movements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track celestial movements and their impact on daily life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Moon Phases */}
          <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-bold">Current Moon Cycle</h3>
              <div className="text-purple-400 text-sm">Live Updates</div>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"></div>
                <div className="absolute inset-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl">{moonPhases[currentPhase].emoji}</div>
                    <div className="text-white font-bold mt-2">{moonPhases[currentPhase].name}</div>
                    <div className="text-gray-400 text-sm">{moonPhases[currentPhase].date}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Influence</h4>
                <p className="text-gray-300">{moonPhases[currentPhase].influence}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                  <h5 className="text-green-400 font-semibold mb-2">Recommended</h5>
                  <ul className="space-y-1">
                    {moonPhases[currentPhase].activities.map((activity, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {activity}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                  <h5 className="text-red-400 font-semibold mb-2">Avoid</h5>
                  <ul className="space-y-1">
                    {moonPhases[currentPhase].avoid.map((item, index) => (
                      <li key={index} className="text-gray-300 text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {moonPhases.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentPhase === index ? 'bg-purple-500' : 'bg-gray-700'}`}
                  onClick={() => setCurrentPhase(index)}
                />
              ))}
            </div>
          </div>

          {/* Planetary Movements */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold mb-6">Planetary Transits</h3>
            
            {planetaryMovements.map((planet, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${currentPlanet === index
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50'
                    : 'bg-gray-900/50 border-gray-700 hover:border-purple-500/30'
                  }`}
                onClick={() => setCurrentPlanet(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{planet.emoji}</div>
                    <div>
                      <h4 className="text-white font-bold">{planet.planet}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className={`px-2 py-1 rounded-full text-xs ${planet.status.includes('Retrograde') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                          {planet.status}
                        </div>
                        <div className="text-gray-400 text-sm">{planet.duration || planet.date}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-300">{planet.influence}</p>
                  <p className="text-purple-300 text-sm">{planet.effect}</p>
                </div>
              </div>
            ))}

            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
              <div className="flex items-center space-x-3">
                <div className="text-blue-400 text-xl">💫</div>
                <div>
                  <p className="text-white text-sm">Want personalized planetary analysis?</p>
                  <p className="text-blue-300 text-xs">Book a consultation for detailed transit reading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Nakshatra & Daily Guidance Component
const NakshatraGuidance = () => {
  const [selectedNakshatra, setSelectedNakshatra] = useState(0);
  
  const nakshatras = [
    {
      name: "Ashwini",
      ruler: "Ketu",
      deity: "Ashwini Kumaras",
      quality: "Quick and sharp",
      guidance: "Good day for starting new ventures, travel, and healing activities"
    },
    {
      name: "Bharani",
      ruler: "Venus",
      deity: "Yama",
      quality: "Sustaining",
      guidance: "Focus on commitments, relationships, and artistic pursuits"
    },
    {
      name: "Krittika",
      ruler: "Sun",
      deity: "Agni",
      quality: "Fiery and sharp",
      guidance: "Transformative energy - good for purification and new beginnings"
    },
    {
      name: "Rohini",
      ruler: "Moon",
      deity: "Brahma",
      quality: "Fixed and stable",
      guidance: "Creative activities, material pursuits, and relationship building"
    }
  ];

  const dailyGuidance = [
    {
      time: "Brahma Muhurta (4-6 AM)",
      activity: "Meditation & Spiritual Practice",
      benefit: "Clear mind, spiritual connection",
      icon: "🧘"
    },
    {
      time: "Morning (7-9 AM)",
      activity: "Planning & Strategy",
      benefit: "Optimal mental clarity",
      icon: "📝"
    },
    {
      time: "Midday (12-2 PM)",
      activity: "Important Meetings",
      benefit: "Peak solar energy for success",
      icon: "💼"
    },
    {
      time: "Evening (6-8 PM)",
      activity: "Family & Relationships",
      benefit: "Emotional harmony",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      time: "Night (9-10 PM)",
      activity: "Reflection & Learning",
      benefit: "Assimilation of knowledge",
      icon: "📚"
    }
  ];

  useFixOpacity(); // Fix opacity for this component

  return (
    <section className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            Vedic Daily Wisdom
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Nakshatra Guidance & Daily Routine
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Align your day with cosmic rhythms for optimal results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Nakshatra Today */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-white text-xl font-bold mb-6">Today's Nakshatra</h3>
            
            <div className="mb-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">✨</div>
                <h4 className="text-white text-2xl font-bold">{nakshatras[selectedNakshatra].name}</h4>
                <p className="text-purple-300">Currently Active</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm mb-1">Ruler</div>
                  <div className="text-white font-semibold">{nakshatras[selectedNakshatra].ruler}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm mb-1">Deity</div>
                  <div className="text-white font-semibold">{nakshatras[selectedNakshatra].deity}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm mb-1">Quality</div>
                  <div className="text-white font-semibold">{nakshatras[selectedNakshatra].quality}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm mb-1">Favorable For</div>
                  <div className="text-white font-semibold">New Beginnings</div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h5 className="text-white font-semibold mb-2">Today's Guidance</h5>
                <p className="text-gray-300">{nakshatras[selectedNakshatra].guidance}</p>
              </div>
            </div>

            <div className="flex space-x-2 justify-center">
              {nakshatras.map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg ${selectedNakshatra === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  onClick={() => setSelectedNakshatra(index)}
                >
                  {nakshatras[index].name}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Vedic Routine */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Optimal Daily Routine (Dinacharya)</h3>
            
            <div className="space-y-4">
              {dailyGuidance.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-semibold">{item.time}</span>
                      <span className="text-purple-400 text-sm bg-purple-500/10 px-2 py-1 rounded">
                        Recommended
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-1">{item.activity}</p>
                    <p className="text-green-400 text-xs">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🌅</div>
                <div>
                  <h4 className="text-white font-bold mb-2">Vedic Wisdom Tip</h4>
                  <p className="text-gray-300 text-sm">
                    According to Ayurveda and Vedic astrology, aligning daily activities with natural rhythms 
                    (circadian and cosmic) enhances health, productivity, and spiritual growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FIXED BOOKING FORM COMPONENT (WITHOUT FADE)
const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    appointmentDate: '',
    timeSlot: '',
    serviceType: 'kundli',
    isFirstTime: true
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  // Generate time slots from 9 AM to 9 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 21; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`;
      slots.push(time);
    }
    return slots;
  };

  // Get next 30 days for booking
  const getNext30Days = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  useEffect(() => {
    setAvailableSlots(generateTimeSlots());
    
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Calculate charges based on service
    let charges = 0;
    let serviceDetails = '';
    
    if (formData.serviceType === 'kundli') {
      charges = 300;
      serviceDetails = 'Kundli Reading - ₹300';
    } else if (formData.serviceType === 'consultation') {
      charges = formData.isFirstTime ? 0 : 300;
      serviceDetails = `Consultation - ${formData.isFirstTime ? 'Free (First Time)' : '₹300'}`;
      
      if (formData.extraTime === '1.5') {
        charges += 150;
        serviceDetails += ' + 1.5 hours (+₹150)';
      } else if (formData.extraTime === '2') {
        charges += 300;
        serviceDetails += ' + 2 hours (+₹300)';
      } else if (formData.extraTime) {
        serviceDetails += ' (1 hour)';
      }
    }

    // Format date for display
    const formattedDate = formData.appointmentDate 
      ? new Date(formData.appointmentDate).toLocaleDateString('en-IN', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      : '';

    // Prepare WhatsApp message
    const message = `🌟 *New Astrology Appointment - Rekha Sharma Ji* 🌟%0A%0A` +
                   `*👤 Client Details:*%0A` +
                   `Name: ${formData.name}%0A` +
                   `Phone: ${formData.phone}%0A%0A` +
                   `*📅 Birth Details:*%0A` +
                   `Date of Birth: ${formData.dateOfBirth}%0A` +
                   `Time of Birth: ${formData.timeOfBirth}%0A` +
                   `Place of Birth: ${formData.placeOfBirth}%0A%0A` +
                   `*📋 Appointment Details:*%0A` +
                   `Date: ${formattedDate}%0A` +
                   `Time Slot: ${formData.timeSlot}%0A` +
                   `Service: ${serviceDetails}%0A` +
                   `Total Charges: ₹${charges}%0A%0A` +
                   `📅 *Please confirm this appointment*%0A` +
                   `✨ *Thank you!*%0A` +
                   `_Rekha Sharma Astrology Services_`;

    // Send to WhatsApp
    const whatsappNumber = '918510988703';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
      appointmentDate: '',
      timeSlot: '',
      serviceType: 'kundli',
      isFirstTime: true
    });
    
    setLoading(false);
    onClose();
    
    alert('Opening WhatsApp with your booking details. Please send the message to confirm your appointment.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateCharges = () => {
    if (formData.serviceType === 'kundli') {
      return 300;
    }
    
    if (formData.serviceType === 'consultation') {
      let charges = formData.isFirstTime ? 0 : 300;
      
      if (!formData.isFirstTime) {
        if (formData.extraTime === '1.5') {
          charges += 150;
        } else if (formData.extraTime === '2') {
          charges += 300;
        }
      }
      
      return charges;
    }
    
    return 0;
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-layer">
      <div
        ref={formRef}
        className="bg-gray-900/95 rounded-3xl p-6 md:p-8 w-full max-w-md border border-purple-500/40 shadow-2xl backdrop-blur-xl booking-form-fix"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-white text-2xl font-bold">Book with Rekha Sharma Ji</h3>
            <p className="text-purple-300 text-sm">Complete birth details required for accurate reading</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          {/* Birth Details Section */}
          <div className="space-y-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <h4 className="text-purple-300 font-semibold text-sm">Birth Details (For Accurate Reading)</h4>
            
            {/* Date of Birth */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Date of Birth *</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>

            {/* Time of Birth */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Time of Birth *</label>
              <input
                type="time"
                name="timeOfBirth"
                value={formData.timeOfBirth}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>

            {/* Place of Birth */}
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Place of Birth *</label>
              <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                placeholder="City, State, Country"
              />
            </div>
          </div>

          {/* Appointment Date */}
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Appointment Date *</label>
            <select
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none"
            >
              <option value="">Choose appointment date</option>
              {getNext30Days().map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString('en-IN', { 
                    weekday: 'short', 
                    day: 'numeric', 
                    month: 'short',
                    year: 'numeric' 
                  })}
                </option>
              ))}
            </select>
          </div>

          {/* Time Slot */}
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Select Time Slot *</label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none"
            >
              <option value="">Choose time (9 AM - 9 PM)</option>
              {availableSlots.map((slot) => {
                const hour = parseInt(slot.split(':')[0]);
                const displayTime = hour < 12 
                  ? `${slot} AM`
                  : hour === 12 
                    ? `${slot} PM`
                    : `${hour - 12}:00 PM`;
                return (
                  <option key={slot} value={slot}>
                    {displayTime}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Service Type */}
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Service Type *</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, serviceType: 'kundli' }))}
                className={`py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === 'kundli'
                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50'
                  }`}
              >
                <div className="font-semibold">Kundli</div>
                <div className="text-xs opacity-80">₹300</div>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, serviceType: 'consultation' }))}
                className={`py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === 'consultation'
                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50'
                  }`}
              >
                <div className="font-semibold">Consultation</div>
                <div className="text-xs opacity-80">First Free</div>
              </button>
            </div>
          </div>

          {/* First Time Checkbox */}
          {formData.serviceType === 'consultation' && (
            <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-xl">
              <input
                type="checkbox"
                id="isFirstTime"
                name="isFirstTime"
                checked={formData.isFirstTime}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-gray-800 border-gray-700 rounded-lg focus:ring-purple-500 focus:ring-2"
              />
              <label htmlFor="isFirstTime" className="text-gray-300 text-sm">
                <span className="font-semibold">First time consultation</span>
                <span className="text-green-400 ml-2">(Free)</span>
              </label>
            </div>
          )}

          {/* Charges Summary */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 font-medium">Total Charges:</span>
              <span className="text-2xl font-bold text-purple-400">₹{calculateCharges()}</span>
            </div>
            <p className="text-gray-400 text-xs">
              {formData.serviceType === 'kundli' 
                ? 'Kundli Reading (₹300)'
                : formData.isFirstTime 
                  ? 'First Consultation (Free)'
                  : `Consultation (₹300)`
              }
            </p>
            <p className="text-gray-500 text-xs mt-2">Payment directly to Rekha Sharma Ji after service</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
              } text-white py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                <span>Preparing WhatsApp...</span>
              </>
            ) : (
              <>
                <span className="text-lg">Book via WhatsApp</span>
                <span className="text-xl animate-pulse">📱</span>
              </>
            )}
          </button>

          <div className="text-center">
            <p className="text-gray-500 text-xs">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Details sent directly to Rekha Sharma Ji's WhatsApp
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Interactive Background (SIMPLIFIED - NO FADE)
const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Cosmic Nebula Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(162, 89, 247, 0.2) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(247, 106, 238, 0.2) 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}
      ></div>

      {/* Floating Zodiac Symbols */}
      <div className="absolute inset-0">
        {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-purple-400/20 text-4xl zodiac-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Mystic Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 mystic-orb rounded-full blur-3xl pointer-events-none"/>

      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none"/>
    </div>
  );
};

// Astrologer Hero Section (SIMPLIFIED - NO FADE)
const AstrologerHero = ({ setIsBookingOpen }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Rekha Sharma Ji", "Vedic Astrology", "Kundli", "Palmistry", "Numerology"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto w-full text-center content-layer">
        <div className="space-y-12">
          {/* Welcome Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-purple-300 text-sm font-medium">✨ Divine Guidance Since 2010</span>
          </div>

          {/* Main Content with Astrologer Intro */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                {/* Astrologer Name & Title */}
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Rekha <span className="text-gradient">Sharma</span>
                  </h1>
                  <p className="text-purple-300 text-xl mt-2">Renowned Vedic Astrologer & Life Coach</p>
                </div>
                
                {/* Dynamic Tagline */}
                <div className="h-20 flex items-center justify-center">
                  <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-3xl lg:text-4xl font-bold inline-block">
                    Expert in {words[currentWord]}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
                With 14+ years of experience in Vedic astrology, I've guided thousands towards 
                clarity, purpose, and success through celestial wisdom.
              </p>
            </div>

            {/* Specialties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: "📜",
                  title: "Kundli Analysis",
                  description: "Precise birth chart readings"
                },
                {
                  icon: "🤲",
                  title: "Palm Reading",
                  description: "Life line analysis"
                },
                {
                  icon: "💍",
                  title: "Marriage Match",
                  description: "Compatibility analysis"
                },
                {
                  icon: "💼",
                  title: "Career Guidance",
                  description: "Professional path clarity"
                }
              ].map((specialty, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{specialty.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{specialty.title}</h3>
                  <p className="text-gray-400 text-sm">{specialty.description}</p>
                </div>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="flex justify-center gap-12 max-w-md mx-auto">
              {[
                { number: "14+", label: "Years", icon: "📅" },
                { number: "5000+", label: "Clients", icon: "👥" },
                { number: "98%", label: "Accuracy", icon: "🎯" },
                { number: "24/7", label: "Support", icon: "💬" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                onClick={() => setIsBookingOpen(true)}
              >
                <span className="relative z-10">Book Consultation</span>
                <span className="relative z-10">✨</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </button>

              <button
                className="border border-gray-600 text-white px-10 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>My Journey</span>
                <span>👤</span>
              </button>
            </div>

            {/* Pricing Info */}
            <div className="text-gray-400 text-sm bg-white/5 rounded-xl p-4 max-w-md mx-auto border border-white/10">
              <p className="flex items-center justify-center space-x-4">
                <span>Kundli Reading: <span className="text-purple-400 font-semibold">₹300</span></span>
                <span>•</span>
                <span>Consultation: <span className="text-green-400 font-semibold">First Free</span>, then <span className="text-purple-400 font-semibold">₹300/hr</span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Rekha Sharma Section (SIMPLIFIED - NO FADE)
const AboutAstrologer = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">About Rekha Sharma Ji</span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Your Trusted Guide to Cosmic Wisdom
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            From ancient family traditions to modern-day spiritual guidance - my journey in astrology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Astrologer Profile */}
          <div className="relative">
            {/* Profile Card */}
            <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              {/* Profile Image Placeholder with Avatar */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-4 border-purple-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-8xl">👩‍🦳</div>
              </div>
              
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">Rekha Sharma</h3>
                <p className="text-purple-300 text-lg mb-4">Vedic Astrologer & Spiritual Guide</p>
                
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="flex text-yellow-400">
                    {"⭐".repeat(5)}
                  </div>
                  <span className="text-gray-400 text-sm">(4.9/5 Rating)</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-white font-bold text-lg">14+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-white font-bold text-lg">5000+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                </div>
                
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <p className="text-purple-300 text-sm">
                    "My mission is to help you find clarity and purpose through celestial guidance"
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs">
                ✨
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs">
                🔮
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-bold">My Spiritual Journey</h3>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Born into a family of astrologers in Varanasi, I was introduced to the sacred 
                science of Jyotish (Vedic Astrology) at the tender age of 12. My grandfather, 
                a renowned astrologer, recognized my intuitive abilities and began training me 
                in the ancient scriptures.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                After completing my formal education in Sanskrit and Vedic Studies from 
                Banaras Hindu University, I dedicated myself fully to mastering astrology. 
                I've studied under various gurus across India, learning diverse systems 
                including KP Astrology, Nadi Astrology, and Western Astrology.
              </p>

              <div className="space-y-3">
                <h4 className="text-purple-400 font-semibold text-lg">My Philosophy</h4>
                <p className="text-gray-300">
                  I believe astrology is not about predicting a fixed future, but about 
                  understanding cosmic patterns to make informed decisions and live in 
                  harmony with universal energies. My approach combines traditional Vedic 
                  wisdom with practical, actionable guidance for modern life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: "🎓", title: "Education", desc: "M.A. in Vedic Studies, BHU" },
                  { icon: "📚", title: "Specialization", desc: "Vedic & KP Astrology" },
                  { icon: "🌟", title: "Recognition", desc: "Featured in Astrology Conferences" },
                  { icon: "💫", title: "Languages", desc: "Hindi, English, Sanskrit" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-gray-400 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section (SIMPLIFIED - NO FADE)
const ServicesSection = ({ setIsBookingOpen }) => {
  const services = [
    {
      icon: "📜",
      title: "Complete Kundli Analysis",
      price: "₹300",
      description: "Detailed birth chart with planetary positions, dasha periods, and life predictions",
      details: ["Janam Kundli", "Dasha Analysis", "Planetary Positions", "Remedies"],
      duration: "1-2 Hours",
      popular: true
    },
    {
      icon: "💬",
      title: "Personal Consultation",
      price: "First Free | Then ₹300/hr",
      description: "One-on-one guidance for life decisions, relationships, and career choices",
      details: ["Life Guidance", "Problem Solving", "Remedy Suggestions", "Follow-up"],
      duration: "1 Hour",
      highlight: "Most Popular"
    },
    {
      icon: "🤲",
      title: "Palm Reading & Analysis",
      price: "₹500",
      description: "Comprehensive palm analysis revealing personality, destiny, and future prospects",
      details: ["Life Line Reading", "Career Analysis", "Relationship Lines", "Health Indications"],
      duration: "45 Minutes"
    },
    {
      icon: "💍",
      title: "Marriage Compatibility",
      price: "₹600",
      description: "Detailed analysis of compatibility between partners with Guna Milan",
      details: ["Guna Milan", "Mangal Dosha", "Planetary Match", "Remedies"],
      duration: "1.5 Hours"
    },
    {
      icon: "💼",
      title: "Career Guidance",
      price: "₹400",
      description: "Professional path analysis and guidance for career growth and opportunities",
      details: ["Career Analysis", "Job Change", "Business Timing", "Growth Areas"],
      duration: "1 Hour"
    },
    {
      icon: "🏠",
      title: "Vastu Consultation",
      price: "₹800",
      description: "Home/Office energy analysis and remedies for prosperity and harmony",
      details: ["Space Analysis", "Direction Alignment", "Remedy Suggestions", "Color Guidance"],
      duration: "2 Hours"
    },
    {
      icon: "🔢",
      title: "Numerology Report",
      price: "₹400",
      description: "Detailed numerology analysis based on your name and birth date",
      details: ["Life Path Number", "Destiny Number", "Name Analysis", "Lucky Numbers"],
      duration: "1 Hour"
    },
    {
      icon: "🎯",
      title: "Yearly Horoscope",
      price: "₹700",
      description: "Comprehensive yearly prediction covering all aspects of life",
      details: ["Yearly Forecast", "Monthly Predictions", "Important Dates", "Precautions"],
      duration: "2 Hours",
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">My Services</span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Comprehensive Astrology Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Personalized services to illuminate your life path and guide your decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 border rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm h-full flex flex-col relative ${
                service.popular 
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' 
                  : 'border-gray-700'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  ⭐ Most Popular
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-purple-400">{service.price}</div>
                  <div className="text-xs text-gray-400 mt-1">{service.duration}</div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm flex items-center justify-center space-x-2 group"
                onClick={() => setIsBookingOpen(true)}
              >
                <span>Book Now</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section (SIMPLIFIED - NO FADE)
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Rekha Ji's kundli reading was incredibly accurate! She helped me understand my career path better at a time when I was completely confused.",
      service: "Kundli Reading",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      name: "Rahul Verma",
      text: "First consultation was free and so helpful! I've been coming back regularly for guidance. Her predictions about my job change were spot on.",
      service: "Personal Consultation",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "Anjali Patel",
      text: "The marriage compatibility analysis saved me from a wrong decision. Forever grateful to Rekha Ji for her honest guidance!",
      service: "Marriage Compatibility",
      rating: 5,
      date: "3 months ago"
    },
    {
      name: "Vikram Singh",
      text: "Palm reading revealed aspects of my personality I never knew existed. Truly insightful! Her career guidance changed my life.",
      service: "Palm Reading",
      rating: 5,
      date: "2 months ago"
    },
    {
      name: "Sneha Kapoor",
      text: "Vastu consultation transformed our home energy. My family life improved dramatically after following her suggestions.",
      service: "Vastu Consultation",
      rating: 5,
      date: "4 months ago"
    },
    {
      name: "Rajesh Kumar",
      text: "Yearly horoscope prediction was incredibly accurate. Every major event she predicted happened exactly as she said.",
      service: "Yearly Horoscope",
      rating: 5,
      date: "6 months ago"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Client Experiences</span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Words of Gratitude
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from those who found clarity through divine guidance
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400 text-sm">
                        {"⭐".repeat(testimonial.rating)}
                      </div>
                      <span className="text-gray-500 text-xs">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 text-sm bg-purple-500/10 px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  <span className="text-gray-500 text-xs">Verified Client</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "4.9/5", label: "Average Rating", icon: "⭐" },
                { number: "5000+", label: "Happy Clients", icon: "😊" },
                { number: "98%", label: "Accuracy Rate", icon: "🎯" },
                { number: "100%", label: "Satisfaction", icon: "💫" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Social Proof Section (SIMPLIFIED - NO FADE)
const SocialProof = () => {
  const stats = [
    { number: "5000+", label: "Happy Clients", icon: "😊" },
    { number: "14+", label: "Years Experience", icon: "📅" },
    { number: "98%", label: "Accuracy Rate", icon: "🎯" },
    { number: "24/7", label: "WhatsApp Support", icon: "💬" },
  ];

  const liveSessions = [
    { time: "Just now", name: "Priya S.", service: "Kundli Reading" },
    { time: "5 min ago", name: "Rahul M.", service: "Consultation" },
    { time: "15 min ago", name: "Anjali P.", service: "Marriage Match" },
    { time: "30 min ago", name: "Vikram S.", service: "Career Guidance" },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto content-layer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Live Bookings */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Live Bookings</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Live Now</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {liveSessions.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                      <span>👤</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{session.name}</div>
                      <div className="text-gray-400 text-sm">{session.service}</div>
                    </div>
                  </div>
                  <div className="text-purple-400 text-sm">{session.time}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <p className="text-purple-300 text-sm text-center">
                Next available slot: Today at {Math.floor(Math.random() * 5) + 4}:00 PM
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700 flex flex-col items-center justify-center text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-400 mb-1">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section (SIMPLIFIED - NO FADE)
const FAQSection = () => {
  const faqs = [
    {
      question: "What details do I need to provide for a Kundli reading?",
      answer: "For an accurate Kundli reading, you need your exact date of birth, time of birth (as precise as possible), and place of birth (city, state, country)."
    },
    {
      question: "Is the first consultation really free?",
      answer: "Yes! Your first consultation with Rekha Ji is completely free. This allows you to experience her guidance before committing to paid services."
    },
    {
      question: "How long does a typical consultation last?",
      answer: "A standard consultation lasts 1 hour. You can extend it to 1.5 hours (+₹150) or 2 hours (+₹300) if you need more detailed guidance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Payments are made directly to Rekha Ji after the service via UPI, bank transfer, or cash (for in-person consultations)."
    },
    {
      question: "Can I get guidance for specific problems?",
      answer: "Yes! Rekha Ji specializes in providing guidance for specific life situations including career decisions, relationship issues, health concerns, and financial matters."
    },
    {
      question: "How do I book an appointment?",
      answer: "Simply click the 'Book Now' button, fill in your details including birth information, select your preferred date and time, and the details will be sent to Rekha Ji via WhatsApp."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-4xl mx-auto content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">FAQ</span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Common questions about Rekha Ji's astrology services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <span className="text-purple-400 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Booking Info Section (SIMPLIFIED - NO FADE)
const BookingInfoSection = ({ setIsBookingOpen }) => {
  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 9:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" }
  ];

  return (
    <section id="booking" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto content-layer">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Book Your Session</span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Connect with Rekha Sharma Ji
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple 3-step process to book your divine guidance session
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Booking Process */}
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Choose Service & Time",
                description: "Select from our comprehensive services and pick a convenient time slot",
                icon: "📅"
              },
              {
                step: "02",
                title: "Provide Birth Details",
                description: "Share your date, time, and place of birth for accurate analysis",
                icon: "📝"
              },
              {
                step: "03",
                title: "Confirm via WhatsApp",
                description: "Details sent directly to Rekha Ji's WhatsApp for confirmation",
                icon: "💬"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.icon}
                </div>
                <div>
                  <div className="text-purple-400 text-sm font-semibold mb-1">Step {step.step}</div>
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}

            <button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3"
              onClick={() => setIsBookingOpen(true)}
            >
              <span>Book Appointment Now</span>
              <span className="animate-pulse">✨</span>
            </button>
          </div>

          {/* Right - Working Hours & Pricing */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-white font-bold text-2xl mb-6">Working Hours & Charges</h3>
            
            {/* Working Hours */}
            <div className="mb-8">
              <h4 className="text-purple-400 font-semibold text-lg mb-4">Available Hours</h4>
              <div className="space-y-3">
                {workingHours.map((slot, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">{slot.day}</span>
                    <span className="text-white font-medium">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h4 className="text-purple-400 font-semibold text-lg mb-4">Service Charges</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Kundli Reading</span>
                  <span className="text-white font-medium">₹300</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">First Consultation</span>
                  <span className="text-green-400 font-medium">FREE</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Follow-up Consultation</span>
                  <span className="text-white font-medium">₹300/hour</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Extra 30 minutes</span>
                  <span className="text-white font-medium">+₹150</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Extra 1 hour</span>
                  <span className="text-white font-medium">+₹300</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <p className="text-purple-300 text-sm text-center">
                📞 Direct WhatsApp: +91 85109 88703
              </p>
              <p className="text-gray-400 text-xs text-center mt-1">
                Urgent queries responded within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact CTA Section (SIMPLIFIED - NO FADE)
const ContactCTASection = ({ setIsBookingOpen }) => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/30 via-gray-900/50 to-pink-900/30 rounded-3xl p-12 border border-white/10 backdrop-blur-lg relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div>
              <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Ready for Guidance?</span>
              <h2 className="text-gradient text-4xl lg:text-5xl font-black mb-6">
                Begin Your Spiritual Journey Today
              </h2>
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Connect with Rekha Sharma Ji for personalized divine guidance that transforms lives. 
                Take the first step towards clarity and purpose.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <span>Book Your Session</span>
                  <span className="animate-pulse">✨</span>
                </button>

                <button
                  className="border-2 border-purple-500 text-white px-12 py-5 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300 text-lg"
                  onClick={() => window.open('https://wa.me/918510988703', '_blank')}
                >
                  <span className="flex items-center space-x-2">
                    <span>Chat on WhatsApp</span>
                    <span>💬</span>
                  </span>
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {[
                  { icon: "⚡", text: "Instant WhatsApp Confirmation" },
                  { icon: "🎯", text: "100% Personalized Guidance" },
                  { icon: "💫", text: "14+ Years Expert Experience" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="text-xl">{item.icon}</div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Header Component (SIMPLIFIED - NO FADE)
const Header = ({ setIsBookingOpen }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-dark border-b border-gray-800/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div
            className="text-2xl font-black text-white cursor-pointer"
            onClick={() => {
              setActiveSection('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Rekha<span className="text-gradient">Sharma</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Booking", id: "booking" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-semibold transition-all duration-300 relative ${activeSection === link.id ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                }`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.name}
              {activeSection === link.id && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"/>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Live Indicator */}
          <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-medium">Online Now</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Booking", id: "booking" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block py-2 font-semibold ${activeSection === link.id ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                  }`}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Footer Component (SIMPLIFIED - NO FADE)
// Footer Component - BRIGHT TEXT VERSION
const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-800/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-black text-white mb-6">
              Rekha<span className="text-gradient">Sharma</span>
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Providing divine Vedic astrology guidance to help you navigate life's journey with clarity, purpose, and confidence through celestial wisdom.
            </p>
            <div className="space-y-2">
              <p className="text-white/90 flex items-center space-x-2">
                <span>📧</span>
                <span>guidance@rekhasharma.com</span>
              </p>
              <p className="text-white/90 flex items-center space-x-2">
                <span>📱</span>
                <span>+91 85109 88703 (WhatsApp)</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Testimonials", "Booking", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/80 hover:text-purple-400 transition-colors duration-300 hover:pl-2 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {["Kundli Reading", "Personal Consultation", "Palm Reading", "Marriage Match", "Career Guidance", "Vastu Consultation", "Numerology", "Yearly Horoscope"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/80 hover:text-purple-400 transition-colors duration-300 hover:pl-2 block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <p className="text-white/80">Get daily cosmic insights and astrology tips</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white"
                >
                  <span>📱</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white"
                >
                  <span>📘</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white"
                >
                  <span>📸</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white"
                >
                  <span>🎥</span>
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 text-sm">
                  <span className="text-green-400">📞</span> Emergency guidance available 24/7 on WhatsApp
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Instant response for urgent consultations
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-white/70 text-sm mb-1">
                © {new Date().getFullYear()} Rekha Sharma Astrology Services. All divine wisdom reserved.
              </p>
              <p className="text-white/50 text-xs">
                Trusted by 5000+ clients across India
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Home Component
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Force opacity fix on mount
  useEffect(() => {
    // Force all elements to be fully visible
    setTimeout(() => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
    }, 100);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-spin"></div>
            <div className="absolute inset-4 border-4 border-transparent border-t-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl">✨</span>
            </div>
          </div>
          <div className="text-white text-2xl font-semibold">Rekha Sharma Astrology</div>
          <div className="text-purple-400 text-sm mt-2">Loading divine wisdom...</div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-white w-full overflow-x-hidden bg-black">
      <InteractiveBackground />
      
      <Header setIsBookingOpen={setIsBookingOpen} />
      <AstrologerHero setIsBookingOpen={setIsBookingOpen} />
      <AboutAstrologer />
      <ServicesSection setIsBookingOpen={setIsBookingOpen} />
      <TestimonialsSection />
      
      {/* NEW EDUCATIONAL COMPONENTS */}
      <VedicAstrologyKnowledge />
      <MoonPhasesPlanetary />
      <NakshatraGuidance />
      
      <SocialProof />
      <FAQSection />
      <BookingInfoSection setIsBookingOpen={setIsBookingOpen} />
      <ContactCTASection setIsBookingOpen={setIsBookingOpen} />
      <Footer />

      {/* Booking Form Modal */}
      {isBookingOpen && (
        <BookingForm 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
        />
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4 z-40 floating-layer">
        {/* WhatsApp Button */}
        <button
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-green-500/30 hover:scale-110 transition-all duration-300 animate-pulse-glow"
          onClick={() => window.open('https://wa.me/918510988703', '_blank')}
          aria-label="Chat on WhatsApp"
        >
          <span>💬</span>
        </button>

        {/* Book Now Button */}
        <button
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-purple-500/30 hover:scale-110 transition-all duration-300"
          onClick={() => setIsBookingOpen(true)}
          aria-label="Book Appointment"
        >
          <span>📅</span>
        </button>

        {/* Call Button (for mobile) */}
        <button
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300 lg:hidden"
          onClick={() => window.location.href = 'tel:+918510988703'}
          aria-label="Call Now"
        >
          📞
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-6 left-6 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-purple-500 transition-colors z-40 floating-layer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </main>
  );
}