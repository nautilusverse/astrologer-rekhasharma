"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import "./globals.css";
import { addBooking, getBookingsByDate } from '@/lib/firebase';

// Custom hook to fix opacity issues
const useFixOpacity = () => {
  useEffect(() => {
    setTimeout(() => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
    }, 100);
  }, []);
};

// NEW: Vedic Astrology Foundations Component
const VedicAstrologyFoundations = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  
  const topics = [
    {
      title: "The Five Elements",
      icon: "🌿",
      description: "Understanding Pancha Mahabhutas",
      content: [
        "Earth (Prithvi): Stability, structure, physical body",
        "Water (Jal): Emotions, intuition, fluidity",
        "Fire (Agni): Energy, transformation, digestion",
        "Air (Vayu): Movement, communication, nervous system",
        "Ether (Akash): Space, consciousness, spirituality"
      ],
      fact: "Each zodiac sign is governed by a specific element that influences personality traits"
    },
    {
      title: "The Three Gunas",
      icon: "⚖️",
      description: "Qualities of Nature according to Ayurveda",
      content: [
        "Sattva: Purity, harmony, balance (light, upward movement)",
        "Rajas: Activity, passion, motion (dynamic, outward movement)",
        "Tamas: Inertia, stability, resistance (heavy, downward movement)",
        "All three gunas are present in everyone",
        "Balance shifts based on planetary influences"
      ],
      fact: "Planetary positions at birth determine your dominant guna"
    },
    {
      title: "Karma & Destiny",
      icon: "🔄",
      description: "Understanding Sanchita, Prarabdha, and Kriyamana Karma",
      content: [
        "Sanchita: Accumulated karma from all past lives",
        "Prarabdha: Destiny - karma being experienced now",
        "Kriyamana: Current actions creating future karma",
        "Kundli shows prarabdha karma patterns",
        "Remedies help balance karmic influences"
      ],
      fact: "Astrology helps understand prarabdha karma for better life decisions"
    },
    {
      title: "Planetary Periods (Dasha)",
      icon: "⏳",
      description: "Timing of life events through Vimshottari Dasha",
      content: [
        "120-year cycle divided among 9 planets",
        "Each planet rules for specific years",
        "Major life events occur during specific dashas",
        "Sub-periods (Bhukti) provide monthly timing",
        "Dasha analysis predicts timing of events"
      ],
      fact: "Current Mahadasha determines overall life theme for that period"
    }
  ];

  useFixOpacity();

  return (
    <section className="py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            Vedic Astrology Foundations
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Ancient Wisdom, Timeless Knowledge
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Essential principles of Vedic astrology that form the basis of all readings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Topics Selection */}
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <button
                key={index}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${activeTopic === index
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50'
                    : 'bg-gray-900/80 border border-gray-700 hover:border-purple-500/30'
                  }`}
                onClick={() => setActiveTopic(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{topic.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{topic.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{topic.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Topic Details */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">{topics[activeTopic].icon}</div>
              <div>
                <h3 className="text-white text-2xl font-bold">{topics[activeTopic].title}</h3>
                <p className="text-purple-300">{topics[activeTopic].description}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {topics[activeTopic].content.map((point, index) => (
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
                <p className="text-purple-300 font-medium">{topics[activeTopic].fact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// NEW: Zodiac Sign Characteristics Component
const ZodiacSignCharacteristics = () => {
  const [activeElement, setActiveElement] = useState(0);
  
  const zodiacSigns = [
    {
      element: "Fire Signs",
      icon: "🔥",
      signs: [
        { name: "Aries", ruler: "Mars", traits: "Courageous, energetic, impulsive" },
        { name: "Leo", ruler: "Sun", traits: "Confident, generous, proud" },
        { name: "Sagittarius", ruler: "Jupiter", traits: "Optimistic, adventurous, philosophical" }
      ],
      characteristics: "Action-oriented, passionate, inspirational"
    },
    {
      element: "Earth Signs",
      icon: "🌍",
      signs: [
        { name: "Taurus", ruler: "Venus", traits: "Patient, reliable, stubborn" },
        { name: "Virgo", ruler: "Mercury", traits: "Analytical, practical, perfectionist" },
        { name: "Capricorn", ruler: "Saturn", traits: "Ambitious, disciplined, reserved" }
      ],
      characteristics: "Practical, stable, materialistic"
    },
    {
      element: "Air Signs",
      icon: "💨",
      signs: [
        { name: "Gemini", ruler: "Mercury", traits: "Adaptable, curious, restless" },
        { name: "Libra", ruler: "Venus", traits: "Diplomatic, social, indecisive" },
        { name: "Aquarius", ruler: "Saturn/Uranus", traits: "Innovative, independent, detached" }
      ],
      characteristics: "Intellectual, communicative, social"
    },
    {
      element: "Water Signs",
      icon: "💧",
      signs: [
        { name: "Cancer", ruler: "Moon", traits: "Nurturing, emotional, protective" },
        { name: "Scorpio", ruler: "Mars/Pluto", traits: "Intense, passionate, secretive" },
        { name: "Pisces", ruler: "Jupiter/Neptune", traits: "Compassionate, intuitive, dreamy" }
      ],
      characteristics: "Emotional, intuitive, sensitive"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            Zodiac Wisdom
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Understanding The 12 Zodiac Signs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each sign has unique characteristics influenced by elements and planetary rulers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {zodiacSigns.map((element, index) => (
            <button
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${activeElement === index
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50'
                  : 'bg-gray-900/80 border border-gray-700 hover:border-purple-500/30'
                }`}
              onClick={() => setActiveElement(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{element.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{element.element}</h3>
                <p className="text-gray-400 text-sm">{element.characteristics}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Element Details */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-5xl">{zodiacSigns[activeElement].icon}</div>
            <div>
              <h3 className="text-white text-2xl font-bold">{zodiacSigns[activeElement].element}</h3>
              <p className="text-purple-300">{zodiacSigns[activeElement].characteristics}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {zodiacSigns[activeElement].signs.map((sign, index) => (
              <div
                key={index}
                className="bg-gray-900/80 rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"][index + (activeElement * 3)]}</div>
                  <h4 className="text-white font-bold text-xl mb-2">{sign.name}</h4>
                  <div className="text-purple-400 text-sm mb-3">Ruler: {sign.ruler}</div>
                  <p className="text-gray-300 text-sm">{sign.traits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// NEW: Astrological Remedies Guide Component
const AstrologicalRemediesGuide = () => {
  const remedies = [
    {
      category: "Gemstones",
      icon: "💎",
      items: [
        { name: "Ruby", planet: "Sun", benefits: "Confidence, authority, health" },
        { name: "Pearl", planet: "Moon", benefits: "Emotional balance, peace" },
        { name: "Red Coral", planet: "Mars", benefits: "Courage, energy, property" },
        { name: "Emerald", planet: "Mercury", benefits: "Intelligence, communication" },
        { name: "Yellow Sapphire", planet: "Jupiter", benefits: "Wisdom, wealth, children" },
        { name: "Diamond", planet: "Venus", benefits: "Love, beauty, luxury" },
        { name: "Blue Sapphire", planet: "Saturn", benefits: "Discipline, career, longevity" }
      ],
      note: "Must be worn only after proper astrological consultation"
    },
    {
      category: "Mantras",
      icon: "🕉️",
      items: [
        { name: "Gayatri Mantra", planet: "Sun", benefits: "Universal consciousness, enlightenment" },
        { name: "Shiva Mantra", planet: "Moon", benefits: "Emotional stability, mental peace" },
        { name: "Hanuman Mantra", planet: "Mars", benefits: "Strength, protection, courage" },
        { name: "Vishnu Mantra", planet: "Mercury", benefits: "Knowledge, communication" },
        { name: "Guru Mantra", planet: "Jupiter", benefits: "Wisdom, prosperity, guidance" },
        { name: "Lakshmi Mantra", planet: "Venus", benefits: "Beauty, wealth, relationships" },
        { name: "Shani Mantra", planet: "Saturn", benefits: "Karmic balance, patience" }
      ],
      note: "Chant specific number of times as per astrological prescription"
    },
    {
      category: "Fasting & Rituals",
      icon: "🙏",
      items: [
        { name: "Monday Fast", planet: "Moon", benefits: "Emotional harmony, family peace" },
        { name: "Tuesday Fast", planet: "Mars", benefits: "Courage, property matters" },
        { name: "Wednesday Fast", planet: "Mercury", benefits: "Communication, business success" },
        { name: "Thursday Fast", planet: "Jupiter", benefits: "Wisdom, prosperity, children" },
        { name: "Friday Fast", planet: "Venus", benefits: "Love, marriage, artistic skills" },
        { name: "Saturday Fast", planet: "Saturn", benefits: "Karmic relief, career growth" },
        { name: "Sunday Fast", planet: "Sun", benefits: "Health, authority, government matters" }
      ],
      note: "Follow specific rituals as per Vedic traditions"
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            Vedic Remedies
          </span>
          <h2 className="text-gradient text-3xl lg:text-4xl font-black mb-4">
            Astrological Solutions & Remedies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Traditional Vedic methods to balance planetary influences and overcome challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {remedies.map((remedy, index) => (
            <button
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${activeCategory === index
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50'
                  : 'bg-gray-900/80 border border-gray-700 hover:border-purple-500/30'
                }`}
              onClick={() => setActiveCategory(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{remedy.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{remedy.category}</h3>
                <p className="text-gray-400 text-sm">Click to learn more</p>
              </div>
            </button>
          ))}
        </div>

        {/* Remedies Details */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-5xl">{remedies[activeCategory].icon}</div>
            <div>
              <h3 className="text-white text-2xl font-bold">{remedies[activeCategory].category}</h3>
              <p className="text-purple-300">Vedic Astrological Solutions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {remedies[activeCategory].items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/80 rounded-xl p-5 border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg mb-2">{item.name}</h4>
                  <div className="text-purple-400 text-sm mb-3">For: {item.planet}</div>
                  <p className="text-gray-300 text-sm">{item.benefits}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 text-xl">⚠️</span>
              <div>
                <p className="text-yellow-300 font-medium">Important Note:</p>
                <p className="text-yellow-200 text-sm">{remedies[activeCategory].note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// UPDATED BOOKING FORM WITH FIREBASE INTEGRATION
const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    appointmentDate: '',
    timeSlot: '',
    serviceType: 'kundli',
    isFirstTime: true,
    gender: '',
    maritalStatus: '',
    specialRequest: '',
    appointmentType: 'video'
  });

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDateSlots, setSelectedDateSlots] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(false);
  const formRef = useRef(null);

  // Service durations in minutes
  const serviceDurations = {
    'kundli': 60,
    'consultation': 30,
    'palmistry': 60,
    'marriage': 30,
    'career': 30,
    'vastu': 120,
    'numerology': 60,
    'horoscope': 60
  };

  // Service details for display
  const serviceDetails = {
    'kundli': { name: 'Kundli Reading', price: 300, duration: '1 Hour' },
    'consultation': { name: 'Personal Consultation', price: 300, duration: '30 Min' },
    'palmistry': { name: 'Palm Reading', price: 500, duration: '30 Min' },
    'marriage': { name: 'Marriage Compatibility', price: 300, duration: '30 Min' },
    'career': { name: 'Career Guidance', price: 500, duration: '30 Min' },
    'vastu': { name: 'Vastu Consultation', price: 2100, duration: '2 Hours' },
    'numerology': { name: 'Numerology Report', price: 500, duration: '1 Hour' },
    'horoscope': { name: 'Yearly Horoscope', price: 500, duration: '1 Hour' }
  };

  // Generate time slots (11:00 AM to 9:00 PM) - UPDATED WORKING HOURS
  const generateTimeSlots = () => {
    const slots = [];
    
    // Client working hours: 11:00 AM to 9:00 PM (21:00)
    const startHour = 11; // 11 AM
    const endHour = 21; // 9 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        // Stop if we reach 9:00 PM
        if (hour === 21 && minute > 0) break;
        
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    
    return slots;
  };

  // Format time for display
  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    const [hour, minute] = timeStr.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  // Get next 30 available dates (skip Sundays and manually closed dates) - UPDATED: CURRENT DATE SE SHURU
  const getNext30Days = () => {
    const dates = [];
    const today = new Date();
    
    // Load closed dates from localStorage
    let manualClosedDates = [];
    if (typeof window !== 'undefined') {
      const storedDates = localStorage.getItem('rekhaClosedDates');
      if (storedDates) {
        manualClosedDates = JSON.parse(storedDates);
      }
    }
    
    // Start from today (not tomorrow)
    for (let i = 0; i < 60; i++) { // Check next 60 days to get 30 available dates
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip if it's Sunday (day 0)
      if (date.getDay() === 0) {
        continue;
      }
      
      const dateStr = date.toISOString().split('T')[0];
      const todayStr = today.toISOString().split('T')[0];
      
      // Skip manually closed dates
      if (manualClosedDates.includes(dateStr)) {
        continue;
      }
      
      // If date is today, check if current time is past working hours
      if (dateStr === todayStr) {
        const currentHour = today.getHours();
        const currentMinute = today.getMinutes();
        const currentTime = currentHour * 60 + currentMinute;
        
        // If current time is after 9 PM (21:00), skip today
        if (currentTime >= 21 * 60) {
          continue;
        }
        
        // If current time is after 8:30 PM, skip today (last slot starts at 8:30 PM)
        if (currentTime >= (20 * 60 + 30)) {
          continue;
        }
      }
      
      // Only add dates from today onwards
      if (dateStr >= todayStr) {
        dates.push(dateStr);
      }
      
      // Stop when we have 30 available dates
      if (dates.length >= 30) {
        break;
      }
    }
    
    console.log("📅 Available dates:", dates);
    return dates;
  };

  // Calculate end time
  const calculateEndTime = (startTime, serviceType) => {
    const duration = serviceDurations[serviceType] || 60;
    const [hour, minute] = startTime.split(':').map(Number);
    
    const endHour = hour + Math.floor((minute + duration) / 60);
    const endMinute = (minute + duration) % 60;
    
    return `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
  };

  // Fetch booked slots from Firebase
  const fetchBookedSlotsForDate = async (date) => {
    try {
      console.log(`📡 Fetching bookings for ${date}...`);
      const result = await getBookingsByDate(date);
      
      if (result.success) {
        const bookedSlots = result.data.map(booking => {
          const endTime = booking.endTime || calculateEndTime(booking.timeSlot, booking.serviceType);
          return {
            start: booking.timeSlot,
            end: endTime,
            service: booking.serviceType,
            bookingId: booking.bookingId || booking.id,
            customer: booking.name,
            cancelled: booking.cancelled || false
          };
        }).filter(booking => !booking.cancelled); // Filter out cancelled bookings
        
        console.log(`📊 Found ${bookedSlots.length} active booked slots`);
        return bookedSlots;
      }
      
      return [];
    } catch (error) {
      console.error("❌ Error fetching booked slots:", error);
      return [];
    }
  };

  // Get current time in minutes from midnight
  const getCurrentTimeInMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  // Get available slots - IMPROVED TIME FILTERING (CURRENT TIME KE HISAB SE)
  const getAvailableSlotsForDate = async (date, serviceType) => {
    console.log(`🔍 Getting slots for ${date}, ${serviceType}`);
    
    const allSlots = generateTimeSlots();
    const bookedSlots = await fetchBookedSlotsForDate(date);
    const duration = serviceDurations[serviceType] || 60;
    const availableSlots = [];
    const selectedDate = new Date(date);
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const selectedDateStr = selectedDate.toISOString().split('T')[0];

    // Get current time in minutes
    const currentTimeMinutes = getCurrentTimeInMinutes();

    // Check each slot
    allSlots.forEach(slot => {
      const slotHour = parseInt(slot.split(':')[0]);
      const slotMinute = parseInt(slot.split(':')[1]);
      const slotTimeMinutes = slotHour * 60 + slotMinute;
      
      // Calculate end time
      const endHour = slotHour + Math.floor((slotMinute + duration) / 60);
      const endMinute = (slotMinute + duration) % 60;
      const endSlot = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
      
      // Skip if selected date is today and slot is in the past
      if (selectedDateStr === todayStr) {
        if (slotTimeMinutes < currentTimeMinutes) {
          return; // Skip past slots for today
        }
        
        // Also skip if slot ends after 9 PM but starts before current time
        if (endHour > 21 || (endHour === 21 && endMinute > 0)) {
          return;
        }
      }
      
      // Check working hours (end time should not exceed 9:00 PM)
      if (endHour > 21 || (endHour === 21 && endMinute > 0)) {
        return;
      }
      
      // Check if slot conflicts with booked slots
      let isAvailable = true;
      
      for (const booked of bookedSlots) {
        if (
          // Our slot starts during booked time
          (slot >= booked.start && slot < booked.end) ||
          // Our slot ends during booked time
          (endSlot > booked.start && endSlot <= booked.end) ||
          // Our slot covers booked time
          (slot <= booked.start && endSlot >= booked.end)
        ) {
          isAvailable = false;
          break;
        }
      }
      
      if (isAvailable) {
        availableSlots.push({
          start: slot,
          end: endSlot,
          display: `${formatTime(slot)} - ${formatTime(endSlot)} (${duration} min)`
        });
      }
    });
    
    console.log(`✅ Available slots found: ${availableSlots.length}`);
    return availableSlots;
  };

  // Send WhatsApp message with cancellation links - UPDATED 3 HOURS RULE
  const sendBookingConfirmation = async (bookingData, bookingId) => {
    const serviceInfo = serviceDetails[bookingData.serviceType];
    const appointmentTypeText = bookingData.appointmentType === 'video' ? 'Video Call' : 'In-Person';
    
    // NETLIFY URL
    const baseUrl = "https://rekhasharma.in";
    
    // Calculate appointment time for cancellation deadline
    const appointmentDate = new Date(bookingData.appointmentDate);
    const [hour, minute] = bookingData.timeSlot.split(':');
    appointmentDate.setHours(parseInt(hour), parseInt(minute), 0);
    
    const deadlineTime = new Date(appointmentDate);
    deadlineTime.setHours(appointmentDate.getHours() - 3); // 3 hours before
    
    // Generate WhatsApp message for Rekha Ji
    const rekhaMessage = `🌟 *NEW APPOINTMENT BOOKING* 🌟%0A%0A` +
                       `*Booking ID:* ${bookingId}%0A` +
                       `*Date:* ${new Date(bookingData.appointmentDate).toLocaleDateString('en-IN', {
                         weekday: 'long',
                         day: 'numeric',
                         month: 'long',
                         year: 'numeric'
                       })}%0A` +
                       `*Time:* ${formatTime(bookingData.timeSlot)} - ${formatTime(bookingData.endTime)}%0A` +
                       `*Service:* ${serviceInfo.name}%0A` +
                       `*Duration:* ${serviceInfo.duration}%0A` +
                       `*Type:* ${appointmentTypeText}%0A` +
                       `*Charges:* ₹${calculateCharges()}%0A%0A` +
                       `*Client Details*%0A` +
                       `👤 Name: ${bookingData.name}%0A` +
                       `📱 Phone: ${bookingData.phone}%0A` +
                       `${bookingData.email ? `📧 Email: ${bookingData.email}%0A` : ''}` +
                       `${bookingData.gender ? `⚧ Gender: ${bookingData.gender}%0A` : ''}` +
                       `${bookingData.maritalStatus ? `💍 Status: ${bookingData.maritalStatus}%0A` : ''}` +
                       `%0A*Birth Details*%0A` +
                       `🎂 DOB: ${bookingData.dateOfBirth}%0A` +
                       `${bookingData.timeOfBirth ? `⏰ Time: ${bookingData.timeOfBirth}%0A` : ''}` +
                       `📍 Place: ${bookingData.placeOfBirth}%0A%0A` +
                       `${bookingData.specialRequest ? `*Special Request:*%0A${bookingData.specialRequest}%0A%0A` : ''}` +
                       `---%0A` +
                       `*📋 CANCELLATION POLICY:*%0A` +
                       `• User must cancel minimum 3 hours before appointment%0A` +
                       `• Cancellation link: ${baseUrl}/cancel/${bookingId}%0A` +
                       `• After 3 hours, contact Rekha Ji directly%0A` +
                       `• Late cancellations may be charged 50%%0A` +
                       `---%0A` +
                       
                       `✅ *Please confirm this booking* ✅%0A%0A` +
                       `_Booked via Rekha Sharma Astrology Website_`;
    
    // Send to Rekha Ji's WhatsApp
    const rekhaWhatsappURL = `https://wa.me/918130075378?text=${rekhaMessage}`;
    
    // Also send to user if they have WhatsApp (USER KO SIRF CANCEL LINK)
    const userMessage = `✅ *Booking Confirmed!* ✅%0A%0A` +
                       `*Booking ID:* ${bookingId}%0A` +
                       `*Date:* ${new Date(bookingData.appointmentDate).toLocaleDateString('en-IN', {
                         weekday: 'short',
                         day: 'numeric',
                         month: 'short'
                       })}%0A` +
                       `*Time:* ${formatTime(bookingData.timeSlot)} - ${formatTime(bookingData.endTime)}%0A` +
                       `*Service:* ${serviceInfo.name}%0A` +
                       `*Type:* ${appointmentTypeText}%0A` +
                       `*Charges:* ₹${calculateCharges()}%0A%0A` +
                       `📝 *Need to cancel or reschedule?*%0A` +
                       `Cancel here: ${baseUrl}/cancel/${bookingId}%0A` +
                       `%0A` +
                       `⚠️ *IMPORTANT CANCELLATION POLICY* ⚠️%0A` +
                       `• Cancellation must be done minimum *3 HOURS* before appointment%0A` +
                       `• Late cancellations (within 3 hours) will be charged 50%%0A` +
                       `• After cancellation deadline, contact Rekha Ji directly: +91 8130075378%0A` +
                       `• Your slot will reopen for others if cancelled 3+ hours before%0A` +
                       `%0A` +
                       `*Cancellation Deadline:* ${deadlineTime.toLocaleTimeString('en-IN', {hour: '2-digit', minute:'2-digit'})} (${deadlineTime.toLocaleDateString('en-IN')})%0A` +
                       `%0A_Thank you for choosing Rekha Sharma Astrology Services_`;
    
    const userWhatsappURL = `https://wa.me/91${bookingData.phone}?text=${userMessage}`;
    
    // Open both in new tabs
    window.open(rekhaWhatsappURL, '_blank');
    setTimeout(() => {
      window.open(userWhatsappURL, '_blank');
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (formData.appointmentDate && formData.serviceType) {
      console.log(`🔄 Loading slots for ${formData.appointmentDate}...`);
      
      const loadSlots = async () => {
        setBookingsLoading(true);
        try {
          const slots = await getAvailableSlotsForDate(formData.appointmentDate, formData.serviceType);
          setSelectedDateSlots(slots);
          
          // Reset time slot if not available
          if (formData.timeSlot && !slots.find(s => s.start === formData.timeSlot)) {
            console.log(`⚠️ Slot ${formData.timeSlot} no longer available, resetting...`);
            setFormData(prev => ({ ...prev, timeSlot: '' }));
          }
        } catch (error) {
          console.error("Error loading slots:", error);
          setSelectedDateSlots([]);
        } finally {
          setBookingsLoading(false);
        }
      };
      
      loadSlots();
    } else {
      setSelectedDateSlots([]);
    }
  }, [formData.appointmentDate, formData.serviceType]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Calculate end time
      const selectedSlot = selectedDateSlots.find(s => s.start === formData.timeSlot);
      const endTime = selectedSlot ? selectedSlot.end : calculateEndTime(formData.timeSlot, formData.serviceType);

      // Prepare booking data
      const bookingData = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: (formData.email || '').trim(),
        dateOfBirth: formData.dateOfBirth,
        timeOfBirth: (formData.timeOfBirth || '').trim(),
        placeOfBirth: formData.placeOfBirth.trim(),
        appointmentDate: formData.appointmentDate,
        timeSlot: formData.timeSlot,
        endTime: endTime,
        serviceType: formData.serviceType,
        appointmentType: formData.appointmentType,
        isFirstTime: formData.isFirstTime,
        gender: (formData.gender || '').trim(),
        maritalStatus: (formData.maritalStatus || '').trim(),
        specialRequest: (formData.specialRequest || '').trim(),
        charges: calculateCharges(),
        whatsappSent: false,
        cancelled: false,
        status: 'confirmed'
      };

      console.log('💾 Saving to Firebase...', bookingData);

      // Save to Firebase
      const result = await addBooking(bookingData);
      
      if (result.success) {
        // Send WhatsApp messages with cancellation links
        await sendBookingConfirmation(bookingData, result.bookingId);
        
        // Show success message
        alert(`✅ Booking confirmed!\n\nBooking ID: ${result.bookingId}\n\nWhatsApp messages opened for confirmation...`);
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          dateOfBirth: '',
          timeOfBirth: '',
          placeOfBirth: '',
          appointmentDate: '',
          timeSlot: '',
          serviceType: 'kundli',
          isFirstTime: true,
          gender: '',
          maritalStatus: '',
          specialRequest: '',
          appointmentType: 'video'
        });
        
        setStep(1);
        setLoading(false);
        onClose();
        
      } else {
        alert(`❌ Error: ${result.error || 'Could not save booking'}`);
        setLoading(false);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('❌ An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.phone)) {
      alert('Please fill in your name and phone number');
      return;
    }
    if (step === 2 && (!formData.dateOfBirth || !formData.placeOfBirth)) {
      alert('Please fill in your date of birth and place of birth');
      return;
    }
    if (step === 3 && (!formData.appointmentDate || !formData.timeSlot)) {
      alert('Please select appointment date and time');
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const calculateCharges = () => {
    const basePrice = serviceDetails[formData.serviceType]?.price || 0;
    
    
    
    return basePrice;
  };

  const steps = [
    { number: 1, title: "Personal", icon: "👤" },
    { number: 2, title: "Birth", icon: "🎂" },
    { number: 3, title: "Appointment", icon: "📅" },
    { number: 4, title: "Review", icon: "✅" }
  ];

  return (
    <div className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 modal-layer ${isOpen ? 'block' : 'hidden'}`}>
      <div
        ref={formRef}
        className="bg-gray-900/95 rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full border border-purple-500/40 shadow-2xl backdrop-blur-xl max-h-[90vh] overflow-y-auto booking-form-fix"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">Book with Rekha Sharma Ji</h3>
            <p className="text-purple-300 text-xs sm:text-sm">Real-time availability check</p>
            {bookingsLoading && (
              <p className="text-green-400 text-xs mt-1 animate-pulse">
                🔄 Checking availability...
              </p>
            )}
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Progress Steps */}
        <div className="mb-6">
          <div className="flex justify-between mb-3">
            {steps.map((stepItem) => (
              <div key={stepItem.number} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 text-sm sm:text-base ${step >= stepItem.number ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                  {stepItem.icon}
                </div>
                <span className={`text-xs ${step >= stepItem.number ? 'text-purple-300' : 'text-gray-500'}`}>
                  {stepItem.title}
                </span>
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-gray-800 rounded-full">
            <div 
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Personal Information</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                    placeholder="Your full name"
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
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                    placeholder="10-digit number"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Marital Status</label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                  >
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Next: Birth Details</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Birth Details */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Birth Details</h4>
              
              <div className="space-y-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 text-sm">
                  ⚠️ Accurate birth details are essential for precise astrological analysis
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Time of Birth</label>
                    <input
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleChange}
                      className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Place of Birth *</label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                    placeholder="City, State, Country"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 border border-gray-600 text-white py-3.5 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>←</span>
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Next: Appointment</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Appointment Details */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Appointment Details</h4>

              {/* Service Type */}
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Service Type *</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { type: 'kundli', name: 'Kundli Reading', price: '₹1100', duration: '1 Hour' },
                    { type: 'consultation', name: 'Personal Consultation', price: '₹300', duration: '30 Min' },
                    { type: 'palmistry', name: 'Palm Reading', price: '₹500', duration: '30 Min' },
                    { type: 'marriage', name: 'Marriage Compatibility', price: '₹300', duration: '30 Min' },
                    { type: 'career', name: 'Career Guidance', price: '₹500', duration: '30 Min' },
                    { type: 'vastu', name: 'Vastu Consultation', price: '₹2100', duration: '2 Hours' },
                    { type: 'numerology', name: 'Numerology Report', price: '₹500', duration: '1 Hour' },
                    { type: 'horoscope', name: 'Yearly Horoscope', price: '₹500', duration: '1 Hour' }
                  ].map((service) => (
                    <button
                      key={service.type}
                      type="button"
                      onClick={() => setFormData(prev => ({ 
                        ...prev, 
                        serviceType: service.type,
                        timeSlot: ''
                      }))}
                      className={`py-3 px-3 rounded-xl border transition-all duration-300 ${formData.serviceType === service.type
                          ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                          : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50'
                        }`}
                    >
                      <div className="font-semibold text-sm">{service.name}</div>
                      <div className="text-xs opacity-80 mt-1">{service.price} • {service.duration}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Appointment Date *</label>
                  <select
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none"
                  >
                    <option value="">Select date</option>
                    {getNext30Days().map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-IN', { 
                          weekday: 'short', 
                          day: 'numeric', 
                          month: 'short'
                        })}
                        {new Date(date).toDateString() === new Date().toDateString() ? ' (Today)' : ''}
                      </option>
                    ))}
                  </select>
                  <p className="text-gray-400 text-xs mt-1">
                    Sundays automatically excluded • Showing dates from today
                  </p>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Time Slot *</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    disabled={!formData.appointmentDate || selectedDateSlots.length === 0}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none disabled:opacity-50"
                  >
                    <option value="">
                      {!formData.appointmentDate 
                        ? 'Select date first' 
                        : bookingsLoading
                          ? 'Checking availability...'
                          : selectedDateSlots.length === 0 
                            ? 'No slots available' 
                            : 'Select time'}
                    </option>
                    {selectedDateSlots.map((slot, index) => (
                      <option key={index} value={slot.start}>
                        {slot.display}
                      </option>
                    ))}
                  </select>
                  
                  {formData.appointmentDate && selectedDateSlots.length > 0 && (
                    <p className="text-green-400 text-xs mt-1">
                      ✅ Showing available slots from current time
                    </p>
                  )}
                  
                  {formData.appointmentDate && selectedDateSlots.length === 0 && !bookingsLoading && (
                    <p className="text-red-400 text-xs mt-1">
                      ⚠️ No slots available. Please try another date.
                    </p>
                  )}
                </div>
              </div>

              {/* Appointment Type */}
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Appointment Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {['video', 'inperson'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, appointmentType: type }))}
                      className={`py-3 rounded-xl border transition-all duration-300 ${formData.appointmentType === type
                          ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                          : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50'
                        }`}
                    >
                      <div className="text-lg mb-1">
                        {type === 'video' ? '📹' : '👥'}
                      </div>
                      <div className="text-xs font-semibold capitalize">
                        {type === 'inperson' ? 'In Person' : 'Video Call'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              
              

              {/* Special Request */}
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Special Request (Optional)</label>
                <textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChange}
                  rows="2"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none"
                  placeholder="Any specific concerns or questions..."
                />
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 border border-gray-600 text-white py-3.5 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>←</span>
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Review & Book</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Review Your Booking</h4>

              <div className="space-y-4">
                {/* Personal Details */}
                <div className="bg-gray-800/30 rounded-xl p-4">
                  <h5 className="text-purple-300 font-semibold mb-2 flex items-center">
                    <span className="mr-2">👤</span> Personal Details
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white ml-2">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Phone:</span>
                      <span className="text-white ml-2">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Gender:</span>
                      <span className="text-white ml-2">{formData.gender || 'Not specified'}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Status:</span>
                      <span className="text-white ml-2">{formData.maritalStatus || 'Not specified'}</span>
                    </div>
                  </div>
                </div>

                {/* Birth Details */}
                <div className="bg-gray-800/30 rounded-xl p-4">
                  <h5 className="text-purple-300 font-semibold mb-2 flex items-center">
                    <span className="mr-2">🎂</span> Birth Details
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Date of Birth:</span>
                      <span className="text-white ml-2">{formData.dateOfBirth}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Time of Birth:</span>
                      <span className="text-white ml-2">{formData.timeOfBirth || 'Not specified'}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-gray-400">Place of Birth:</span>
                      <span className="text-white ml-2">{formData.placeOfBirth}</span>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="bg-gray-800/30 rounded-xl p-4">
                  <h5 className="text-purple-300 font-semibold mb-2 flex items-center">
                    <span className="mr-2">📅</span> Appointment Details
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white ml-2">
                        {new Date(formData.appointmentDate).toLocaleDateString('en-IN', { 
                          weekday: 'long', 
                          day: 'numeric', 
                          month: 'long' 
                        })}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white ml-2">
                        {formData.timeSlot ? formatTime(formData.timeSlot) + ' - ' + 
                          formatTime(selectedDateSlots.find(s => s.start === formData.timeSlot)?.end || '') : 'Not selected'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Type:</span>
                      <span className="text-white ml-2 capitalize">
                        {formData.appointmentType === 'video' ? 'Video Call' : 'In-Person'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Service:</span>
                      <span className="text-white ml-2">
                        {serviceDetails[formData.serviceType]?.name || 'Unknown Service'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white ml-2">{serviceDetails[formData.serviceType]?.duration || '1 Hour'}</span>
                    </div>
                  </div>
                </div>

                {/* Charges Summary */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Total Charges:</span>
                    <span className="text-2xl font-bold text-purple-400">₹{calculateCharges()}</span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Payment to be made directly to Rekha Sharma Ji after service completion
                  </p>
                  <div className="mt-2 p-2 bg-yellow-900/30 rounded-lg border border-yellow-700/50">
                    <p className="text-yellow-400 text-xs font-semibold flex items-center">
                      <span className="mr-1">⚠️</span> Cancellation Policy
                    </p>
                    <p className="text-yellow-300 text-xs mt-1">
                      • Minimum 3 hours notice required for cancellation<br/>
                      • Late cancellations charged 50%<br/>
                      • Cancellation link will be sent via WhatsApp
                    </p>
                  </div>
                </div>

                {/* Special Request */}
                {formData.specialRequest && (
                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <h5 className="text-purple-300 font-semibold mb-2">Special Request:</h5>
                    <p className="text-gray-300 text-sm">{formData.specialRequest}</p>
                  </div>
                )}
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 border border-gray-600 text-white py-3.5 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>←</span>
                  <span>Edit</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 ${loading 
                      ? 'bg-gray-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    } text-white py-3.5 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      <span>Saving to Database...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-base">Book via WhatsApp</span>
                      <span className="text-xl animate-pulse">📱</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="text-center pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              All bookings saved in secure database
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Step {step} of 4
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Interactive Background
const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(162, 89, 247, 0.2) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(247, 106, 238, 0.2) 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}
      ></div>

      <div className="absolute inset-0">
        {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-purple-400/10 sm:text-purple-400/20 text-2xl sm:text-4xl zodiac-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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

      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 mystic-orb rounded-full blur-2xl sm:blur-3xl pointer-events-none"/>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-500/5 sm:from-purple-500/10 via-pink-500/5 sm:via-pink-500/10 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none"/>
    </div>
  );
};

// Astrologer Hero Section
const AstrologerHero = ({ setIsBookingOpen }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Career Guidance", "Vedic Astrology", "Kundli", "Palmistry", "Numerology", "Lal Kitab", "Marriage Matching", "Vastu Shastra"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-12 relative pt-20">
      <div className="max-w-6xl mx-auto w-full text-center">
        <div className="space-y-8 sm:space-y-12">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-purple-300 text-xs sm:text-sm font-medium">✨ Divine Guidance Since 2010</span>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Rekha <span className="text-gradient">Sharma</span>
                  </h1>
                  <p className="text-purple-300 text-lg sm:text-xl mt-2">Renowned Vedic Astrologer & Life Coach</p>
                </div>
                
                <div className="h-16 sm:h-20 flex items-center justify-center">
                  <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-bold inline-block">
                    Expert in {words[currentWord]}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto px-4">
                With 28+ years of experience in Vedic astrology, I've guided thousands towards 
                clarity, purpose, and success through celestial wisdom.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
              {[
                {
                  icon: "📜",
                  title: "Kundli Analysis",
                  description: "Precise birth chart"
                },
                {
                  icon: "🤲",
                  title: "Palm Reading",
                  description: "Life line analysis"
                },
                {
                  icon: "💍",
                  title: "Marriage Match",
                  description: "Compatibility"
                },
                {
                  icon: "💼",
                  title: "Career Guidance",
                  description: "Professional path"
                }
              ].map((specialty, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors group"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{specialty.icon}</div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{specialty.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{specialty.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 max-w-md mx-auto">
              {[
                { number: "28+", label: "Years", icon: "📅" },
                { number: "25000+", label: "Clients", icon: "👥" },
                { number: "100%", label: "Accuracy", icon: "🎯" },
                { number: "24/7", label: "Support", icon: "💬" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                onClick={() => setIsBookingOpen(true)}
              >
                <span className="relative z-10 text-sm sm:text-base">Book Consultation</span>
                <span className="relative z-10">✨</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </button>

              <button
                className="border border-gray-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="text-sm sm:text-base">My Journey</span>
                <span>👤</span>
              </button>
            </div>

            <div className="text-gray-400 text-xs sm:text-sm bg-white/5 rounded-xl p-3 sm:p-4 max-w-md mx-auto border border-white/10">
              <p className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                
                <span>Consultation: <span className="text-green-400 font-semibold"></span><span className="text-purple-400 font-semibold">₹300/hr</span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// UPDATED AboutAstrologer Component
const AboutAstrologer = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 md:px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">
            About Rekha Sharma Ji
          </span>
          <h2 className="text-gradient text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Your Trusted Guide to Cosmic Wisdom
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            From ancient family traditions to modern-day spiritual guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6 rounded-full border-4 border-purple-500/30 overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/backgrounds/rekhajii.jpeg"
                    alt="Rekha Sharma - Renowned Vedic Astrologer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 256px"
                    priority
                    style={{
                      objectPosition: 'center top',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-full" />
                </div>
                
                <div className="absolute inset-0 rounded-full border-2 border-transparent animate-pulse" 
                  style={{
                    boxShadow: '0 0 20px rgba(162, 89, 247, 0.5)',
                  }}
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">Rekha Sharma</h3>
                <p className="text-purple-300 text-lg sm:text-xl mb-4">Vedic Astrologer & Spiritual Guide</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-300 text-xs sm:text-sm rounded-full font-medium">
                    28+ Years Experience
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500/30 to-pink-600/30 text-pink-300 text-xs sm:text-sm rounded-full font-medium">
                    25000+ Happy Clients
                  </span>
                </div>
                
               
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-white font-bold text-sm sm:text-base">Vedic Astrology</div>
                    <div className="text-gray-400 text-xs">Expert</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-white font-bold text-sm sm:text-base">Palmistry</div>
                    <div className="text-gray-400 text-xs">Master</div>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                  <p className="text-purple-300 text-sm sm:text-base italic">
                    "My mission is to help you find clarity and purpose through celestial guidance"
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg shadow-xl">
                ✨
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm shadow-xl">
                🔮
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-green-400 text-xl">📞</div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Direct WhatsApp</p>
                  <p className="text-green-300 text-xs sm:text-sm">+91 8130075378</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white text-2xl sm:text-3xl font-bold">My Spiritual Journey</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Born into a family of astrologers in Dehradun, I was introduced to the sacred 
                science of Jyotish (Vedic Astrology) at the tender age of 14. My grandfather, 
                a renowned astrologer, recognized my intuitive abilities and began training me 
                in the ancient scriptures.
              </p>
              
              <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div>
                    <h4 className="text-purple-300 font-semibold text-lg sm:text-xl mb-2">3 Generations Legacy</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Trained under my <strong>grandfather</strong> and my <strong>father</strong> who were both renowned astrologers.
                      Our family has <strong>100+ years of combined astrology experience</strong> across three generations.
                      Mastered diverse systems including Vedic Astrology, Lal Kitab, Palmistry, and Western Astrology.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My journey has been one of continuous learning and spiritual growth. 
                For over <strong>28 years</strong>, I've dedicated myself to helping people find their 
                true path through the wisdom of the stars. Combining my family's <strong>100+ years of legacy </strong> 
                with my personal experience, I provide comprehensive guidance.
              </p>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-purple-400 font-semibold text-xl">My Philosophy</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  I believe astrology is not about predicting a fixed future, but about 
                  understanding cosmic patterns to make informed decisions and live in 
                  harmony with universal energies. My approach combines traditional Vedic 
                  wisdom with practical, actionable guidance for modern life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                {[
                  { 
                    title: "3 Generations Legacy", 
                    desc: "Grandfather → Father → Rekha Ji (100+ Years Family Expertise)",
                    color: "from-yellow-500/20 to-amber-500/20",
                    border: "border-yellow-500/20"
                  },
                  { 
                    title: "Languages", 
                    desc: "Fluent in Hindi, English & Sanskrit",
                    color: "from-blue-500/20 to-cyan-500/20",
                    border: "border-blue-500/20"
                  },
                  { 
                    title: "Traditional Methods", 
                    desc: "Authentic Vedic Astrology Techniques",
                    color: "from-purple-500/20 to-pink-500/20",
                    border: "border-purple-500/20"
                  },
                  { 
                    title: "28+ Years Experience", 
                    desc: "Personal Professional Guidance",
                    color: "from-green-500/20 to-emerald-500/20",
                    border: "border-green-500/20"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${item.color} rounded-xl p-3 sm:p-4 border ${item.border} hover:border-purple-500/50 transition-all duration-300 group hover:scale-[1.02]`}
                  >
                    <div className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</div>
                    <div className="text-gray-300 text-[11px] sm:text-xs leading-tight">{item.desc}</div>
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

// Services Section
const ServicesSection = ({ setIsBookingOpen }) => {
  const services = [
    {
      icon: "📜",
      title: "Complete Kundli Analysis",
      price: "₹1100",
      description: "Detailed birth chart with planetary positions, dasha periods, and life predictions",
      details: ["Janam Kundli", "Dasha Analysis", "Planetary Positions", "Remedies"],
      duration: "1 Hour",
      popular: true
    },
    {
      icon: "💬",
      title: "Personal Consultation",
      price: "₹300",
      description: "One-on-one guidance for life decisions, relationships, and career choices",
      details: ["Life Guidance", "Problem Solving", "Remedy Suggestions", "Follow-up"],
      duration: "30 Minutes",
      highlight: "Most Popular"
    },
    {
      icon: "🤲",
      title: "Palm Reading & Analysis",
      price: "₹500",
      description: "Comprehensive palm analysis revealing personality, destiny, and future prospects",
      details: ["Life Line Reading", "Career Analysis", "Relationship Lines", "Health Indications"],
      duration: "30 Minutes"
    },
    {
      icon: "💍",
      title: "Marriage Compatibility",
      price: "₹300",
      description: "Detailed analysis of compatibility between partners with Guna Milan",
      details: ["Guna Milan", "Mangal Dosha", "Planetary Match", "Remedies"],
      duration: "30 Minutes"
    },
    {
      icon: "💼",
      title: "Career Guidance",
      price: "₹500",
      description: "Professional path analysis and guidance for career growth and opportunities",
      details: ["Career Analysis", "Job Change", "Business Timing", "Growth Areas"],
      duration: "30 Minutes"
    },
    {
      icon: "🏠",
      title: "Vastu Consultation",
      price: "₹2100",
      description: "Home/Office energy analysis and remedies for prosperity and harmony",
      details: ["Space Analysis", "Direction Alignment", "Remedy Suggestions", "Color Guidance"],
      duration: "2 Hours"
    },
    {
      icon: "🔢",
      title: "Numerology Report",
      price: "₹500",
      description: "Detailed numerology analysis based on your name and birth date",
      details: ["Life Path Number", "Destiny Number", "Name Analysis", "Lucky Numbers"],
      duration: "1 Hour"
    },
    {
      icon: "🎯",
      title: "Yearly Horoscope",
      price: "₹500",
      description: "Comprehensive yearly prediction covering all aspects of life",
      details: ["Yearly Forecast", "Monthly Predictions", "Important Dates", "Precautions"],
      duration: "1 Hour",
      popular: true
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">My Services</span>
          <h2 className="text-gradient text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Comprehensive Astrology Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Personalized services to illuminate your life path and guide your decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-900/80 border rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm h-full flex flex-col relative ${
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
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-base sm:text-lg font-bold text-purple-400">{service.price}</div>
                  <div className="text-xs text-gray-400 mt-1">{service.duration}</div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg sm:text-lg mb-3">{service.title}</h3>
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
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm flex items-center justify-center space-x-2 group"
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

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Rekha Ji's kundli reading was incredibly accurate! She helped me understand my career path better at a time when I was completely confused.",
      service: "Kundli Reading",
      rating: 5,
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Rahul Verma",
      text: "First consultation was so helpful! I've been coming back regularly for guidance. Her predictions about my job change were spot on.",
      service: "Personal Consultation",
      rating: 5,
      date: "1 month ago",
      verified: true
    },
    {
      name: "Anjali Patel",
      text: "The marriage compatibility analysis saved me from a wrong decision. Forever grateful to Rekha Ji for her honest guidance!",
      service: "Marriage Compatibility",
      rating: 5,
      date: "3 months ago",
      verified: true
    },
    {
      name: "Suresh Kumar",
      text: "I was skeptical at first, but Rekha Ji's palm reading revealed things about my personality that were scarily accurate. Highly recommended!",
      service: "Palm Reading",
      rating: 5,
      date: "2 months ago",
      verified: true
    },
    {
      name: "Meera Nair",
      text: "Career guidance session helped me choose the right business direction. My startup is now profitable thanks to her timing advice.",
      service: "Career Guidance",
      rating: 5,
      date: "4 months ago",
      verified: true
    },
    {
      name: "Vikram Singh",
      text: "Vastu consultation transformed my home energy. Family disputes reduced and positive atmosphere increased within weeks.",
      service: "Vastu Consultation",
      rating: 5,
      date: "5 months ago",
      verified: true
    },
    {
      name: "bablu Bisht",
      text: "Marriage Compatiblity session was enlightening. It helped me understand my partner better and strengthened our bond.",
      service: "Marriage Compatibility",
      rating: 5,
      date: "4 months ago",
      verified: true
    },
    {
      name: "Karan Negi",
      text: "Career guidance transformed my life. My startup is now profitable thanks to her timing advice.",
      service: "Career Guidance",
      rating: 5,
      date: "1 month ago",
      verified: true
    },
    {
      name: "Anju Rawat",
      text: "Vastu consultation transformed my home energy. Family disputes reduced and positive atmosphere increased within weeks.",
      service: "Vastu Consultation",
      rating: 5,
      date: "8 months ago",
      verified: true
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const visibleTestimonials = isMobile ? testimonials.slice(0, 6) : testimonials;

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Client Experiences</span>
          <h2 className="text-gradient text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Words of Gratitude
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from those who found clarity through divine guidance
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/80 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="text-base sm:text-lg">👤</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400 text-xs sm:text-sm">
                        {"⭐".repeat(testimonial.rating)}
                      </div>
                      <span className="text-gray-500 text-xs">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic text-sm sm:text-base mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 text-xs sm:text-sm bg-purple-500/10 px-2 sm:px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  {testimonial.verified && (
                    <span className="text-green-500 text-xs flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl p-6 sm:p-8 border border-purple-500/20 backdrop-blur-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              {[
                { number: "4.9/5", label: "Average Rating", icon: "⭐" },
                { number: "25000+", label: "Happy Clients", icon: "😊" },
                { number: "100%", label: "Accuracy Rate", icon: "🎯" },
                { number: "100%", label: "Satisfaction", icon: "💫" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "What details do I need to provide for a Kundli reading?",
      answer: "For an accurate Kundli reading, you need your exact date of birth, time of birth (as precise as possible), and place of birth (city, state, country)."
    },
    {
      question: "Is the first consultation really good?",
      answer: "Yes! Your first consultation with Rekha Ji is completely up to the mark. This allows you to experience her guidance before committing to paid services."
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
    <section id="faq" className="py-16 sm:py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">FAQ</span>
          <h2 className="text-gradient text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
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
              className="bg-gray-900/80 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold text-sm sm:text-base">{faq.question}</span>
                <span className="text-purple-400 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-gray-300 text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Booking Info Section
const BookingInfoSection = ({ setIsBookingOpen }) => {
  const workingHours = [
    { day: "Monday - Saturday", time: "11:00 AM - 9:00 PM" }
  ];

  return (
    <section id="booking" className="py-16 sm:py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Book Your Session</span>
          <h2 className="text-gradient text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Connect with Rekha Sharma Ji
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple 3-step process to book your divine guidance session
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
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
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                  {step.icon}
                </div>
                <div>
                  <div className="text-purple-400 text-xs sm:text-sm font-semibold mb-1">Step {step.step}</div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}

            <button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3"
              onClick={() => setIsBookingOpen(true)}
            >
              <span>Book Appointment Now</span>
              <span className="animate-pulse">✨</span>
            </button>
          </div>

          <div className="bg-gray-900/80 rounded-2xl p-6 sm:p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-6">Working Hours & Charges</h3>
            
            <div className="mb-6 sm:mb-8">
              <h4 className="text-purple-400 font-semibold text-base sm:text-lg mb-4">Available Hours</h4>
              <div className="space-y-3">
                {workingHours.map((slot, index) => (
                  <div key={index} className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-700">
                    <span className="text-gray-300 text-sm sm:text-base">{slot.day}</span>
                    <span className="text-white font-medium text-sm sm:text-base">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-purple-400 font-semibold text-base sm:text-lg mb-4">Service Charges</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 text-sm sm:text-base">Kundli Reading</span>
                  <span className="text-white font-medium text-sm sm:text-base">₹300</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 text-sm sm:text-base">Personal Consultation</span>
                  <span className="text-white font-medium text-sm sm:text-base">₹300</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 text-sm sm:text-base">Marriage Compatibility</span>
                  <span className="text-white font-medium text-sm sm:text-base">₹300</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 text-sm sm:text-base">Career Guidance</span>
                  <span className="text-white font-medium text-sm sm:text-base">₹500</span>
                </div>
              
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <p className="text-purple-300 text-xs sm:text-sm text-center">
                Direct WhatsApp: +91 8130075378
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

// Contact CTA Section
const ContactCTASection = ({ setIsBookingOpen }) => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 md:px-6 lg:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/30 via-gray-900/50 to-pink-900/30 rounded-3xl p-6 sm:p-12 border border-white/10 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div>
              <span className="text-white text-sm font-semibold mb-4 block uppercase tracking-wider">Ready for Guidance?</span>
              <h2 className="text-gradient text-2xl sm:text-4xl lg:text-5xl font-black mb-6">
                Begin Your Spiritual Journey Today
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
                Connect with Rekha Sharma Ji for personalized divine guidance that transforms lives. 
                Take the first step towards clarity and purpose.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-base sm:text-lg shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <span>Book Your Session</span>
                  <span className="animate-pulse">✨</span>
                </button>

                <button
                  className="border-2 border-purple-500 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300 text-base sm:text-lg"
                  onClick={() => window.open('https://wa.me/918130075378', '_blank')}
                >
                  <span className="flex items-center space-x-2">
                    <span>Chat on WhatsApp</span>
                    <span>💬</span>
                  </span>
                </button>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
                {[
                  { icon: "⚡", text: "Instant WhatsApp Confirmation" },
                  { icon: "🎯", text: "100% Personalized Guidance" },
                  { icon: "💫", text: "28+ Years Expert Experience" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="text-lg sm:text-xl">{item.icon}</div>
                    <span className="text-xs sm:text-sm">{item.text}</span>
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

// Header Component
const Header = ({ setIsBookingOpen }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-dark border-b border-gray-800/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div
            className="text-xl sm:text-2xl font-black text-white cursor-pointer"
            onClick={() => {
              setActiveSection('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Rekha<span className="text-gradient">Sharma</span>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-6">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-xs sm:text-sm font-semibold transition-all duration-300 relative ${activeSection === link.id ? 'text-purple-400' : 'text-gray-400 hover:text-white'
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

        <div className="flex items-center space-x-3 sm:space-x-4">
          <button 
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Now
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
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

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900/95 border-t border-gray-800/50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6">
              Rekha<span className="text-gradient">Sharma</span>
            </h3>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
              Providing divine Vedic astrology guidance to help you navigate life's journey with clarity, purpose, and confidence through celestial wisdom.
            </p>
            <div className="space-y-2">
              <p className="text-white/90 text-sm sm:text-base flex items-center space-x-2">
                <span>📧</span>
                <span>rani25731@gmail.com</span>
              </p>
              <p className="text-white/90 text-sm sm:text-base flex items-center space-x-2">
                <span>📱</span>
                <span>+91 8130075378 (WhatsApp)</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "About", "Services", "Testimonials", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/90 hover:text-purple-400 transition-colors duration-300 hover:pl-2 block text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Kundli Reading", "Personal Consultation", "Palm Reading", "Marriage Match", "Career Guidance", "Vastu Consultation", "Numerology", "Yearly Horoscope"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/90 hover:text-purple-400 transition-colors duration-300 hover:pl-2 block text-sm sm:text-base">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4 sm:mb-6">Connect With Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-white/90 text-sm sm:text-base">Get daily cosmic insights and astrology tips</p>
              <div className="flex space-x-3 sm:space-x-4">
                {["📱", "📘", "📸", "🎥"].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white text-sm sm:text-base"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-white/80 text-xs sm:text-sm mb-1">
                © {new Date().getFullYear()} Rekha Sharma Astrology Services. All divine wisdom reserved.
              </p>
              <p className="text-white/60 text-xs">
                Trusted by 25000+ clients across Worldwide for 28+ years.
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm">Disclaimer</a>
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

  useEffect(() => {
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
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-spin"></div>
            <div className="absolute inset-4 border-4 border-transparent border-t-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-3xl sm:text-4xl">✨</span>
            </div>
          </div>
          <div className="text-white text-xl sm:text-2xl font-semibold">Rekha Sharma Astrology</div>
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
      
      <VedicAstrologyFoundations />
      <ZodiacSignCharacteristics />
      <AstrologicalRemediesGuide />
      
      <FAQSection />
      <BookingInfoSection setIsBookingOpen={setIsBookingOpen} />
      <ContactCTASection setIsBookingOpen={setIsBookingOpen} />
      <Footer />

      {isBookingOpen && (
        <BookingForm 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
        />
      )}

      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col items-end space-y-3 sm:space-y-4 z-40 floating-layer">
        <button
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-2xl hover:shadow-green-500/30 hover:scale-110 transition-all duration-300 animate-pulse-glow"
          onClick={() => window.open('https://wa.me/918130075378', '_blank')}
          aria-label="Chat on WhatsApp"
        >
          <span>💬</span>
        </button>

        <button
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-2xl hover:shadow-purple-500/30 hover:scale-110 transition-all duration-300"
          onClick={() => setIsBookingOpen(true)}
          aria-label="Book Appointment"
        >
          <span>📅</span>
        </button>

        <button
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-2xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300 lg:hidden"
          onClick={() => window.location.href = 'tel:+918130075378'}
          aria-label="Call Now"
        >
          📞
        </button>
      </div>

      <button
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-purple-500 transition-colors z-40 floating-layer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </main>
  );
}