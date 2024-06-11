import { Link } from "react-router-dom";
import useTourGuide from "../../Hooks/useTourGuide/useTourGuide";


const GuideList = () => {
    const [guide] = useTourGuide();
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Our Tour Guides</h2>
            <div className="grid grid-cols-1 gap-4">
                {guide?.map((guide) => (
                    <div key={guide._id} className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold">{guide?.name}</h3>
                        <Link to={`/dashboard/guideProfile/${guide._id}`} className="text-blue-600 hover:underline">
                            View Profile
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuideList;