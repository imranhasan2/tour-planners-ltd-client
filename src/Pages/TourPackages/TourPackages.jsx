import { Link, useParams } from "react-router-dom";
import usePackagesByType from "../../Hooks/usePackagesByType/usePackagesByType";


const TourPackages = () => {
    const { type } = useParams();
    const { packages } = usePackagesByType(type);
    return (
        <div>
            <h1>{type} Packages</h1>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 mt-5">
                {packages && packages.map(pack => (
                    <div key={pack._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={pack.spotPhoto} alt={pack.tripTitle} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {pack.tourType}
                                <div className="badge badge-secondary py-6">{pack.tripTitle}</div>
                            </h2>
                            <p>Price: ${pack.price}</p>
                            <div className="card-actions justify-center">
                                <Link to={`/packdetails/${pack._id}`}>
                                    <button className="btn btn-warning rounded-lg">View Package</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourPackages;