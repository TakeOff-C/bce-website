import '../css/Home.css'
import img1 from '../images/img1.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import lineimg from '../images/lingImg.png'
import gif1 from '../images/gif1.gif'
import gif2 from '../images/gif2.gif'
import gif3 from '../images/gif3.jpeg'
import gif4 from '../images/gif4.gif'
import gif5 from '../images/gif5.gif'
import gif6 from '../images/gif6.gif'
import gif7 from '../images/gif7.gif'
import gif8 from '../images/gif8.gif'

import {  notification } from 'antd';



function Home() {
    // message  notification
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Customer Added',
      description:
'You have successfully been added to the customer group'
    });
  };
    return (
        <>

            <body>
                <br /><br />
                <div className="container">
                    <div className="container-img">
                        <div className="row">

                            <div className="col-md-2">
                                <p>The best security
<h5 style={{color:"red" }} className="fw-bold">Main partners</h5></p>
                            </div>
                            <div className="col-md-2">
                                <img src={img3} alt="" />
                            </div>
                            <div className="col-md-2">
                                <img src={img4} alt="" />
                            </div>
                            <div className="col-md-2">
                                <img src={img5} alt="" />
                            </div>
                            <div className="col-md-2">
                                <img src={img6} alt="" />
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <img src={img7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />
                <hr />


                {/* get instant quote online today */}

                <div className="instant-quote purchase">
                    <p>The best insurance companies are with us
<h1>Get Instant Quotes Online Today!</h1>
                    </p>
                    <img src={lineimg} alt="" />

                    <br />
                    <p>Get in touch with an expert who can guide you through the intricacies of trucking insurance <br />
                        and leverage a contemporary platform to increase the efficiency of your business. <br />
                        of trucking insurance and leverage a contemporary platform to <br />
                        increase the efficiency of your business.</p>
                </div>

                <div className="container">
                <div className="row"> 
                <div className="col-md-6">
                <div class="accordion" id="accordionExample">
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<strong>  <i class="bi bi-patch-check"></i>    Protects against financial loss in the event of an accident</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
<p>Physical damage insurance can assist in covering the expenses for repairing or replacing a truck damaged in an accident</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<strong>  <i class="bi bi-patch-check"></i>    Protects against financial loss in the event of an accident</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
<p>Physical damage insurance can assist in covering the expenses for repairing or replacing a truck damaged in an accident</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<strong>   <i class="bi bi-patch-check"></i>   Provides coverage for non-collision events      </strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
<p>Physical damage insurance extends coverage to damage resulting from events like theft, vandalism, or natural disasters</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<strong>   <i class="bi bi-patch-check"></i>   Offers peace of mind by ensuring your truck is protected    </strong>
        </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
<p>Physical damage insurance provides commercial truckers with the peace of mind that they are financially protected in case of vehicle damage.</p>      </div>
    </div>
  </div>
  
</div>
                </div>
                <div className="col-md-6">
                <img src={img1} alt="" className="img" className="accordionImg"/>
                </div>
                </div>
                </div>

<br/> <br/> 


{/* how our platform works */}
<div className="container">
<div className="row">
<div className="col-md-6">
<br/> <br/>
<img src={img8} alt="" className="img8" />
</div>
<div className="col-md-6">
<p>The best insurance companies are with us 
<h3 className="h3">How our platform works</h3>
<img src={lineimg} alt="" />

</p>

<p className="">Watch the video and understand why <br/>
thousands of people are already using our <br/>
services and are protected</p>
<br/>
<i class="bi bi-phone-fill"></i> <b>Connect with a live agent</b> <br/>
<hr/>
<br/>
<i class="bi bi-truck"></i> <b>Trucking industry specialist</b> <br/>

<hr/>
<br/>
<i class="bi bi-bag-fill"></i> <b>Competitve rate</b> 
<hr/>
<br/>
</div>
</div>
</div>

<br/>


        {/* Quote. Purchase. Manage. */}

                <div className="instant-quote purchase">
                    <p>Do the same as thousands of customers
<h3 className="h3">Quote. Purchase. Manage.</h3>
<img src={lineimg} alt="" />

                    </p>
                    <br />
                    <p>The BCE Trucking platform enhances your speed and efficiency when it comes to managing your trucking <br/>
insurance. It stands out as the sole digital trucking insurance platform that allows you to compare quotes, buy <br/>
policies, and stay connected with your agent, all within a single, convenient location.</p>
                </div>

      <div className="container">
      <div className="row">
      <div className="col-md-4">
      <div className="card p-4">
      <h1>1</h1>
      <h6>Educate</h6>
        <div className="purchase">
        <p>Access valuable educational resources
shared by industry veterans who are
former trucking company owners.</p>
        </div>
        <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
      </div>
      </div>
      <div className="col-md-4">
      <div className="card p-4">
      <h1>2</h1>
      <h6>Educate</h6>
        <div className="purchase">
        <p>Access valuable educational resources
shared by industry veterans who are
former trucking company owners.</p>
        </div>
        <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
      </div>
      </div>
      <div className="col-md-4">
      <div className="card p-4">
      <h1>3</h1>
      <h6>Educate</h6>
        <div className="purchase">
        <p>Access valuable educational resources
shared by industry veterans who are
former trucking company owners.</p>
        </div>
        <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
        <i class="bi bi-patch-check card-icon"> <b> Implement top safety measures </b> </i> <br/>
      </div>
      </div>
      </div>
      </div>

<div className="star"> 
       <i class="bi bi-star-fill star purchase"> <b> Implement top safety measures </b></i>  <b>Get your quote</b> <i class="bi bi-arrow-right" /> <br/>
</div>
<br/>
<br/>

{/* gif imags */}
<div className="contianer bg-white">
<br/><br/>
<div className="row">
<div className="col-md-3">
<img src={gif1} alt=""/>
<p>If your business vehicles travel less, you should pay less for insurance</p>
</div>
<div className="col-md-3">
<img src={gif2} alt=""/>
<p>Excellent service!!</p>
</div>
<div className="col-md-3">
<img src={gif3} alt=""/>
<p>The flexibility of a fixed standard excess or a percentage excess which may be adjusted to suit your financial needs.</p>
</div>
<div className="col-md-3">
<img src={gif4} alt=""/>
<p>Cover for the replacement of locks and keys.</p>
</div>
</div>
<br/>
<div className="row">
<div className="col-md-3">
<img src={gif5} alt=""/>
<p>Access to emergency roadside and office assistance services.</p>
</div>
<div className="col-md-3">
<img src={gif6} alt=""/>
<p>Access to emergency roadside and office assistance services.</p>
</div>
<div className="col-md-3">
<img src={gif7} alt=""/>
<p>Cover outside of South Africa into various African territories</p>
</div>
<div className="col-md-3">
<img src={gif8} alt=""/>
<p>Replacement vehicle or vehicle loss of use while your vehicle is being repaired.</p>
</div>
</div>
<br/><br/>
</div>

<br/><br/>








{/* do business with Balonas */}
<div className="container">
<div className="row">
<div className="col-md-6">
<h4 style={{color:"red" }} className="fw-bold">Do Business Your Way with Bolanos Business Insurance</h4>
<p>As your business continues to grow, we offer you 
    solutions that will continue to serve your business
     through its lifecycle.</p>
<p>Bolanos Business Insurance team is committed to
   providing you with world-class service. Simply 
   give us your details using the form and we'll give you a call.</p>
</div>
<div className="col-md-6">
<p style={{color:"red" }}>Fill you details below to get a quote</p>
<form>
       <input type="text" name="" id="" placeholder="User name" required/>
        <br/><br/>
        <input type="email" name="" id="" placeholder="E-mail" required/>
        <br/><br/>
        <input type="number" name="" id="" placeholder="Phone number" required/>
        <br/><br/>
        <p>As your business continues to grow, we offer you solutions that will continue to serve your business through its lifecycle.

Bonalos Business Insurance team is committed to providing you with world-class service. Simply give us your details using the form and we'll give you a call.</p>
<button className="btn btn-success" onClick={() => openNotificationWithIcon('success')}>I want to be a customer</button> 
<br/><br/>
       </form>
</div>
</div>
</div>










            </body>


        </>
    )
}


export default Home;