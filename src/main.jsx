import React from "react";
import ReactDOM from "react-dom/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import theme from "./theme";
import { persistor, store } from "./store";
import router from "./router/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </CssBaseline>
    </CssVarsProvider>
  </React.StrictMode>
);
