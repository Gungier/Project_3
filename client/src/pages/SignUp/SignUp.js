import React from "react";
import "./SignUpCss.css";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",  
  };

  handleClick = () => {
    
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.password);
    axios
      .post("/users/register", 
    {first_name: this.state.firstName,
       last_name: this.state.lastName,
        email: this.state.email,
         password: this.state.password,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          this.props.setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        
 }

  updateInput = (input, event) => {
    event.persist();
    // console.log(event);
    // console.log(input);
    this.setState({[input]:event.target.value});
    console.log("STATE");
    console.log(this.state);
  
  }

  render() {
    return(
    
      <div className="SignUp">
              <div className="modal fade collapse" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body mx-3">
                  <form className="signUpForm">
                    <div className="md-form mb-5">
                    
                      <input onChange={(e) => this.updateInput("firstName", e)} type="text" id="orangeForm-name" className="form-control validate" placeholder="First Name"/>
                      
                    </div>
      
                    <div className="md-form mb-5">
                    
                      <input  onChange={(e) => this.updateInput("lastName", e)} type="text" id="orangeForm-name" className="form-control validate" placeholder="Last Name"/>
                     
                    </div>
                    <div className="md-form mb-5">
                      
                      <input onChange={(e) => this.updateInput("email", e)} type="email" id="orangeForm-email" className="form-control validate" placeholder="Your email address"/>
                     
                    </div>
            
                    <div className="md-form mb-4">
                     
                      <input onChange={(e) => this.updateInput("password", e)} type="password" id="orangeForm-pass" className="form-control validate" placeholder="Password"/>
                     
                    </div>
            
                  
                  <div className="modal-footer d-flex justify-content-center">
                    <button onClick={() => this.handleClick()} id="signUpSubmit" className="btn btn-default" data-toggle="collapse" data-target="#modalRegisterForm"
    aria-expanded="false" aria-controls="modalRegisterForm" data-dismiss="modal" >Sign up</button>
                  </div>
                 </form>
                </div>
                </div>
              </div>
            </div>
            
 
            </div>
                  
              
          );
  }
}




export default SignUp;