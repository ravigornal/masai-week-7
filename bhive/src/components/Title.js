import React from 'react';
function Title() {
    return(
        <div>
            <div className="row place">
                <h1 style={{fontSize:"80px",color:"#e2ac17"}}>Your Next</h1>
                <h1 style={{fontSize:"80px",color:"white"}}>Office</h1>
            </div>
            <ul className="row">
                <li style={{color:"white",fontSize:"20px"}}>Flexible Office</li>
                <li style={{marginLeft:"20px",color:"white",fontSize:"20px"}}>Any Budget</li>
                <li style={{marginLeft:"20px",color:"white",fontSize:"20px"}}>Key Locations</li>
                <li style={{marginLeft:"20px",color:"white",fontSize:"20px"}}>Great Hospitality</li>
            </ul>

                
                <a href="https://bhiveworkspace.com/coworking/"><button type="button" onclick="window.location.href = 'https://bhiveworkspace.com/coworking/';" class="btn btn1 fnt btn-outline-warning"><h3>RENT COWORKING SPACE</h3></button></a>
                <a href="https://bhiveworkspace.com/franchise-enquiry/"><button type="button" class="btn fnt btn-outline-warning"><h3>OWN COWORKING FRANCHISE</h3></button></a>
                
                <h5 style={{color:"white",marginLeft:"520px", marginTop:"20px"}}>Scroll Down</h5>
            
        </div>
    )
}

export default Title;