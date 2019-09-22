import React from 'react';

function Reviews(props) {
    return (
        <div class="bd-example" style={{width:"300px"}}>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.masaischool.com/static/team/prateek.jpeg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                    <h5 style={{color:"black"}}>Prateek</h5>
                    <p style={{color:"black"}}>CEO MASAI SCHOOL</p>
                    <p style={{color:"black"}}>Bhive is cool and nice co work space.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={props.data.profile} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 style={{color:"black"}}>{props.data.name}</h5>
                        <p style={{color:"black"}}>{props.data.company}</p>
                        <p style={{color:"black"}}>{props.data.review}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Reviews;