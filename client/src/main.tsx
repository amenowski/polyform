import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NavigationContextProvider from "./contexts/NavigationContext.tsx";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";
import CartPreviewProvider from "./contexts/CartPreviewContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartPreviewProvider>
        <NavigationContextProvider>
          <App />
        </NavigationContextProvider>
      </CartPreviewProvider>
    </Provider>
  </React.StrictMode>,
);
