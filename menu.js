import React from "react"

const menu=(props)=>{
    console.log(props)
    return<nav>
    <div className="nav-container">
        <ul>
            <li className={"menuitem"+(props.show==="home"?" highlight":"")}>Home</li>
            <li className={"menuitem"+(props.show==="activities"?" highlight":"")}>Activities</li>
            <li className={"menuitem"+(props.show==="login"?" highlight":"")+(props.role==="user"?" hide":"")}>Login</li>
            <li className={"menuitem"+(props.show==="membership"?" highlight":"")+(props.role==="user"?" hide":"")}>Membership</li>
            <li className={"menuitem"+(props.role==="guest"?" hide":"")}>Logout</li>
        </ul>
    </div>
</nav>}

export default menu;