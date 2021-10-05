import React from "react"

const membership=()=>{
    return <div>
            <div>
        <header>
            <h1 style={{textAlign:"center"}}>Register here.....!!!</h1>
        </header>
        <form action method="get" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{background:"gray", width:"30%",padding:"5rem"}}>
                <div >
                    <label htmlFor="name">Name : </label>
                </div>
                <div >
                    <input style={{width:"100%",lineHeight:"1.5rem"}}  type="text" name="Name" id="Name" required  />
                </div>
            <br />
                <div >
                    <label htmlFor="Email">Email : </label>
                </div>
                <div >
                    <input style={{width:"100%",lineHeight:"1.5rem"}}  type="email" name="Email" id="Email" required />
                </div>
            <br />
                <div >
                    <label htmlFor="Password">Password : </label>
                </div>
                <div >
                    <input style={{width:"100%",lineHeight:"1.5rem"}}  type="password" name="Password" id="Password" />
                </div>
            <br />
                <div >
                    <label htmlFor="Age">Age group : </label>
                </div>
                <div >
                    <select id="Age">
                    <option value />
                    <option value="early">0-15</option>
                    <option value="Adult">16-25</option>
                    <option value="middle">26-45</option>
                    <option value="old">45+</option>
                    </select>
                </div>
            <br />
                <div >
                    <label htmlFor="Comment">Comment : </label>
                </div>
                <div >
                    <textarea style={{width:"100%",lineHeight:"1.5rem"}} type="text" name="Commnt" id="Comment"/>
                </div>
            <br />
            <div >
                <button id="submit" type="button" style={{width:"100%",lineHeight:"1.5rem",padding:"0.5rem 1rem"}}>Sign me Up !!</button>
            </div>
            </div>
        </form>
        <br />
        <br /><br />
        </div>

    </div>
}

export default membership