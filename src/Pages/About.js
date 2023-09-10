import HeroSection from "../components/HeroSection";
import { useProductContext } from "../components/context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "FashionFusion",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;



// https://api.storerestapi.com/products