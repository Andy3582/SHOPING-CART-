
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import FirstPage from './FirstPage/firstpage';
import SecondPage from './SecondPage/secondpage';
import Layout2 from './Layout2';


interface AppProps {
  message: string;
}




function App({message}:AppProps) {
  return (
      
      <BrowserRouter>
      {message}
      <Routes>
        {message}
      <Route path="/" element={<Layout2 message={''} />}/>
         {message}
        <Route path="/" element={<Layout message={''} />}/>
           {message}
          <Route index element={<FirstPage/>} />
          {message}
        <Route   path="secondpage" element={<SecondPage/>} />
        {message}
      </Routes>
      {message}
    </BrowserRouter>
      
    
    );
}

export default App
