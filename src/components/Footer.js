
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const Footer = () =>{
   return(
<div className="d-flex flex-wrap justify-content-around bg-secondary ">
  <div>
  <p>Made By Inam Khan</p>
  </div>
  <div >
  <FacebookIcon/>
  <TwitterIcon/>
  <WhatsAppIcon/>
</div>
</div>

) 
}

export default Footer