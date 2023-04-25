// import { Carousel } from 'react-responsive-carousel';
// import slide_img1 from './image_shoping/silde_img1.png';
import slide_img2 from './image_shoping/silde_img2.png';
// import slide_img3 from './image_shoping/silde_img3.png';
import { Link } from "react-router-dom";
// import Purchase from "Purchase.css";
function Purchase() {
  
   return (
   <>

  <li class="nav-item">
  <Link class="navbar-brand link-info " to="/Boyesdress">
 👕Boyesdress</Link>
    </li> 
    <li class="nav-item">
  <Link class="navbar-brand link-info " to="/Girlsdress">
 👗Girlsdress</Link>
    </li> 
    <li class="nav-item">
  <Link class="navbar-brand link-info " to="/newborn">
  👶Newborn</Link>
    </li> 
    <br></br>
    <br></br>
     <div class="img">
    <img src={slide_img2}></img></div>
    {/* <div id="carouselExample" class="carousel slide img-fluid">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide_img1}></img>
    </div>
    <div class="carousel-item">
      <img src={slide_img2}></img>
    </div>
    <div class="carousel-item">
      <img src={slide_img3}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
<br>
</br>

<br>
</br>
<br>
</br>
    <div className='bg-image hover-zoom'>
      <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-50%' />
    </div>

       </>
        );
    }
    
    export default Purchase;













    // <li class="nav-item">
    //     <Link class="navbar-brand link-info " to="/Home">
    //     <i class="bi bi-house-door-fill"></i>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
    //     <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
    //     </svg>Boyesdress</Link>
    //     </li> &nbsp;&nbsp;&nbsp;
        
    //     {/* About */}

    //     <li class="nav-item">
    //     <Link class="navbar-brand link-info " to="/About">
    //     <i class="bi bi-person-fill"></i>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
    //     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
    //     </svg>Girlsdress</Link>
    //     </li> &nbsp;&nbsp;&nbsp;

    //     {/* Purchase */}

    //     <li class="nav-item ">
    //     <Link class="navbar-brand link-info" to="/Purchase">
    //     <i class="bi bi-bag-fill"></i>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="19" height="26" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
    //     <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
    //    </svg>Newborn</Link>
    //     </li> &nbsp;&nbsp;&nbsp;