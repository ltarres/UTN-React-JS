import React from 'react';



const Footer = () => {
  return (
    <body>
<div >
    
        <footer className='footer mt-auto py-2 bg-dark text-white'>
        <div className='container'>
          <h3>Contacto</h3>
                   
                      <p> Estrada 63, Obera, Misiones,Argentina</p>
                      <p><span className="fa fa-phone"></span>+54 11 5720-4511</p>
                      <p><span className="fa fa-envelope"></span> lucastarres@gmail.com</p>
        </div>
             <div className='container'>
                      <a href="#"><span className="fa fa-facebook"></span></a>
                      <a href="#"><span className="fa fa-twitter"></span></a>
                      <a href="#"><span className="fa fa-google-plus"></span></a>
                      <a href="#"><span className="fa fa-youtube"></span></a>
                    </div>
      </footer> 
</div>
</body>
  )
}

export default Footer;