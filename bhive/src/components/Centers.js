import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Centers(props) {
    return(
        <div>
            <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{width: "15rem",margin:"14px",borderColor:"#e2ac17"}}>
                <div className="card-body shadow-sm p-3 mb-5 bg-white rounded">
                    <img src={props.data.url}></img>
                </div>
            </div>
        </div>
    )
}

export default Centers;