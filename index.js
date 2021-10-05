import React from "react"
import ReactDOM from "react-dom"
import Menu from './menu'
import Home from './home'
import Activities from "./activities"
import Login from "./login"
import Membership from "./membership"
import './index.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { role: "user", show: "login" }; 
    }


    render() {
        let content=<Home/>
        switch(this.state.show){
            case 'activities':content=<Activities/>
                                break;
            case 'login':content=<Login/>
                                break;
            case 'membership':content=<Membership/>
                                break;
            default: content=<Home/>
        }
        return (
            <>
                <Menu role={this.state.role} show={this.state.show}/>
                {content}
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));


