import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NavigationContextProvider from "./contexts/NavigationContext.tsx";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </Provider>
  </React.StrictMode>,
);
