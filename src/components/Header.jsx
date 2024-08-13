
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
  <span><button type="button" class="btn btn-quote" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Get a Quote</button></span>
 </div>
      </ul>
    </div>
    
 
  </div>
</nav>



{/* offcanvas menu */}
{/* to trigger the canvas, check the trigger code on menu */}

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel"> <b>Get a quote right now</b></h5>
    {/* badge start */}
    <button type="button" class="btn btn-primary position-relative">
  Registered
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
{/* badge end */}
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
<p>Sign up and our team will contact you to provide your quote</p>
  <div class="vertical-menu">
  <div class="modal-body">
       <form>
       <input type="text" name="" id="" placeholder="User name" required/>
        <br/><br/>
        <input type="email" name="" id="" placeholder="E-mail" required/>
        <br/><br/>
        <input type="number" name="" id="" placeholder="Phone number" required/>
        <br/><br/>
<button className="btn btn-success" onClick={() => openNotificationWithIcon('success')}>I want to be a customer</button> 
<br/><br/>
       </form>
<p>By submitting your data, you authorize us to contact you, To find out more, see our Privacy policy</p>
<hr/>
<i class="bi bi-shield-fill-check"><b>Your data is sage with us</b></i>   
   </div>
</div>

  </div>
</div>



    </>
)
}


export default Header;