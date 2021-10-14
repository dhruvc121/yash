import React, { Component } from 'react';
import events from './events.json'


class Activitymanage extends Component {
    constructor(props){
        super(props)
        this.state={
            events:events,
            name:"",
            Dates:[],
            Guest:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.name)
        switch(event.target.name){
            case 'name':this.setState({...this.state,name:event.target.value})
                        break;
            case 'Dates':this.setState({...this.state,Dates:event.target.value})
                        break;
            case 'Guest':this.setState({...this.state,Guest:event.target.value})
                        break;
            default: break;
        }
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let newArr=[...this.state.events,{name:this.state.name,Dates:this.state.Dates,Guest:this.state.Guest}]
        this.setState({
            ...this.state,events:newArr
        })
        console.log(this.state,newArr)
    }
    handleDelete(index){                
        let newArr=[...this.state.events]
        newArr.splice(index,1)
        this.setState({
            ...this.state,events:newArr
        })
    }
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
                    <input name="name" value={this.state.name} onChange={this.handleChange} style={{marginTop:"1rem"}} type="text" />
                    </div>
                    <div>
                    <label>Date:</label>
                    <input name="Dates" value={this.state.Dates} onChange={this.handleChange} style={{marginTop:"1rem"}} type="text" />
                    </div>
                    <div>
                    <label>Guest:</label>
                    <input name="Guest" value={this.state.Guest} onChange={this.handleChange} style={{marginTop:"1rem"}} type="text" />
                    </div>
                    <button style={{padding:".5rem 1rem",marginTop:"1rem"}} onClick={this.handleSubmit}>Add</button>
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
                    {
                        this.state.events.map((row,index)=>{
                           return <tr>
                                <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}><button onClick={(index)=>{this.handleDelete(index)}}>Delete</button></td>
                                <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>{row.name}</td>
                                <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>{row.Dates}</td>
                                <td  style={{textAlign:"justify", border:"1px solid black", padding:"0.5rem 1rem"}}>{row.Guest}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default Activitymanage;
