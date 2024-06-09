import { useParams } from "react-router-dom";
import usePackageDetails from "../../Hooks/usePackageDetails/usePackageDetails";


const PackageDetails = () => {
    const { id } = useParams()
    const { details, } = usePackageDetails(id)

    console.log(details)
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 ">
                {details?.images?.map(img =>
                    <div key={img._id}>

                        <img src={img} alt="" />
                    </div>)}
            </div>
        </div>
    );
};

export default PackageDetails;