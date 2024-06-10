import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";


const useTourGuide = () => {
    const axiosSecure = useAxiosSecure()

    const { data: guide } = useQuery({
        queryKey: ['guides'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/guides')
            return res.data
        }
    })
    return [guide]
   
};

export default useTourGuide;