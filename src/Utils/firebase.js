import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwTMwlq8LnMC25D9DLzZajrNBLZYyCt_U",
  authDomain: "imagewebsite-264af.firebaseapp.com",
  projectId: "imagewebsite-264af",
  storageBucket: "imagewebsite-264af.appspot.com",
  messagingSenderId: "13436786602",
  appId: "1:13436786602:web:75e17d3225783f97d4bdd3",
  measurementId: "G-LKYMG41RGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);