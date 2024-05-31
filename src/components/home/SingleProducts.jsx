/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SingleProducts = ({ show }) => {
  const { _id, brand, description, price, title } = show;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-full object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-2xl font-bold ">Brand: {brand}</h3>
        <h3 className="text-2xl font-bold ">Price: {price} </h3>

        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/product/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
