import toast from "react-hot-toast";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageUurl = form.image_url.value;

    const data = { title, brand, price, description, imageUurl };
    console.log(data);
    await fetch("http://localhost:5000/shoes/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product add Success");
        form.reset();
      });
  };

  return (
    <div className="mx-14 ">
      <h1 className="text-3xl font-bold text-center text-amber-500 my-10">
        Add a Product !!{" "}
      </h1>
      <div className="bg-red-200 rounded-lg py-2">
        <form onSubmit={handleSubmit} action="" className="mx-4 my-2">
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Imges URL"
            />
          </div>

          <div className="flex justify-center items-center mt-2">
            <input
              className="btn w-full bg-green-400 text-white text-2xl"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
