import React from 'react'

import '../../styles/footer.css'

const Footer = () => (
  <div className="footer">
    <p className="footer-copyright">
      &copy; Lucas Tarres. {new Date().getFullYear()}
    </p>
  </div>
)

export default Footer
