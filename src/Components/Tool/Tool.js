import React from "react";

const Tool = () => {
  return (
    <div>
      <div class="card w-4/5 max-w-md bg-base-100 shadow-xl mx-auto">
        <figure className="mt-5">
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>minimum order quantity:</p>
          <p>available quantity:</p>
          <p>per unit price:</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
