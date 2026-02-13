"use client";

import { useState, useEffect } from 'react';
import { getAllBookings, cancelBooking } from '@/lib/firebase';

export default function AdminPanel() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [closedDates, setClosedDates] = useState([]);
  const [newClosedDate, setNewClosedDate] = useState('');

  // Simple password protection
  const ADMIN_PASSWORD = "rekha2415";

  useEffect(() => {
    // Load closed dates from localStorage
    const storedDates = localStorage.getItem('rekhaClosedDates');
    if (storedDates) {
      setClosedDates(JSON.parse(storedDates));
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      fetchBookings();
    } else {
      alert("Wrong password!");
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    const result = await getAllBookings();
    if (result.success) {
      setBookings(result.data);
    }
    setLoading(false);
  };

  const handleCancelBooking = async (bookingId, bookingName) => {
    if (!window.confirm(`Cancel booking for ${bookingName}?`)) return;
    
    const result = await cancelBooking(bookingId, "rekha");
    if (result.success) {
      alert(`Booking cancelled! Slot ${result.slotReopen ? 'reopened' : 'closed'}`);
      fetchBookings();
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  const handleAddClosedDate = () => {
    if (!newClosedDate) return;
    
    const updatedDates = [...closedDates, newClosedDate];
    setClosedDates(updatedDates);
    localStorage.setItem('rekhaClosedDates', JSON.stringify(updatedDates));
    setNewClosedDate('');
    alert(`Date ${newClosedDate} marked as closed`);
  };

  const handleRemoveClosedDate = (date) => {
    const updatedDates = closedDates.filter(d => d !== date);
    setClosedDates(updatedDates);
    localStorage.setItem('rekhaClosedDates', JSON.stringify(updatedDates));
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full">
          <h1 className="text-2xl font-bold text-white mb-6">Rekha Ji Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">📊 Rekha Ji Admin Panel</h1>
          <button
            onClick={() => setAuthenticated(false)}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Closed Dates Manager */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">📅 Manage Closed Dates</h2>
          <div className="flex gap-4 mb-4">
            <input
              type="date"
              value={newClosedDate}
              onChange={(e) => setNewClosedDate(e.target.value)}
              className="p-2 rounded-lg bg-gray-700"
            />
            <button
              onClick={handleAddClosedDate}
              className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Mark Date as Closed
            </button>
          </div>
          
          <div className="mt-4">
            <h3 className="font-bold mb-2">Closed Dates:</h3>
            <div className="flex flex-wrap gap-2">
              {closedDates.map((date, index) => (
                <div key={index} className="bg-red-900/50 px-3 py-1 rounded-lg flex items-center gap-2">
                  {date}
                  <button
                    onClick={() => handleRemoveClosedDate(date)}
                    className="text-red-400 hover:text-red-300"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">📋 All Bookings</h2>
            <button
              onClick={fetchBookings}
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 text-left">ID</th>
                    <th className="py-3 text-left">Name</th>
                    <th className="py-3 text-left">Date</th>
                    <th className="py-3 text-left">Time</th>
                    <th className="py-3 text-left">Service</th>
                    <th className="py-3 text-left">Status</th>
                    <th className="py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                      <td className="py-3 text-sm">{booking.bookingId}</td>
                      <td className="py-3">{booking.name}</td>
                      <td className="py-3">{booking.appointmentDate}</td>
                      <td className="py-3">{booking.timeSlot}</td>
                      <td className="py-3">{booking.serviceType}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs ${booking.cancelled ? 'bg-red-900/50' : 'bg-green-900/50'}`}>
                          {booking.cancelled ? 'Cancelled' : 'Active'}
                        </span>
                      </td>
                      <td className="py-3">
                        {!booking.cancelled && (
                          <button
                            onClick={() => handleCancelBooking(booking.bookingId, booking.name)}
                            className="bg-red-600 px-3 py-1 rounded text-sm hover:bg-red-700"
                          >
                            Cancel
                          </button>
                        )}
                        <a
                          href={`/cancel/${booking.bookingId}`}
                          target="_blank"
                          className="ml-2 text-blue-400 hover:text-blue-300 text-sm"
                        >
                          Cancel Link
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}