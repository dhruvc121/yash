import React from "react"


const Login=()=>{
    //h1 style="font-size: 55px; text-align: center;"
    return <div>
    <h1 style={{textAlign:"center",margin:"1rem 0"}}>Login</h1> 
    <br/>
    <div style={{display:"flex",alignItems:"center", justifyContent:"center",margin:"2rem 0",background:"gray",padding:"3rem 4rem"}}>
    <div>
        <label>Email</label>
        <input style={{lineHeight:"1.5rem"}} type="text" />
    </div>   
    <div>
        <label>password</label>
        <input style={{lineHeight:"1.5rem"}} type="password" />
    </div>   
    <button style={{padding:"0.3rem 1rem"}}>Login</button>
    </div>
    </div>
}

export default Login;