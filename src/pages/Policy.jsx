import '../css/Policy.css'
import {  Link } from 'react-router-dom'

function Policy(){
    return(

        <>
        <h2 >Bolanos insurance Policy</h2> 
   <br/>
         <div className="container">
         <h1> <b>Create an OUT ID</b> to conveniently <br/>
         manage your own policy</h1>
         <br/>
         <p className="scam">An OUT ID gives you access to the client portal and app. It's one simple login for <br/> 
         everything OUTsurance</p>
         <Link to="#"><button className="login" >Create my own ID</button></Link>
<Link to="/Login"><button className="email" >Login</button></Link>
<br/><br/>

         </div>

{/* manage policy */}

   <div className="container">
   <p id="policy">Manage your policy </p>
   <div className="row">
   <div className="col-md-4">
   <div className="manage">
   <div className="card">
   <p>
       <i class="bi bi-person-lines-fill"></i>
        <br/>
   <b className="contact">Submit a claim</b> <br/>
   Start a clain online through <br/> bonalosclient portal or app <br/><br/><br/>
   <Link to="#"><button className="login" >Find out more ></button></Link> <br/>
   </p>
   </div>
   </div>    
   </div>
   <div className="col-md-4">
   <div className="manage">
   <div className="card">
   <p>
   <i class="bi bi-journal-richtext"></i>
        <br/>
   <b className="contact">Amen your policy</b> <br/>
   Making a change to your policy is <br/> simple, you won't even need to <br/>contact the call center <br/><br/>
   <Link to="#"><button className="login" >Update policy > ></button></Link>
   </p>
   </div>
   </div> 
   </div>
   <div className="col-md-4">
   <div className="manage">
   <div className="card">
   <p>
   <i class="bi bi-journal-check"></i>
        <br/>
   <b className="contact">Your document</b> <br/>
   Getting to know your insurance cover <br/> is as easy as requesting a <br/> document <br/><br/>
   <Link to="#"><button className="login" >Find a document ></button></Link>
   </p>
   </div>
   </div> 
   </div>
   </div>
   </div>

<br/><br/>

{/* self-service features */}

<div className="container">
<h3> Easy-to-use self-service features</h3>
         <br/>
<div className="row">
<div className="col-md-6">
<p className="scam" id="scam"><b>Username and password</b></p>
<p className="scam">Change your Bolanos ID profile username and password or activate
<br/>
 fingerprint recognition on the app.</p> 

 <br/><br/>

 <p className="scam" id="scam"><b>Policy documentation</b></p>
<p className="scam">Request your policy documents and confirmation of cover.
</p> 
<br/><br/>

 <p className="scam" id="scam"><b>SmartDrive</b></p>
<p className="scam">View your Smartdrive scores and see how well you're driving.
</p> 
<br/><br/>
</div>


<div className="col-md-6">
<p className="scam" id="scam"><b>Access your policy</b></p>
<p className="scam">View your policy details,bolanos bonus amount and payment date.
</p> 
<br/><br/>
<p className="scam" id="scam"><b>Bank details</b></p>
<p className="scam">View and update your banking details linked to your policies.
</p> 
</div>
</div>
</div>



        
        </>

    )
}

export default Policy;