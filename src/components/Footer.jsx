import logo from '../images/logo.png'
import '../css/Footer.css'

function Footer ()
{
    return(
        <>
<footer>

<div className="container">
<div className="row">
<div className="col-md-3">
<img src={logo} alt=""/>

<p>Where we drive your 
insurance needs forward!</p>
</div>
<div className="col-md-3">
<a href=""><b>Home</b></a> <br/><br/>
<a href="">Services</a> <br/><br/>
<a href="">About</a> <br/><br/>
<a href="">Contact Us</a> <br/><br/>
<a href="">Blog</a> <br/><br/><br/>

</div>
<div className="col-md-3">
<a href=""><b>About Us</b></a> <br/><br/>
<a href="">Terms & conditions</a> <br/><br/>
<a href="">Privacy policy</a> <br/><br/><br/>
</div>
<div className="col-md-3">
<a href=""><b>Contact</b></a>
<p>66 Waverley Dr. Ste 630, Frederick, MD 21702</p>
<p>Operations@bceins.com</p> 
<p>063-512-3785</p>
</div>
</div>
</div>

<div className="container">
<div className="row">
<div className="col-md-3">
</div>
<div className="col-md-3">
<i class="bi bi-facebook">Bolanoscommercial</i>
</div>
<div className="col-md-3">
<i class="bi bi-instagram">Bolanoscommercial</i>
</div>
<div className="col-md-3">
<i class="bi bi-twitter">Bolanoscommercial</i>
</div>
</div>
</div>

</footer>
        </>
    )
}



export default Footer;