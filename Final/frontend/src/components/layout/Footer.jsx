import React from 'react';
import '../../styles/style.css';



const Footer = () => {
  return (
    <body>
<div >
    
        {/* <footer className='footer mt-auto py-1 bg-dark text-white'>
        <div className='container'>
          <h3>Contacto</h3>
                   
                      <p> Estrada 63, Obera, Misiones,Argentina</p>
                      <p><span className="fa fa-phone"></span>+54 11 5720-4511 <span className="fa fa-envelope"></span> lucastarres@gmail.com</p>
                      
        </div>
             <div className='container'>
                      <a href="#"><span className="fa fa-facebook fa-1x me-3"> </span></a>
                      <a href="#"><span className="fa fa-twitter fa-1x me-3"> </span></a>
                      <a href="#"><span className="fa fa-google-plus fa-1x me-3"> </span></a>
                      <a href="#"><span className="fa fa-youtube fa-1x me-3"> </span></a>
                    </div>
                    
                    &copy; Copyright 2022 &copy; <a href="#">LucasTarres</a>
                    
      </footer>  */}


      
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Contacto</h6>
            <p className="text-justify">Estrada 63, Obera, Misiones,Argentina</p>
            <p className="text-justify fa fa-phone me-3">+54 11 5720-4511 </p>
            <p className="text-justify fa fa-envelope me-3"> lucastarres@gmail.com</p>
                      
          </div>

        </div>
      
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022  
         <a> Lucas Tarres</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/profile.php?id=100078782531005"target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a className="youtube" href="#"><i className="fa fa-youtube"target="_blank"></i></a></li>
              <li><a className="linkedin" href="https://www.instagram.com/maleregalos/"target="_blank"><i className="fa fa-instagram"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

</div>
</body>
  )
}

export default Footer;