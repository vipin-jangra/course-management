import { useState } from "react";
import {  useNavigate } from 'react-router-dom'
import './Login.css';
import {login} from '../../AppSlice'
import { useDispatch, useSelector } from "react-redux";
function Sigin(){

    const [email,setEmail] = useState("");
    
    const users = useSelector((state) => state.users.users)
    
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = ((e) =>{
        e.preventDefault();
        const found = users.find((user) => user.email === email)
        if(found) {

            dispatch(login(found))
            navigate("/")
        }
        
        
    });

    return(
        <>
            <div className="app">
            <form className="login-form" onSubmit={(e) =>{handleSubmit(e)}}>
                <h1>Login</h1>
                <input type="email"  name="email" id="" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            
                {/* <input type="password"  name="password" placeholder="Password" id="" value={password} onChange={(e=>{setPassword(e.target.value)})}/> */}
            
            
                <button type="submit" className="submit__btn" >Submit</button>
                
            </form>

            
        </div>
        </>);
}

export default Sigin;