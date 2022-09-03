import React, { useState } from "react";
import axios from 'axios';
import { Navigate} from 'react-router-dom';




const Login1 = () => {
    const initialForm1 = {
        usuario:'',
        password:''
    }

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm1);


const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
        ...oldData,
        [name]:value
    }))
  
}

const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/login', formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error === false) {
        setFormData(initialForm1)
    }
}

  return (
<body>
    


<section classname="container">
		<div classname="container ">
			<div classname="row justify-content-sm-center ">
				<div classname="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div classname="text-center my-5">
						<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100"/>
					</div>
					<div classname="card shadow-lg">
						<div classname="card-body p-5">
							<h1 classname="fs-4 card-title fw-bold mb-4">Login</h1>
							<form method="POST" classname="needs-validation" novalidate="" autocomplete="off">
								<div classname="mb-3">
									<label classname="mb-2 text-muted" for="email">E-Mail Address</label>
									<input id="email" type="email" classname="form-control" name="email" value="" required autofocus/>
									<div classname="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div classname="mb-3">
									<div classname="mb-2 w-100">
										<label classname="text-muted" for="password">Password</label>
										<a href="forgot.html" classname="float-end">
											Forgot Password?
										</a>
									</div>
									<input id="password" type="password" classname="form-control" name="password" required/>
								    <div classname="invalid-feedback">
								    	Password is required
							    	</div>
								</div>

								<div classname="d-flex align-items-center">
									<div classname="form-check">
										<input type="checkbox" name="remember" id="remember" classname="form-check-input"/>
										<label for="remember" classname="form-check-label">Remember Me</label>
									</div>
									<button type="submit" classname="btn btn-primary ms-auto">
										Login
									</button>
								</div>
							</form>
						</div>
						<div classname="card-footer py-3 border-0">
							<div classname="text-center">
								Don't have an account? <a href="register.html" classname="text-dark">Create One</a>
							</div>
						</div>
					</div>
					<div classname="text-center mt-5 text-muted">
						Copyright &copy; 2017-2021 &mdash; Your Company 
					</div>
				</div>
			</div>
		</div>
	</section>

	<script src="../js/login.js"></script>



    </body>

  )
}

export default Login1;