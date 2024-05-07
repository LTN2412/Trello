import React from "react";
import ReactDOM from "react-dom/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import theme from "./theme";
import store from "./store";
import router from "./router/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </CssBaseline>
    </CssVarsProvider>
  </React.StrictMode>
);
