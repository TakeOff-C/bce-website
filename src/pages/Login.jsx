import '../css/Login.css'
import logo from '../images/logo.png'
import img1 from '../images/img10.jpg'
import lineimg from '../images/lingImg.png'
import {  notification } from 'antd';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
  


function Login() 
{
    const [email, getEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const Loginbtn = () =>
    {
      axios.post("https://backend-self-delta.vercel.app/api/login", 
      {
          email,
        password
        
      })
      .then(res => {
     if(res.data.status === "true") //change the true value to a string
    {
        openNotificationWithIcon('success')
      navigate("/")
    }
    else
    {
      alert("Ops... Invalid login credentials")
    }
      })
    }


// message  notification
const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'BCE login',
      description:
'You have successfully login to BCE'
    });
  };

    return(
        <>
        <body>
            
<div className="container">
<div className="row">
<div className="col-md-6">

<img src={logo} alt="" className="logo"/>
<h3 className="h3" style={{color:"red"}}>Login</h3>
<p>Access back to your account</p>
<img src={lineimg} alt="" />

<br/>
<div class="modal-body">
        <form>
        <input type="email" name="" id="" placeholder="Email" required  
        onChange={(e)=> getEmail(e.target.value)}
        />
        <br/><br/>
        <input type="password" name="" id="" placeholder="Password" required 
                onChange={(e)=> setPassword(e.target.value)}

        />
        <br/><br/>
<button onClick={Loginbtn} className="btn btn-success">Login</button>
            </form> 
<br/><br/>
<p>By submitting your data, you authorize us to contact you, To find out more, see our Privacy policy</p>
<hr/>
<i class="bi bi-shield-fill-check"><b>Your data is save with us</b></i>   
   </div>
</div>
<div className="col-md-6" >
<br/><br/>
<div className="img-bg p-5">
<img src={img1}alt=""/>
</div>
</div>
</div>
</div>

<br/>
        </body>
        </>
    )
}

export default Login;