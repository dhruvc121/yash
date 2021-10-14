import React from "react"
import Laugh from './Images/laugh_logo.png'
import events from './events.json'

const Activities=()=>{
    
    return <div>
            <div>
        <img align="right" src={Laugh} alt="Laughing people" height="100px" width="150px" />
        <h1 style={{textAlign: 'center'}}>Club Activities</h1>
        <svg height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 4)">
            <path d="m3.5 3.165h9" />
            <path d="m4.48122025 6.20339509 1-.01878307c.5127454-.00963092.94259192.36840352 1.00968673.86456969l.00909302.13525035v.9832835c0 .54496455-.4363518.98958934-.98122025.99982364l-1 .01878306c-.5127454.00963093-.94259192-.36840352-1.00968673-.86456968l-.00909302-.13525396v-.98327989c0-.54496455.4363518-.98958935.98122025-.99982364z" />
            <path d="m2.5.1507576h11c1.1045695 0 2 .8954305 2 2v10.0147186h-13c-1.1045695 0-2-.8954305-2-2v-8.0147186c0-1.1045695.8954305-2 2-2z" />
            <path d="m8.5 6.165h4" />
            <path d="m8.5 9.165h4" />
            <path d="m15 12.1654762c1.3807119 0 2.5-1.1192881 2.5-2.49999998v-6.5h-2" />
            </g>
        </svg>
        <svg height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
            <path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z" />
            <path d="m.5 4.5h16" />
            <path d="m3.5 7.5v6" />
            <path d="m5.5 7.5v6" />
            <path d="m7.5 7.5v6" />
            <path d="m9.5 7.5v6" />
            <path d="m11.5 7.5v6" />
            <path d="m13.5 7.5v6" />
            </g>
        </svg>
        <svg height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)">
            <circle cx="7.5" cy="5.5" r={2} />
            <path d="m.5 3.5h1v-1c0-1.1045695.8954305-2 2-2h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-1h-1" />
            <path d="m.5 7.5h1" />
            <path d="m.5 5.5h1" />
            <path d="m.5 9.5h1" />
            <path d="m10.5 10.5v-1c0-1.1045695-.8954305-2-2-2h-2c-1.1045695 0-2 .8954305-2 2v1c0 .5522847.44771525 1 1 1h4c.5522847 0 1-.4477153 1-1z" />
            </g>
        </svg>
        <svg height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 5)">
            <path d="m2.49368982.53498937 11.99999998-.03787142c1.0543566-.00331643 1.9207298.80983192 2.0003436 1.84444575l.0059666.15555425v6.00288205c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-5.96502059c0-1.10210602.89158929-1.9965128 1.99368982-1.99999004z" />
            <path d="m7.5 7.5 3-2-3-2z" fill="currentColor" />
            </g>
        </svg>
        </div>
        <table style={{width:"100%",border:"1px solid black", borderCollapse:"collapse", margin:"2rem 0"}}>
            <thead>
                <tr style={{border:"1px solid black"}}>
                    <th style={{border:"1px solid black", padding:"0.5rem 1rem"}}>Name</th>
                    <th style={{border:"1px solid black", padding:"0.5rem 1rem"}}>Dates</th>
                    <th style={{border:"1px solid black", padding:"0.5rem 1rem"}}>Guests</th>
                </tr>
            </thead>
            <tbody>
                {
                    events.map((rowObj,index)=>{
                        return <tr style={{border:"1px solid black"}} key="index">
                            <td style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>{rowObj.name}</td>
                            <td style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>{rowObj.Dates}</td>
                            <td style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>{rowObj.Guest}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default Activities;