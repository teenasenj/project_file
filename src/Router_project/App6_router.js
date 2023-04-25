import { Link } from "react-router-dom";
// import Logo from './image_shoping/logo.png';
const Layout = () => {
  return (
    <>
   <nav class="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary rounded">
     
{/* //logo */}
         {/* <div className = "w-25 h-25 ">
        <img  src={Logo}></img>
        </div> */}
        <h1 class="ms-5 fs-1 text-info ">"WELCOME TO SHOPPING WORLD😄..."</h1>
        <div class="container-fluid mt-auto p-2 d-flex justify-content-end ">
        <ul class="navbar-nav fw-bold p-2 mb-2  bg-info-subtle text-black ">

        {/* Home */}

        <li class="nav-item">
        <Link class="navbar-brand link-info " to="/Home">
        <i class="bi bi-house-door-fill"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
        </svg>Home</Link>
        </li> &nbsp;&nbsp;&nbsp;
        
        {/* About */}

        <li class="nav-item">
        <Link class="navbar-brand link-info " to="/About">
        <i class="bi bi-person-fill"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>About</Link>
        </li> &nbsp;&nbsp;&nbsp;

        {/* Purchase */}

        <li class="nav-item ">
        <Link class="navbar-brand link-info" to="/Purchase">
        <i class="bi bi-bag-fill"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="26" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
       </svg>Purchase</Link>
        </li> &nbsp;&nbsp;&nbsp;

        {/* Contact */}

        <li class="nav-item ">
        <Link class="navbar-brand link-info" to="/contact">
        <i class="bi bi-telephone-fill"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        </svg>Contact</Link>
        </li> &nbsp;&nbsp;&nbsp;
        
        
        {/* More */}


        <li class="nav-item">
        <Link class="navbar-brand link-info " to="/More">
        <i class="bi bi-three-dots"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>More</Link>
        </li>
        </ul>
        </div>
        </nav>   
        </>
  )
};

export default Layout;