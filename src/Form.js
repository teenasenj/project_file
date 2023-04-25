import './Form.css';

function Form() {
  return (

<form>
<div class="text-primary">
<div class="row mt-5 ms-5 mb-3">
{/* <!-- row start -->
<!-- col 1 start --> */}
<div class="col-md-3">
</div>
{/* <!-- col 2 start --> */}
<div class="col-md-4">



  <form style={{color: "red"}}class="shadow-lg p-5 mb-5 bg-body-tertiary rounded">
  <div class="mb-3">
  <label  class="form-label">Name</label>
  <input type="text" class="form-control shadow-p-2 mb-5 bg-body-tertiary rounded" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
  <div class="mb-3">
  <label class="form-label">Address</label>
  <input type="text" class="form-control shadow-p-2 mb-5 bg-body-tertiary rounded" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
  <label  class="form-label">Phone</label>
  <input type="text" class="form-control shadow-p-2 mb-5 bg-body-tertiary rounded" id="exampleInputPassword2"/>
  </div>
  <div class="mb-3">
  <label  class="form-label">E-mail</label>
  <input type="text" class="form-control shadow-p-2 mb-5 bg-body-tertiary rounded" id="exampleInputPassword3"/>
  <div id="emailHelp" class="form-text"> &nbsp;&nbsp;&nbsp;&nbsp;We'll never share your email with anyone else.</div>
  </div>
  </div>
 <div class="mb-3">
<label class="form-label">Amount ₹</label>
<input type="number" class="form-control shadow-p-2 mb-5 bg-body-tertiary rounded" id="exampleInputPassword1"/>
</div>
<div class="mb-3 form-check">
Conform order Placement<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
     
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>
</form>

  );
}

export default Form;
