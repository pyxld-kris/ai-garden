import React from "react";
import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import Header from "./components/common/Header";
import GlobalModal from "./components/modules/GlobalModal";
import {openGlobalModal} from "./components/modules/GlobalModal/GlobalModal.js";
import "./styles.css";
import GlobalStyle from "./styles/globals";

import Routes from "./Routes";

import theme from "./styles/theme";

export default function App() {

  React.useEffect(() => {
    //openGlobalModal("test");
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalModal />
        <GlobalStyle />
        <HashRouter>
          <Header />
          <Routes />
          {/* <Footer /> */}
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}
