    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    import { getStorage } from "firebase/storage";

    const firebaseConfig = {
 

    apiKey: "AIzaSyAjcfz19mGwXLUCOwOY5iIeP_0D3Wx1yRE",
    authDomain: "testphone-f3f38.firebaseapp.com",
    projectId: "testphone-f3f38",
    storageBucket: "testphone-f3f38.appspot.com",
    messagingSenderId: "879719739532",
    appId: "1:879719739532:web:2e2660c3e1befb00330ba9",
    measurementId: "G-QKPKQS9R8X"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    auth.useDeviceLanguage();
    const db = getFirestore(app);
    const storage = getStorage(app);


      
      // Assign appVerifier to window for global access
     
    const firebase = {
    app,
    auth,
    db,
    storage,
    };

    export default firebase;