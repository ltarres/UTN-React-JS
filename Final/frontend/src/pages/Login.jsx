import React, { useState } from "react";
import axios from 'axios';
import { Navigate} from 'react-router-dom';




const Login = () => {
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

<div className="bg-dark">
    <div className="container border bg-white ">        
      <div className="ApplyForm m-4">
        <div className="container">
          <div className="bg-danger ApplyForm-header m-5">
            <h2 className="text-white  p-2 text-center">Login</h2>
          </div>
        </div>
      </div>
      <form form action='/login' method='post' onSubmit={handleSubmit}>
        <div className="row pt-3 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              name="usuario"
              required
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            //   pattern="(?=.*\s)(?=.*[a-z])(?=.*[A-Z]).{5,}"
              minlength="5"
              value={formData.usuario} 
              onChange={handleChange}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              value={formData.password} 
              onChange={handleChange}
            />
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-danger"
              value="Enviar"
            ></input>
          </div>
        </div>
        <br></br>
      </form>
      {sending ? <p>Enviando...</p> : null}
       {/* {msg ? <p>{msg}</p> : null} */}
	    {msg ? msg!=='Usuario o Contraña Incorrecta'? <Navigate replace to="/" /> :<p>{msg}</p>: null}  
    </div>




	</div>




  )
}

export default Login;