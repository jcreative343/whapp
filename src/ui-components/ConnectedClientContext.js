// src/context/ConnectedClientContext.js
import { createContext, useContext, useEffect, useState } from "react";

const ConnectedClientContext = createContext();

export const ConnectedClientProvider = ({ children }) => {
  const [connectedClient, setConnectedClient] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("connectedClient");
    if (stored) {
      setConnectedClient(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    if (connectedClient) {
      localStorage.setItem("connectedClient", JSON.stringify(connectedClient));
    } else {
      localStorage.removeItem("connectedClient");
    }
  }, [connectedClient]);

  return (
    <ConnectedClientContext.Provider value={{ connectedClient, setConnectedClient }}>
      {children}
    </ConnectedClientContext.Provider>
  );
};

export const useConnectedClient = () => useContext(ConnectedClientContext);
