import ReactStars from "react-rating-stars-component";
import React from "react";

function Rating(props) {


    const ratingChanged = (newRating) => {
        props.setnewRating(newRating);
      };


    return(

        <ReactStars 
        count={5}
        onChange={ratingChanged}
        size={45}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}

        



        activeColor="#ffd700"
      />
     

    )
    
}
export default Rating







 
