
import '../css/ContactUs.css'
import { Link } from 'react-router-dom'


function ContactUs(){
    return(
        <>

<h2 >Contact us</h2>

<br/>

<div className="container">
<p>Contact any of the below departments if you need assistance or want to speak to a friendly member <br/>
    of the bonalos team. Remember our Client Care Department is also just a phone call away on <br/><br/>
<b>063 512 3785.</b>
<br/><br/>
You can update your insurance policy, submit a claim or find out more information on the OUTsurance <br/> portal. <br/>
<Link to="/Login"><button className="login" >Login</button></Link>
 </p>
     </div>

     {/* contact details */}

     <div className="container">
     <h3>Contact details</h3>
     <div className="row">
     <div className="col-md-4">
<div className="card_details">
<div className="card">
<br/>
<p><b className="contact">Sales</b> <br/><br/>
<b className="contact">063 512 3785</b> <br/><br/>
Mon-Thurs: 	08:00-19:00 <br/>
Friday:	08:00-18:00 <br/>
Sat:	08:00-13:00 <br/>
Public holidays:	08:00-17:00</p>
</div>
</div>
     </div>
     <div className="col-md-4">
     <div className="card_details">
<div className="card">
<br/>
<p><b className="contact">Client care</b> <br/><br/>
<b className="contact">063 512 3785</b> <br/><br/>
Mon-Thurs: 	08:00-19:00 <br/>
Friday:	08:00-18:00 <br/>
Sat:	08:00-13:00 <br/>
Public holidays:	08:00-17:00</p>
</div>
</div>
     </div>
     <div className="col-md-4">
     <div className="card_details">
<div className="card">
<br/>
<p><b className="contact">Claims</b> <br/><br/>
<b className="contact">063 512 3785</b> <br/><br/>
Mon-Thurs: 	08:00-19:00 <br/>
Friday:	08:00-18:00 <br/>
Sat:	08:00-13:00 <br/>
Public holidays:	08:00-17:00</p>
</div>
</div>
     </div>
     </div>
     </div>

<br/>


     <div className="container">
     <div className="row">
     <div className="col-md-4">
<div className="card_details">
<div className="card">
<br/>
<p><b className="contact">International</b> <br/><br/>
<b className="contact">063 512 3785</b> <br/><br/>
Mon-Thurs: 	08:00-19:00 <br/>
Friday:	08:00-18:00 <br/>
Sat:	08:00-13:00 <br/>
Public holidays:	08:00-17:00</p>
</div>
</div>
     </div>
     <div className="col-md-4">
     <div className="card_details">
<div className="card">
<br/>
<p><b className="contact">Help@OUT24/7</b> <br/><br/>
<b className="contact">063 512 3785</b> <br/><br/>
Mon-Thurs: 	08:00-19:00 <br/>
Friday:	08:00-18:00 <br/>
Sat:	08:00-13:00 <br/>
Public holidays:	08:00-17:00</p>
</div>
</div>
     </div>
     <div className="col-md-4">
     <div className="card_details">
<div className="card">
<br/>
<p><b className="contact">Career</b> <br/><br/>
Great that you are interested! <br/>
Please check out our careers <br/>
 page for more detail on <br/>
  how to upload your CV <br/> <br/>
  <Link to="#"><button className="login" >See available jobs</button></Link>

  </p>

</div>
</div>
     </div>
     </div>
     </div>

     <br/>



     {/* compliment */}
     <div className="container">
<p>
    <h2>Compliment or complaint?</h2>
    We'd like to hear from you, simply click the button below to give your feedback or email feedback@bolanos.co.za .
    . <br/><br/>
<Link to="#"><button className="login" >Give feedback</button></Link>
<Link to="#"><button className="email" >Send an email</button></Link>

 </p>
     </div>
     <br/>

     {/* scam */}
     <div className="container">
     <h1> <b>Reporting Scam and Fraud </b>  </h1> <br/>
     <p className="scam" id="scam"><b>email scam</b></p>
  <Link to="#">bolanos.co.za</Link>
  <p className="scam">24 hours a day, 7 days a week</p> 
  <br/>
  <hr/>
  <br/>
  <p className="scam" id="scam"><b>Report Fraud</b></p>
  <Link to="#">063 512 3785</Link>
  <p className="scam">24 hours a day, 7 days a week</p>
  <Link to="#">reportfraud@out.co.za</Link>
  <p className="scam">24 hours a day, 7 days a week</p>
  <br/>
  <p className="scam">Please note that your call 
  and all information will be treated with utmost 
  confidentiality and you can choose to remain anonymous
   - this fraud line can only be effective with your full
    co-operation</p>
    <br/>
    
     </div>

     </>
     
    )
}

export default ContactUs;