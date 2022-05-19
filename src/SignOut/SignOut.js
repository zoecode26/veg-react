import Component from "react";

class SignOut extends Component {
  async componentDidMount() {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "https://react-veg.herokuapp.com/";
  }

  render() {
    return null;
  }
    
}

export default SignOut;