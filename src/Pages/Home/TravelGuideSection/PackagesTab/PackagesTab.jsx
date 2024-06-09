
import { FaHeart } from "react-icons/fa";
import usePackages from "../../../../Hooks/UsePackages/usePackages";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const PackagesTab = () => {


    const [packages] = usePackages()

    const axiosSecure = useAxiosSecure()


    const handleWish = (pack) => {

        axiosSecure.post('/wishList', { packageId: pack._id, tourType: pack.tourType, tripTitle: pack.tripTitle, price: pack.price, spotPhoto: pack.spotPhoto })
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item Added To wishList",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }




    return (
        <div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 mt-5">
                {
                    packages?.slice(0, 3).map(pack => <div key={pack._id} className="card  bg-base-100 shadow-xl">
                        <figure>
                            <div className="relative">
                                <img src={pack.spotPhoto} alt="Shoes" />
                                <FaHeart onClick={() => handleWish(pack)} size={24} className="absolute top-0 right-0 text-red-600 mr-8 mt-8 "></FaHeart>
                            </div></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {pack.tourType}
                                <div className="badge badge-secondary py-6">{pack.tripTitle}</div>
                            </h2>
                            <p>Price: ${pack.price}</p>
                            <div className="card-actions justify-center">

                                <Link to={`/packdetails/${pack._id}`}><button className="btn btn-warning rounded-lg">View Package</button>
                                </Link>


                            </div>
                        </div>
                    </div>)
                }


            </div>
            <div className="flex justify-center items-center text-center w-full mt-5">
                <Link to={'/allPackage'}>
                    <button className="btn btn-outline ">All Package</button>
                </Link>
            </div>

        </div>
    );
};

export default PackagesTab;
