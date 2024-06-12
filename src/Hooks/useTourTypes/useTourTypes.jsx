import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";


const useTourTypes = () => {
    const axiosSecure = useAxiosSecure()
    const { data: tourTypes } = useQuery({

        queryKey:['tourType'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourTypes`)

            return res.data
        }
    })
    return {tourTypes}
};

export default useTourTypes;