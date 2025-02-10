
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./services/axios-global.js"
createRoot(document.getElementById("root")!).render(
  <div className="text-mainColor">
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
    </Provider>
  </div>
);
