"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { cancelBooking, getBookingById } from '@/lib/firebase';
import { Suspense } from 'react';

function CancelBookingContent() {
  const params = useParams();
  const router = useRouter();
  const [cancelling, setCancelling] = useState(false);
  const [message, setMessage] = useState('');
  const [cancelled, setCancelled] = useState(false);
  const [booking, setBooking] = useState(null);
  const [slotReopen, setSlotReopen] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      if (params?.id) {
        try {
          const result = await getBookingById(params.id);
          if (result.success) {
            setBooking(result.data);
            
            // Check if cancellation is allowed (minimum 1 hour before)
            const appointmentDate = new Date(result.data.appointmentDate);
            const appointmentTime = result.data.timeSlot.split(':');
            appointmentDate.setHours(parseInt(appointmentTime[0]), parseInt(appointmentTime[1]), 0);
            
            const now = new Date();
            const hoursDifference = (appointmentDate - now) / (1000 * 60 * 60);
            
            setSlotReopen(hoursDifference >= 1);
          } else {
            setMessage(`❌ ${result.error}`);
          }
        } catch (error) {
          console.error("Error fetching booking:", error);
        }
      }
    };
    
    fetchBooking();
  }, [params?.id]);

  const handleCancel = async () => {
    if (cancelled) return;
    
    setCancelling(true);
    
    try {
      // Actually cancel the booking in Firebase
      const result = await cancelBooking(params.id, "user");
      
      if (result.success) {
        // Send WhatsApp to Rekha Ji
        const whatsappMsg = `📛 *BOOKING CANCELLED* 📛%0A%0A` +
          `*Booking ID:* ${params.id}%0A` +
          `*Date:* ${booking?.appointmentDate}%0A` +
          `*Time:* ${booking?.timeSlot}%0A` +
          `*Client:* ${booking?.name} (${booking?.phone})%0A` +
          `*Cancelled at:* ${new Date().toLocaleString()}%0A` +
          `*Cancelled by:* User (via website)%0A%0A` +
          `*Slot Status:* ${result.slotReopen ? '🟢 OPEN for new bookings' : '🔴 CLOSED (less than 1 hour before)'}%0A` +
          `%0A_Automated cancellation system_`;
        
        // Open WhatsApp
        window.open(`https://wa.me/918510988703?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
        
        // Also notify user
        const userMsg = `✅ *Your booking has been cancelled* ✅%0A%0A` +
          `*Booking ID:* ${params.id}%0A` +
          `*Date:* ${booking?.appointmentDate}%0A` +
          `*Time:* ${booking?.timeSlot}%0A` +
          `*Cancelled at:* ${new Date().toLocaleString()}%0A` +
          `*Slot Status:* ${result.slotReopen ? '🟢 Reopened for others' : '🔴 Closed (was within 1 hour)'}%0A` +
          `%0A_Thank you for using Rekha Sharma Astrology Services_`;
        
        window.open(`https://wa.me/91${booking?.phone}?text=${encodeURIComponent(userMsg)}`, '_blank');
        
        setCancelled(true);
        setMessage(result.slotReopen ? 
          '✅ Booking cancelled! Time slot is now available for new bookings.' : 
          '✅ Booking cancelled! Time slot is closed (cancelled less than 1 hour before appointment).'
        );
        
        // Auto-redirect after 5 seconds
        setTimeout(() => {
          router.push('/');
        }, 5000);
      } else {
        setMessage(`❌ ${result.error || 'Failed to cancel booking'}`);
      }
      
    } catch (error) {
      setMessage('❌ Something went wrong. Please try again.');
    }
    
    setCancelling(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-900/90 backdrop-blur-lg rounded-2xl p-6 border border-red-500/50 shadow-2xl">
        <h1 className="text-2xl font-bold mb-2 text-red-400 flex items-center">
          <span className="mr-2">🔴</span> Cancel Booking
        </h1>
        <p className="text-gray-400 text-sm mb-2">Booking ID: {params?.id || 'Loading...'}</p>
        
        {booking && (
          <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-white mb-2">Booking Details:</h3>
            <p className="text-sm"><span className="text-gray-400">Date:</span> {new Date(booking.appointmentDate).toLocaleDateString()}</p>
            <p className="text-sm"><span className="text-gray-400">Time:</span> {booking.timeSlot}</p>
            <p className="text-sm"><span className="text-gray-400">Service:</span> {booking.serviceType}</p>
            <p className="text-sm"><span className="text-gray-400">Client:</span> {booking.name}</p>
          </div>
        )}
        
        <div className={`p-4 rounded-lg mb-6 ${slotReopen ? 'bg-yellow-900/30 border-yellow-700' : 'bg-red-900/30 border-red-700'}`}>
          <h3 className={`font-bold mb-2 ${slotReopen ? 'text-yellow-400' : 'text-red-400'}`}>
            ⚠️ {slotReopen ? 'Cancellation Available' : 'Late Cancellation'}
          </h3>
          <ul className="text-sm space-y-2">
            {slotReopen ? (
              <>
                <li>• ✅ Time slot will reopen for others</li>
                <li>• 📢 Rekha Ji will receive WhatsApp notification</li>
                <li>• 🔄 You'll receive confirmation via WhatsApp</li>
              </>
            ) : (
              <>
                <li>• ❌ Time slot WON'T reopen (less than 1 hour before)</li>
                <li>• 📢 Rekha Ji will be notified</li>
                <li>• ⏰ Please cancel at least 1 hour in advance next time</li>
              </>
            )}
          </ul>
        </div>
        
        {message && (
          <div className={`p-4 rounded-lg mb-4 ${message.includes('✅') ? 'bg-green-900/30 border-green-700' : 'bg-red-900/30 border-red-700'}`}>
            <p className="font-medium">{message}</p>
          </div>
        )}
        
        <div className="space-y-3">
          <button
            onClick={handleCancel}
            disabled={cancelling || cancelled}
            className={`w-full py-3 rounded-lg font-bold text-lg ${cancelled ? 'bg-gray-700 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 transition-all duration-300'}`}
          >
            {cancelling ? 'Cancelling...' : cancelled ? '✅ Cancelled Successfully' : 'Confirm Cancellation'}
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full py-3 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 transition-all duration-300"
          >
            Go Back to Home
          </button>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            Need help? WhatsApp Rekha Ji: +91 85109 88703
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading component
function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading cancellation page...</p>
      </div>
    </div>
  );
}

// Main export with Suspense
export default function CancelBookingPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CancelBookingContent />
    </Suspense>
  );
}