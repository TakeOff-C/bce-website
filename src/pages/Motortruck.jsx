import '../css/Motortruck.css'
import img8 from '../images/img8.png'
import img9 from '../images/img9.png'
import img2 from '../images/img2.png'
import lineimg from '../images/lingImg.png'




function Motortruck ()
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
        <h2>Motor truck cargo insurance</h2> 
        <br/>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <p>  We help you at any time</p>
        <img src={lineimg} alt="" />

        <h3 className="h3" style={{color:"red"}}>What Is Motor Truck Cargo Insurance?</h3>
        <p>Motor Truck Cargo Insurance safeguards trucking companies 
            from financial losses resulting from damage or loss of
             transported goods. This policy covers cargo against 
             accidents, theft, and unforeseen events. Typically,
              freight brokers mandate a minimum of $100,000 MTC coverage..</p>
                   <span><button className="quote">Get a qoute</button></span>
                   <span><button className="contact" data-bs-toggle="modal" data-bs-target="#exampleModal">Get a Contact us</button></span>
        </div>
        <div className="col-md-6">
        { <img src={img8} alt=""className="img"/> }
        </div>
        </div>
        </div>


<br/><br/>
{/* truckers */}
<div className="trucker">
<p>Do the same as thousands of customers
<h3 className="helping">Secure Motor Truck Cargo Insurance quickly and effortlessly.</h3> </p>
<img src={lineimg} alt="" />

<p>Get in touch with an expert who can guide you through the intricacies <br/>
of trucking insurance and leverage a contemporary platform to <br/>
increase the efficiency of your business.</p>
</div>

<br/>

<div className="container">
<div className="row">
<div className="col-md-6">
<img src={img9} alt="" className="img" />
</div>
<div className="col-md-6">
<br/><br/>
<i class="bi bi-clock"></i> <b> 
Complete in minutes, all online</b> <br/>
<p>Acquire coverage within minutes, not days, through our online platform.</p>
<hr/>
<br/>
<i class="bi bi-globe"></i> <b>Complete in minutes, all online</b> <br/>
<p>Access coverage 24/7, day or night. With instant access to certificates of insurance
     once the policy is purchased.</p>

<hr/>
<br/>
<i class="bi bi-info-lg"></i> <b>Protects against lawsuitsComplete in minutes, all online</b> <br/>
<p> 
We offer competitive rates for all your products and services. Our commitment is to provide the best protection for
 our customers without compromising quality or value.</p>
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


export default Motortruck;