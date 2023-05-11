/** @format */

import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface LayoutProps {
  message: string;
}

const Layout = ({ message }: LayoutProps) => {
  return (
    <>
      <nav>
        <Link to='/'>
          <Button
            variant='contained'
            sx={{
              color: "darkred",
            
              position: "relative",
              marginTop: "10%",
              left:"85%",
            }}>
            {message}Home
          </Button>
        </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
