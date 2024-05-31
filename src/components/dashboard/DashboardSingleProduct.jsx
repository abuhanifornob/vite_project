/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DashboardSingleProduct = ({ shoe, onDelete }) => {
  const { _id, brand, description, price, title } = shoe;
  const handleDelete = async () => {
    await fetch(`http://localhost:5000/shoe/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(_id);
      })
      .catch((error) => console.log(error));
  };
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
        <div className="card-actions justify-center items-center">
          <button className="btn btn-primary">
            <Link to={`/product/${_id}`}>See Details</Link>
          </button>
          <button className="btn bg-green-500">
            <Link to={`edit-product/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSingleProduct;
