import React from 'react';
import Cardcontent from './Cardcontent';
import Centers from './Centers';
import Reviews from './Reviews';

function Maincontent () {
    return(
        <div>
        <div className="row">
            <h1 className="h1">Products <br></br>Offered</h1>
            <Cardcontent data={{headline:"CO WORKING",desc:"Rent Private Cabins or Shared Desks at one of our Productive Coworking Spaces",btn:"https://bhiveworkspace.com/coworking/"}}/>
            <Cardcontent data={{headline:"COWORKING FRANCHISE",desc:"Take part in the Coworking business opportunity by owning our Franchise.",btn:"https://bhiveworkspace.com/franchise-enquiry/"}}/>
            <Cardcontent data={{headline:"FREE CONSULTATION",desc:"Find right office space solution for your company through our expert advise",btn:"https://bhiveworkspace.com/freeconsultancy/"}}/>
        </div>
        <hr></hr>
        <div className="row">
            <div className="h1">New <br></br>Centers</div>
            <Centers data={{url:"https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-MG-Road-Coworking-200x284.png"}}/>
            <Centers data={{url:"https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-Koramangala-Coworking-200x284.png"}}/>
            <Centers data={{url:"https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-Banashankari-Coworking-200x284.png"}}/>
            <Centers data={{url:"https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-HSR-Coworking-200x284.png"}}/>

        </div> 
        <hr></hr> 
            <div className="row" id="review">
                <h1 className="h1">Customer<br></br>Reviews</h1>
                <Reviews data={{name:"Nrupul",review:"Coolest Place in Koramangala",company:"CTO Masai School ",profile:"https://storage.googleapis.com/kaggle-avatars/images/690953-gr.jpg"}}/>
            </div> 
        <hr></hr>  
        <div>
            <img src="https://bhiveworkspace.com/wp-content/uploads/2019/01/Click-Button-coworking-franchise-banner-1155_155.gif"></img>
        </div>  

        </div>
    )
}

export default Maincontent;