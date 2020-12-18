import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

// import { seedDatabase } from './seed'

let firebaseConfig = {
  apiKey: "AIzaSyBQKU5NSa3CF_kynQdUPuw7gUallcjmQmk",
  authDomain: "netflix2020-f1737.firebaseapp.com",
  databaseURL: "https://netflix2020-f1737-default-rtdb.firebaseio.com",
  projectId: "netflix2020-f1737",
  storageBucket: "netflix2020-f1737.appspot.com",
  messagingSenderId: "598985831356",
  appId: "1:598985831356:web:71b0ed101a45dd23d131b9"
};

const firebase = window.firebase.initializeApp(firebaseConfig);
// seedDatabase(firebase)




ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



