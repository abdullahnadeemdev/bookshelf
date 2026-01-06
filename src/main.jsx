import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
// import RootReducer from "./components/services/reducer/RootReducer.jsx";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({ reducer: RootReducer });
// console.log("store", store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
