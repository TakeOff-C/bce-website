
import { Link } from 'react-router-dom'
import '../css/Header.css'
import logo from '../images/logo.png'
import {  notification } from 'antd';
function Header ()
{

// message  notification
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Customer Added',
      description:
'You have successfully been added to the customer group'
    });
  };

return(
    <>

     {/* nav */}
     <nav class="navbar navbar-expand-lg sticky-top">
  <div class="container">
    <img src={logo} alt="" className="logo"/> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="bi bi-list"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home"><i class="bi bi-house-door"></i>Home</Link>
        </li>
        <div class="dropdown" >
  <Link class="btn dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="bi bi-diagram-2"></i> Product & Services
  </Link>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
  <Link class="dropdown-item" aria-current="page" to="/Autoliability">Auto liability insurance</Link>
  <Link class="dropdown-item" aria-current="page" to="/Generalliability">General liability insurance</Link>
  <Link class="dropdown-item" aria-current="page" to="/Motortruck">Motor truck cargo insurance</Link>
  <Link class="dropdown-item" aria-current="page" to="/Physicaldamage">Physical damage insurance</Link>
  </ul>
</div>
<li class="nav-item">
          <Link class="nav-link" to="/Policy"><i class="bi bi-sliders2-vertical"></i>My Policy</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ContactUs"><i class="bi bi-phone-flip"></i>Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#" type="button" ><i class="bi bi-question-octagon"></i>FAQ & Resources</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="/About"><i class="bi bi-file-person-fill"></i>About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Signup"><i class="bi bi-box-arrow-in-right"></i>Sign up</Link>
        </li>
        <div className="nav-btn">
 <span><Link to="/Login"><button type="button" class="btn btn-login">Login</button></Link></span>
 </div>
      </ul>`
    </div>
    
 
  </div>
</nav>






    </>
)
}


export default Header;