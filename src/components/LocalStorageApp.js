import React, { Component } from "react";

class LocalStorageApp extends Component {
  state = { user: "", rememberMe: false };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };

  render() {
    const userName = localStorage.getItem("rememberMe")
      ? localStorage.getItem("user")
      : null;

    return (
      <form className="card p-4 shadow-sm" onSubmit={this.handleFormSubmit}>
        <h2 className="text-center">
          {localStorage.getItem("user")
            ? `Hello, ${userName}!`
            : "Please Log In"}
        </h2>
        <div className="container">
          <label className="form-label col" htmlFor="user">
            User:
            <input
              id="user"
              className="form-control"
              name="user"
              type="text"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </label>
          <div className="form-check">
            <input
              id="rememberMe"
              className="form-check-input"
              type="checkbox"
              checked={this.state.rememberMe}
              name="rememberMe"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
        </div>
        <button className="btn btn-info w-50 align-self-center" type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default LocalStorageApp;
