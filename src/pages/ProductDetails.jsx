/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  const { brand, description, img_url, price, title } = shoe;
  return (
    <div className=" w-[1000px] mx-auto my-10 ">
      <h1 className="text-4xl text-center font-bold my-4">
        Product Details Hear !!{" "}
      </h1>
      <img src={img_url} alt="" />
      <h1 className="text-3xl font-bold ">Brand: {brand}</h1>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h2 className="text-2xl font-semibold">Price : {price} $.</h2>
      <p>{description} </p>
    </div>
  );
};

export default ProductDetails;
