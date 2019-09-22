import React from 'react';
import ContactUs from './Contactus';
import FooterOption from './Footeroptions' 

function Footer() {
    return (
        <div className="footer">
            <FooterOption />
            <ContactUs data={{phone:"+919538677774",email:"sales@bhiveworkspace.com"}} />
        </div>
    )
}

export  default Footer;