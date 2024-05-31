import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const editProduct = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { brand, img_url, description, price, title } = editProduct;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.imge_url.vlaue;

    const data = { title, brand, price, description, image_url };

    await fetch(`http://localhost:5000/shoe/${editProduct._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        form.reset();
        toast.success("Data Update is Successful");
      });
  };

  return (
    <div className="mx-14 ">
      <h1 className="text-3xl font-bold text-center text-amber-500 my-10">
        Edit a Product !!{" "}
      </h1>
      <div className="bg-red-200 rounded-lg py-2">
        <form onSubmit={handleSubmit} action="" className="mx-4 my-2">
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={title}
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              defaultValue={brand}
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={price}
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={description}
            />
          </div>
          <div className="mt-2">
            <input
              className="w-full text-lg p-2 bg-gray-100 border-black rounded-lg"
              type="text"
              name="imge_url"
              placeholder="Imges URL"
              defaultValue={img_url}
            />
          </div>

          <div className="flex justify-center items-center mt-2">
            <input
              className="btn w-full bg-green-400 text-white text-2xl"
              type="submit"
              value="Edit Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
