import React from "react";
import reviews from "../review";

const Testimonials = () => {
  let sliderLeft = 0;

  const moveLeft = () => {
    document.querySelector(".reviews").scrollLeft += sliderLeft;
  };
  const moveRight = () => {
    document.querySelector(".reviews").scrollLeft -= sliderLeft;
  };

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="reviews">
        {reviews.map((testimonial) => (
          <div className="review">
            <h1>{testimonial.name}</h1>
            <p>{testimonial.review}</p>
            <p>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </p>
          </div>
        ))}
      </div>
      <div className="controls">
        <i
          class="fas fa-chevron-left left"
          onClick={() => {
            sliderLeft += 200;
            moveLeft();
          }}
        ></i>
        <i
          class="fas fa-chevron-right right"
          onClick={() => {
            sliderLeft -= 200;
            moveRight();
          }}
        ></i>
      </div>
    </div>
  );
};

export default Testimonials;
