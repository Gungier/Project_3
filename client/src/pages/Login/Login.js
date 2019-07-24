import React from "react";
import "./Login.css";
import axios from "axios";

class Login extends React.Component{
    state = {
        email: "",
        password: "",
    }

    handleClick = () => {
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.handleClick);
        axios
        .post("http://localhost:3001/users/login", 
        {     email: this.state.email,
             password: this.state.password,
        })
        .then((res) => {
            console.log(res);
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
    
      }

      render() {
        return(
    
            <div className="container">
    
    
                <div className="modal fade collapse" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true"  >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                            <form className="loginForm">
                                <div className="md-form mb-5">
                                    <input onChange={(e) => this.updateInput("email", e)} type="email" id="defaultForm-email" className="form-control validate" placeholder="Email" />
                                 
                                </div>
    
                                <div className="md-form mb-4">
                                
                                    <input onChange={(e) => this.updateInput("password", e)} type="password" id="defaultForm-pass" className="form-control validate" placeholder="Password"/>
                                    
                                </div>
    
                            
                            <div className="modal-footer d-flex justify-content-center">
                                <button onClick={() => this.handleClick()} id="loginSubmit" className="btn btn-default" data-toggle="collapse" data-target="#modalLoginForm"
    aria-expanded="false" aria-controls="modalLoginForm"  data-dismiss="modal">Login</button>
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


export default Login;