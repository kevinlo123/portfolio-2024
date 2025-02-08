"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import { createContext, useState, useEffect, useContext } from "react";

const LoadingContext = createContext({ loading: false });

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-500"></div>
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
