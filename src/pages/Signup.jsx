import '../css/Login.css'
import logo from '../images/logo.png'
import img1 from '../images/img11.jpg'
import lineimg from '../images/lingImg.png'
import { notification } from 'antd';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"


function Login() {

    // textbox variables
    const [name, setName] = useState("") //Conil
    const [email, setEmail] = useState("")//abcd@gmail.com
    const [password, setPassword] = useState("") //12345
    const [confirmpassword, setConfirmpassword] = useState("")//12345
    const navigate = useNavigate() //navigating back to the hhome page 

    // post data
    const registration = (e) => {
        e.preventDefault()
        axios.post("https://backend-self-delta.vercel.app/api/registration",
            {
                name,
                email,
                password,
                confirmpassword
            }
        ).then(res => {
            if (res.data.status === true) {
                openNotificationWithIcon('success')
                navigate("/Login")

            } else {
                alert(res.data.msg)
            }
        })
    }



    // message  notification
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'BCW Registration',
            description:
                'You have successfully been registered'
        });
    };


    return (
        <>
            <body>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <img src={logo} alt="" className="logo" />
                            <h3 className="h3" style={{color:"red"}}>Sign up account</h3>
                            <img src={lineimg} alt="" />
                            <p>Fill out follwing details
</p>
                            <br />
                            <div class="modal-body">
                                <form>
                                    <input type="text" name="" id="" placeholder="Your username" required
                                        onChange={(e) => setName(e.target.value)} />
                                    <br /><br />
                                    <input type="email" name="" id="" placeholder="E-mail" required
                                        onChange={(e) => setEmail(e.target.value)} />

                                    <br /><br />
                                    <input type="password" name="" id="" placeholder="Password" required
                                        onChange={(e) => setPassword(e.target.value)} />

                                    <br /><br />
                                    <input type="password" name="" id="" placeholder="Confirm password" required
                                        onChange={(e) => setConfirmpassword(e.target.value)} />

                                    <br /><br />
                                    <button onClick={registration} className="btn btn-success">Register</button>

                                </form>
                                <br />
                                <p>Already a user?? <b>Login</b></p>
                                <hr />
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <br /><br /><br /><br /><br />
                            <div className="img-bg p-5">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <br />
            </body>
        </>
    )
}

export default Login;