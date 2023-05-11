/** @format */

import { StyledEngineProvider } from "@mui/material";
import Layout2 from "../Layout2";
import { Footer } from "./Footer";
import "./secondpage.css";
import Cart from "./Shop";
import NavBar from "./NavBar";
import App1 from "./Cart";
import Background from "./Slider";

const SecondPage = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <NavBar />
      </StyledEngineProvider>
      <Background />
      <Layout2 message={""} />
      <App1 />
      <Cart message={""} />
      <Footer message={""} />
    </div>
  );
};

export default SecondPage;
