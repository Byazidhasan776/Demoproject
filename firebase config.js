// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// তোমার Firebase প্রজেক্ট এর Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX5-demo-key-n9IcyEac",
  authDomain: "mahin-mess-demo.firebaseapp.com",
  databaseURL: "https://mahin-mess-demo-default-rtdb.firebaseio.com",
  projectId: "mahin-mess-demo",
  storageBucket: "mahin-mess-demo.appspot.com",
  messagingSenderId: "792554245120",
  appId: "1:792554245120:web:0deea683e986ce8bbaf5cd"
};

// Firebase App initialize
const app = initializeApp(firebaseConfig);

// Real-time Database instance
const database = getDatabase(app);

export { database };