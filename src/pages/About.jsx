import '../css/About.css'
import img from '../images/img.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import carousel1 from '../images/carousel1.png'
import carousel2 from '../images/carousel2.png'
import { Link } from 'react-router-dom'
import lineimg from '../images/lingImg.png'



function About ()
{
    return(
        <>
    
            <body>





{/* <!-- Modal for about us btn --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Get a contact us</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Get a contact us by  <br/><br/> <i class="bi bi-telephone-fill">+27 635 123 785</i> </p>
        <b style={{color:"red"}}> Or</b> <br/><br/>
        <i class="bi bi-whatsapp">+27 635 123 785</i>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

                {/* our mission */}
        <h2 >About us</h2> 
        
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
                   <span><button className="quote" data-bs-toggle="modal" data-bs-target="#exampleModal">Get a Contact us</button></span>
                   <span><Link to="/Comments"><button className="contact">Write a commet about us</button></Link></span>
        </div>
        <div className="col-md-6">
        <img src={img} alt=""className="img"/>
        </div>
        </div>
        </div>


<br/><br/>
{/* truckers */}
<div className="trucker">
<p>Connecting trucking challenges with needed solutions
<h3 className="helping">Helping all truckers thrive</h3> </p>
</div>

<br/>

<div className="container">
<div className="row">
<div className="col-md-6">
<img src={img1} alt="" className="img1" />
</div>
<div className="col-md-6">
<br/><br/>
<i class="bi bi-patch-check"></i> <b>Need help understanding trucking compliance?</b> <br/>
<p>We don't just provide insurance; we also assist with a range of DOT compliance issues.</p>

<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Having issues find competitive rates?</b> <br/>
<p>Having issues find competitive rates?</p>

<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Losing loads due to slow COI’s?</b> <br/>
<p>Frustrated by lost loads due to delayed COIs from your agent?</p>
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


<div className="container">
<div className="row">
<div className="col-md-6">

{/* carousel start */}
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carousel1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousel2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousel1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
<div className="col-md-6">
<br/><br/>
<i class="bi bi-patch-check"></i> <b>Need help understanding trucking compliance?</b> <br/>
<p>We don't just provide insurance; we also assist with a range of DOT compliance issues.</p>

<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Having issues find competitive rates?</b> <br/>
<p>Having issues find competitive rates?</p>

<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Losing loads due to slow COI’s?</b> <br/>
<p>Frustrated by lost loads due to delayed COIs from your agent?</p>
</div>
</div>
</div>


<br/>















            </body>
        
        
        </>
    )
}


export default About;