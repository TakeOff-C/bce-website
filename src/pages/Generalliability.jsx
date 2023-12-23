import '../css/Generalliability.css'
import img from '../images/Generalimg.png'
import img1 from '../images/img1.png'
import img2 from '../images/Generalimg1.png'
import lineimg from '../images/lingImg.png'


function Generalliability ()
{ 
    return(
        <>
    
            <body>
                {/* our mission */}
        <h2>General liabilty</h2> 
        <br/>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <p>  We help you at any time</p>
        <h3 className="h3">What is general liability insurance?</h3>
        <img src={lineimg} alt="" />

        <p>This insurance shields businesses from financial losses 
            resulting from lawsuits or claims related to property 
            damage, bodily injury, or other harm caused by their
             operations. It covers expenses such as legal fees,
              settlements, and judgments</p>
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


export default Generalliability;