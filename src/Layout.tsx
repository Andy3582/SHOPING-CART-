import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';


interface LayoutProps {
  message: string;
}



const Layout = ({message}:LayoutProps) => {
  return (
    <>
      <nav>
        
          
            <Link to="/secondpage"><Button variant="contained" sx={{borderRadius:"1rem",backgroundColor:"darkred",width:"20rem",position:"fixed",top:"70%",left:"40%",fontSize:"1.5rem"}}>{message}View Our Menu</Button></Link>
          
        
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

