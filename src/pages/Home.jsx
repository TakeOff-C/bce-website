import '../css/Home.css'
import img1 from '../images/img1.png'

import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import lineimg from '../images/lingImg.png'



function Home() {
    return (
        <>

            <body>
                <br /><br />
                <div className="container">
                    <div className="container-img">
                        <div className="row">

                            <div className="col-md-2">
                                <p>The best security
<h4>Main partners</h4></p>
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





            </body>


        </>
    )
}


export default Home;