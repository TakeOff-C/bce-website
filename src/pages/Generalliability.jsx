import '../css/Generalliability.css'
import {  Link } from 'react-router-dom'

import img from '../images/Generalimg.png'
import img1 from '../images/img1.png'
import img2 from '../images/Generalimg1.png'
import lineimg from '../images/lingImg.png'
import {  notification } from 'antd';




function Generalliability ()
{ 

// message  notification
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Customer Added',
    description:
'Your quote on autoliability insurance will be sent shortly'
  });
};

return(

        <>
    
            <body>
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
  <p>Auto liability insurance covers property damage,
         medical bills, and legal fees when a trucker is
          at fault in an accident, providing financial 
          protection and peace of mind</p>
            <div class="vertical-menu">
  <div class="modal-body">
       <form>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul id="dropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item " href="#">Auto liability insurance</a></li>
    <li><a class="dropdown-item" href="#">General liability insurance</a></li>
    <li><a class="dropdown-item" href="#">Moto truck cago insurance</a></li>
    <li><a class="dropdown-item" href="#">Physical damage insurance</a></li>
  </ul>
</div>

         <br/>
       <input type="text" name="" id="" placeholder="User name" required/>
        <br/><br/>
        <input type="email" name="" id="" placeholder="E-mail" required/>
        <br/><br/>
        <input type="number" name="" id="" placeholder="Phone number" required/>
        <br/><br/>
<button
 className="btn btn-success"
 // onClick={() => openNotificationWithIcon('success')}
  >Request for a quote</button> 
<br/><br/>
       </form>
<p>By submitting your data, you authorize us to contact you, To find out more, see our Privacy policy</p>
<hr/>
<i class="bi bi-shield-fill-check"><b>Your data is save with us</b></i>   
   </div>
</div>

  </div>
</div>









                {/* our mission */}
        <h2>General liabilty</h2> 
        <br/>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <p>  We help you at any time</p>
        <h3 className="h3" style={{color:"red"}}>What is general liability insurance?</h3>
        <img src={lineimg} alt="" />

        <p>This insurance shields businesses from financial losses 
            resulting from lawsuits or claims related to property 
            damage, bodily injury, or other harm caused by their
             operations. It covers expenses such as legal fees,
              settlements, and judgments</p>
                   <span><button className="quote" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Get a qoute</button></span>
                   <Link to="/ContactUs"><button className="email" >Get a contat us</button></Link>
        </div>
        <div className="col-md-6">
        <img src={img} alt=""className="img"/>
        </div>
        </div>
        </div>


<br/><br/>
{/* truckers */}
<div className="trucker">
<p>Do the same as thousands of customers
<h3 className="helping">3 Reasons for getting GL insurance</h3> </p>
</div>

<br/>

<div className="container">
<div className="row">
<div className="col-md-6">
<img src={img1} alt="" className="img1" />
</div>
<div className="col-md-6">
<br/><br/>
<i class="bi bi-patch-check"></i> <b>  
Protects against financial loss if the trucker is at fault of an accident</b> <br/>
<p>General liability insurance can assist in covering property damage or medical expenses if a trucker is deemed at fault in an accident.</p>
<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Required by some brokers and shippers</b> <br/>
<p>Depending on the broker or shipper's requirements, commercial truckers may need to have general liability insurance as a condition of their employment.</p>

<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b> 
Provides peace of mind</b> <br/>
<p> 
General liability insurance provides commercial truckers with peace of mind, knowing they are financially protected in the event of an accident.

</p>
</div>
</div>
</div>


      {/* our mission */}
      <br/><br/>
        <br/>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <p>  Trusted insurer</p>
        <h3 className="h3" style={{color:"red"}}>Our Mission</h3>
        <img src={lineimg} alt="" />

        <p>At BCE, our mission is to empower trucking businesses
             with tailored insurance solutions and expert guidance.
              We are committed to simplifying the complexities of the
               industry, ensuring compliance, and promoting success
                on the road. With a foundation built by truckers,
                 for truckers, we stand by our clients every mile
                  of the journey, providing peace of mind and
                   unparalleled support.</p>

        </div>
        <div className="col-md-6">
        <img src={img2} alt=""className="img"/>
        </div>
        </div>
        </div>



<br/><br/>
{/* carousel */}




<br/>





            </body>
        
        
        </>
    )
}


export default Generalliability;