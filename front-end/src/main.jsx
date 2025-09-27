import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./Componets/DataProvider/DataProvider"; // ✅ check spelling of "Componets"
import { initialState, reducer } from "./Utility/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 👇 basename makes routes work under /Amazon_Clone */}
    <BrowserRouter basename="/">
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
