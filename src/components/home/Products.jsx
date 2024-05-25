/* eslint-disable react/prop-types */
import SingleProducts from "./SingleProducts";

const Products = ({ data }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center my-4">Our Products</h1>
      <div className="flex gap-2 flex-wrap justify-between">
        {data.slice(0, 3).map((show) => (
          <SingleProducts key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Products;
