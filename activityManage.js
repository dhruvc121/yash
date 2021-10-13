import React, { Component } from 'react';


class Activitymanage extends Component {
    render() {
        return (
            <div>
            <center>
                <div style={{
                    padding:"2rem",
                    width:"30rem",
                    height:"15rem"
                }}>
                    <h2>Add Activity</h2>
                    <hr/>
                    <div>
                    <label>Name:</label>
                    <input style={{marginTop:"1rem"}} type="text" />
                    </div>
                    <div>
                    <label>Date:</label>
                    <input style={{marginTop:"1rem"}} type="text" />
                    </div>
                    <div>
                    <label>Guest:</label>
                    <input style={{marginTop:"1rem"}} type="text" />
                    </div>
                    <button style={{padding:".5rem 1rem",marginTop:"1rem"}}>Add</button>
                </div>
            </center>
            <hr/>
            <h2 style={{marginTop:"2rem"}}>Activities</h2>
            <hr style={{width:"50%"}}/>
            <br/>
            <table style={{width:"100%",border:"1px solid black", borderCollapse:"collapse", margin:"2rem 0"}}>
                <thead>
                    <tr style={{border:"1px solid black"}}>
                        <th  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}></th>
                        <th  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>Name</th>
                        <th  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>Date</th>
                        <th  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>Guest</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}><button>Delete</button></td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>Musical Night</td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>12 Sept, 15 Sept, 18 Sept</td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>The Weekend</td>
                    </tr>
                    <tr>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}><button>Delete</button></td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>Yin Yoga Session</td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>14 Sept, 17 Sept, 20 Sept</td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>Silly Maller</td>
                    </tr>
                    <tr>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}><button>Delete</button></td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>October Game</td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>12 oct, 15 oct, 18 oct</td>
                        <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>chang lie</td>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default Activitymanage;
