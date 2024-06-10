import { useParams } from "react-router-dom";
import usePackageDetails from "../../Hooks/usePackageDetails/usePackageDetails";
import useTourGuide from "../../Hooks/useTourGuide/useTourGuide";


const PackageDetails = () => {
    const { id } = useParams()
    const { details, } = usePackageDetails(id)

    const [guide]=useTourGuide()

    console.log(details)
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mb-5">
                {details?.images?.map((img, idx) =>
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

            {/* tour guides */}
            <div className="mt-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-medium ">Meet The Guides</h1>
                    <p className="text-xl text-gray-500">Our experienced and knowledgeable tour guides are here to make your journey unforgettable</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054]  ">
                                <th>
                                    Serial
                                </th>
                                <th>Guide IMAGE</th>
                                <th>Guide NAME</th>
                                <th>Education </th>
                                <th>Details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                guide?.map((item, idx) => <tr key={idx} >
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.profilePhoto} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item?.education}</td>
                                    
                                    <th>
                                        <button className="btn text-white text-xs  bg-[#B91C1C]">
                                            See Details
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                
            </div>

        </div>
    );
};

export default PackageDetails;