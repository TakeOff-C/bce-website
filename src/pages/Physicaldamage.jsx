import '../css/Physicaldamage.css'
import img8 from '../images/physicalimg.png'
import img9 from '../images/physicalimg1.png'
import img2 from '../images/img2.png'
import lineimg from '../images/lingImg.png'




function Physicaldamage ()
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
                   <span><button className="quote">Get a qoute</button></span>
                   <span><button className="contact" data-bs-toggle="modal" data-bs-target="#exampleModal">Get a Contact us</button></span>
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