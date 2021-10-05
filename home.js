import React from "react"
import LaughingGirl from './Images/LaughingGirl.jpg'

const home=()=>{
    //h1 style="font-size: 55px; text-align: center;"
    return <div>
    <h1 style={{fontSize:"55px",textAlign:"center"}}>The Bay Area Laughter Yoga Club</h1>
    <div style={{margin:"0 10%"}}>
        <h2 style={{margin:"1rem 0"}}>Welcome to the laughter Yoga of Bay area</h2>
        <p style={{width:"50%",margin:"1rem 1.5rem",textAlign:"justify"}}>
            The club aims to get people laughing in both group and individual sessions
            and can help reduce stress, make people and employees happier and more
            committed, as well as improve their interpersonal skills.
        </p>
        <img src={LaughingGirl} alt="LaughingGirl"/>
    </div>
    <div style={{margin:"0 10%"}}>
    <h2  style={{margin:"1rem 0"}}>Covid-19 Responce</h2>
    <p style={{width:"50%",margin:"1rem 1.5rem",textAlign:"justify"}}>
        In response to the global COVID-19 pandemic, we are gathering resources in
        support of our membership and local community. We will be posting relevant
        information to our dedicated COVID-19 page. Our goal is to provide timely
        and accurate information as we all are coping with the challenges caused by
        this global pandemic.
    </p>
    </div>
    </div>
}

export default home;