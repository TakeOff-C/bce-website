
import '../css/Comments.css'
import axios from 'axios';
import {useState , useEffect} from 'react'
import{Avatar} from 'antd'
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router';
import { async } from 'q';


function Comments ()
{
const [comment, setComments] = useState([])
const [inputvalue, setInputvalue] = useState("")
const [userid, setUserid] = useState("")
const Navigate = useNavigate();
 const fetchComments = () =>
{
    axios.get(`https://backend-self-delta.vercel.app/api/getcomment/655358863eb4d40ab68400b5`) 
    .then(res =>{
        setComments(res.data.comments)

    })
}
    
useEffect(()=>{
const token = localStorage.getItem("userId")
if(token != null)
{
const decodedtoken = jwtDecode(token)
console.log(decodedtoken)
setUserid(decodedtoken.id)

}
// else{
//     Navigate("/Home")
// }


fetchComments();
},[])
console.log(comment)
const postcomment = async() =>{
await axios.post("https://backend-self-delta.vercel.app/api/comment", {
    user:userid,
    deals:"655358863eb4d40ab68400b5",
    comment:inputvalue
}) .then(res =>{
    setInputvalue("");
    fetchComments();
})

}

  return(
<>

<br/><br/>
<div className="container">
<div className="row">
<div className="col-md-6">
<input type="text" name="" value={inputvalue} id="" placeholder="Write your comment about us"
                            onChange={(e) => { setInputvalue(e.target.value) }} 
                            />
                            <br/><br/>
                            <button onClick={postcomment} className="btn btn-secondary">Post your comment</button>
                            <br/><br/>
</div>
<div className="col-md-6">
{
    comment.map((com)=>{
        return(
            <>
            
            <span> <Avatar src={com.user[0]?.url} alt="user" />
             <p className="fw-bold">Conil</p></span> {/* // {com.user[0]?.name} */}
                <p className="text-dark">{com.comment}</p>
             
            </>

        )
      
    })
}

          




</div>
</div>
</div>

</>

  )

}


export default Comments;