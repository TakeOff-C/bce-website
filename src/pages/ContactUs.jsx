
import '../css/ContactUs.css'
import { Link } from 'react-router-dom'


function ContactUs(){
    return(
        <>

<h2 >Contact us</h2> 
<br/>
<p>Contact any of the below departments if you need assistance or want to speak to a friendly member <br/>
    of the OUTsurance team. Remember our Client Care Department is also just a phone call away on <br/><br/>
<b>063 512 3785.</b>
<br/><br/>
You can update your insurance policy, submit a claim or find out more information on the OUTsurance <br/> portal. <br/>
<Link to="/Login"><button className="login" >LOGIN</button></Link>
 </p>




        </>
    )
}

export default ContactUs;