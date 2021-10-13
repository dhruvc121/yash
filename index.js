import React from "react"
import ReactDOM from "react-dom"
//import Menu from './menu'
import Home from './home'
import Activities from "./activities"
import Login from "./login"
import Membership from "./membership"
import Activitymanage from "./activityManage"
import './index.css'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { role: "admin", show: "" }; 
    
        this.menuChange=this.menuChange.bind(this)
    }


    menuChange(e){                  //called when menutitem is clicked
        this.setState({
            show:e.target.innerHTML             //set show variable
        })
    }
    render() {
        let content=<Home/>
        switch(this.state.show){
            case 'Activities':content=<Activities/>
                                break;
            case 'Login':content=<Login/>
                                break;
            case 'Membership':content=<Membership/>
                                break;
            case 'Activity Manage':content=<Activitymanage/>
                                break;
            default: content=<Home/>
        }
        return (
            <>
                <header>
                <div>
                        <nav>
                        <div className="nav-container">
                            <ul>
                                <li className={"menuitem"+(this.state.show==="home"?" highlight":"")} onClick={this.menuChange}>Home</li>
                                <li className={"menuitem"+(this.state.show==="activities"?" highlight":"")} onClick={this.menuChange}>Activities</li>
                                <li className={"menuitem"+(this.state.show==="login"?" highlight":"")+(this.state.role==="user" || this.state.role==="admin"?" hide":"")} onClick={this.menuChange}>Login</li>
                                <li className={"menuitem"+(this.state.show==="login"?" highlight":"")+(this.state.role!=="admin"?" hide":"")} onClick={this.menuChange}>Activity Manage</li>
                                <li className={"menuitem"+(this.state.show==="membership"?" highlight":"")+(this.state.role==="user" ?" hide":"")} onClick={this.menuChange}>Membership</li>
                                <li className={"menuitem"+(this.state.role==="guest"?" hide":"")}>Logout</li>
                            </ul>
                        </div>
                        </nav>
                </div>
                </header>
                {content}
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));


