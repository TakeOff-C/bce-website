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
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
import {  notification } from 'antd';



function Home() {
    // message  notification
//   const openNotificationWithIcon = (type) => {
//     notification[type]({
//       message: 'Customer Added',
//       description:
// 'You have successfully been added to the customer group'
//     });
//   };
    return (
        <>


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
<button 
className="btn btn-success" 
//onClick={() => openNotificationWithIcon('success')}
>I want to be a customer</button> 
<br/><br/>
       </form>
<p>By submitting your data, you authorize us to contact you, To find out more, see our Privacy policy</p>
<hr/>
<i class="bi bi-shield-fill-check"><b>Your data is sage with us</b></i>   
   </div>
</div>

  </div>
</div>



            <body>

        <h2 >Balonos insurance</h2>


        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* carousel start */}
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={carousel1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={carousel1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Need help understanding trucking compliance?</b> <br />
              <p>
                We don't just provide insurance; we also assist with a range of
                DOT compliance issues.
              </p>
              <hr />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Having issues find competitive rates?</b> <br />
              <p>Having issues find competitive rates?</p>
              <hr />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Losing loads due to slow COI’s?</b> <br />
              <p>
                Frustrated by lost loads due to delayed COIs from your agent?
              </p>
            </div>
          </div>
        </div>


            
        <br/>
                <br/> 
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
                        <button type="button" class="btn btn-quote" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Get a Quote</button>

<br/><br/>
                        

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
<div className="col-md-6" id="platform">
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
<h2>Quote. Purchase. Manage.</h2>
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
       <i class="bi bi-star-fill star purchase"> </i>  <b>Get your quote</b> <i class="bi bi-arrow-right" /> <br/>
</div>
<br/>
<br/>

{/* gif imags */}
<div className="contianer bg-white">
<br/><br/>
<div className="row">
<div className="col-md-3">
<img src={gif1} alt=""/>
<p>If your business vehicles travel less, <br/> you should pay less for insurance</p>
</div>
<div className="col-md-3">
<img src={gif2} alt=""/>
<p>Excellent service with  the <br/> best professionals of great expirience </p>
</div>
<div className="col-md-3">
<img src={gif3} alt=""/>
<p>The flexibility of a fixed standard excess <br/> or a percentage excess  which may be <br/> adjusted to suit your financial needs.</p>
</div>
<div className="col-md-3">
<img src={gif4} alt=""/>
<p>Cover for the replacement <br/> of locks and keys.</p>
</div>
</div>
<br/>
<div className="row">
<div className="col-md-3">
<img src={gif5} alt=""/>
<p>Access to emergency roadside and <br/> office assistance services.</p>
</div>
<div className="col-md-3">
<img src={gif6} alt=""/>
<p>Access to emergency roadside <br/> and office assistance services.</p>
</div>
<div className="col-md-3">
<img src={gif7} alt=""/>
<p>Cover outside of South Africa <br/> into various African territories</p>
</div>
<div className="col-md-3">
<img src={gif8} alt=""/>
<p>Replacement vehicle or vehicle  loss of <br/> use while your vehicle is being repaired.</p>
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
<button 
className="btn btn-success" 
//onClick={() => openNotificationWithIcon('success')}
>
I want to be a customer</button> 
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