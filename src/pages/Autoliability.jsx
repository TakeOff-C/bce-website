import '../css/Autoliability.css'
import img from '../images/autoimg.png'
import img1 from '../images/autoimg1.png'
import img2 from '../images/img2.png'
import lineimg from '../images/lingImg.png'




function Autoliability ()
{
    return(
        <>
    
            <body>
                {/* our mission */}
        <h2>Auto liability insuranceAbout us</h2> 
        <br/>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <p>  We help you at any time</p>
        <h3 className="h3">What is auto liability insurance?</h3>
        <img src={lineimg} alt="" />

        <p>Auto liability coverage is vital and required by law. 
            It protects against accident-related injury or damage.
             Most freight brokers require at least $1,000,000 in coverage,
              ensuring compliance and peace of mind on the road..</p>
                   <span><button className="quote">Get a qoute</button></span>
                   <span><button className="contact">Get a Contact us</button></span>
        </div>
        <div className="col-md-6">
        <img src={img} alt=""className="img"/>
        </div>
        </div>
        </div>


<br/><br/>
{/* truckers */}
<div className="trucker">
<p>3 Reasons for getting auto liability insurance
<h3 className="helping">3 Reasons for getting auto liability insurance</h3> </p>
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
Protects against financial loss in the event of an accident</b> <br/>
<p>Auto liability insurance covers property damage, medical bills, and legal fees when a trucker is at fault in an accident, providing financial protection and peace of mind.</p>
<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Required by law</b> <br/>
<p>Commercial truckers are legally obliged to maintain auto liability insurance. If you possess an MC Authority,
     the law mandates a minimum if $750,000 Auto Liability Coverage</p>

<hr/>
<br/>
<i class="bi bi-patch-check"></i> <b>Protects against lawsuits</b> <br/>
<p> 
Protects against lawsuits
Auto liability insurance assists truckers facing lawsuits after accidents, covering legal fees and awarded 
damages, offering financial protection and peace of mind</p>
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
        <h3 className="h3">Our Mission</h3>
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


export default Autoliability;