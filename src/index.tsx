import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { setupStore } from "./redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
