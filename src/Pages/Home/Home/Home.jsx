import TourTypeComponent from "../../TourTypeComponent/TourTypeComponent";
import Banner from "../Banner/Banner";
import TravelGuideSection from "../TravelGuideSection/TravelGuideSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TravelGuideSection></TravelGuideSection>
            <TourTypeComponent></TourTypeComponent>
        </div>
    );
};

export default Home;