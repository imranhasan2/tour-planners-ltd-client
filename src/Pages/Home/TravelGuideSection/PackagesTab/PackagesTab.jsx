import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import WhistList from "../../../../DashBoard/WhistList/WhistList";
import usePackages from "../../../../Hooks/UsePackages/usePackages";

const PackagesTab = () => {

    // const [packages, setPackages] = useState([])

    const [wishItem, setWishItem] = useState([])

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => {

    //             setPackages(data)
    //         })
    // })


    const [packages]=usePackages()
   

    const handleWish = (pack) => {
        console.log('clicked', pack)

        if (!wishItem.filter(item => item.id === pack.id)) {
            setWishItem(prevWishItem => [...prevWishItem,pack])
        }
        else {
            console.log('item already added')
        }
    }




    return (
        <div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 mt-5">
                {
                    packages?.map(pack => <div key={pack._id} className="card  bg-base-100 shadow-xl">
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

                                <button className="btn btn-warning rounded-lg">View Package</button>
                            </div>
                        </div>
                    </div>)
                }


            </div>
            <div className="flex justify-center items-center text-center w-full mt-5">
                <button className="btn btn-outline ">All Package</button>
            </div>
            <div>
                <WhistList wishItem={wishItem}></WhistList>
            </div>
        </div>
    );
};

export default PackagesTab;
