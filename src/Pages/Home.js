import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import FeatureProduct from "../components/FeatureProduct";

function Home() {
    const data = {
        name: 'FashionFusion'
    };
    return (
        <>
            <HeroSection myData={data} />
            <Services />
            <FeatureProduct />
        </>

    );

};



export default Home;