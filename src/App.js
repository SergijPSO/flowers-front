import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./components/MobileHeader/MobileHeader";

const App = () => {
  const isMobile = useMediaQuery("(max-width:899px)");
  return (
    <div>
      {!isMobile ? <Header /> : <MobileHeader />}
      <Content />
      <Footer />
    </div>
  );
};

export default App;
