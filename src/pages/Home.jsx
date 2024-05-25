import { useLoaderData } from "react-router-dom";
import According from "../components/home/According";
import Banner from "../components/home/Banner";
import Contact from "../components/home/Contact";
import Products from "../components/home/Products";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Products data={data} />
      <According />
      <Contact />
    </div>
  );
};

export default Home;
