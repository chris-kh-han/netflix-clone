import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8wDeEQnrIrUMlCem3h1eO98x6EEupKTw",
  authDomain: "netflix-clone-d6714.firebaseapp.com",
  databaseURL: "https://netflix-clone-d6714.firebaseio.com",
  projectId: "netflix-clone-d6714",
  storageBucket: "netflix-clone-d6714.appspot.com",
  messagingSenderId: "949677891578",
  appId: "1:949677891578:web:db80d7160ba672f59a4e43",
  measurementId: "G-5NXZJ3XVGR"
};

const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



