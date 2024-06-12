
import useTourTypes from "../../Hooks/useTourTypes/useTourTypes";
import { Link } from "react-router-dom";


const TourTypeComponent = () => {

    const { tourTypes } = useTourTypes();
    return (
        <div className="bg-no-repeat bg-cover rounded-2xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdTgEWOvpp4pO37TXeTo2013rkGB4CzCjTA&s')] mb-10 p-6 bg-fixed">
            <div className="text-center space-y-5 mb-5">
                <h1 className="text-white">Find a Tour By</h1>
                <h1 className="text-white text-2xl font-medium">Tour Type</h1>
            </div>
          
                <div className="flex flex-col justify-around lg:flex-row md:flex-row ">
                    {tourTypes && tourTypes.map(tour => (
                          
                        <div key={tour.tourType} className="card  rounded-full">
                            <Link to={`/tourPackages/${tour.tourType}`}>
                            <figure className="rounded-full w-36  mx-auto ">
                                <img src={tour.spotPhoto} alt={tour.tourType} />
                            </figure>
                            <div>
                                <h2 className="text-2xl  text-center text-white mt-3">{tour.tourType}</h2>

                            </div>
                            </Link>
                        </div>
                        
                    ))}
                </div>
            
        </div>
    );
};

export default TourTypeComponent;




