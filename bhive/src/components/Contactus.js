import React from'react';


function ContactUs(props) {
    return (
        <div className="contact">
            <h3 style={{color:"white"}}>Contact Us</h3>
            <h2 style={{color:"white"}}>Phone : {props.data.phone}</h2>
            <h2 style={{color:"white"}}>Email : {props.data.email}</h2>
        </div>
    )
}

export default  ContactUs;