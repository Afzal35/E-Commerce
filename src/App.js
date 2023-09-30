import React, { Suspense } from "react";
import MainNavigation from "./components/Layout/MainNavigation/MainNavigation";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import ContextProvider from "./store/CartContext/ContextProvider";
import AuthProvider from "./store/AuthContext/AuthProvider";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ContextProvider>
        <Suspense fallback={
          < div className="centered">
            <LoadingSpinner />
          </div>
        }>
          <MainNavigation />
        </Suspense>
      </ContextProvider>
    </AuthProvider >
  );
}

export default App;
