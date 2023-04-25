import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route  } from "react-router-dom";





import Home from './Router_project/Home';
import About from './Router_project/About';
import Contact from './Router_project/Contact';
import More from './Router_project/More';
import App6_router from './Router_project/App6_router';
import Purchase from './Router_project/Purchase';
import Girlsdress from './Router_project/Girlsdress';
import Boysdress from './Router_project/Boysdress';
import Newborn from './Router_project/Newborn';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <>
    <BrowserRouter>
    <App6_router/> 
 
    <Routes>
    <Route  path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/Purchase" element={<Purchase/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/more" element={<More/>} />
    <Route path="/Girlsdress" element={<Girlsdress/>} />
    <Route path="/Boyesdress" element={<Boysdress/>} />
    <Route path="/Newborn" element={<Newborn/>} />
  
    </Routes>
   </BrowserRouter>
    </> 
);









  {/* <BrowserRouter>
    <App6_router/> 
 
    <Routes>
    <Route  path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/Purchase" element={<Purchase/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/more" element={<More/>} />
    <Route path="/Girlsdress" element={<Girlsdress/>} />
    <Route path="/Boyesdress" element={<Boysdress/>} />
    <Route path="/Newborn" element={<Newborn/>} />
    </Routes>
   </BrowserRouter> */}


   // import './index.css';

// import { BrowserRouter, Routes, Route  } from "react-router-dom";


// import Home from './Router_project/Home';
// import About from './Router_project/About';
// import Contact from './Router_project/Contact';
// import More from './Router_project/More';
// import App6_router from './Router_project/App6_router';
// import Purchase from './Router_project/Purchase';
// import Girlsdress from './Router_project/Girlsdress';
// import Boysdress from './Router_project/Boysdress';
// import Newborn from './Router_project/Newborn';