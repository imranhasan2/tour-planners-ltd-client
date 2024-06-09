import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";


const UseWishList = () => {
    const axiosSecure =useAxiosSecure()
    const {data:wishList} =useQuery({
        queryKey:['wishList'],
        queryFn:async () =>{
            const res =await axiosSecure.get('/wishList')
            return res.data
        }
    })
    return [wishList]
};

export default UseWishList;