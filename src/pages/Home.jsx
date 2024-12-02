import Hero from "../components/Hero/Hero";
import NewCategory from "../components/NewCategory/NewCategory";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Offer from "../components/Offer/Offer";
import Popular from "../components/Popular/Popular";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Popular />
      <Offer />
      <NewCategory />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Home;
