const firebaseConfig = {
    apiKey: firebase_api_key,
    authDomain: firebase_auth_domain,
    projectId: firebase_project_id,
    storageBucket: firebase_storage_bucket,
    messagingSenderId: firebase_messaging_sender_id,
    appId: firebase_app_id,
    measurementId: firebase_measurement_id
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();