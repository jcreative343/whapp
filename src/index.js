import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ConnectedClientProvider } from "./ui-components/ConnectedClientContext"; // ⬅️ Import it

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConnectedClientProvider> {/* ⬅️ Wrap app here */}
        <App />
      </ConnectedClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
