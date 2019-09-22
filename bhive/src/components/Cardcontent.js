import React from 'react';

const Cardcontent = (props) => {
    return(
            <div>
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{width: "19rem",margin:"20px",borderColor:"#e2ac17", borderWidth:"1px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.headline}</h5>
                        <p className="card-text">{props.data.desc}</p>
                        <a href={props.data.btn} className="btn btn-warning">MORE DETAILS</a>
                    </div>
                </div>
                
            </div>
    );
}

export default Cardcontent;