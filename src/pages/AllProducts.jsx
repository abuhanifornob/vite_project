import { useEffect, useState } from "react";

import DashboardSingleProduct from "../components/dashboard/DashboardSingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-14">
        All Products Hear!!
      </h1>
      <div className="flex flex-wrap gap-3 justify-evenly justify-items-center">
        {products.map((shoe) => (
          <DashboardSingleProduct
            key={shoe.id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
