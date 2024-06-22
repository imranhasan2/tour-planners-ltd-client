import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";


const MyBooking = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axiosSecure.get('/myBooking', {
                    params: { email: user.email }
                });
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, [user.email, axiosSecure]);

    const handleCancel = async (bookingId) => {
        try {
            const response = await axiosSecure.delete(`/bookings/${bookingId}`);
            if (response.data.deletedCount > 0) {
                setBookings(bookings.filter(booking => booking._id !== bookingId));
                Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
            } else {
                Swal.fire('Error!', 'Failed to cancel booking. Please try again later.', 'error');
            }
        } catch (error) {
            console.error('Error cancelling booking:', error);
            Swal.fire('Error!', 'Something went wrong! Please try again later.', 'error');
        }
    };

    const handlePay = (bookingId) => {
        // Implement payment functionality here
        console.log('Pay for booking:', bookingId);
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Package Name</th>
                            <th className="px-4 py-2">Tour Guide Name</th>
                            <th className="px-4 py-2">Tour Date</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id} className="border-b">
                                <td className="px-4 py-2">{booking.packageName}</td>
                                <td className="px-4 py-2">{booking.guideName}</td>
                                <td className="px-4 py-2">{new Date(booking.tourDate).toLocaleDateString()}</td>
                                <td className="px-4 py-2">${booking.price}</td>
                                <td className="px-4 py-2">{booking.status}</td>
                                <td className="px-4 py-2">
                                    {booking.status === 'In Review' && (
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                            onClick={() => handleCancel(booking._id)}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    {booking.status === 'Accepted' && (
                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded"
                                            onClick={() => handlePay(booking._id)}
                                        >
                                            Pay
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;