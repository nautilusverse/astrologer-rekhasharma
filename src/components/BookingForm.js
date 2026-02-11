// src/app/components/BookingForm.js - IMPROVED VERSION
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Personal, 2: Birth, 3: Appointment, 4: Review
  const [selectedDateSlots, setSelectedDateSlots] = useState([]);
  const formRef = useRef(null);

  // Generate time slots from 9 AM to 9 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 21; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 21 && minute > 0) break;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
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

  // Get available slots for selected date
  const getAvailableSlotsForDate = (date) => {
    const allSlots = generateTimeSlots();
    // Simulate booked slots (in real app, fetch from API)
    const bookedSlots = ['10:00', '14:30', '16:00', '18:30'];
    return allSlots.filter(slot => !bookedSlots.includes(slot));
  };

  useEffect(() => {
    const allSlots = generateTimeSlots();
    setAvailableSlots(allSlots);
    
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
    if (formData.appointmentDate) {
      const slots = getAvailableSlotsForDate(formData.appointmentDate);
      setSelectedDateSlots(slots);
      if (!slots.includes(formData.timeSlot)) {
        setFormData(prev => ({ ...prev, timeSlot: '' }));
      }
    }
  }, [formData.appointmentDate]);

  // Handle click outside
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

  // Handle escape key
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Calculate charges
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
      } else {
        serviceDetails += ' (1 hour)';
      }
    }

    // Format appointment type
    const appointmentTypeText = formData.appointmentType === 'video' ? 'Video Call' : 
                               formData.appointmentType === 'phone' ? 'Phone Call' : 'In-Person';

    // Prepare WhatsApp message
    const message = `🌟 *NEW APPOINTMENT REQUEST* 🌟%0A%0A` +
                   `*Client Details:*%0A` +
                   `👤 Name: ${formData.name}%0A` +
                   `📱 Phone: ${formData.phone}%0A` +
                   `📧 Email: ${formData.email || 'Not provided'}%0A` +
                   `⚧ Gender: ${formData.gender || 'Not specified'}%0A` +
                   `💍 Status: ${formData.maritalStatus || 'Not specified'}%0A%0A` +
                   `*Birth Details:*%0A` +
                   `🎂 DOB: ${formData.dateOfBirth}%0A` +
                   `⏰ Time: ${formData.timeOfBirth || 'Not specified'}%0A` +
                   `📍 Place: ${formData.placeOfBirth}%0A%0A` +
                   `*Appointment Details:*%0A` +
                   `📅 Date: ${new Date(formData.appointmentDate).toLocaleDateString('en-IN', { 
                     weekday: 'long', 
                     day: 'numeric', 
                     month: 'long',
                     year: 'numeric' 
                   })}%0A` +
                   `🕒 Time: ${formData.timeSlot}%0A` +
                   `💬 Type: ${appointmentTypeText}%0A` +
                   `🔮 Service: ${serviceDetails}%0A` +
                   `💰 Total: ₹${charges}%0A%0A` +
                   `*Special Request:*%0A${formData.specialRequest || 'None'}%0A%0A` +
                   `✅ *Please confirm this appointment* ✅%0A%0A` +
                   `_Sent via Rekha Sharma Astrology Website_`;

    const whatsappNumber = '918510988703';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset and close
    setLoading(false);
    setStep(1);
    onClose();
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
    if (formData.serviceType === 'kundli') return 300;
    
    if (formData.serviceType === 'consultation') {
      let charges = formData.isFirstTime ? 0 : 300;
      
      if (!formData.isFirstTime && formData.extraTime === '1.5') charges += 150;
      if (!formData.isFirstTime && formData.extraTime === '2') charges += 300;
      
      return charges;
    }
    
    return 0;
  };

  const steps = [
    { number: 1, title: "Personal", icon: "👤" },
    { number: 2, title: "Birth", icon: "🎂" },
    { number: 3, title: "Appointment", icon: "📅" },
    { number: 4, title: "Review", icon: "✅" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 modal-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={formRef}
            className="bg-gray-900/95 rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full border border-purple-500/40 shadow-2xl backdrop-blur-xl max-h-[90vh] overflow-y-auto booking-form-fix"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold">Book with Rekha Sharma Ji</h3>
                <p className="text-purple-300 text-xs sm:text-sm">Complete form for accurate astrological guidance</p>
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
                <motion.div 
                  className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((step - 1) / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
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
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Next: Birth Details</span>
                      <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Birth Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
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
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border border-gray-600 text-white py-3.5 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>←</span>
                      <span>Back</span>
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Next: Appointment</span>
                      <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Appointment Details */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-white text-lg font-semibold">Appointment Details</h4>

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
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Time Slot *</label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        required
                        disabled={!formData.appointmentDate}
                        className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none disabled:opacity-50"
                      >
                        <option value="">Select time</option>
                        {selectedDateSlots.map((slot) => {
                          const hour = parseInt(slot.split(':')[0]);
                          const minute = slot.split(':')[1];
                          const displayTime = hour < 12 
                            ? `${hour}:${minute} AM`
                            : hour === 12 
                              ? `${hour}:${minute} PM`
                              : `${hour - 12}:${minute} PM`;
                          return (
                            <option key={slot} value={slot}>
                              {displayTime}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Appointment Type</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['video', 'phone', 'inperson'].map((type) => (
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
                            {type === 'video' ? '📹' : type === 'phone' ? '📞' : '👥'}
                          </div>
                          <div className="text-xs font-semibold capitalize">{type === 'inperson' ? 'In Person' : type}</div>
                        </button>
                      ))}
                    </div>
                  </div>

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
                        <div className="font-semibold">Kundli Reading</div>
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

                  {formData.serviceType === 'consultation' && (
                    <>
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

                      {!formData.isFirstTime && (
                        <div>
                          <label className="text-white text-sm font-medium mb-2 block">Session Duration</label>
                          <div className="grid grid-cols-3 gap-3">
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, extraTime: '' }))}
                              className={`py-3 rounded-xl border transition-all duration-300 ${!formData.extraTime
                                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                                  : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50'
                                }`}
                            >
                              <div className="font-semibold">1 Hour</div>
                              <div className="text-xs opacity-80">₹300</div>
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, extraTime: '1.5' }))}
                              className={`py-3 rounded-xl border transition-all duration-300 ${formData.extraTime === '1.5'
                                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                                  : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50'
                                }`}
                            >
                              <div className="font-semibold">1.5 Hours</div>
                              <div className="text-xs opacity-80">+₹150</div>
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, extraTime: '2' }))}
                              className={`py-3 rounded-xl border transition-all duration-300 ${formData.extraTime === '2'
                                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg'
                                  : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50'
                                }`}
                            >
                              <div className="font-semibold">2 Hours</div>
                              <div className="text-xs opacity-80">+₹300</div>
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}

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
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border border-gray-600 text-white py-3.5 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>←</span>
                      <span>Back</span>
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Review & Book</span>
                      <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
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
                            {formData.timeSlot && (() => {
                              const hour = parseInt(formData.timeSlot.split(':')[0]);
                              const minute = formData.timeSlot.split(':')[1];
                              return hour < 12 
                                ? `${hour}:${minute} AM`
                                : hour === 12 
                                  ? `${hour}:${minute} PM`
                                  : `${hour - 12}:${minute} PM`;
                            })()}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Type:</span>
                          <span className="text-white ml-2 capitalize">
                            {formData.appointmentType === 'video' ? 'Video Call' : 
                             formData.appointmentType === 'phone' ? 'Phone Call' : 'In-Person'}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Service:</span>
                          <span className="text-white ml-2">
                            {formData.serviceType === 'kundli' ? 'Kundli Reading' : 'Consultation'}
                            {formData.isFirstTime && formData.serviceType === 'consultation' && ' (First Free)'}
                          </span>
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
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border border-gray-600 text-white py-3.5 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>←</span>
                      <span>Edit</span>
                    </motion.button>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className={`flex-1 ${loading 
                          ? 'bg-gray-700 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                        } text-white py-3.5 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3`}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                          </svg>
                          <span>Preparing...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-base">Book via WhatsApp</span>
                          <span className="text-xl animate-pulse">📱</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              <div className="text-center pt-4 border-t border-gray-800">
                <p className="text-gray-500 text-xs">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  All details sent securely to Rekha Sharma Ji
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Step {step} of 4
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingForm;