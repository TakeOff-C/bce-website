import '../css/Physicaldamage.css'
import {  Link } from 'react-router-dom'

import img8 from '../images/physicalimg.png'
import img9 from '../images/physicalimg1.png'
import img2 from '../images/img2.png'
import lineimg from '../images/lingImg.png'
import {  notification } from 'antd';




function Physicaldamage ()
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
        <h2>Physical damage insurance </h2> 
        <br/>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <p>  We help you at any time</p>
        <h3 className="h3" style={{color:"red"}}>Physicaldamage truck cargo insurance</h3>
        <img src={lineimg} alt="" />

        <p>Motor Truck Cargo Insurance safeguards trucking companies 
            from financial losses resulting from damage or loss of
             transported goods. This policy covers cargo against 
             accidents, theft, and unforeseen events. Typically,
              freight brokers mandate a minimum of $100,000 MTC coverage..</p>
                   <span><button className="quote" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Get a qoute</button></span>
                   <Link to="/ContactUs"><button className="email" >Get a contat us</button></Link>
        </div>
        <div className="col-md-6">
        <img src={img8} alt=""className="img"/>
        </div>
        </div>
        </div>


<br/><br/>
{/* truckers */}
<div className="trucker">
<p>Do the same as thousands of customers
<h3 className="helping">3 Reasons for Getting Physical Damage Insurance</h3>
 </p>
 <img src={lineimg} alt="" />
<p>Get in touch with an expert who can guide you through the intricacies <br/>
of trucking insurance and leverage a contemporary platform to <br/>
increase the efficiency of your business.</p>
</div>

<br/>

<div className="container">
<div className="row">
<div className="col-md-6">
<img src={img9} alt="" className="img1" />
</div>
<div className="col-md-6">
<br/><br/>
<i class="bi bi-patch-check"></i> <b> 
Protects against financial loss in the event of an accident</b> <br/>
<p>Physical damage insurance can assist in covering the expenses for repairing or replacing a
     truck damaged in an accident..</p>
<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Provides coverage for non-collision events</b> <br/>
<p>Physical damage insurance extends coverage to damage resulting from events 
    like theft, vandalism, or natural disasters</p>

<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Offers peace of mind by ensuring your truck is protected.</b> <br/>
<p> 
Physical damage insurance provides commercial truckers with the peace of mind that they are
 financially protected in case of vehicle damage</p>
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


export default Physicaldamage;