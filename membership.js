import React, { Component } from "react";
import "./club.css";

class membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      ageGrp: "",
      comment: "",
      show: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    switch (event.target.name) {
      case "Name":
        this.setState({ ...this.state, name: event.target.value });
        break;
      case "Email":
        this.setState({ ...this.state, email: event.target.value });
        break;
      case "Password":
        this.setState({ ...this.state, password: event.target.value });
        break;
      case "Age":
        this.setState({ ...this.state, ageGrp: event.target.value });
        break;
      case "Comment":
        this.setState({ ...this.state, comment: event.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  }
  render() {
    return (
      <div>
        <div>
          <header>
            <h1 style={{ textAlign: "center" }}>Register here.....!!!</h1>
          </header>
          <form
            action
            method="get"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ background: "gray", width: "30%", padding: "5rem" }}>
              <div>
                <label htmlFor="name">Name : </label>
              </div>
              <div>
                <input
                  value={this.state.name}
                  onChange={this.handleChange}
                  style={{ width: "100%", lineHeight: "1.5rem" }}
                  type="text"
                  name="Name"
                  id="Name"
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="Email">Email : </label>
              </div>
              <div>
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={{ width: "100%", lineHeight: "1.5rem" }}
                  type="email"
                  name="Email"
                  id="Email"
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="Password">Password : </label>
              </div>
              <div>
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  style={{ width: "100%", lineHeight: "1.5rem" }}
                  type="password"
                  name="Password"
                  id="Password"
                  minLength="8"
                />
              </div>
              <br />
              <div>
                <label htmlFor="Age">Age group : </label>
              </div>
              <div>
                <select
                  id="Age"
                  name="Age"
                  value={this.state.ageGrp}
                  onChange={this.handleChange}
                >
                  <option value />
                  <option value="early">0-15</option>
                  <option value="Adult">16-25</option>
                  <option value="middle">26-45</option>
                  <option value="old">45+</option>
                </select>
              </div>
              <br />
              <div>
                <label htmlFor="Comment">Comment : </label>
              </div>
              <div>
                <textarea
                  value={this.state.comment}
                  onChange={this.handleChange}
                  style={{ width: "100%", lineHeight: "1.5rem" }}
                  type="text"
                  name="Comment"
                  id="Comment"
                />
              </div>
              <br />
              <div>
                <button
                  id="submit"
                  type="button"
                  onClick={this.handleSubmit}
                  style={{
                    width: "100%",
                    lineHeight: "1.5rem",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Sign me Up !!
                </button>
              </div>
            </div>
          </form>
          <br />
          <br />
          <br />
        </div>
        <section hidden={!this.state.show}>
          <center>
            <div
              className="thankyou-box"
              style={{
                border: "5px solid seagreen",
                height: "14rem",
                width: "25rem",
                padding: "2rem",
              }}
            >
              <h3>
                <center>Thanks For Signing Up!!</center>
              </h3>
              {this.state.password.length < 8 ? (
                <h3 style={{ marginTop: "2rem" }}>
                  <center>password too short:(</center>
                </h3>
              ) : (
                <div>
                  <p>
                    Welcome:{this.state.name}
                    <br />
                    Your Email:{this.state.email}
                    <br />
                    You are:{this.state.ageGrp}
                    <br />
                    Your comments:{this.state.comment}
                  </p>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      marginTop: "1rem",
                    }}
                    onClick={this.handleSubmit}
                  >
                    close
                  </button>
                </div>
              )}
            </div>
          </center>
        </section>
      </div>
    );
  }
}

export default membership;
