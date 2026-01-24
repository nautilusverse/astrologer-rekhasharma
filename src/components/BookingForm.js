// src/app/components/BookingForm.js
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    isFirstTime: true,
    gender: '',
    maritalStatus: ''
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Personal Details, 2: Birth Details, 3: Appointment Details

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
  }, []);

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
      
      // Handle extra time charges
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

    // Format dates for display
    const formatDate = (dateString) => {
      if (!dateString) return '';
      return new Date(dateString).toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    };

    // Prepare WhatsApp message
    const message = `🌟 *New Appointment Booking - Rekha Sharma Ji* 🌟%0A%0A` +
                   `*👤 Personal Details:*%0A` +
                   `Name: ${formData.name}%0A` +
                   `Phone: ${formData.phone}%0A` +
                   `Gender: ${formData.gender || 'Not specified'}%0A` +
                   `Marital Status: ${formData.maritalStatus || 'Not specified'}%0A%0A` +
                   `*📅 Birth Details (For Accurate Reading):*%0A` +
                   `Date of Birth: ${formatDate(formData.dateOfBirth)}%0A` +
                   `Time of Birth: ${formData.timeOfBirth || 'Not specified'}%0A` +
                   `Place of Birth: ${formData.placeOfBirth}%0A%0A` +
                   `*📋 Appointment Details:*%0A` +
                   `Appointment Date: ${formatDate(formData.appointmentDate)}%0A` +
                   `Time Slot: ${formData.timeSlot}%0A` +
                   `Service: ${serviceDetails}%0A` +
                   `Total Charges: ₹${charges}%0A%0A` +
                   `📅 *Please confirm this appointment*%0A` +
                   `✨ *Thank you!*%0A` +
                   `_Rekha Sharma Astrology Services_`;

    // Send to WhatsApp (client's number)
    const whatsappNumber = '918510988703'; // +91 format for WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp
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
      isFirstTime: true,
      gender: '',
      maritalStatus: ''
    });
    
    setLoading(false);
    setStep(1);
    onClose();
    
    // Show success message
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

  const nextStep = () => {
    // Validate current step before proceeding
    if (step === 1) {
      if (!formData.name || !formData.phone) {
        alert('Please fill in your name and phone number');
        return;
      }
    } else if (step === 2) {
      if (!formData.dateOfBirth || !formData.placeOfBirth) {
        alert('Please fill in your date of birth and place of birth');
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Progress steps
  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Birth Details" },
    { number: 3, title: "Appointment" }
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900/90 rounded-3xl p-6 md:p-8 max-w-2xl w-full border border-purple-500/40 shadow-2xl backdrop-blur-xl"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-white text-2xl font-bold">Book with Rekha Sharma Ji</h3>
            <p className="text-purple-300 text-sm">Complete details required for accurate astrological reading</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            ×
          </button>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((stepItem) => (
              <div key={stepItem.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= stepItem.number ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                  {stepItem.number}
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
              initial={{ width: '33%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h4 className="text-white text-lg font-semibold mb-4">Personal Information</h4>
              
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

              {/* Gender and Marital Status */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
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
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                  >
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <motion.button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
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
              className="space-y-5"
            >
              <h4 className="text-white text-lg font-semibold mb-4">Birth Details (For Accurate Astrological Reading)</h4>
              
              <div className="space-y-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 text-sm mb-2">
                  ⚠️ Accurate birth details are essential for precise astrological analysis
                </p>
                
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
                  <p className="text-gray-400 text-xs mt-1">Enter as per your birth certificate</p>
                </div>

                {/* Time of Birth */}
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Time of Birth (Optional but Recommended)</label>
                  <input
                    type="time"
                    name="timeOfBirth"
                    value={formData.timeOfBirth}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                  />
                  <p className="text-gray-400 text-xs mt-1">More accurate time = More precise prediction</p>
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
                    placeholder="City, State, Country (e.g., Delhi, India)"
                  />
                  <p className="text-gray-400 text-xs mt-1">Enter the exact location where you were born</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 border border-gray-600 text-white py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>←</span>
                  <span>Back</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
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
              className="space-y-5"
            >
              <h4 className="text-white text-lg font-semibold mb-4">Appointment Details</h4>

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

              {/* Extra Time Options */}
              {formData.serviceType === 'consultation' && !formData.isFirstTime && (
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
                      : `Consultation (₹300${formData.extraTime === '1.5' ? ' + ₹150' : formData.extraTime === '2' ? ' + ₹300' : ''})`
                  }
                </p>
                <p className="text-gray-500 text-xs mt-2">Payment directly to Rekha Sharma Ji after service</p>
              </div>

              <div className="flex space-x-4 pt-4">
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 border border-gray-600 text-white py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>←</span>
                  <span>Back</span>
                </motion.button>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 ${loading 
                      ? 'bg-gray-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    } text-white py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3`}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
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
                </motion.button>
              </div>
            </motion.div>
          )}

          <div className="text-center pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              All details will be sent securely to Rekha Sharma Ji's WhatsApp
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Step {step} of 3
            </p>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingForm;