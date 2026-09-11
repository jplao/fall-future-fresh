// Copy this file to config.js and fill in real values.
// config.js is gitignored -- it never gets committed or pushed.
window.APP_CONFIG = {
  firebase: {
    apiKey: "REPLACE_WITH_YOUR_FIREBASE_API_KEY",
    authDomain: "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://REPLACE_WITH_YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "REPLACE_WITH_YOUR_PROJECT",
    storageBucket: "REPLACE_WITH_YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
    appId: "REPLACE_WITH_YOUR_APP_ID"
  },
  sheetDbUrl: "https://sheetdb.io/api/v1/REPLACE_WITH_YOUR_SHEET_ID",
  // No admin password here -- admin sign-in uses real Firebase Authentication
  // (Build > Authentication > Users in the Firebase console), not a value in this file.
  emailJs: {
    publicKey: "REPLACE_WITH_YOUR_EMAILJS_PUBLIC_KEY",
    serviceId: "REPLACE_WITH_YOUR_EMAILJS_SERVICE_ID",
    templateId: "REPLACE_WITH_YOUR_EMAILJS_TEMPLATE_ID"
  }
};
