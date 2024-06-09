import { useParams } from "react-router-dom";
import usePackageDetails from "../../Hooks/usePackageDetails/usePackageDetails";


const PackageDetails = () => {
    const { id } = useParams()
    const { details, } = usePackageDetails(id)

    console.log(details)
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mb-5">
                {details?.images?.map((img,idx) =>
                    <div key={idx}>

                        <img src={img} alt="" />
                    </div>)}
            </div>
            <h2 className="text-2xl font-bold">GENERAL INFORMATION</h2>
            <p className="mb-10">{details?.description}</p>
            <h2 className="text-2xl font-medium">TOUR ITINERARY</h2>
             {details?.tourPlan?.map((item, index) => (
                <div key={index} className="collapse collapse-plus bg-blue-500 mb-3">
                    <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                    <div className="collapse-title text-xl font-medium">
                        {`0${index + 8}:00 HRS`}
                    </div>
                    <div className="collapse-content">
                        <p>{item}</p>
                    </div>
                </div>
            ))}
           
        </div>
    );
};

export default PackageDetails;