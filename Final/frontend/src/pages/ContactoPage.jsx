import React, { useState } from "react";
import axios from 'axios';



function ContactoPage() {
    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);


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
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error === false) {
        setFormData(initialForm)
    }
}


  return (
    <div className="bg-dark">
    <div className="container border bg-white ">        
      <div className="ApplyForm m-4">
        <div className="container">
          <div className="bg-danger ApplyForm-header m-5">
            <h2 className="text-white  p-2 text-center">Contacto</h2>
          </div>
        </div>
      </div>
      <form form action='/contacto' method='post' onSubmit={handleSubmit}>
        <div className="row pt-3 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              required
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              pattern="(?=.*\s)(?=.*[a-z])(?=.*[A-Z]).{5,}"
              minlength="5"
              value={formData.nombre} 
              onChange={handleChange}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              value={formData.email} 
              onChange={handleChange}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Telefono"
              name="telefono"
              pattern="{4,12}"
              required
              value={formData.telefono} 
              onChange={handleChange}
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Mensaje"
              name="mensaje"
              pattern="(?=.*[a-z])(?=.*[A-Z]).{10,}"
              minlength="10"
              required
              value={formData.mensaje} 
              onChange={handleChange}
            ></textarea>
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
       {msg ? <p>{msg}</p> : null}
    </div>
    <div>
      <div className="col-5 form-group mx-auto">
        <h2 className="text-secondary p-2 text-center bg-white">
          Ubicacion
        </h2>
      </div>
      <iframe
        classname="embed-responsive-item"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.8691971589074!2d-55.12465937077551!3d-27.48554370919953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8f5385950494f%3A0x3157721affa243c4!2sEstrada%2063%2C%20N3360%20Ober%C3%A1%2C%20Misiones!5e0!3m2!1ses-419!2sar!4v1649115691343!5m2!1ses-419!2sar"
        width="100%"
        height="450"
        frameborder="0"
        // aria-hidden="false"
        // tabindex="0"
        allowfullscreen=""
        title="Maps"
      ></iframe>
     
    </div>
  </div>
  );
};

export default ContactoPage;