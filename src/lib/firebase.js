import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where, Timestamp } from "firebase/firestore";

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
      paymentStatus: 'pending'
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
      where("status", "==", "confirmed")
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
    
    console.log(`📊 Found ${bookings.length} bookings for ${date}`);
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

// Function to get all bookings
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