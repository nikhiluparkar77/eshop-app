import React from 'react'

const Footer = () => {
  return (
   <footer style={{backgroundColor: "#212529", padding: "7px"}}>
      <p style={{margin:"0px", textAlign:"center", color:"white"}}>
      &copy; All Rights Reserved {new Date().getFullYear()}
      </p>
   </footer>
  )
}

export default Footer;
