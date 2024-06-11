import { Link, useNavigate, useParams } from "react-router-dom";
import usePackageDetails from "../../Hooks/usePackageDetails/usePackageDetails";
import useTourGuide from "../../Hooks/useTourGuide/useTourGuide";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Modal from "react-modal";

import '../../App.css';

// Setting the app element for react-modal (ensure the element ID matches your main app element)
Modal.setAppElement('#root'); 

const PackageDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { details } = usePackageDetails(id);
    const [guide] = useTourGuide();
    const { user } = useAuth(); // Assuming this hook provides user details
    const [tourDate, setTourDate] = useState(new Date());
    const [guideName, setGuideName] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/login');
            return;
        }
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mb-5">
                {details?.images?.map((img, idx) => (
                    <div key={idx}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
            <div className="flex justify-between mb-5">
                <h2 className="text-2xl font-bold">GENERAL INFORMATION</h2>
                <p><span className="text-blue-800 font-medium text-2xl">${details?.price}</span> /PERSON</p>
            </div>
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

            {/* booking form */}
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-5">Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Name of the Package</label>
                        <input
                            type="text"
                            value={details?.name || ""}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Tourist Name</label>
                        <input
                            type="text"
                            value={user?.name || ""}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Tourist Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Tourist Image URL</label>
                        <input
                            type="text"
                            value={user?.image || ""}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Price</label>
                        <input
                            type="text"
                            value={details?.price || "1000"} // Assuming a fixed price for simplicity
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Tour Date</label>
                        <DatePicker
                            selected={tourDate}
                            onChange={(date) => setTourDate(date)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Tour Guide Name</label>
                        <select
                            value={guideName}
                            onChange={(e) => setGuideName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="" disabled>Select a guide</option>
                            {guide?.map((guide) => (
                                <option key={guide._id} value={guide.name}>
                                    {guide.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-600 text-white rounded-md font-medium"
                    >
                        Book Now
                    </button>
                </form>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Confirm Booking"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <h2 className="text-2xl font-bold mb-4">Confirm your Booking</h2>
                    <button
                        onClick={closeModal}
                        className="p-2 bg-green-600 text-white rounded-md font-medium"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={closeModal}
                        className="p-2 bg-red-600 text-white rounded-md font-medium ml-4"
                    >
                        Cancel
                    </button>
                    <div className="mt-4">
                        <Link to="/dashboard/mybooking" className="text-blue-600">My Bookings Page</Link>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default PackageDetails;
