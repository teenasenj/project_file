const Contact = () => {
   

   
      return (
    
    <form>
     <h1>contact</h1>
    <div class="text-primary">
    <div class="row mt-5 ms-5 mb-3">
    {/* <!-- row start -->
    <!-- col 1 start --> */}
    <div class="col-md-3">
    </div>
    {/* <!-- col 2 start --> */}
    <div class="col-md-4">
    
   <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&osid=1&passive=1209600&service=mail&ifkv=AQMjQ7RR8s8P4ux5rKF0AZ4DnHk8SsvRrqkhm2jiQlEdrLPMJKFQIE37MRHN9IyP2RtfayJCvQ65aQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"> <button type="button" class="btn btn-primary btn-sm ms-5" >Create account</button> </a>&nbsp;New User?<br></br>
    <br></br>
Create an account in just 1 step to avail exclusive benefits
    <br></br>
    <br></br>
    <br></br>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
  <button class="btn btn-primary me-md-2" type="button"><i class="bi bi-facebook"></i>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>&nbsp;Login with google</button>
  <button class="btn btn-primary" type="button"><i class="bi bi-google"></i>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>&nbsp;Login with Facebook</button>
</div>
      <form style={{color: "blue"}}class="shadow-lg p-5 mb-5 bg-body-tertiary rounded">
      <div class="mb-3">
      
          
  
      <div class="mb-3">
      <label  class="form-label">E-mail</label>
      <input type="text" class="form-control shadow-p-2 mb-5 bg-body-tertiary rounded"/>
      <div id="emailHelp" class="form-text"> &nbsp;&nbsp;&nbsp;&nbsp;We'll never share your email with anyone else.</div>
      </div>
      </div>
    
      <div class="mb-3">
      <label  class="form-label">Password</label>
      <input type="password" class="form-control shadow-p-2 mb-5 bg-body-tertiary rounded"/>
      
      </div>
    <div class="mb-3 form-check">
    Remember me<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
         
    </div>
    <button type="submit" class="btn btn-primary ms-5">Submit</button>
    </form>
    </div>
    </div>
    </div>
    </form>
    
      );
    }
  export default Contact;