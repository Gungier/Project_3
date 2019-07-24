import React from "react";
import "./style.css";


function SignUp() {
    return(
    
<div>
        <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body mx-3">
              <div class="md-form mb-5">
              
                <input type="text" id="orangeForm-name" class="form-control validate"/>
                <label data-error="wrong" data-success="right" for="orangeForm-name">First Name</label>
              </div>

              <div class="md-form mb-5">
              
                <input type="text" id="orangeForm-name" class="form-control validate"/>
                <label data-error="wrong" data-success="right" for="orangeForm-name">Last Name</label>
              </div>
              <div class="md-form mb-5">
                
                <input type="email" id="orangeForm-email" class="form-control validate"/>
                <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
              </div>
      
              <div class="md-form mb-4">
               
                <input type="password" id="orangeForm-pass" class="form-control validate"/>
                <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
              </div>
      
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-default">Sign up</button>
            </div>
          </div>
        </div>
      </div>
      
        
      </div>
            
        
    );
}

export default SignUp;