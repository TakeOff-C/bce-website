
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
<Link to="/Login"><button className="login" >LOGIN</button></Link>
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
<p><b>Sales</b> <br/><br/>
<b>063 512 3785</b> <br/><br/>
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
<p><b>Client care</b> <br/><br/>
<b>063 512 3785</b> <br/><br/>
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
<p><b>Claims</b> <br/><br/>
<b>063 512 3785</b> <br/><br/>
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
<p><b>International</b> <br/><br/>
<b>063 512 3785</b> <br/><br/>
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
<p><b>Help@OUT24/7</b> <br/><br/>
<b>063 512 3785</b> <br/><br/>
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
<p><b>Career</b> <br/><br/>
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


        </>
    )
}

export default ContactUs;