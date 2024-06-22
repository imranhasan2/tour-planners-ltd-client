import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/useAxiosSecure";

const RequestToAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const [requested, setRequested] = useState(false);

    const handleRequest = async () => {
        setLoading(true);
        try {
            const response = await axiosSecure.post('/guide/request');
            if (response.data.insertedId) {
                setRequested(true);
                Swal.fire({
                    icon: 'success',
                    title: 'Request Submitted!',
                    text: 'Your request to become a tour guide has been submitted successfully.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Request Failed!',
                    text: 'Failed to submit your request. Please try again later.',
                });
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {requested ? (
                <p>Your request to become a tour guide has been submitted.</p>
            ) : (
                <button
                    className="btn btn-primary"
                    onClick={handleRequest}
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Request to Become a Guide'}
                </button>
            )}
        </div>
    );
};

export default RequestToAdmin;
