import { useNavigate } from "react-router-dom";
import UseWishList from "../../Hooks/UseWishList/UseWishList";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/useAxiosSecure";




const WhistList = () => {

    const [wishList,refetch] = UseWishList()
    console.log(wishList)
    const navigate = useNavigate();
    const axiosSecure=useAxiosSecure()



const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`/wishList/${id}`);
            refetch()
            
        } catch (error) {
            console.error('Error deleting wishlist item:', error);
        }
    };


    const handleVisitDetails = (id) => {
        navigate(`/packdetails/${id}`);
    };

    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Package Photo</th>
                        <th>Package Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {wishList?.map(item => (
                        <tr key={item._id}>

                            <td><img className="w-24" src={item.spotPhoto} alt="" /></td>
                            <td>{item.tripTitle}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-primary ml-2"
                                    onClick={() => handleVisitDetails(item._id)}
                                >
                                    Visit Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WhistList;