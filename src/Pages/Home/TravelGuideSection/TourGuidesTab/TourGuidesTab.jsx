import { Link } from "react-router-dom";
import useTourGuide from "../../../../Hooks/useTourGuide/useTourGuide";


const TourGuidesTab = () => {
    const [guide] = useTourGuide();
    return (
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
                            {guide?.map((item, idx) => (
                                <tr key={idx}>
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
                                    <td>{item?.education}</td>
                                    <th>
                                        <Link to={`/dashboard/guideProfile/${item._id}`}>
                                            <button className="btn text-white text-xs  bg-[#B91C1C]">
                                                See Details
                                            </button>
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default TourGuidesTab;