import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  Timestamp,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc 
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjR0yQUbVtilTPzXTR6nacos9ldSzbDek",
  authDomain: "rekha-sharma-astrologer.firebaseapp.com",
  projectId: "rekha-sharma-astrologer",
  storageBucket: "rekha-sharma-astrologer.firebasestorage.app",
  messagingSenderId: "770644914152",
  appId: "1:770644914152:web:a851315080e588d8b4be5d",
  measurementId: "G-N8JRT4Z02D"
};

// Initialize Firebase
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("✅ Firebase initialized successfully");
} catch (error) {
  console.error("❌ Firebase initialization error:", error);
}

// Collections
export const bookingsCollection = collection(db, "bookings");

// Function to add booking
export const addBooking = async (bookingData) => {
  try {
    console.log("📝 Saving booking to Firebase:", bookingData);
    
    // Generate unique booking ID
    const bookingId = `RS${Date.now()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    
    const docRef = await addDoc(bookingsCollection, {
      ...bookingData,
      bookingId: bookingId,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      status: 'confirmed',
      whatsappSent: false,
      paymentStatus: 'pending',
      cancelled: false,
      cancelledBy: null,
      cancelledAt: null
    });
    
    console.log("✅ Booking saved with ID:", docRef.id, "Booking ID:", bookingId);
    return { 
      success: true, 
      id: docRef.id,
      bookingId: bookingId
    };
  } catch (error) {
    console.error("❌ Error adding booking:", error);
    return { 
      success: false, 
      error: error.message,
      code: error.code
    };
  }
};

// Function to get bookings for a specific date
export const getBookingsByDate = async (date) => {
  try {
    console.log("📅 Fetching bookings for date:", date);
    
    const q = query(
      bookingsCollection, 
      where("appointmentDate", "==", date),
      where("cancelled", "==", false)  // Only non-cancelled bookings
    );
    
    const querySnapshot = await getDocs(q);
    const bookings = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      bookings.push({
        id: doc.id,
        ...data,
        // Convert Firestore timestamp to ISO string
        createdAt: data.createdAt?.toDate()?.toISOString(),
        updatedAt: data.updatedAt?.toDate()?.toISOString()
      });
    });
    
    console.log(`📊 Found ${bookings.length} active bookings for ${date}`);
    return { success: true, data: bookings };
  } catch (error) {
    console.error("❌ Error fetching bookings:", error);
    return { 
      success: false, 
      error: error.message,
      data: [] 
    };
  }
};

// Function to get booking by ID
export const getBookingById = async (bookingId) => {
  try {
    const q = query(bookingsCollection, where("bookingId", "==", bookingId));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      return {
        success: true,
        data: {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate()?.toISOString(),
          updatedAt: data.updatedAt?.toDate()?.toISOString()
        }
      };
    }
    
    return { success: false, error: "Booking not found" };
  } catch (error) {
    console.error("Error fetching booking:", error);
    return { success: false, error: error.message };
  }
};

// Function to cancel booking
export const cancelBooking = async (bookingId, cancelledBy = "user") => {
  try {
    console.log(`🔴 Cancelling booking: ${bookingId} by ${cancelledBy}`);
    
    // First find the booking by bookingId
    const q = query(bookingsCollection, where("bookingId", "==", bookingId));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return { success: false, error: "Booking not found" };
    }
    
    const docRef = querySnapshot.docs[0].ref;
    const bookingData = querySnapshot.docs[0].data();
    
    // Check if booking is already cancelled
    if (bookingData.cancelled) {
      return { success: false, error: "Booking already cancelled" };
    }
    
    // Check if cancellation is allowed (minimum 1 hour before appointment)
    const appointmentDate = new Date(bookingData.appointmentDate);
    const appointmentTime = bookingData.timeSlot.split(':');
    appointmentDate.setHours(parseInt(appointmentTime[0]), parseInt(appointmentTime[1]), 0);
    
    const now = new Date();
    const hoursDifference = (appointmentDate - now) / (1000 * 60 * 60);
    
    console.log(`⏰ Time difference: ${hoursDifference.toFixed(2)} hours`);
    
    // If less than 1 hour, slot won't reopen
    const slotReopen = hoursDifference >= 1;
    
    // Update booking status to cancelled
    await updateDoc(docRef, {
      status: 'cancelled',
      cancelled: true,
      cancelledBy: cancelledBy,
      cancelledAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      slotReopen: slotReopen
    });
    
    console.log("✅ Booking cancelled:", bookingId);
    return { 
      success: true, 
      message: "Booking cancelled successfully",
      slotReopen: slotReopen,
      appointmentDate: bookingData.appointmentDate,
      appointmentTime: bookingData.timeSlot
    };
  } catch (error) {
    console.error("❌ Error cancelling booking:", error);
    return { success: false, error: error.message };
  }
};

// Get all bookings (for admin use)
export const getAllBookings = async () => {
  try {
    const querySnapshot = await getDocs(bookingsCollection);
    const bookings = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      bookings.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate()?.toISOString(),
        updatedAt: data.updatedAt?.toDate()?.toISOString()
      });
    });
    
    return { success: true, data: bookings };
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    return { success: false, error: error.message };
  }
};

export default db;