import React, { Component } from "react";

class SignOut extends Component {
  async componentDidMount() {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "http://localhost:3000/";
  }

  render() {
    return null;
  }
    
}

export default SignOut;