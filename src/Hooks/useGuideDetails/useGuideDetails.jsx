import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";


const useGuideDetails = (id) => {

    const axiosSecure=useAxiosSecure()

    const {data: guideProfile}=useQuery({
        queryKey:['guideProfile',id],
        queryFn:async () =>{
            const res = await axiosSecure.get(`guideDetails/${id}`)
            return res.data
        }
    })
   return {guideProfile};
};

export default useGuideDetails;